import type { Metadata } from "next";
import { createPageMetadata, pageSeo } from "@/data/seo";

export const metadata: Metadata = createPageMetadata(pageSeo.clients);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
