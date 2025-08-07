
'use client';

import { Card } from '@/components/ui/card';
import { useRef, useEffect } from 'react';

export default function VideoSection() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    const handlePlay1 = () => {
      if (video2 && !video2.paused) {
        video2.pause();
      }
    };

    const handlePlay2 = () => {
      if (video1 && !video1.paused) {
        video1.pause();
      }
    };

    if (video1) {
      video1.addEventListener('play', handlePlay1);
    }
    if (video2) {
      video2.addEventListener('play', handlePlay2);
    }

    return () => {
      if (video1) {
        video1.removeEventListener('play', handlePlay1);
      }
      if (video2) {
        video2.removeEventListener('play', handlePlay2);
      }
    };
  }, []);

  return (
    <section id="videos" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Veja como posso ajudar você!
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Entenda melhor os benefícios e diferenciais dos planos através destes vídeos.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 animate-fade-in-up [animation-delay:200ms]">
              <Card className="rounded-xl shadow-lg hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] overflow-hidden transform transition-all duration-300 hover:scale-105 p-2 bg-white">
                <div className="aspect-video">
                  <video
                    ref={video1Ref}
                    src="https://i.imgur.com/bsOjYEL.mp4"
                    className="w-full h-full object-cover rounded-md"
                    controls
                    playsInline
                  />
                </div>
              </Card>
              <Card className="rounded-xl shadow-lg hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] overflow-hidden transform transition-all duration-300 hover:scale-105 p-2 bg-white">
                <div className="aspect-video">
                  <video
                      ref={video2Ref}
                      src="https://i.imgur.com/MSYfAOj.mp4"
                      className="w-full h-full object-cover rounded-md"
                      controls
                      playsInline
                    />
                </div>
              </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
