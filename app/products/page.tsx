"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import Container from "@/components/Container";
import {
  productPageContent,
  type ProductPageItem,
} from "@/data/content";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductPageItem | null>(null);

  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>("[data-product-reveal]");

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
    if (!selectedProduct) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  const selectedIndex = selectedProduct
    ? productPageContent.products.findIndex(
        (product) => product.id === selectedProduct.id
      )
    : -1;

  const openPrevious = () => {
    if (selectedIndex < 0) return;

    const previousIndex =
      selectedIndex === 0
        ? productPageContent.products.length - 1
        : selectedIndex - 1;

    setSelectedProduct(productPageContent.products[previousIndex]);
  };

  const openNext = () => {
    if (selectedIndex < 0) return;

    const nextIndex =
      selectedIndex === productPageContent.products.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedProduct(productPageContent.products[nextIndex]);
  };

  return (
    <>
      <section
        className="products-premium-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(2,18,52,.97), rgba(4,55,111,.66), rgba(2,18,52,.18)), url("${productPageContent.hero.backgroundImage}")`,
        }}
      >
        <Container>
          <div className="products-premium-hero-copy" data-product-reveal>
            <span>{productPageContent.hero.eyebrow}</span>
            <h1>{productPageContent.hero.title}</h1>
            <p>{productPageContent.hero.description}</p>

            <div className="products-premium-hero-actions">
              <a href="#product-portfolio" className="products-premium-primary">
                Explore products <ArrowDown size={18} />
              </a>

              <Link href="/contact" className="products-premium-text-link">
                Make an enquiry <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>

        <div className="products-premium-hero-rail">
          <span>01</span>
          <i />
          <strong>
            {String(productPageContent.products.length).padStart(2, "0")}
          </strong>
        </div>
      </section>

      <section className="products-premium-overview">
        <Container className="products-premium-overview-grid">
          <div
            className="products-premium-overview-image"
            data-product-reveal
          >
            <Image
              src={productPageContent.overview.image}
              alt={productPageContent.overview.title}
              fill
              priority
              unoptimized
              sizes="(max-width: 900px) 100vw, 48vw"
            />

            <div className="products-premium-image-badge">
              <strong>9</strong>
              <span>Core product categories</span>
            </div>
          </div>

          <div
            className="products-premium-overview-copy"
            data-product-reveal
          >
            <span>{productPageContent.overview.eyebrow}</span>
            <h2>{productPageContent.overview.title}</h2>

            {productPageContent.overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="products-premium-quality">
        <Container className="products-premium-quality-grid">
          <div className="products-premium-quality-heading" data-product-reveal>
            <span>{productPageContent.quality.eyebrow}</span>
            <h2>{productPageContent.quality.title}</h2>
          </div>

          <div className="products-premium-quality-copy" data-product-reveal>
            <p>{productPageContent.quality.text}</p>

            <div className="products-premium-quality-list">
              {productPageContent.quality.highlights.map((highlight) => (
                <div key={highlight}>
                  <span>
                    <Check size={17} />
                  </span>
                  <strong>{highlight}</strong>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="product-portfolio"
        className="products-premium-portfolio"
      >
        <Container>
          <header className="products-premium-heading" data-product-reveal>
            <div>
              <span>{productPageContent.section.eyebrow}</span>
              <h2>{productPageContent.section.title}</h2>
            </div>

            <p>{productPageContent.section.description}</p>
          </header>

          <div className="products-premium-list">
            {productPageContent.products.map((product, index) => (
              <article
                className={`products-premium-row ${
                  index % 2 ? "is-reverse" : ""
                }`}
                key={product.id}
                data-product-reveal
              >
                <button
                  type="button"
                  className="products-premium-row-image"
                  onClick={() => setSelectedProduct(product)}
                  aria-label={`Open ${product.title} image`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    unoptimized
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />

                  <span className="products-premium-row-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="products-premium-row-view">
                    View image <ArrowRight size={16} />
                  </span>
                </button>

                <div className="products-premium-row-copy">
                  <span>
                    Product {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="products-premium-row-action"
                  >
                    Explore product <ArrowRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {selectedProduct ? (
        <div
          className="products-premium-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProduct.title} preview`}
          onClick={() => setSelectedProduct(null)}
        >
          <button
            type="button"
            className="products-premium-modal-close"
            onClick={() => setSelectedProduct(null)}
            aria-label="Close product preview"
          >
            <X />
          </button>

          <button
            type="button"
            className="products-premium-modal-arrow previous"
            onClick={(event) => {
              event.stopPropagation();
              openPrevious();
            }}
            aria-label="Previous product"
          >
            <ChevronLeft />
          </button>

          <article
            className="products-premium-modal-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="products-premium-modal-image">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                unoptimized
                priority
                sizes="(max-width: 850px) 100vw, 58vw"
              />
            </div>

            <div className="products-premium-modal-copy">
              <span>
                Product {String(selectedProduct.id).padStart(2, "0")}
              </span>
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.description}</p>
            </div>
          </article>

          <button
            type="button"
            className="products-premium-modal-arrow next"
            onClick={(event) => {
              event.stopPropagation();
              openNext();
            }}
            aria-label="Next product"
          >
            <ChevronRight />
          </button>
        </div>
      ) : null}
    </>
  );
}
