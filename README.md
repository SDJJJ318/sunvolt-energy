# SunVolt Energy — 企业官网

太阳能(光伏组件 / 逆变器)**海外出口**企业官网。多语言、SEO 友好、在线客服,部署在 Netlify。

> 本文档同时是"开发流程 + 架构说明",方便后续接手或基于此模板再做同类站点。

---

## 技术栈

| 项 | 选型 | 说明 |
|----|------|------|
| 框架 | **Next.js 16.2.6**(App Router + Turbopack) | ⚠️ 非标准版本,API 可能与旧版不同 |
| 国际化 | **next-intl** | 6 语言:`en`(默认)/ `fr` / `ru` / `pt` / `es` / `ar`(RTL) |
| 语言 | TypeScript | |
| 样式 | Tailwind CSS | |
| 数据 | 静态文件 `src/data/*.ts` | 无数据库,产品/新闻/博客等写在代码里 |
| 在线客服 | tawk.to + 自制 WhatsApp 悬浮窗 | |
| 托管 | **Netlify**(连 GitHub 自动部署) | 海外 CDN,全托管,无需服务器 |

> **重要约定:写任何 Next.js 代码前,先读 `node_modules/next/dist/docs/` 里对应的文档。** 这是非标准版本,凭训练记忆写很可能用错 API(见 AGENTS.md)。

---

## 项目结构

```
src/
├── proxy.ts                 # ⚠️ Next 16 的中间件(原 middleware.ts),next-intl 多语言路由依赖它
├── app/
│   ├── [locale]/            # 所有页面按语言前缀路由(/en, /fr, ...)
│   │   ├── layout.tsx        # 全局布局:导航/页脚/客服/SEO,设置 <html dir> (ar=rtl)
│   │   ├── page.tsx          # 首页
│   │   ├── about|products|solutions|news|blog|downloads|contact/
│   │   └── api/contact/      # 联系表单 API
│   ├── sitemap.ts            # 动态 sitemap(6语言 × 全部页面 + hreflang)
│   └── robots.ts
├── components/
│   ├── home/                 # 首页各板块(Hero/About/Products/...)
│   ├── layout/               # Navbar/Footer/TawkChat/FloatingChat/...
│   ├── seo/                  # JsonLd / GoogleAnalytics
│   └── shared/               # Breadcrumb / Sidebar
├── data/                     # 静态内容数据(产品/新闻/博客/公司信息/FAQ...)
├── i18n/                     # next-intl 配置(routing.ts / request.ts)
├── messages/                 # 各语言翻译 JSON(en/fr/ru/pt/es/ar)
└── lib/utils.ts              # 工具函数 + SITE_URL 常量
```

---

## 本地开发

```bash
npm install
cp .env.example .env.local   # 填入需要的环境变量(见下)
npm run dev                  # http://localhost:3000 → 自动跳转 /en
npm run build                # 上线前务必本地构建通过
```

> **本地用 curl 测试遇到 503?** 是 shell 的 `http_proxy` 拦截了 localhost,不是服务器问题。用 `curl --noproxy '*' http://127.0.0.1:3000/...`,或临时 `unset http_proxy https_proxy`。浏览器访问不受影响。

---

## 环境变量

所有可选功能由 `NEXT_PUBLIC_*` 驱动,**缺变量时对应组件自动隐藏**(优雅降级)。
本地填 `.env.local`(已 gitignore);**线上必须在 Netlify 后台单独再填一遍**(`NEXT_PUBLIC_` 是构建时注入,改后需重新部署)。

| 变量 | 用途 | 来源 |
|------|------|------|
| `NEXT_PUBLIC_SITE_URL` | 站点规范 URL,驱动 sitemap/robots/metadata | 绑定域名后填真实域名 |
| `NEXT_PUBLIC_TAWK_PROPERTY_ID` | tawk.to 在线客服(右下角) | https://dashboard.tawk.to → Chat Widget |
| `NEXT_PUBLIC_TAWK_WIDGET_ID` | 同上 | embed URL 中 `/PROPERTY_ID/WIDGET_ID` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 流量统计 | https://analytics.google.com(`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console 验证(收录) | https://search.google.com/search-console |

注:WhatsApp 悬浮窗(左下角,`FloatingChat.tsx`)无需任何配置,号码在 `src/data/company.ts`。

---

## 部署(Netlify)

代码托管在 GitHub,Netlify 连仓库后**每次 push 自动重新部署**。

1. `netlify.toml` 已配置启用 `@netlify/plugin-nextjs` 运行时 —— **必须有**,否则 SSR + 中间件失效、首页 404。
2. Netlify → Import from GitHub → 选仓库 → 构建命令 `npm run build`(自动识别)。
3. Site configuration → Environment variables → 填上面表格里需要的变量 → Trigger deploy。

### 绑定自定义域名(海外站,无需备案)
1. Netlify → Domain management → Add a domain → 在域名注册商配 DNS(改 Nameservers 或加 A/CNAME)。
2. 加环境变量 `NEXT_PUBLIC_SITE_URL=https://你的域名` → 重新部署。
3. HTTPS 证书 Netlify 自动签发。

### Google 收录
1. Search Console 添加域名,用 HTML tag 验证 → 验证码填进 `NEXT_PUBLIC_GSC_VERIFICATION` → 重新部署。
2. 提交 `https://你的域名/sitemap.xml`。

---

## 多语言(i18n)说明

- 语言列表在 `src/i18n/routing.ts`,默认 `en`。
- 所有页面在 `src/app/[locale]/` 下,URL 形如 `/en/products`、`/fr/products`。
- **`src/proxy.ts` 负责语言协商和无前缀路径重定向**(`/` → `/en`)。此文件缺失会导致"切换语言无反应、内容全英文",务必保留。
- 翻译文案在 `src/messages/{locale}.json`。新增文案需 6 个语言文件都补。
- 阿拉伯语为 RTL,`layout.tsx` 根据 locale 设置 `<html dir>`。

---

## 已知待办

- [ ] **首屏性能优化**:Hero 首屏约 4.9MB(3MB Pexels 视频 + 多张 Unsplash 大图,全用原生 `<img>`)。建议:首帧用图不用视频、按需加载轮播帧、改用 `next/image`。
- [ ] **替换占位素材**:Hero 及各处图片目前是 Unsplash/Pexels 占位图,需换成真实产品/工厂/项目图(建议与性能优化一起做,避免返工)。
- [ ] 绑定自定义域名 + 启用 Google Analytics / Search Console。

---

## 脚本

```bash
npm run dev      # 开发服务器
npm run build    # 生产构建(上线前必跑)
npm run start    # 本地起生产服务
npm run lint     # ESLint
```
