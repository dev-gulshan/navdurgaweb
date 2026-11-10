"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { label: "About us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Business", href: "/business" },
  { label: "Products", href: "/products" },
  { label: "Overseas", href: "/overseas" },
  { label: "Customer", href: "/customer" },
  { label: "Gallery", href: "/gallery" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Google Plus", href: "#", icon: Mail },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "YouTube", href: "#", icon: Youtube },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="premium-footer">
        <div className="premium-footer-cta">
          <div className="container premium-footer-cta-inner">
            <div>
              <span className="premium-footer-kicker">STAY CONNECTED</span>
              <h2>Building stronger possibilities together.</h2>
              <p>
                Connect with Navdurga Group for business, products and global
                partnership opportunities.
              </p>
            </div>

            <Link className="premium-footer-cta-button" href="/contact">
              Start a conversation <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="container premium-footer-main">
          <div className="premium-footer-brand-column">
            <Link
              href="/"
              className="premium-footer-logo"
              aria-label="Navdurga Group home"
            >
              <Image
                src="/assets/global/images/navdurga-logo.png"
                width={300}
                height={130}
                alt="Navdurga Group"
                sizes="(max-width: 700px) 210px, 250px"
              />
            </Link>

            <p className="premium-footer-about">
              Experts in steel manufacturing in India with 25+ years worth of
              experience and commitment. Decorated with various awards and
              accolades.
            </p>

            <div
              className="premium-footer-socials"
              aria-label="Social media links"
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="premium-footer-column premium-footer-links-column">
            <h3>Quick Links</h3>
            <nav aria-label="Footer navigation">
              {quickLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span>{item.label}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="premium-footer-column">
            <h3>Registered Office</h3>
            <a className="premium-footer-contact" href="tel:+919893021933">
              <span className="premium-footer-icon">
                <Phone size={18} />
              </span>
              <span>
                <small>Call us</small>
                +(91) 989-302-1933
              </span>
            </a>
            <div className="premium-footer-contact premium-footer-address">
              <span className="premium-footer-icon">
                <MapPin size={18} />
              </span>
              <address>
                House No 56/1, Mig-II, Phase I Chandrasekharpur Housing Board
                Colony, CS Pur, Bhubaneswar, Khordha, Odisha - 751016.
              </address>
            </div>
          </div>

          <div className="premium-footer-column">
            <h3>Corporate Office</h3>
            <a className="premium-footer-contact" href="tel:+919893021933">
              <span className="premium-footer-icon">
                <Phone size={18} />
              </span>
              <span>
                <small>Call us</small>
                +(91) 989-302-1933
              </span>
            </a>
            <div className="premium-footer-contact premium-footer-address">
              <span className="premium-footer-icon">
                <MapPin size={18} />
              </span>
              <address>
                Vamsiram's Jyothi Valencia No-8_2_120/8411/1/A Unit No : 1, 4th
                floor, Road No. 2 Banjara Hills, Hyderabad-500034.
              </address>
            </div>
          </div>

          <div className="premium-footer-column premium-footer-websites">
            <h3>Website Links</h3>
            <div className="premium-footer-site-list">
              <a
                className="premium-footer-site-card light"
                href="https://divinesteelsltd.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Divine Steels Limited website"
              >
                <Image
                  src="/assets/global/images/dsl-logo.webp"
                  width={120}
                  height={58}
                  alt="Divine Steels Limited"
                />
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>

              <a
                className="premium-footer-site-card dark"
                href="https://shrishtiitmt.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shrishti TMT website"
              >
                <img
                  src="/assets/global/images/stmt-logo.webp"
                  width="120"
                  height="58"
                  alt="Shrishti TMT"
                  loading="lazy"
                />
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="premium-footer-bottom">
          <div className="container premium-footer-bottom-inner">
            <p>
              © {new Date().getFullYear()} Navdurga Group. All rights reserved.
            </p>
            <Link href="/contact">
              Contact us <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </footer>

      <a
        className="premium-footer-whatsapp"
        href="https://api.whatsapp.com/send?phone=919305467122"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Navdurga Group on WhatsApp"
      >
        <MessageCircle size={27} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      <button
        className="premium-footer-scroll-top"
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp size={21} aria-hidden="true" />
      </button>
    </>
  );
}
