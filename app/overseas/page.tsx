"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  Download,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from "lucide-react";

import Container from "@/components/Container";
import { overseasPageContent } from "@/data/content";

const valueIcons = [ShieldCheck, Sparkles, Globe2, Target];

export default function OverseasPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [projectVideo, setProjectVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-overseas-reveal]"
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
      { threshold: 0.13 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoOpen && !projectVideo) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [videoOpen, projectVideo]);

  const activeContent = useMemo(
    () => overseasPageContent.visionMission[activeTab],
    [activeTab]
  );

  return (
    <>
      <section
        className="overseas-premium-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(2,19,52,.97), rgba(3,55,111,.63), rgba(2,19,52,.16)), url("${overseasPageContent.hero.backgroundImage}")`,
        }}
      >
        <Container>
          <div className="overseas-premium-hero-copy" data-overseas-reveal>
            <span>{overseasPageContent.hero.eyebrow}</span>
            <h1>{overseasPageContent.hero.title}</h1>
            <p>{overseasPageContent.hero.description}</p>

            <div className="overseas-premium-hero-actions">
              <a href="#overseas-about" className="overseas-premium-primary">
                Explore the venture <ArrowDown size={18} />
              </a>

              <Link href="/contact" className="overseas-premium-text-link">
                Connect with us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>

        <div className="overseas-premium-hero-orbit" />
      </section>

      <section
        className="overseas-premium-video"
        style={{
          backgroundImage: `linear-gradient(rgba(2,24,66,.48),rgba(2,24,66,.72)),url("${overseasPageContent.introVideo.backgroundImage}")`,
        }}
      >
        <Container>
          <button
            type="button"
            className="overseas-premium-video-trigger"
            onClick={() => setVideoOpen(true)}
            data-overseas-reveal
          >
            <span className="overseas-premium-play">
              <Play />
            </span>

            <span>
              <small>Project film</small>
              <strong>{overseasPageContent.introVideo.title}</strong>
            </span>
          </button>
        </Container>
      </section>

      <section id="overseas-about" className="overseas-premium-about">
        <Container className="overseas-premium-about-grid">
          <div className="overseas-premium-about-image" data-overseas-reveal>
            <Image
              src={overseasPageContent.about.image}
              alt="Divine Steels Limited"
              fill
              unoptimized
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className="overseas-premium-about-copy" data-overseas-reveal>
            <span>{overseasPageContent.about.eyebrow}</span>
            <h2>India’s industrial expertise, now building in Tanzania.</h2>
            <p>{overseasPageContent.about.text}</p>

            <div className="overseas-premium-about-points">
              <div>
                <Building2 />
                <span>Fully integrated steel plant</span>
              </div>
              <div>
                <Globe2 />
                <span>First international footprint</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="overseas-premium-vision">
        <Container>
          <header className="overseas-premium-heading" data-overseas-reveal>
            <div>
              <span>Purpose & direction</span>
              <h2>Building steel. Advancing a nation.</h2>
            </div>

            <p>
              A long-term industrial platform designed around quality,
              sustainability and regional development.
            </p>
          </header>

          <div className="overseas-premium-tabs" data-overseas-reveal>
            <div className="overseas-premium-tab-buttons">
              <button
                type="button"
                className={activeTab === "vision" ? "active" : ""}
                onClick={() => setActiveTab("vision")}
              >
                Our Vision
              </button>
              <button
                type="button"
                className={activeTab === "mission" ? "active" : ""}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
            </div>

            <article className="overseas-premium-tab-panel">
              <div className="overseas-premium-tab-image">
                <Image
                  src={activeContent.image}
                  alt={activeContent.title}
                  fill
                  unoptimized
                  sizes="(max-width: 850px) 100vw, 50vw"
                />
              </div>

              <div className="overseas-premium-tab-copy">
                <span>{activeContent.title}</span>
                <h3>
                  {activeTab === "vision"
                    ? "Transforming Tanzania’s steel future."
                    : "Growing through trust, excellence and responsibility."}
                </h3>
                <p>{activeContent.text}</p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="overseas-premium-leadership">
        <Container className="overseas-premium-leadership-grid">
          <div
            className="overseas-premium-leadership-copy"
            data-overseas-reveal
          >
            <span>{overseasPageContent.leadership.eyebrow}</span>
            <h2>{overseasPageContent.leadership.title}</h2>
          </div>

          <p data-overseas-reveal>{overseasPageContent.leadership.text}</p>
        </Container>
      </section>

      <section className="overseas-premium-values">
        <Container>
          <header
            className="overseas-premium-values-heading"
            data-overseas-reveal
          >
            <span>Core Values</span>
            <h2>Principles that define every decision.</h2>
            <p>{overseasPageContent.coreValuesIntro}</p>
          </header>

          <div className="overseas-premium-values-grid">
            {overseasPageContent.coreValues.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];

              return (
                <article
                  key={value.title}
                  className="overseas-premium-value-card"
                  data-overseas-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="overseas-premium-value-icon">
                    <Icon />
                  </div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="overseas-premium-milestones">
        <Container className="overseas-premium-story-grid">
          <div data-overseas-reveal>
            <span>{overseasPageContent.projectMilestones.eyebrow}</span>
            <h2>{overseasPageContent.projectMilestones.title}</h2>
          </div>
          <p data-overseas-reveal>
            {overseasPageContent.projectMilestones.text}
          </p>
        </Container>
      </section>

      <section className="overseas-premium-commitment">
        <Container>
          <header
            className="overseas-premium-values-heading"
            data-overseas-reveal
          >
            <span>{overseasPageContent.commitment.eyebrow}</span>
            <h2>{overseasPageContent.commitment.title}</h2>
            <p>{overseasPageContent.commitment.text}</p>
          </header>

          <div className="overseas-premium-social-grid">
            {overseasPageContent.socialResponsibility.items.map(
              (item, index) => (
                <article
                  key={item.title}
                  data-overseas-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={58}
                    height={58}
                    unoptimized
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            )}
          </div>

          <div className="overseas-premium-social-copy" data-overseas-reveal>
            <span>{overseasPageContent.socialResponsibility.eyebrow}</span>
            <h3>{overseasPageContent.socialResponsibility.title}</h3>
            <p>{overseasPageContent.socialResponsibility.intro}</p>
          </div>
        </Container>
      </section>

      <section className="overseas-premium-closing">
        <Container>
          <p data-overseas-reveal>{overseasPageContent.closingStatement}</p>
        </Container>
      </section>

      {overseasPageContent.imageCards.length > 0 ? (
        <section className="overseas-premium-values">
          <Container>
            <header
              className="overseas-premium-values-heading"
              data-overseas-reveal
            >
              <span>Project progress</span>
              <h2>Divine Serenity.</h2>
              <p>
                Divine Serenity is the flagship project of Nav Durga Group in
                Tanzania, following is the project details.
              </p>
            </header>

            <div className="overseas-premium-gallery-grid">
              {overseasPageContent.imageCards.map((item, index) => {
                const cardContent = (
                  <>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title || "Divine Steels project"}
                        fill
                        unoptimized
                        sizes="(max-width: 700px) 100vw, 33vw"
                      />
                    </div>

                    {(item.title || item.subtitle) && (
                      <header>
                        {item.title && <h3>{item.title}</h3>}
                        {item.subtitle && (
                          <p>
                            {item.subtitle}
                            {item.downloadUrl && <Download size={16} />}
                          </p>
                        )}
                      </header>
                    )}
                  </>
                );

                if (item.videoUrl) {
                  return (
                    <button
                      key={`${item.image}-${index}`}
                      type="button"
                      className="overseas-premium-gallery-card overseas-premium-video-card"
                      onClick={() => setProjectVideo(item.videoUrl || null)}
                      aria-label={`Play ${item.title}`}
                      data-overseas-reveal
                    >
                      {cardContent}
                      <span className="overseas-premium-card-play">
                        <Play />
                      </span>
                    </button>
                  );
                }

                return item.downloadUrl ? (
                  <a
                    key={`${item.image}-${index}`}
                    className="overseas-premium-gallery-card overseas-premium-download-card"
                    href={item.downloadUrl}
                    download
                    aria-label={`Download ${item.title}`}
                    data-overseas-reveal
                  >
                    {cardContent}
                  </a>
                ) : (
                  <article
                    key={`${item.image}-${index}`}
                    className="overseas-premium-gallery-card"
                    data-overseas-reveal
                  >
                    {cardContent}
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}

      {overseasPageContent.projectTables.length > 0 ? (
        <section className="overseas-premium-data">
          <Container>
            <header className="overseas-premium-heading" data-overseas-reveal>
              <div>
                <span>Project details</span>
                <h2>Scale, capability and planned infrastructure.</h2>
              </div>
            </header>

            <div className="overseas-premium-table-stack">
              {overseasPageContent.projectTables.map((table, tableIndex) => (
                <article
                  key={`${table.title}-${tableIndex}`}
                  className="overseas-premium-table-card"
                  data-overseas-reveal
                >
                  <h3>{table.title}</h3>
                  <div className="overseas-premium-table-wrap">
                    <table>
                      <tbody>
                        {table.rows.map((row, rowIndex) => (
                          <tr key={`${tableIndex}-${rowIndex}`}>
                            {row.map((cell, cellIndex) =>
                              rowIndex === 0 ? (
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
                </article>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="overseas-premium-contact">
        <Container className="overseas-premium-contact-card is-visible">
          <div>
            <span>{overseasPageContent.contact.eyebrow}</span>
            <h2>{overseasPageContent.contact.title}</h2>
            <p>{overseasPageContent.contact.description}</p>
          </div>

          <div className="overseas-premium-contact-list">
            {overseasPageContent.contact.address && (
              <div>
                <MapPin />
                <span>{overseasPageContent.contact.address}</span>
              </div>
            )}

            {overseasPageContent.contact.emails.map((email) => (
              <a href={`mailto:${email}`} key={email}>
                <Mail />
                <span>{email}</span>
              </a>
            ))}

            {overseasPageContent.contact.phones.map((phone) => (
              <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>
                <Phone />
                <span>{phone}</span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {projectVideo ? (
        <div
          className="overseas-premium-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Divine Serenity project video"
          onClick={() => setProjectVideo(null)}
        >
          <button
            type="button"
            className="overseas-premium-modal-close"
            onClick={() => setProjectVideo(null)}
            aria-label="Close video"
          >
            <X />
          </button>
          <video
            src={projectVideo}
            controls
            autoPlay
            playsInline
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}

      {videoOpen ? (
        <div
          className="overseas-premium-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Divine Steels project video"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            className="overseas-premium-modal-close"
            onClick={() => setVideoOpen(false)}
            aria-label="Close video"
          >
            <X />
          </button>

          <video
            src={overseasPageContent.introVideo.video}
            controls
            autoPlay
            playsInline
            onClick={(event) => event.stopPropagation()}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
    </>
  );
}
