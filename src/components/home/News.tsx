import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { news } from '@/data/news';
import { projects } from '@/data/projects';

export default function News() {
  const displayNews = news.slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            Latest News
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            News Center
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayNews.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={projects[parseInt(article.id) - 1]?.image ?? projects[0].image}
                  alt={article.title}
                  width={480}
                  height={270}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
                <span className="text-sm font-medium text-primary-600">
                  Read More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
