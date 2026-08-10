"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "@/data/site";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="topbar">
        <span>Industrial excellence since 1990</span>
        <a href="tel:+919893021933">+(91) 989-302-1933</a>
      </div>
      <div className="nav-wrap container">
        <Link className="logo-image" href="/">
          <Image
            src="/assets/global/images/navdurga-logo.png"
            alt="Nav Durga Group"
            width={220}
            height={120}
            priority
          />
        </Link>
        <nav className={open ? "nav open" : "nav"}>
          {navigationItems.map((x) => (
            <Link key={x.href} href={x.href} onClick={() => setOpen(false)}>
              {x.label}
            </Link>
          ))}
          <Link
            className="nav-cta"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Enquire
          </Link>
        </nav>
        <button
          className="menu"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
