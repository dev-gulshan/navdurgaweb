"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Quote,
  Sparkles,
  X,
} from "lucide-react";

import Container from "@/components/Container";
import { homePageContent } from "@/data/content";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [philosophyTab, setPhilosophyTab] = useState<"mission" | "vision">(
    "mission"
  );
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) =>
        current === homePageContent.heroSlides.length - 1 ? 0 : current + 1
      );
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [videoOpen]);

  const slide = homePageContent.heroSlides[activeSlide];
  const slideNumber = useMemo(() => String(activeSlide + 1).padStart(2, "0"), [
    activeSlide,
  ]);
  const slideTotal = String(homePageContent.heroSlides.length).padStart(2, "0");

  const goPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? homePageContent.heroSlides.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveSlide((current) =>
      current === homePageContent.heroSlides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <section className="premium-hero">
        {homePageContent.heroSlides.map((item, index) => (
          <div
            key={item.title}
            className={`premium-hero-media ${
              index === activeSlide ? "active" : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              unoptimized
              sizes="100vw"
            />
          </div>
        ))}
        <div className="premium-hero-shade" />
        <div className="premium-hero-grid" />

        <Container className="premium-hero-layout">
          <div className="premium-hero-copy" key={slide.title}>
            <span className="premium-label">
              <Sparkles size={16} /> Nav Durga Group
            </span>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <div className="premium-hero-actions">
              <Link href={slide.href} className="premium-btn premium-btn-light">
                Explore business <ArrowRight size={18} />
              </Link>
              <button
                className="premium-text-btn"
                type="button"
                onClick={() => setVideoOpen(true)}
              >
                <Play size={17} /> Watch our story
              </button>
            </div>
          </div>

          <aside className="premium-hero-rail">
            <span>{slideNumber}</span>
            <div className="premium-hero-line">
              <i
                style={{
                  height: `${
                    ((activeSlide + 1) / homePageContent.heroSlides.length) *
                    100
                  }%`,
                }}
              />
            </div>
            <span>{slideTotal}</span>
          </aside>
        </Container>

        <div className="premium-hero-controls">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <div className="premium-hero-dots">
            {homePageContent.heroSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === activeSlide ? "active" : ""}
                onClick={() => setActiveSlide(index)}
                aria-label={`Open slide ${index + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={goNext} aria-label="Next slide">
            <ChevronRight />
          </button>
        </div>
      </section>

      <section className="premium-intro" data-reveal>
        <Container className="premium-intro-grid">
          <div className="premium-intro-visual">
            <div className="premium-intro-image">
              <Image
                src={homePageContent.about.image}
                alt={homePageContent.about.title}
                fill
                unoptimized
                sizes="(max-width:900px) 100vw, 52vw"
              />
            </div>
            <button
              className="premium-video-orbit"
              type="button"
              onClick={() => setVideoOpen(true)}
            >
              <span>
                <Play />
              </span>
              <b>{homePageContent.introVideo.title}</b>
            </button>
          </div>

          <div className="premium-intro-copy">
            <span className="premium-kicker">Who we are</span>
            <h2>{homePageContent.about.title}</h2>
            <p>{homePageContent.about.text}</p>
            <Link
              href={homePageContent.about.href}
              className="premium-btn premium-btn-blue"
            >
              Discover our journey <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>

      <section className="premium-milestone" data-reveal>
        <Container>
          <div className="premium-milestone-card">
            <div className="premium-milestone-index">01</div>
            <div>
              <span className="premium-kicker light">Major milestone</span>
              <h2>{homePageContent.seplAnnouncement.title}</h2>
            </div>
            <div className="premium-milestone-copy">
              {homePageContent.seplAnnouncement.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="premium-values" data-reveal>
        <Container className="premium-values-layout">
          <div className="premium-values-heading">
            <span className="premium-kicker">Our values</span>
            <h2>{homePageContent.philosophy.title}</h2>
            <p>{homePageContent.philosophy.text}</p>
          </div>

          <div className="premium-values-card">
            <div className="premium-tabs">
              <button
                type="button"
                className={philosophyTab === "mission" ? "active" : ""}
                onClick={() => setPhilosophyTab("mission")}
              >
                Mission
              </button>
              <button
                type="button"
                className={philosophyTab === "vision" ? "active" : ""}
                onClick={() => setPhilosophyTab("vision")}
              >
                Vision
              </button>
            </div>
            <div className="premium-tab-content" key={philosophyTab}>
              {philosophyTab === "mission" ? (
                <>
                  <p>{homePageContent.philosophy.missionIntro}</p>
                  <ul>
                    {homePageContent.philosophy.mission.map((item, index) => (
                      <li key={item}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <blockquote>
                  <Quote />
                  {homePageContent.philosophy.vision}
                </blockquote>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="premium-leadership" data-reveal>
        <Container>
          <div className="premium-section-title">
            <span className="premium-kicker light">Leadership</span>
            <h2>Guided By Purpose and Experience.</h2>
          </div>

          <div className="premium-leader-grid">
            {homePageContent.leaders.map((leader, index) => (
              <article
                className={`premium-leader-card leader-${index + 1}`}
                key={leader.name}
              >
                <div className="premium-leader-photo">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    unoptimized
                    sizes="(max-width:900px) 100vw, 50vw"
                  />
                </div>
                <div className="premium-leader-content">
                  <span>{leader.eyebrow}</span>
                  <h3>{leader.name}</h3>
                  <p>{leader.text}</p>
                  {"text2" in leader && leader.text2 ? (
                    <p>{leader.text2}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="premium-official" data-reveal>
        <Container>
          <div className="premium-official-shell">
            <div className="premium-official-title">
              <span>{homePageContent.officialAnnouncement.badge}</span>
              <h2>{homePageContent.officialAnnouncement.title}</h2>
              <p>{homePageContent.officialAnnouncement.intro}</p>
            </div>
            <div className="premium-appointment-grid">
              {homePageContent.officialAnnouncement.appointments.map(
                (appointment, index) => (
                  <article key={appointment.title}>
                    <small>
                      Appointment {String(index + 1).padStart(2, "0")}
                    </small>
                    <h3>{appointment.title}</h3>
                    <strong>{appointment.main}</strong>
                    <p>{appointment.detail}</p>
                  </article>
                )
              )}
            </div>
            <p className="premium-official-note">
              {homePageContent.officialAnnouncement.note}
            </p>
          </div>
        </Container>
      </section>

      <section className="premium-facts" data-reveal>
        <Container className="premium-facts-layout">
          <div className="premium-facts-title">
            <span className="premium-kicker light">Built over decades</span>
            <h2>Scale powered by experience.</h2>
          </div>
          <div className="premium-facts-grid">
            {homePageContent.facts.map((fact) => (
              <article key={fact.label}>
                <Image
                  src={fact.icon}
                  alt=""
                  width={54}
                  height={54}
                  unoptimized
                />
                <strong>{fact.value}+</strong>
                <span>{fact.label}</span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {videoOpen ? (
        <div
          className="premium-video-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            className="premium-video-close"
            onClick={() => setVideoOpen(false)}
            aria-label="Close video"
          >
            <X />
          </button>
          <div
            className="premium-video-frame"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              src={homePageContent.introVideo.video}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
