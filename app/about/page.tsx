"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  ChevronDown,
  Factory,
  Globe2,
  MapPinned,
} from "lucide-react";

import Container from "@/components/Container";
import { aboutPageContent } from "@/data/content";

export default function AboutPage() {
  const [activeVertical, setActiveVertical] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-about-reveal]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        className="about-premium-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(2,18,54,.95), rgba(4,59,119,.72), rgba(3,35,78,.24)), url("${aboutPageContent.hero.backgroundImage}")`,
        }}
      >
        <Container>
          <div className="about-premium-hero-copy" data-about-reveal>
            <span>{aboutPageContent.hero.eyebrow}</span>
            <h1>{aboutPageContent.hero.title}</h1>
            <p>
              Building enduring industrial capabilities through innovation,
              responsible growth and community impact.
            </p>

            <div className="about-premium-breadcrumb">
              <Link href="/">Home</Link>
              <ArrowRight size={15} />
              <strong>About</strong>
            </div>
          </div>
        </Container>

        <div className="about-premium-hero-orbit" />
      </section>

      <section className="about-premium-intro">
        <Container>
          <div className="about-premium-intro-grid" data-about-reveal>
            <div className="about-premium-intro-title">
              <span>{aboutPageContent.introduction.eyebrow}</span>
              <h2>{aboutPageContent.introduction.title}</h2>
            </div>

            <div className="about-premium-intro-copy">
              <p>{aboutPageContent.introduction.text}</p>

              <div className="about-premium-signals">
                <article>
                  <Factory />
                  <strong>Industrial Scale</strong>
                </article>
                <article>
                  <Globe2 />
                  <strong>Diversified Growth</strong>
                </article>
                <article>
                  <Building2 />
                  <strong>Responsible Enterprise</strong>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="about-premium-story">
        <Container>
          <div className="about-premium-story-heading" data-about-reveal>
            <div>
              <span>{aboutPageContent.background.eyebrow}</span>
              <h2>From a single mill to an integrated industrial journey.</h2>
            </div>
            <p>
              A story of expansion, acquisitions and long-term capability
              building across India.
            </p>
          </div>

          <article className="about-premium-story-card" data-about-reveal>
            <div className="about-premium-story-aside">
              <div className="about-premium-story-image">
                <img
                  src={aboutPageContent.background.image}
                  alt="Navdurga Group industrial journey"
                />
              </div>

              <div className="about-premium-story-year">
                <span>Established</span>
                <strong>1990</strong>
              </div>

              <div className="about-premium-story-image-label">
                <span>OUR JOURNEY</span>
              </div>
            </div>

            <div className="about-premium-story-copy">
              <span className="about-premium-story-kicker">
                {aboutPageContent.background.eyebrow}
              </span>
              <h2>{aboutPageContent.background.title}</h2>
              <p>{aboutPageContent.background.text}</p>

              <div className="about-premium-story-meta">
                <div>
                  <strong>1990</strong>
                  <span>Group journey began</span>
                </div>
                <div>
                  <strong>India</strong>
                  <span>Multi-state presence</span>
                </div>
                <div>
                  <strong>Steel</strong>
                  <span>Integrated capabilities</span>
                </div>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="about-premium-map">
        <Container>
          <header className="about-premium-heading" data-about-reveal>
            <div>
              <span>{aboutPageContent.map.eyebrow}</span>
              <h2>{aboutPageContent.map.title}</h2>
            </div>
            <p>{aboutPageContent.map.description}</p>
          </header>

          <div className="about-premium-map-frame" data-about-reveal>
            <div className="about-premium-map-badge">
              <MapPinned />
              <span>Group Locations</span>
            </div>

            <iframe
              src={aboutPageContent.map.embedUrl}
              title="Navdurga Group locations"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>

      <section className="about-premium-verticals">
        <Container>
          <header className="about-premium-heading light" data-about-reveal>
            <div>
              <span>{aboutPageContent.businessVerticals.eyebrow}</span>
              <h2>{aboutPageContent.businessVerticals.title}</h2>
            </div>
            <p>{aboutPageContent.businessVerticals.description}</p>
          </header>

          <div className="about-premium-accordion" data-about-reveal>
            {aboutPageContent.businessVerticals.items.map((vertical, index) => {
              const isOpen = activeVertical === index;

              return (
                <article
                  key={vertical.title}
                  className={`about-premium-vertical ${isOpen ? "active" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveVertical(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{vertical.title}</strong>
                    <ChevronDown />
                  </button>

                  <div className="about-premium-vertical-panel">
                    <div className="about-premium-company-grid">
                      {vertical.companies.map((company, companyIndex) => (
                        <article
                          className="about-premium-company-card"
                          key={`${company.name}-${companyIndex}`}
                        >
                          <span>
                            {String(companyIndex + 1).padStart(2, "0")}
                          </span>
                          <h3>{company.name}</h3>
                          <p>{company.details}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="about-premium-associates">
        <Container>
          <header className="about-premium-heading" data-about-reveal>
            <div>
              <span>{aboutPageContent.associatedCompanies.eyebrow}</span>
              <h2>{aboutPageContent.associatedCompanies.title}</h2>
            </div>
            <p>{aboutPageContent.associatedCompanies.description}</p>
          </header>

          <div className="about-premium-associate-grid">
            {aboutPageContent.associatedCompanies.items.map(
              (company, index) => (
                <article
                  key={company.name}
                  className="about-premium-associate-card"
                  data-about-reveal
                  style={{ transitionDelay: `${(index % 3) * 90}ms` }}
                >
                  <div className="about-premium-associate-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <ArrowDownRight />
                  </div>
                  <h3>{company.name}</h3>
                  <p>{company.details}</p>
                </article>
              )
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
