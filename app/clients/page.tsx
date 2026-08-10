"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Handshake, ShieldCheck, Sparkles, X } from "lucide-react";

import Container from "@/components/Container";
import { clientsPageContent, type ClientLogo } from "@/data/content";

const trustIcons = [Handshake, ShieldCheck, Sparkles];

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState<ClientLogo | null>(null);

  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>("[data-client-reveal]");

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
    if (!selectedClient) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedClient(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedClient]);

  return (
    <>
      <section
        className="clients-premium-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(3,20,57,.96), rgba(4,62,121,.6), rgba(3,20,57,.18)), url("${clientsPageContent.hero.backgroundImage}")`,
        }}
      >
        <Container>
          <div className="clients-premium-hero-copy" data-client-reveal>
            <span>{clientsPageContent.hero.eyebrow}</span>
            <h1>{clientsPageContent.hero.title}</h1>
            <p>{clientsPageContent.hero.description}</p>

            <div className="clients-premium-hero-actions">
              <a href="#client-showcase" className="clients-premium-primary">
                View our clients <ArrowRight size={18} />
              </a>

              <Link href="/contact" className="clients-premium-text-link">
                Start a conversation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>

        <div className="clients-premium-hero-orbit" />
      </section>

      <section className="clients-premium-intro">
        <Container>
          <header className="clients-premium-intro-heading" data-client-reveal>
            <span>{clientsPageContent.intro.eyebrow}</span>
            <h2>{clientsPageContent.intro.title}</h2>
            <p>{clientsPageContent.intro.description}</p>
          </header>

          <div className="clients-premium-stats">
            {clientsPageContent.intro.stats.map((stat, index) => {
              const Icon = trustIcons[index % trustIcons.length];

              return (
                <article
                  key={stat.label}
                  className="clients-premium-stat-card"
                  data-client-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="clients-premium-stat-icon">
                    <Icon />
                  </div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="client-showcase" className="clients-premium-showcase">
        <Container>
          <header className="clients-premium-heading" data-client-reveal>
            <div>
              <span>{clientsPageContent.section.eyebrow}</span>
              <h2>{clientsPageContent.section.title}</h2>
            </div>

            <p>{clientsPageContent.section.description}</p>
          </header>

          <div className="clients-premium-grid">
            {clientsPageContent.logos.map((client, index) => (
              <button
                type="button"
                key={client.id}
                className="clients-premium-logo-card"
                data-client-reveal
                style={{ transitionDelay: `${(index % 5) * 65}ms` }}
                onClick={() => setSelectedClient(client)}
                aria-label={`Open ${client.alt}`}
              >


                <div className="clients-premium-logo-frame">
                  <Image
                    src={client.image}
                    alt={client.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 650px) 50vw, (max-width: 1000px) 33vw, 20vw"
                  />
                </div>

              </button>
            ))}
          </div>
        </Container>
      </section>

      {selectedClient && (
        <div
          className="clients-premium-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedClient.alt} preview`}
          onClick={() => setSelectedClient(null)}
        >
          <button
            type="button"
            className="clients-premium-modal-close"
            onClick={() => setSelectedClient(null)}
            aria-label="Close logo preview"
          >
            <X size={24} />
          </button>

          <div
            className="clients-premium-modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="clients-premium-modal-image">
              <Image
                src={selectedClient.image}
                alt={selectedClient.alt}
                fill
                unoptimized
                sizes="(max-width: 700px) 92vw, 820px"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
