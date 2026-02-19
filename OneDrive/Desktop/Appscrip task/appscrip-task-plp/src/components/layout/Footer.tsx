import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Section */}
        <div className={styles.topSection}>
            
            {/* Newsletter */}
            <div>
                <h3 className={styles.sectionTitle}>Be the first to know</h3>
                <p className={styles.text}>Sign up for updates from mettā muse.</p>
                <div className={styles.subscribeForm}>
                    <input 
                        type="email" 
                        placeholder="Enter your e-mail..." 
                        className={styles.input}
                    />
                    <button className={styles.button}>
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Contact */}
            <div>
                <h3 className={styles.sectionTitle}>Contact Us</h3>
                <div className={styles.contactInfo}>
                    <p>+91 7010509091</p>
                    <p>customercare@mettamuse.com</p>
                </div>
                
                <h3 className={styles.sectionTitle} style={{marginTop: '16px'}}>Currency</h3>
                <div className={styles.currency}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="US Flag" className={styles.currencyIcon}/>
                    <span className={styles.currencyText}>USD</span>
                </div>
                <p className={styles.currencyNote}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
            {/* Metta Muse */}
            <div>
                <h3 className={styles.sectionTitle}>mettā muse</h3>
                <ul className={styles.linkList}>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/stories">Stories</Link></li>
                    <li><Link href="/artisans">Artisans</Link></li>
                    <li><Link href="/boutiques">Boutiques</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/eu-compliance">EU Compliances Docs</Link></li>
                </ul>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className={styles.sectionTitle}>Quick Links</h3>
                 <ul className={styles.linkList}>
                    <li><Link href="/orders">Orders & Shipping</Link></li>
                    <li><Link href="/join">Join/Login as a Seller</Link></li>
                    <li><Link href="/payment">Payment & Pricing</Link></li>
                    <li><Link href="/returns">Return & Refunds</Link></li>
                    <li><Link href="/faqs">FAQs</Link></li>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                    <li><Link href="/terms">Terms & Conditions</Link></li>
                </ul>
            </div>

            {/* Follow Us */}
            <div>
                 <h3 className={styles.sectionTitle}>Follow Us</h3>
                 <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}>
                        <Instagram size={20} />
                    </div>
                    <div className={styles.socialIcon}>
                        <Linkedin size={20} />
                    </div>
                 </div>

                 <h3 className={styles.sectionTitle}>mettā muse Accepts</h3>
                 <div className={styles.paymentMethods}>
                    <div className={styles.paymentIcon}>GPay</div>
                    <div className={styles.paymentIcon}>Mastercard</div>
                    <div className={styles.paymentIcon}>PayPal</div>
                    <div className={styles.paymentIcon}>Amex</div>
                    <div className={styles.paymentIcon}>ApplePay</div>
                 </div>
            </div>
        </div>

        <div className={styles.copyright}>
            Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
