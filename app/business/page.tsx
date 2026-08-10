"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Globe2, Layers3, Sparkles } from "lucide-react";
import { useEffect } from "react";
import Container from "@/components/Container";
import { businessPageContent, businesses } from "@/data/content";

export default function BusinessPage() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(
      "[data-business-reveal]"
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
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="business-premium-hero">
        <Image
          src={businessPageContent.hero.backgroundImage}
          alt="Navdurga Group businesses"
          fill
          priority
          unoptimized
          sizes="100vw"
        />
        <div className="business-premium-hero-shade" />
        <div className="business-premium-hero-grid" />
        <Container>
          <div className="business-premium-hero-copy" data-business-reveal>
            <span>{businessPageContent.hero.eyebrow}</span>
            <h1>{businessPageContent.hero.title}</h1>
            <p>{businessPageContent.hero.description}</p>
            <a href="#business-portfolio">
              Explore portfolio <ArrowRight size={18} />
            </a>
          </div>
        </Container>
      </section>

      <section className="business-premium-intro">
        <Container>
          <div className="business-premium-intro-grid">
            <div data-business-reveal>
              <span className="business-premium-kicker">
                {businessPageContent.intro.label}
              </span>
              <h2>{businessPageContent.intro.title}</h2>
            </div>
            <p data-business-reveal>{businessPageContent.intro.description}</p>
          </div>
          <div className="business-premium-stats">
            <article data-business-reveal>
              <Layers3 />
              <strong>{businesses.length}</strong>
              <span>Business verticals</span>
            </article>
            <article data-business-reveal>
              <Building2 />
              <strong>Multi-sector</strong>
              <span>Industrial presence</span>
            </article>
            <article data-business-reveal>
              <Globe2 />
              <strong>Global</strong>
              <span>Growth outlook</span>
            </article>
            <article data-business-reveal>
              <Sparkles />
              <strong>Responsible</strong>
              <span>Long-term value</span>
            </article>
          </div>
        </Container>
      </section>

      <section id="business-portfolio" className="business-premium-portfolio">
        <Container>
          <header
            className="business-premium-section-head"
            data-business-reveal
          >
            <span>Our portfolio</span>
            <h2>Explore every Navdurga business.</h2>
          </header>
          <div className="business-premium-grid">
            {businesses.map((business, index) => (
              <Link
                href={`/business/${business.slug}`}
                className="business-premium-card"
                key={business.slug}
                data-business-reveal
              >
                <Image
                  src={business.cardImage}
                  alt={business.title}
                  fill
                  unoptimized
                  sizes="(max-width:700px) 100vw, (max-width:1050px) 50vw, 33vw"
                />
                <span className="business-premium-card-shade" />

                <div>
                  {/* <small>{business.eyebrow}</small> */}
                  <h3>{business.title}</h3>

                  <b>
                    View business <ArrowRight size={17} />
                  </b>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
