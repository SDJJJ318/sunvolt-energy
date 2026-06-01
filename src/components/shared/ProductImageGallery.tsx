'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({ x, y });
  }

  function prev() {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }

  function next() {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative border border-gray-200 rounded-lg p-4 bg-white aspect-square overflow-hidden cursor-crosshair"
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={images[current]}
          alt={`${alt} - ${current + 1}`}
          width={480}
          height={480}
          className="object-contain w-full h-full transition-transform duration-200"
          style={{
            transform: zoomed ? 'scale(2)' : 'scale(1)',
            transformOrigin: `${origin.x}% ${origin.y}%`,
          }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 justify-center">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-16 h-16 rounded border-2 overflow-hidden ${
                i === current ? 'border-primary-600' : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <Image
                src={img}
                alt={`${alt} - ${i + 1}`}
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
