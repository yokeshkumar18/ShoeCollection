"use client";

import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "SHOP", href: "/" },
    { name: "SKILLS", href: "/skills" },
    { name: "STORIES", href: "/stories" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <div className={styles.marquee}>
          <span>Lorem ipsum dolor</span>
          <span className="hidden-mobile">|</span>
          <span>Lorem ipsum dolor</span>
          <span className="hidden-mobile">|</span>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      <div className={styles.mainHeader}>
          
          <div className={styles.mobileMenuBtn}>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
          
          <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo}>LOGO</Link>
          </div>

          <div className={styles.nav}>
             <nav className={styles.navLinks}>
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={styles.navLink}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.actions}>
            <Search className={styles.icon} />
            <Heart className={styles.icon} />
            <ShoppingBag className={styles.icon} />
            <div className={styles.langSelector}>
                <span>ENG</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
      </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
               {navLinks.map((link) => (
                <Link 
                    key={link.name} 
                    href={link.href} 
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
        )}
      
      {/* Sub-header */}
      <div className={styles.heroSection}>
          <h1 className={styles.title}>Discover Our Products</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
      </div>
    </header>
  );
}

