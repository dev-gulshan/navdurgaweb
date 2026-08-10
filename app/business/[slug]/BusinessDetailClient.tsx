"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Images,
  Play,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Container from "@/components/Container";
import { businesses } from "@/data/content";

export default function BusinessDetailClient({ slug }: { slug: string }) {
  const business = businesses.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const index = businesses.findIndex((item) => item.slug === slug);
  const previous =
    businesses[(index - 1 + businesses.length) % businesses.length];
  const next = businesses[(index + 1) % businesses.length];
  const gallery = useMemo(
    () => (business ? [business.heroImage, ...business.gallery] : []),
    [business]
  );

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(
      "[data-business-reveal]"
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [slug]);

  useEffect(() => {
    if (!activeImage && !activeVideo) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
        setActiveVideo(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [activeImage, activeVideo]);

  if (!business) return null;

  return (
    <>
      <section className="business-detail-hero">
        <Container>
          <div className="business-detail-hero-copy" data-business-reveal>
            <Link href="/business">
              <ArrowLeft size={17} /> All businesses
            </Link>
            <h1>{business.title}</h1>
          </div>
        </Container>
      </section>

      <section className="business-detail-main">
        <Container>
          <div className="business-detail-layout">
            <aside className="business-detail-aside" data-business-reveal>
              <span>Business overview</span>
              <h2>{business.title}</h2>
              <p>{business.desc}</p>
              <Link href="/contact">
                Enquire now <ArrowRight size={17} />
              </Link>
            </aside>
            <div className="business-rich-content">
              {business.blocks.map((block, blockIndex) => {
                if (block.type === "heading")
                  return (
                    <h2 key={blockIndex} data-business-reveal>
                      {block.title}
                    </h2>
                  );
                if (block.type === "paragraph")
                  return (
                    <p key={blockIndex} data-business-reveal>
                      {block.text}
                    </p>
                  );
                if (block.type === "list") {
                  const Tag = block.ordered ? "ol" : "ul";
                  return (
                    <Tag key={blockIndex} data-business-reveal>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </Tag>
                  );
                }
                if (block.type === "companyCards") {
                  return (
                    <div
                      className={`business-company-grid business-company-grid-${block.variant}`}
                      key={blockIndex}
                      data-business-reveal
                    >
                      {block.items.map((company, companyIndex) => (
                        <article
                          className="business-company-card"
                          key={`${company.title}-${companyIndex}`}
                        >
                          <span className="business-company-number">
                            {String(companyIndex + 1).padStart(2, "0")}
                          </span>
                          <h3>{company.title}</h3>
                          <ul>
                            {company.details.map((detail, detailIndex) => (
                              <li key={`${company.title}-${detailIndex}`}>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  );
                }

                return (
                  <div
                    className="business-table-wrap"
                    key={blockIndex}
                    data-business-reveal
                  >
                    <table>
                      <tbody>
                        {block.rows.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, cellIndex) =>
                              cellIndex === 0 || rowIndex === 0 ? (
                                <th key={cellIndex}>{cell}</th>
                              ) : (
                                <td key={cellIndex}>{cell}</td>
                              )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {gallery.length > 1 && (
        <section className="business-detail-gallery">
          <Container>
            <header data-business-reveal>
              <span>Visual story</span>
              <h2>Inside {business.title}</h2>
            </header>
            <div className="business-detail-gallery-grid">
              {gallery.map((image, imageIndex) => (
                <button
                  type="button"
                  onClick={() => setActiveImage(image)}
                  key={`${image}-${imageIndex}`}
                  data-business-reveal
                >
                  <Image
                    src={image}
                    alt={`${business.title} ${imageIndex + 1}`}
                    fill
                    unoptimized
                    sizes="(max-width:700px) 100vw, 33vw"
                  />
                  <span>
                    <Images size={18} /> View image
                  </span>
                </button>
              ))}
            </div>
          </Container>
        </section>
      )}

      {business.videos.length > 0 && (
        <section className="business-detail-videos">
          <Container>
            <header data-business-reveal>
              <span>Watch the story</span>
              <h2>Business in motion.</h2>
            </header>
            <div className="business-detail-video-grid">
              {business.videos.map((video, videoIndex) => (
                <button
                  type="button"
                  key={video}
                  onClick={() => setActiveVideo(video)}
                  data-business-reveal
                >
                  <Image
                    src={business.gallery[videoIndex] || business.heroImage}
                    alt={`${business.title} video`}
                    fill
                    unoptimized
                    sizes="50vw"
                  />
                  <i>
                    <Play />
                  </i>
                  <b>Play video {videoIndex + 1}</b>
                </button>
              ))}
            </div>
          </Container>
        </section>
      )}

      {business.links.length > 0 && (
        <section className="business-detail-links">
          <Container>
            <header data-business-reveal>
              <span>Explore more</span>
              <h2>Official links and resources.</h2>
            </header>
            <div>
              {business.links.map((link) => (
                <a href={link} target="_blank" rel="noreferrer" key={link}>
                  {link.replace(/^https?:\/\//, "")} <ExternalLink size={17} />
                </a>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="business-detail-navigation">
        <Container>
          <div>
            <Link href={`/business/${previous.slug}`}>
              <ArrowLeft />
              <span>
                Previous business<small>{previous.title}</small>
              </span>
            </Link>
            <Link href={`/business/${next.slug}`}>
              <span>
                Next business<small>{next.title}</small>
              </span>
              <ArrowRight />
            </Link>
          </div>
        </Container>
      </section>

      {(activeImage || activeVideo) && (
        <div
          className="business-media-modal"
          onClick={() => {
            setActiveImage(null);
            setActiveVideo(null);
          }}
        >
          <button type="button" aria-label="Close">
            <X />
          </button>
          <div onClick={(event) => event.stopPropagation()}>
            {activeVideo ? (
              <video src={activeVideo} controls autoPlay playsInline />
            ) : activeImage ? (
              <div className="business-media-modal-image">
                <Image
                  src={activeImage}
                  alt={business.title}
                  fill
                  unoptimized
                  priority
                  sizes="95vw"
                />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
