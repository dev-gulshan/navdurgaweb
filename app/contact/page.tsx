"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import Container from "@/components/Container";
import { contactPageContent } from "@/data/content";
import { apiUrl } from "@/lib/api";

type SubmitState = "idle" | "submitting" | "success" | "error";
type FieldName =
  | "firstname"
  | "lastname"
  | "email"
  | "phone"
  | "website"
  | "message";
type FormErrors = Partial<Record<FieldName, string>>;

const contactCards = [
  {
    title: "Registered Office",
    value: contactPageContent.details.registeredOffice,
    icon: MapPin,
  },
  {
    title: "Corporate Office",
    value: contactPageContent.details.corporateOffice,
    icon: Building2,
  },
  {
    title: "Email Us",
    value: contactPageContent.details.email,
    icon: Mail,
    href: `mailto:${contactPageContent.details.email}`,
  },
  {
    title: "Call Support",
    value: contactPageContent.details.phone,
    icon: Phone,
    href: `tel:${contactPageContent.details.phone.replace(/\s/g, "")}`,
  },
];

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-contact-reveal]"
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

  function validateForm(formData: FormData): FormErrors {
    const nextErrors: FormErrors = {};
    const firstname = String(formData.get("firstname") || "").trim();
    const lastname = String(formData.get("lastname") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const enquiryMessage = String(formData.get("message") || "").trim();
    const namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
    const emailPattern = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
    const indianMobilePattern = /^[6-9]\d{9}$/;
    const messageContentPattern = /[A-Za-z0-9]/;

    if (!firstname) nextErrors.firstname = "First name is required.";
    else if (firstname.length < 2)
      nextErrors.firstname = "Enter at least 2 characters.";
    else if (firstname.length > 50)
      nextErrors.firstname = "Maximum 50 characters allowed.";
    else if (!namePattern.test(firstname))
      nextErrors.firstname =
        "Use letters only; single spaces, apostrophes and hyphens are allowed between words.";

    if (!lastname) nextErrors.lastname = "Last name is required.";
    else if (lastname.length < 2)
      nextErrors.lastname = "Enter at least 2 characters.";
    else if (lastname.length > 50)
      nextErrors.lastname = "Maximum 50 characters allowed.";
    else if (!namePattern.test(lastname))
      nextErrors.lastname =
        "Use letters only; single spaces, apostrophes and hyphens are allowed between words.";

    if (!email) nextErrors.email = "Email address is required.";
    else if (!emailPattern.test(email))
      nextErrors.email = "Enter a valid email address.";
    else if (email.length > 150)
      nextErrors.email = "Maximum 150 characters allowed.";

    if (!phone) nextErrors.phone = "Mobile number is required.";
    else if (!/^\d+$/.test(phone))
      nextErrors.phone = "Only numbers are allowed.";
    else if (phone.length !== 10)
      nextErrors.phone = "Mobile number must contain exactly 10 digits.";
    else if (!indianMobilePattern.test(phone))
      nextErrors.phone =
        "Enter a valid Indian mobile number starting with 6, 7, 8 or 9.";

    if (website) {
      if (website.length > 250) {
        nextErrors.website = "Maximum 250 characters allowed.";
      } else {
        try {
          const parsedUrl = new URL(website);
          const hasValidProtocol = ["http:", "https:"].includes(
            parsedUrl.protocol
          );
          const hasValidDomain =
            parsedUrl.hostname.includes(".") &&
            !parsedUrl.hostname.startsWith(".") &&
            !parsedUrl.hostname.endsWith(".");

          if (!hasValidProtocol || !hasValidDomain) throw new Error();
        } catch {
          nextErrors.website =
            "Enter a valid website URL including http:// or https://.";
        }
      }
    }

    if (!enquiryMessage) nextErrors.message = "Message is required.";
    else if (enquiryMessage.length < 10)
      nextErrors.message = "Please enter at least 10 characters.";
    else if (enquiryMessage.length > 2000)
      nextErrors.message = "Maximum 2000 characters allowed.";
    else if (!messageContentPattern.test(enquiryMessage))
      nextErrors.message =
        "Message must contain at least one letter or number.";

    return nextErrors;
  }

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const field = event.target.name as FieldName;

    if (field === "firstname" || field === "lastname") {
      event.target.value = event.target.value
        .replace(/[^A-Za-z '-]/g, "")
        .replace(/\s{2,}/g, " ")
        .replace(/^\s+/, "");
    }

    if (field === "phone") {
      event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10);
    }

    if (field === "email" || field === "website") {
      event.target.value = event.target.value.replace(/\s/g, "");
    }

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }

    if (submitState === "error") {
      setSubmitState("idle");
      setMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setSubmitState("error");
      setMessage("Please correct the highlighted fields and submit again.");
      const firstInvalidField = Object.keys(validationErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    setErrors({});
    setSubmitState("submitting");
    setMessage("");

    try {
      const response = await fetch(apiUrl(contactPageContent.form.endpoint), {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string; errors?: Record<string, string[]> }
        | null;

      if (!response.ok) {
        if (response.status === 422 && result?.errors) {
          const backendErrors = Object.fromEntries(
            Object.entries(result.errors).map(([field, messages]) => [
              field,
              messages[0],
            ])
          ) as FormErrors;

          setErrors(backendErrors);
          const firstInvalidField = Object.keys(backendErrors)[0];
          form
            .querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)
            ?.focus();
        }

        throw new Error(
          result?.message || `Request failed with status ${response.status}`
        );
      }

      setSubmitState("success");
      setMessage(result?.message || contactPageContent.form.successMessage);
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setSubmitState("error");
      setMessage(
        error instanceof Error && error.message
          ? error.message
          : contactPageContent.form.errorMessage
      );
    }
  }

  return (
    <>
      <section
        className="contact-premium-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(3,20,57,.97), rgba(4,61,121,.62), rgba(3,20,57,.18)), url("${contactPageContent.hero.backgroundImage}")`,
        }}
      >
        <Container>
          <div className="contact-premium-hero-copy" data-contact-reveal>
            <span>{contactPageContent.hero.eyebrow}</span>
            <h1>{contactPageContent.hero.title}</h1>
            <p>{contactPageContent.hero.description}</p>

            <div className="contact-premium-breadcrumb">
              <Link href="/">Home</Link>
              <ArrowRight size={15} />
              <strong>Get In Touch</strong>
            </div>
          </div>
        </Container>

        <div className="contact-premium-hero-orbit" />
      </section>

      <section className="contact-premium-intro">
        <Container>
          <header className="contact-premium-intro-heading" data-contact-reveal>
            <span>{contactPageContent.intro.eyebrow}</span>
            <h2>{contactPageContent.intro.title}</h2>
            <p>{contactPageContent.intro.description}</p>
          </header>

          <div className="contact-premium-detail-grid">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              const content = (
                <>
                  <div className="contact-premium-detail-icon">
                    <Icon />
                  </div>

                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{card.title}</h3>
                  <p>{card.value}</p>
                </>
              );

              return card.href ? (
                <a
                  href={card.href}
                  key={card.title}
                  className="contact-premium-detail-card"
                  data-contact-reveal
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  {content}
                </a>
              ) : (
                <article
                  key={card.title}
                  className="contact-premium-detail-card"
                  data-contact-reveal
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  {content}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="contact-premium-form-section">
        <Container className="contact-premium-form-layout">
          <div className="contact-premium-form-copy" data-contact-reveal>
            <span>{contactPageContent.form.eyebrow}</span>
            <h2>{contactPageContent.form.title}</h2>
            <p>{contactPageContent.form.description}</p>

            <div className="contact-premium-form-note">
              <CheckCircle2 />
              <span>
                Your information is used only to respond to your enquiry.
              </span>
            </div>
          </div>

          <form
            className="contact-premium-form"
            onSubmit={handleSubmit}
            noValidate
            data-contact-reveal
          >
            <div className="contact-premium-field-grid">
              <label>
                <span>First Name *</span>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter first name"
                  autoComplete="given-name"
                  minLength={2}
                  maxLength={50}
                  pattern="[A-Za-z]+(?:[ '\-][A-Za-z]+)*"
                  title="Enter letters only. Spaces, apostrophes and hyphens are allowed between words."
                  aria-invalid={Boolean(errors.firstname)}
                  aria-describedby={
                    errors.firstname ? "firstname-error" : undefined
                  }
                  onChange={handleFieldChange}
                  required
                />
                {errors.firstname ? (
                  <small
                    id="firstname-error"
                    className="contact-premium-field-error"
                  >
                    {errors.firstname}
                  </small>
                ) : null}
              </label>

              <label>
                <span>Last Name *</span>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter last name"
                  autoComplete="family-name"
                  minLength={2}
                  maxLength={50}
                  pattern="[A-Za-z]+(?:[ '\-][A-Za-z]+)*"
                  title="Enter letters only. Spaces, apostrophes and hyphens are allowed between words."
                  aria-invalid={Boolean(errors.lastname)}
                  aria-describedby={
                    errors.lastname ? "lastname-error" : undefined
                  }
                  onChange={handleFieldChange}
                  required
                />
                {errors.lastname ? (
                  <small
                    id="lastname-error"
                    className="contact-premium-field-error"
                  >
                    {errors.lastname}
                  </small>
                ) : null}
              </label>
            </div>

            <div className="contact-premium-field-grid">
              <label>
                <span>Email Address *</span>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  minLength={6}
                  maxLength={150}
                  spellCheck={false}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={handleFieldChange}
                  required
                />
                {errors.email ? (
                  <small
                    id="email-error"
                    className="contact-premium-field-error"
                  >
                    {errors.email}
                  </small>
                ) : null}
              </label>

              <label>
                <span>Phone Number *</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="9876543210"
                  autoComplete="tel"
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  minLength={10}
                  maxLength={10}
                  title="Enter a 10-digit Indian mobile number starting with 6, 7, 8 or 9."
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  onChange={handleFieldChange}
                  required
                />
                {errors.phone ? (
                  <small
                    id="phone-error"
                    className="contact-premium-field-error"
                  >
                    {errors.phone}
                  </small>
                ) : null}
              </label>
            </div>

            <label>
              <span>Website</span>
              <input
                type="url"
                name="website"
                placeholder="https://example.com"
                autoComplete="url"
                minLength={10}
                maxLength={250}
                spellCheck={false}
                aria-invalid={Boolean(errors.website)}
                aria-describedby={errors.website ? "website-error" : undefined}
                onChange={handleFieldChange}
              />
              {errors.website ? (
                <small
                  id="website-error"
                  className="contact-premium-field-error"
                >
                  {errors.website}
                </small>
              ) : null}
            </label>

            <label>
              <span>Your Message *</span>
              <textarea
                name="message"
                rows={7}
                placeholder="Tell us how we can help you"
                minLength={10}
                maxLength={2000}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                onChange={handleFieldChange}
                required
              />
              {errors.message ? (
                <small
                  id="message-error"
                  className="contact-premium-field-error"
                >
                  {errors.message}
                </small>
              ) : null}
            </label>

            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="contact-premium-submit"
            >
              {submitState === "submitting" ? (
                <>
                  <Loader2 className="contact-premium-spinner" />
                  Submitting
                </>
              ) : (
                <>
                  Submit enquiry <Send size={18} />
                </>
              )}
            </button>

            {message ? (
              <div
                className={`contact-premium-form-message ${submitState}`}
                role="status"
              >
                {message}
              </div>
            ) : null}
          </form>
        </Container>
      </section>

      <section className="contact-premium-map">
        <Container>
          <header className="contact-premium-map-heading" data-contact-reveal>
            <span>{contactPageContent.map.eyebrow}</span>
            <h2>{contactPageContent.map.title}</h2>
          </header>

          <div className="contact-premium-map-frame" data-contact-reveal>
            <iframe
              src={contactPageContent.map.embedUrl}
              width="100%"
              height="560"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Navdurga Group locations"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
