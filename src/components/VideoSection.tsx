"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Film, Loader2 } from "lucide-react";
import { videoConfig } from "@/content/site";
import { images } from "@/content/images";
import { Reveal } from "./Reveal";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasVideo = Boolean(videoConfig.youtubeId || videoConfig.localSrc);

  // Once the player scrolls near the viewport, switch from a light
  // metadata-only fetch to eagerly buffering the opening seconds, so
  // clicking Play has data ready immediately instead of starting cold.
  useEffect(() => {
    if (!videoConfig.localSrc || !wrapperRef.current) return;
    const node = wrapperRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    setPlaying(true);
    const el = videoRef.current;
    if (el) {
      el.play().catch(() => {
        /* ignored: browser may require a direct gesture, which this click already is */
      });
    }
  };

  return (
    <section id="film" className="bg-deep-green py-24 text-paper md:py-32">
      <div className="container-page">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
            Field notes
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            Watch the Future Take Root.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-paper/75">
            See how trees, farming systems and rural livelihoods intersect across India.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div
            ref={wrapperRef}
            className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-paper/10 bg-black shadow-2xl"
          >
            {playing && videoConfig.youtubeId && (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${videoConfig.youtubeId}?autoplay=1&rel=0`}
                title={videoConfig.title}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {videoConfig.localSrc && (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full"
                src={videoConfig.localSrc}
                controls={playing}
                playsInline
                preload={sectionVisible ? "auto" : "metadata"}
                onWaiting={() => setBuffering(true)}
                onPlaying={() => setBuffering(false)}
                onCanPlay={() => setBuffering(false)}
                tabIndex={playing ? 0 : -1}
              />
            )}

            {buffering && playing && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
                <Loader2 className="h-9 w-9 animate-spin text-paper/90" aria-hidden="true" />
              </div>
            )}

            {!playing && (
              <>
                <Image
                  src={images.heroLandscape.src}
                  alt={videoConfig.posterAlt}
                  fill
                  sizes="(min-width: 1024px) 64rem, 100vw"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

                {hasVideo ? (
                  <button
                    type="button"
                    onClick={
                      videoConfig.localSrc ? handlePlay : () => setPlaying(true)
                    }
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-paper"
                    aria-label={`Play video: ${videoConfig.title}`}
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/95 text-forest transition-transform hover:scale-105 md:h-20 md:w-20">
                      <Play className="h-6 w-6 fill-current md:h-7 md:w-7" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium">Play film</span>
                  </button>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-paper">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/15 md:h-20 md:w-20">
                      <Film className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <p className="max-w-md text-sm leading-relaxed text-paper/85">
                      A verified documentary from a credible publisher — such as ICAR, ICAR-CAFRI
                      or the Ministry of Agriculture &amp; Farmers Welfare — has not yet been
                      configured for this space.
                    </p>
                    <p className="text-xs text-paper/60">
                      Add a verified YouTube or Vimeo ID to{" "}
                      <code className="rounded bg-paper/10 px-1.5 py-0.5">
                        src/content/site.ts → videoConfig
                      </code>{" "}
                      to activate playback here.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mx-auto mt-6 max-w-5xl">
            <h3 className="font-serif text-xl text-paper">{videoConfig.title}</h3>
            <p className="mt-1 text-sm text-paper/60">{videoConfig.publisher}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/75">
              {videoConfig.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
