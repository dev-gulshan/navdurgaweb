"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

import Container from "@/components/Container";
import { teamPageContent, type TeamMember } from "@/data/content";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-team-reveal]");
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

  useEffect(() => {
    if (!selectedMember) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedMember(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  const featuredMember = teamPageContent.members[0];
  const remainingMembers = teamPageContent.members.slice(1);

  return (
    <>
      <section
        className="team-premium-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(3,22,62,.94), rgba(4,52,107,.56), rgba(3,22,62,.2)), url("${teamPageContent.hero.backgroundImage}")`,
        }}
      >
        <Container>
          <div className="team-premium-hero-copy" data-team-reveal>
            <span>{teamPageContent.hero.eyebrow}</span>
            <h1>{teamPageContent.hero.title}</h1>
            <p>
              A collective of experienced professionals building sustainable
              businesses and long-term value.
            </p>

            <div className="team-premium-breadcrumb">
              <Link href="/">Home</Link>
              <ArrowRight size={15} />
              <strong>Team Members</strong>
            </div>
          </div>
        </Container>

        <div className="team-premium-hero-line" />
      </section>

      <section className="team-premium-motto">
        <Container>
          <article className="team-premium-motto-card" data-team-reveal>
            <div className="team-premium-motto-index">01</div>

            <div>
              <span>{teamPageContent.motto.title}</span>
              <p>“{teamPageContent.motto.text}”</p>
            </div>
          </article>
        </Container>
      </section>

      <section className="team-premium-section">
        <Container>
          <header className="team-premium-heading" data-team-reveal>
            <div>
              <span>{teamPageContent.section.eyebrow}</span>
              <h2>{teamPageContent.section.title}</h2>
            </div>

            <p>{teamPageContent.section.description}</p>
          </header>

          <article className="team-featured-member" data-team-reveal>
            <div className="team-featured-image">
              <Image
                src={featuredMember.image}
                alt={featuredMember.name}
                fill
                priority
                unoptimized
                sizes="(max-width: 900px) 100vw, 44vw"
              />

              <div className="team-featured-number">01</div>
            </div>

            <div className="team-featured-copy">
              <span>Group Leadership</span>
              <h2>{featuredMember.name}</h2>
              <strong>{featuredMember.role}</strong>
              <p>{featuredMember.bio}</p>
            </div>
          </article>

          <div className="team-premium-grid">
            {remainingMembers.map((member, index) => (
              <article
                className="team-premium-card"
                key={member.id}
                data-team-reveal
                style={{ transitionDelay: `${(index % 3) * 90}ms` }}
              >
                <button
                  type="button"
                  className="team-premium-card-trigger"
                  onClick={() => setSelectedMember(member)}
                  aria-label={`View profile of ${member.name}`}
                >
                  <div className="team-premium-card-image">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      unoptimized
                      sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    />

                    <span>{String(index + 2).padStart(2, "0")}</span>
                  </div>

                  <div className="team-premium-card-content">
                    <div>
                      <h3>{member.name}</h3>
                      <strong>{member.role}</strong>
                    </div>

                    <span className="team-premium-view">
                      View profile <ArrowRight size={17} />
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {selectedMember ? (
        <div
          className="team-profile-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedMember.name} profile`}
          onClick={() => setSelectedMember(null)}
        >
          <button
            type="button"
            className="team-profile-close"
            onClick={() => setSelectedMember(null)}
            aria-label="Close profile"
          >
            <X />
          </button>

          <article
            className="team-profile-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="team-profile-image">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                unoptimized
                sizes="(max-width: 800px) 100vw, 42vw"
              />
            </div>

            <div className="team-profile-copy">
              <span>Leadership profile</span>
              <h2>{selectedMember.name}</h2>
              <strong>{selectedMember.role}</strong>
              <p>{selectedMember.bio}</p>
            </div>
          </article>
        </div>
      ) : null}
    </>
  );
}
