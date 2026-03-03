"use client";

import Image from "next/image";
import { Instagram, Linkedin, Github } from "lucide-react";

export default function Home() {
  const email = process.env.NEXT_PUBLIC_EMAIL || "hi@example.com";
  const cvLink = process.env.NEXT_PUBLIC_CV_LINK || "#";
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const github = process.env.NEXT_PUBLIC_GITHUB_URL || "#";
  const whatsappNum = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const whatsappLink =
    process.env.NEXT_PUBLIC_WHATSAPP_LINK || `https://wa.me/${whatsappNum}`;

  return (
    <main className="section-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <nav className="top-nav">
            <div className="contact-pill shadow-sm">
              <span className="text-secondary">{email}</span>
              <div className="contact-pill-actions">
                <button
                  className="btn-pill"
                  onClick={() => navigator.clipboard.writeText(email)}
                >
                  <span className="font-semibold">Copy</span>
                </button>
                <a
                  href={cvLink}
                  className="btn-pill"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold">CV</span>
                </a>
              </div>
            </div>

            <div className="social-links">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon icon-btn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon icon-btn"
              >
                <Instagram size={28} />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon icon-btn"
              >
                <Github size={28} />
              </a>
            </div>
          </nav>

          <div className="hero-content">
            <div className="avatar-container">
              <div className="avatar-bg">
                <Image
                  src="/iconedo.png"
                  alt="Edo Priyatna"
                  width={200}
                  height={200}
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="name-tag shadow-md">
                Edo Priyatna{" "}
                <span role="img" aria-label="wave">
                  👋
                </span>
              </div>
            </div>

            <h1 className="hero-title text-center font-bold">
              Crafting Digital Products, Brands, and Experiences That Inspire.
            </h1>

            <button className="btn-dark btn-elevated">Read More</button>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="logos-section">
        <div className="container logos-grid">
          <div className="logo-item">
            <Image
              src="/image 1.png"
              alt="Client 1"
              width={240}
              height={90}
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="logo-item">
            <Image
              src="/image 2.png"
              alt="Client 2"
              width={200}
              height={70}
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="logo-item">
            <Image
              src="/image 3.png"
              alt="Client 3"
              width={180}
              height={70}
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="logo-item">
            <Image
              src="/image 5.png"
              alt="Client 4"
              width={200}
              height={75}
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="logo-item">
            <Image
              src="/image 6.png"
              alt="Client 5"
              width={190}
              height={70}
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title font-semibold">
            Collaborate with brands and agencies
            <br />
            to create impactful results
          </h2>

          <div className="divider">
            <span className="divider-text shadow-sm text-secondary">
              Service
            </span>
          </div>

          <div className="services-grid">
            <div className="service-card shadow-sm">
              <div className="service-icon box-icon">
                <Image
                  src="/webdevelopment.svg"
                  alt="Web Development"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex-col">
                <h3 className="service-title">Web Development</h3>
                <p className="service-desc">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </div>

            <div className="service-card shadow-sm">
              <div className="service-icon box-icon">
                <Image
                  src="/photography.svg"
                  alt="Photography"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex-col">
                <h3 className="service-title">Photography</h3>
                <p className="service-desc">
                  Professional photography and visual assets creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container flex flex-col items-center">
          <div className="handshake-icon shadow-md">
            <Image
              src="/Handshake.svg"
              alt="Handshake"
              width={72}
              height={72}
            />
          </div>

          <h2 className="cta-title">Tell me about your next project</h2>

          <div className="cta-buttons">
            <a href={`mailto:${email}`} className="btn-email btn-elevated">
              <Image
                src="/email.svg"
                alt="Email"
                width={28}
                height={28}
                style={{ filter: "invert(1)" }}
              />
              Email Me
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa shadow-md hover-lift"
            >
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={28}
                height={28}
              />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
