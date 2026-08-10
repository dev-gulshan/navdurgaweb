"use client";

import Image from "next/image";
import Link from "next/link";
import { TouchEvent, useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Film,
  Images,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import Container from "@/components/Container";
import { galleryGroups, galleryHero, type GalleryMedia } from "@/data/content";

type ViewerItem = GalleryMedia & {
  eventTitle: string;
  eventIndex: number;
  mediaIndex: number;
};

function getVideoPoster(item: GalleryMedia) {
  if (
    item.thumbnail &&
    !item.thumbnail.includes("/video/upload/") &&
    !item.thumbnail.toLowerCase().endsWith(".mp4")
  ) {
    return item.thumbnail;
  }

  return item.src
    .replace("/video/upload/", "/video/upload/so_0/")
    .replace(/\.(mp4|webm|mov)$/i, ".jpg");
}

function previewOf(item: GalleryMedia) {
  return item.type === "video" ? getVideoPoster(item) : item.thumbnail || item.src;
}

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const allMedia = useMemo<ViewerItem[]>(
    () =>
      galleryGroups.flatMap((group, eventIndex) =>
        group.media.map((item, mediaIndex) => ({
          ...item,
          eventTitle: group.title,
          eventIndex,
          mediaIndex,
        }))
      ),
    []
  );

  const totalImages = useMemo(
    () => allMedia.filter((item) => item.type === "image").length,
    [allMedia]
  );
  const totalVideos = useMemo(
    () => allMedia.filter((item) => item.type === "video").length,
    [allMedia]
  );
  const activeMedia = activeIndex !== null ? allMedia[activeIndex] : null;

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || allMedia.length === 0) return null;
      return current === 0 ? allMedia.length - 1 : current - 1;
    });
  }, [allMedia.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || allMedia.length === 0) return null;
      return current === allMedia.length - 1 ? 0 : current + 1;
    });
  }, [allMedia.length]);

  const openMedia = useCallback(
    (eventIndex: number, mediaIndex: number) => {
      const index = allMedia.findIndex(
        (item) => item.eventIndex === eventIndex && item.mediaIndex === mediaIndex
      );
      if (index >= 0) setActiveIndex(index);
    },
    [allMedia]
  );

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-gallery-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, showNext, showPrevious]);

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = touchStartX - endX;
    if (Math.abs(delta) > 55) delta > 0 ? showNext() : showPrevious();
    setTouchStartX(null);
  }

  return (
    <>
      <section
        className="gallery-modern-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(2,18,54,.95), rgba(4,59,119,.72), rgba(3,35,78,.24)), url("${galleryHero.backgroundImage}")`,
        }}
      >
        <Container>
          <div className="gallery-modern-hero-copy" data-gallery-reveal>
            <span>Stories in motion</span>
            <h1>{galleryHero.title}</h1>
            <p>{galleryHero.quote}</p>

            <div className="gallery-modern-breadcrumb">
              <Link href="/">Home</Link>
              <ArrowRight size={15} />
              <strong>Gallery</strong>
            </div>
          </div>
        </Container>

        <div className="gallery-modern-hero-orbit" />
      </section>

      <section id="gallery-overview" className="gallery-modern-overview">
        <Container>
          <div className="gallery-modern-overview-grid">
            <header className="gallery-modern-overview-copy" data-gallery-reveal>
              <span className="gallery-modern-kicker">Navdurga moments</span>
              <h2>A living archive of progress, people and purpose.</h2>
              <p>
                Explore milestones, ceremonies, community initiatives and memorable
                moments from across Navdurga Group.
              </p>
            </header>

            <div className="gallery-modern-stats">
              {[
                [CalendarDays, galleryGroups.length, "Featured events"],
                [Images, totalImages, "Photographs"],
                [Film, totalVideos, "Videos"],
                [Sparkles, allMedia.length, "Total moments"],
              ].map(([Icon, value, label], index) => {
                const StatIcon = Icon as typeof CalendarDays;
                return (
                  <article
                    key={String(label)}
                    data-gallery-reveal
                    style={{ transitionDelay: `${index * 70}ms` }}
                  >
                    <div className="gallery-modern-stat-icon"><StatIcon /></div>
                    <strong>{String(value)}</strong>
                    <span>{String(label)}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="gallery-events" className="gallery-modern-events">
        <Container>
          <header className="gallery-modern-section-heading" data-gallery-reveal>
            <span className="gallery-modern-kicker">Featured stories</span>
            <h2>Moments that shaped our story.</h2>
            <p>
              Browse every event as an independent visual story. The original titles,
              descriptions, photographs and videos.
            </p>
          </header>

          <div className="gallery-modern-event-list">
            {galleryGroups.map((group, eventIndex) => {
              const imageCount = group.media.filter((item) => item.type === "image").length;
              const videoCount = group.media.filter((item) => item.type === "video").length;
              const featured = group.media[0];
              const thumbnails = group.media.slice(1, 5);

              return (
                <article
                  className={`gallery-modern-event-card ${eventIndex % 2 ? "is-reverse" : ""}`}
                  key={`${group.title}-${eventIndex}`}
                  data-gallery-reveal
                >
                  <div className="gallery-modern-event-content">
                    <div className="gallery-modern-event-meta">
                      <span>Story {String(eventIndex + 1).padStart(2, "0")}</span>
                      <div>
                        {imageCount > 0 && <span><Images size={15} /> {imageCount}</span>}
                        {videoCount > 0 && <span><Film size={15} /> {videoCount}</span>}
                      </div>
                    </div>

                    <h2>{group.title}</h2>
                    {group.subtitle ? <h3>{group.subtitle}</h3> : null}
                    <p>{group.description}</p>

                    {group.media.length > 0 ? (
                      <button
                        type="button"
                        className="gallery-modern-open-btn"
                        onClick={() => openMedia(eventIndex, 0)}
                      >
                        View full gallery <ArrowRight size={17} />
                      </button>
                    ) : null}
                  </div>

                  <div className="gallery-modern-event-media">
                    {featured ? (
                      <button
                        type="button"
                        className="gallery-modern-featured-media"
                        onClick={() => openMedia(eventIndex, 0)}
                        aria-label={`Open ${group.title} featured media`}
                      >
                        <Image
                          src={previewOf(featured)}
                          alt={featured.alt || `${group.title} featured media`}
                          fill
                          unoptimized
                          sizes="(max-width: 900px) 100vw, 55vw"
                        />
                        <span className="gallery-modern-image-shade" />
                        <span className="gallery-modern-media-type">
                          {featured.type === "video" ? <><Play size={17} /> Play video</> : <><Images size={17} /> View photo</>}
                        </span>
                      </button>
                    ) : (
                      <div className="gallery-modern-empty-media">No media available</div>
                    )}

                    {thumbnails.length > 0 ? (
                      <div className="gallery-modern-thumbnail-row">
                        {thumbnails.map((item, thumbnailIndex) => {
                          const mediaIndex = thumbnailIndex + 1;
                          const remaining = group.media.length - 5;
                          return (
                            <button
                              type="button"
                              key={`${item.src}-${mediaIndex}`}
                              onClick={() => openMedia(eventIndex, mediaIndex)}
                              aria-label={`Open ${group.title} media ${mediaIndex + 1}`}
                            >
                              <Image
                                src={previewOf(item)}
                                alt={item.alt || `${group.title} media ${mediaIndex + 1}`}
                                fill
                                unoptimized
                                sizes="(max-width: 700px) 25vw, 12vw"
                              />
                              {item.type === "video" ? <span className="gallery-modern-thumb-play"><Play /></span> : null}
                              {thumbnailIndex === 3 && remaining > 0 ? (
                                <span className="gallery-modern-more">+{remaining}</span>
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {activeMedia && activeIndex !== null ? (
        <div
          className="gallery-premium-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery viewer"
          onClick={() => setActiveIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="gallery-premium-lightbox-top">
            <div>
              <span>{activeIndex + 1} / {allMedia.length}</span>
              <strong>{activeMedia.eventTitle}</strong>
            </div>
            <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close viewer">
              <X />
            </button>
          </div>

          <button
            type="button"
            className="gallery-premium-lightbox-nav previous"
            onClick={(event) => { event.stopPropagation(); showPrevious(); }}
            aria-label="Previous media"
          >
            <ChevronLeft />
          </button>

          <div className="gallery-premium-lightbox-stage" onClick={(event) => event.stopPropagation()}>
            {activeMedia.type === "video" ? (
              <video
                key={activeMedia.src}
                src={activeMedia.src}
                poster={getVideoPoster(activeMedia)}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <div className="gallery-premium-lightbox-image">
                <Image
                  key={activeMedia.src}
                  src={activeMedia.src}
                  alt={activeMedia.alt || activeMedia.eventTitle}
                  fill
                  unoptimized
                  priority
                  sizes="95vw"
                />
              </div>
            )}
          </div>

          <button
            type="button"
            className="gallery-premium-lightbox-nav next"
            onClick={(event) => { event.stopPropagation(); showNext(); }}
            aria-label="Next media"
          >
            <ChevronRight />
          </button>

          <div className="gallery-premium-lightbox-bottom">
            <button type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }}>
              <ChevronLeft size={18} /> Previous
            </button>
            <span>Use arrow keys or swipe</span>
            <button type="button" onClick={(event) => { event.stopPropagation(); showNext(); }}>
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
