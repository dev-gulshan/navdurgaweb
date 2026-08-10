import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { businesses } from "@/data/content";
import BusinessDetailClient from "./BusinessDetailClient";
import { siteSeo } from "@/data/seo";

type BusinessDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return businesses.map((business) => ({
    slug: business.slug,
  }));
}

export async function generateMetadata({
  params,
}: BusinessDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = businesses.find((item) => item.slug === slug);

  if (!business) {
    return {
      title: "Business Not Found",
    };
  }

  const title = `${business.title} | Navdurga Group`;
  const canonical = `${siteSeo.url}/business/${business.slug}`;

  return {
    title: { absolute: title },
    description: business.desc,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: siteSeo.locale,
      url: canonical,
      siteName: siteSeo.name,
      title,
      description: business.desc,
      images: [{ url: business.heroImage, alt: business.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: business.desc,
      images: [business.heroImage],
    },
  };
}

export default async function BusinessDetailPage({
  params,
}: BusinessDetailPageProps) {
  const { slug } = await params;
  const businessExists = businesses.some((item) => item.slug === slug);

  if (!businessExists) {
    notFound();
  }

  return <BusinessDetailClient slug={slug} />;
}
