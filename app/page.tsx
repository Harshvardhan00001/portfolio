'use client';

import React, { useState } from 'react';

export default function HarshvardhanPortfolio() {
  const [selectedTicket, setSelectedTicket] = useState<number>(0);

  const roleTickets = [
    {
      role: "Full-Stack Software Developer",
      fit: "ACTIVE INDUSTRY ROLE",
      fitColor: "geo-tag-violet",
      details: "Developing full-stack features with React, TypeScript, and Node.js. Functional testing on Sentinel, optimizing REST APIs, and building responsive UI interfaces.",
      cta: "View Full-Stack Work",
    },
    {
      role: "Cybersecurity & AppSec Analyst",
      fit: "IBM-PBEL VERIFIED",
      fitColor: "geo-tag-mint",
      details: "Hands-on vulnerability testing in DVWA, SQL Injection (SQLi) & Cross-Site Scripting (XSS) assessment, and HTTP/HTTPS traffic manipulation with Burp Suite.",
      cta: "View Security Work",
    },
    {
      role: "Real-Time & AI Systems Engineer",
      fit: "PROJECT LEAD",
      fitColor: "geo-tag-amber",
      details: "Architecting real-time bi-directional sync with Socket.io, Face-api.js biometric auth, router IP geofencing, and Google Gemini API semantic analysis.",
      cta: "View Real-Time Projects",
    },
  ];

  return (
    <div className="portfolio-page">
      {/* ============================================================
          TOP NAVIGATION
          ============================================================ */}
      <header className="site-nav" role="banner">
        <div className="site-nav-inner">
          <a href="#" className="brand-badge" aria-label="Harshvardhan Singh Negi Portfolio Home">
            <span className="brand-dot" aria-hidden="true"></span>
            <span className="brand-title">HARSHVARDHAN SINGH NEGI</span>
          </a>

          <nav aria-label="Primary site navigation">
            <ul className="nav-links">
              <li className="nav-link-item"><a href="#projects">Projects</a></li>
              <li className="nav-link-item"><a href="#experience">Experience</a></li>
              <li className="nav-link-item"><a href="#skills">Skills</a></li>
              <li className="nav-link-item"><a href="#journey">Timeline</a></li>
              <li className="nav-link-item"><a href="#security">Cybersecurity</a></li>
              <li className="nav-link-item"><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="mailto:harshvardhan2672@gmail.com"
              className="btn btn-warm btn-sm"
              aria-label="Email Harshvardhan Singh Negi"
            >
              <span>✉️ Contact Me</span>
            </a>
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              aria-label="Download Resume"
            >
              <span>📄 Resume</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* ============================================================
            HERO / OPENING STATEMENT & STATIC SHAPE ASSEMBLY
            ============================================================ */}
        <section className="section-wrap" aria-labelledby="hero-heading">
          <div className="hero-grid">
            <div className="hero-text-col">
              <div className="hero-status-pill">
                <span className="hero-status-indicator" aria-hidden="true"></span>
                <span>B.Tech CSE (2023–2027) · Lloyd Institute of Engineering &amp; Technology</span>
              </div>

              <h1 id="hero-heading" className="hero-heading">
                Full-Stack Developer &amp; Cybersecurity Specialist.
              </h1>

              <p className="hero-paragraph text-relaxed">
                Hi, I&apos;m <strong>Harshvardhan Singh Negi</strong>! Software Developer Intern at{' '}
                <strong>NexusCzar Private Limited</strong> and former Cybersecurity Intern at{' '}
                <strong>IBM-PBEL</strong>. I build scalable full-stack applications with React, TypeScript,
                and Node.js, integrate real-time biometrics with Socket.io &amp; Gemini AI, and secure systems
                against critical web vulnerabilities.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  <span>Explore Featured Projects ↓</span>
                </a>
                <a href="#experience" className="btn btn-warm">
                  <span>Work Experience</span>
                </a>
                <a
                  href="mailto:harshvardhan2672@gmail.com"
                  className="btn btn-outline"
                  aria-label="Email Harshvardhan"
                >
                  <span>harshvardhan2672@gmail.com</span>
                </a>
              </div>

              {/* Direct Profile Links */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="geo-tag geo-tag-violet"
                  style={{ textDecoration: 'none' }}
                >
                  GitHub Profile ↗
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="geo-tag geo-tag-mint"
                  style={{ textDecoration: 'none' }}
                >
                  LinkedIn Profile ↗
                </a>
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noreferrer"
                  className="geo-tag geo-tag-amber"
                  style={{ textDecoration: 'none' }}
                >
                  LeetCode Profile ↗
                </a>
                <span className="geo-tag geo-tag-pink">📞 +91 73106-66093</span>
              </div>
            </div>

            {/* Static Assembly of Colorful Geometric Shapes */}
            <div className="shape-assembly" aria-label="Professional and technical highlights">
              <div className="geo-deco-triangle" aria-hidden="true"></div>
              <div className="geo-deco-circle" aria-hidden="true"></div>

              <div className="shape-arch-main">
                <div className="shape-arch-icon" aria-hidden="true">🛡️</div>
                <div className="shape-arch-label">Software Developer Intern</div>
                <div className="shape-arch-sub">NexusCzar Private Limited (Sentinel Web Platform)</div>
                <div style={{ marginTop: '12px' }}>
                  <span className="geo-tag geo-tag-mint" style={{ fontSize: '11px' }}>
                    Aug 2026 – Present · Greater Noida, U.P
                  </span>
                </div>
              </div>

              <div className="shape-row-bottom">
                <div className="shape-card-amber">
                  <span className="shape-card-metric">2x</span>
                  <span className="shape-card-desc">Industry Internships (SDE + Cybersecurity)</span>
                </div>
                <div className="shape-card-pink">
                  <span className="shape-card-metric">Core</span>
                  <span className="shape-card-desc">React · TypeScript · Node · Burp Suite</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            FACT STRIP ACROSS LAYERED MINT AND OUTLINED BASES
            ============================================================ */}
        <section className="section-wrap" style={{ paddingTop: 0, paddingBottom: '32px' }} aria-label="Key Resume Highlights">
          <div className="fact-strip-wrapper">
            <div className="fact-strip-layered">
              <div className="fact-item">
                <span className="fact-number">2</span>
                <span className="fact-label">Industry Internships</span>
                <span className="fact-subtext">Software Developer @ NexusCzar &amp; Cybersecurity Intern @ IBM-PBEL.</span>
              </div>

              <div className="fact-item">
                <span className="fact-number">2+</span>
                <span className="fact-label">Flagship Deployments</span>
                <span className="fact-subtext">AttendEase (Biometric Geofencing) &amp; GenAI Resume Analyzer.</span>
              </div>

              <div className="fact-item">
                <span className="fact-number">100%</span>
                <span className="fact-label">Anti-Proxy Protection</span>
                <span className="fact-subtext">Face biometric auth with Face-api.js &amp; router IP-matching geofence.</span>
              </div>

              <div className="fact-item">
                <span className="fact-number">AppSec</span>
                <span className="fact-label">Security &amp; Pentesting</span>
                <span className="fact-subtext">Burp Suite, DVWA, SQLi &amp; XSS vulnerability analysis &amp; traffic manipulation.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SHARED WHITE BOOK SHAPE WITH VIOLET OFFSET BACKING (PROJECTS & SKILLS)
            ============================================================ */}
        <section id="projects" className="section-wrap" aria-labelledby="book-heading">
          <div className="book-container">
            {/* Violet offset backing layer */}
            <div className="book-backing" aria-hidden="true"></div>

            {/* Main white reading book panel */}
            <div className="book-panel">
              {/* Colored Tab sticking out on top */}
              <div className="book-tab" aria-hidden="true">
                DOSSIER · ENGINEERING &amp; APPLIED SECURITY
              </div>

              <div className="book-header">
                <span className="geo-tag geo-tag-violet">Production Projects</span>
                <h2 id="book-heading" className="book-title">
                  Featured Software Engineering Projects
                </h2>
                <p className="text-relaxed" style={{ color: '#444e63', marginTop: '10px' }}>
                  Engineered with modern full-stack architectures, real-time WebSockets,
                  biometric verification, and generative artificial intelligence.
                </p>
              </div>

              {/* Projects Grid */}
              <div className="projects-grid">
                {/* Project 1: AttendEase */}
                <article className="project-card">
                  <div className="project-visual" style={{ backgroundColor: '#f0fff7' }}>
                    <div className="visual-silhouette-arch">
                      <span style={{ fontSize: '36px' }} aria-hidden="true">📸</span>
                      <span style={{ fontWeight: 800, fontSize: '15px' }}>AttendEase</span>
                      <span className="geo-tag geo-tag-mint" style={{ fontSize: '11px', padding: '3px 8px' }}>
                        Live &amp; Open Source · June 2026
                      </span>
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="project-meta-row">
                      <span className="geo-tag geo-tag-mint">TypeScript</span>
                      <span className="geo-tag geo-tag-violet">Socket.io</span>
                      <span className="geo-tag geo-tag-amber">Face-api.js</span>
                    </div>

                    <h3 className="project-title">AttendEase Platform</h3>

                    <p className="project-desc">
                      Real-time classroom attendance system engineered to completely eliminate proxy attendance:
                    </p>

                    <ul style={{ paddingLeft: '18px', fontSize: '14px', color: '#3b4559', lineHeight: '1.6', marginBottom: '16px' }}>
                      <li><strong>Anti-Proxy Authentication:</strong> Face biometric verification with Face-api.js and instructor-approval gates.</li>
                      <li><strong>Network Geofencing:</strong> Dynamically validates student vs. teacher router IPs to restrict check-ins strictly to classroom Wi-Fi.</li>
                      <li><strong>Real-Time Sync:</strong> Bi-directional Socket.io channel to dynamically control attendance windows and mark absentees.</li>
                      <li><strong>Domain Validation:</strong> Administrative email domain verification against official college rosters.</li>
                    </ul>

                    <div className="project-tech-tags">
                      <span className="tech-tag-chip">TypeScript</span>
                      <span className="tech-tag-chip">React</span>
                      <span className="tech-tag-chip">MongoDB</span>
                      <span className="tech-tag-chip">Express</span>
                      <span className="tech-tag-chip">Socket.io</span>
                    </div>

                    <div className="project-actions">
                      <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                        GitHub Repo ↗
                      </a>
                      <a href="#contact" className="btn btn-outline btn-sm">
                        Live Preview ↗
                      </a>
                    </div>
                  </div>
                </article>

                {/* Project 2: GenAI Resume Analyzer */}
                <article className="project-card">
                  <div className="project-visual" style={{ backgroundColor: '#fff0f8' }}>
                    <div className="visual-silhouette-pill">
                      <span style={{ fontSize: '36px' }} aria-hidden="true">🤖</span>
                      <span style={{ fontWeight: 800, fontSize: '15px' }}>GenAI Analyzer</span>
                      <span className="geo-tag geo-tag-pink" style={{ fontSize: '11px', padding: '3px 8px' }}>
                        Google Gemini API · March 2026
                      </span>
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="project-meta-row">
                      <span className="geo-tag geo-tag-pink">Gemini AI</span>
                      <span className="geo-tag geo-tag-amber">JWT Auth</span>
                      <span className="geo-tag geo-tag-mint">Tailwind CSS</span>
                    </div>

                    <h3 className="project-title">GenAI Resume Analyzer</h3>

                    <p className="project-desc">
                      Intelligent ATS match scoring and semantic resume optimization engine:
                    </p>

                    <ul style={{ paddingLeft: '18px', fontSize: '14px', color: '#3b4559', lineHeight: '1.6', marginBottom: '16px' }}>
                      <li><strong>AI Match Scoring:</strong> Leverages Google Gemini API to semantically compare candidate resumes against job descriptions and highlight missing keywords.</li>
                      <li><strong>Dual Portal Auth:</strong> Isolated workflows for Job-Seekers and Corporate Partners via JWT with secure HTTP-only cookies.</li>
                      <li><strong>Semantic Feedback Engine:</strong> Automated SWOT-style module pinpointing missing technical skills with actionable resume optimization steps.</li>
                    </ul>

                    <div className="project-tech-tags">
                      <span className="tech-tag-chip">React.js</span>
                      <span className="tech-tag-chip">Express.js</span>
                      <span className="tech-tag-chip">MongoDB</span>
                      <span className="tech-tag-chip">Tailwind CSS</span>
                      <span className="tech-tag-chip">Gemini API</span>
                    </div>

                    <div className="project-actions">
                      <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-warm btn-sm">
                        GitHub Repo ↗
                      </a>
                      <a href="#contact" className="btn btn-outline btn-sm">
                        View Demo
                      </a>
                    </div>
                  </div>
                </article>

                {/* Project 3: Sentinel Web Platform (NexusCzar) */}
                <article className="project-card">
                  <div className="project-visual" style={{ backgroundColor: '#fffbf0' }}>
                    <div className="visual-silhouette-badge">
                      <span style={{ fontSize: '36px' }} aria-hidden="true">🏢</span>
                      <span style={{ fontWeight: 800, fontSize: '15px' }}>Sentinel Platform</span>
                      <span className="geo-tag geo-tag-amber" style={{ fontSize: '11px', padding: '3px 8px' }}>
                        NexusCzar · Production
                      </span>
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="project-meta-row">
                      <span className="geo-tag geo-tag-amber">React</span>
                      <span className="geo-tag geo-tag-mint">TypeScript</span>
                      <span className="geo-tag geo-tag-violet">Node.js</span>
                    </div>

                    <h3 className="project-title">Sentinel Web Platform</h3>

                    <p className="project-desc">
                      Production full-stack engineering and quality testing for enterprise client software:
                    </p>

                    <ul style={{ paddingLeft: '18px', fontSize: '14px', color: '#3b4559', lineHeight: '1.6', marginBottom: '16px' }}>
                      <li><strong>Feature Development:</strong> Developed and shipped responsive full-stack features using React, TypeScript, and Node.js.</li>
                      <li><strong>Functional Testing:</strong> Executed end-to-end functional testing on Sentinel, catching critical bugs before release.</li>
                      <li><strong>Optimization:</strong> Diagnosed defects, refined complex UI flows, and optimized backend REST API latency.</li>
                    </ul>

                    <div className="project-tech-tags">
                      <span className="tech-tag-chip">React</span>
                      <span className="tech-tag-chip">TypeScript</span>
                      <span className="tech-tag-chip">Node.js</span>
                      <span className="tech-tag-chip">REST APIs</span>
                      <span className="tech-tag-chip">Jest</span>
                    </div>

                    <div className="project-actions">
                      <a href="#experience" className="btn btn-primary btn-sm">
                        Internship Details ↓
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              {/* Technical Skills Inventory inside the book */}
              <div id="skills" className="book-skills-section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <span className="geo-tag geo-tag-amber">Technical Repertoire</span>
                    <h3 style={{ fontSize: '28px', marginTop: '8px' }}>Technical Skills &amp; Stack</h3>
                  </div>
                  <span style={{ fontSize: '14px', color: '#4a566f', fontWeight: 600 }}>
                    Applied across Industry Internships &amp; Flagship Engineering Projects
                  </span>
                </div>

                <div className="skills-category-grid">
                  {/* Category 1: Languages */}
                  <div className="skill-category-box">
                    <h4 className="skill-category-title">
                      <span aria-hidden="true">💻</span> Languages
                    </h4>
                    <div className="skill-badge-list">
                      <div className="skill-badge-item">
                        <span>TypeScript</span>
                        <span className="geo-tag geo-tag-violet" style={{ fontSize: '10px', padding: '2px 6px' }}>NexusCzar</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>JavaScript (ES6+)</span>
                        <span className="geo-tag geo-tag-mint" style={{ fontSize: '10px', padding: '2px 6px' }}>Advanced</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>CPP (C++)</span>
                        <span className="geo-tag geo-tag-amber" style={{ fontSize: '10px', padding: '2px 6px' }}>DSA Core</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>Python</span>
                        <span className="geo-tag geo-tag-pink" style={{ fontSize: '10px', padding: '2px 6px' }}>AI / Scripting</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>SQL</span>
                        <span className="geo-tag geo-tag-violet" style={{ fontSize: '10px', padding: '2px 6px' }}>Postgres/MySQL</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 2: Frontend & Backend */}
                  <div className="skill-category-box">
                    <h4 className="skill-category-title">
                      <span aria-hidden="true">🌐</span> Web Engineering
                    </h4>
                    <div className="skill-badge-list">
                      <div className="skill-badge-item">
                        <span>React</span>
                        <span className="geo-tag geo-tag-violet" style={{ fontSize: '10px', padding: '2px 6px' }}>Production</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>Node.js</span>
                        <span className="geo-tag geo-tag-mint" style={{ fontSize: '10px', padding: '2px 6px' }}>Full-Stack</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>Express.js</span>
                        <span className="geo-tag geo-tag-amber" style={{ fontSize: '10px', padding: '2px 6px' }}>REST APIs</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>Tailwind CSS</span>
                        <span className="geo-tag geo-tag-pink" style={{ fontSize: '10px', padding: '2px 6px' }}>Responsive UI</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>Socket.io</span>
                        <span className="geo-tag geo-tag-violet" style={{ fontSize: '10px', padding: '2px 6px' }}>Real-Time</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 3: Databases & DevOps */}
                  <div className="skill-category-box">
                    <h4 className="skill-category-title">
                      <span aria-hidden="true">☁️</span> Cloud &amp; Databases
                    </h4>
                    <div className="skill-badge-list">
                      <div className="skill-badge-item">
                        <span>PostgreSQL &amp; MySQL</span>
                        <span className="geo-tag geo-tag-mint" style={{ fontSize: '10px', padding: '2px 6px' }}>Relational</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>MongoDB</span>
                        <span className="geo-tag geo-tag-violet" style={{ fontSize: '10px', padding: '2px 6px' }}>NoSQL</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>Redis</span>
                        <span className="geo-tag geo-tag-amber" style={{ fontSize: '10px', padding: '2px 6px' }}>Caching</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>Docker &amp; Kubernetes</span>
                        <span className="geo-tag geo-tag-pink" style={{ fontSize: '10px', padding: '2px 6px' }}>Containers</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>Git, Linux &amp; AWS</span>
                        <span className="geo-tag geo-tag-mint" style={{ fontSize: '10px', padding: '2px 6px' }}>DevOps</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 4: Cybersecurity & Architecture */}
                  <div className="skill-category-box">
                    <h4 className="skill-category-title">
                      <span aria-hidden="true">🛡️</span> Security &amp; Concepts
                    </h4>
                    <div className="skill-badge-list">
                      <div className="skill-badge-item">
                        <span>Burp Suite &amp; Wireshark</span>
                        <span className="geo-tag geo-tag-mint" style={{ fontSize: '10px', padding: '2px 6px' }}>IBM-PBEL</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>SQLi &amp; XSS Assessment</span>
                        <span className="geo-tag geo-tag-violet" style={{ fontSize: '10px', padding: '2px 6px' }}>DVWA Labs</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>SIEM Tools &amp; Threat Analysis</span>
                        <span className="geo-tag geo-tag-amber" style={{ fontSize: '10px', padding: '2px 6px' }}>AppSec</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>System Design &amp; Microservices</span>
                        <span className="geo-tag geo-tag-pink" style={{ fontSize: '10px', padding: '2px 6px' }}>Architecture</span>
                      </div>
                      <div className="skill-badge-item">
                        <span>Computer Networks &amp; REST</span>
                        <span className="geo-tag geo-tag-mint" style={{ fontSize: '10px', padding: '2px 6px' }}>Protocols</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            NUMBERED PROCESS STRIP WITH CONNECTING LINE (ACADEMIC & INDUSTRY JOURNEY)
            ============================================================ */}
        <section id="journey" className="section-wrap timeline-section" aria-labelledby="journey-heading">
          <div className="timeline-header">
            <span className="geo-tag geo-tag-mint">Sequential Career Growth</span>
            <h2 id="journey-heading" style={{ fontSize: 'clamp(32px, 3.8vw, 46px)', marginTop: '12px' }}>
              Academic &amp; Professional Timeline
            </h2>
            <p className="text-relaxed" style={{ color: '#444e63', marginTop: '10px' }}>
              From foundational engineering studies at Lloyd Institute to hands-on cybersecurity research
              at IBM-PBEL and production software delivery at NexusCzar.
            </p>
          </div>

          <div className="timeline-strip-container">
            {/* Connecting line */}
            <div className="timeline-connecting-line" aria-hidden="true"></div>

            {/* Step 1 */}
            <div className="timeline-step">
              <div className="step-number-shape step-shape-circle">01</div>
              <div className="step-content-card">
                <span className="step-year-badge">2023 - 2024 · B.TECH CSE</span>
                <h3 className="step-title">Engineering Foundation</h3>
                <p className="step-description">
                  Joined Lloyd Institute of Engineering &amp; Technology, Greater Noida. Built strong
                  command over C++, Python, Data Structures, Algorithms, Computer Networks, and DBMS.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="timeline-step">
              <div className="step-number-shape step-shape-square">02</div>
              <div className="step-content-card">
                <span className="step-year-badge">AUG – OCT 2025 · VIRTUAL</span>
                <h3 className="step-title">IBM-PBEL Cybersecurity</h3>
                <p className="step-description">
                  Conducted web application security testing on DVWA. Performed hands-on exploitation
                  of SQLi and XSS vulnerabilities, and used Burp Suite to intercept and analyze HTTP/HTTPS traffic.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="timeline-step">
              <div className="step-number-shape step-shape-arch">03</div>
              <div className="step-content-card">
                <span className="step-year-badge">MAR – JUN 2026 · PROJECTS</span>
                <h3 className="step-title">GenAI &amp; AttendEase</h3>
                <p className="step-description">
                  Shipped GenAI Resume Analyzer using Google Gemini API &amp; JWT auth. Built AttendEase
                  with biometric face verification, router IP geofencing, and real-time Socket.io channels.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="timeline-step">
              <div className="step-number-shape step-shape-block">04</div>
              <div className="step-content-card">
                <span className="step-year-badge">AUG 2026 – PRESENT</span>
                <h3 className="step-title">NexusCzar Software Intern</h3>
                <p className="step-description">
                  Developing and shipping production features with React, TypeScript, and Node.js.
                  Running functional tests on Sentinel platform and optimizing backend API performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            BENEFITS IN PALE-MINT PANEL (ENGINEERING VALUE)
            ============================================================ */}
        <section id="security" className="section-wrap" aria-labelledby="competencies-heading">
          <div className="benefits-mint-panel">
            <div style={{ maxWidth: '680px' }}>
              <span className="geo-tag geo-tag-violet">Unique Value Proposition</span>
              <h2 id="competencies-heading" style={{ fontSize: 'clamp(30px, 3.4vw, 42px)', marginTop: '12px' }}>
                Full-Stack Velocity with Security-First Rigor
              </h2>
              <p className="text-relaxed" style={{ color: '#2d3b51', marginTop: '8px' }}>
                Because I have hands-on experience in both web development and cybersecurity, I don&apos;t just
                build features fast—I architect them to resist exploitation from day zero.
              </p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon-badge" style={{ backgroundColor: 'var(--dp-color-selection)' }}>
                  🛡️
                </div>
                <h3 className="benefit-title">Defensive Coding</h3>
                <p className="benefit-text">
                  Direct understanding of attack vectors (SQLi, XSS, CSRF) gained at IBM-PBEL; I build
                  sanitized inputs, parameterized queries, and strict HTTP-only cookie sessions.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon-badge" style={{ backgroundColor: 'var(--dp-color-accent-fresh)' }}>
                  ⚡
                </div>
                <h3 className="benefit-title">Real-Time Event Sync</h3>
                <p className="benefit-text">
                  Demonstrated mastery of Socket.io bi-directional messaging, dynamic session control,
                  and low-latency updates as proven in the AttendEase classroom platform.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon-badge" style={{ backgroundColor: 'var(--dp-color-accent-warm)' }}>
                  🤖
                </div>
                <h3 className="benefit-title">Applied AI Integration</h3>
                <p className="benefit-text">
                  Practical experience integrating modern LLM APIs (Google Gemini API) for semantic
                  matching, keyword extraction, and automated actionable feedback loops.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon-badge" style={{ backgroundColor: 'var(--dp-color-accent-secondary)', color: '#ffffff' }}>
                  🧪
                </div>
                <h3 className="benefit-title">Functional QA &amp; Testing</h3>
                <p className="benefit-text">
                  Executing functional test suites on enterprise platforms like Sentinel at NexusCzar,
                  identifying critical regression bugs and driving application reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SPEECH-LIKE QUOTATION PANELS (WORK EXPERIENCE HIGHLIGHTS)
            ============================================================ */}
        <section id="experience" className="section-wrap quotes-section" aria-labelledby="experience-heading">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <span className="geo-tag geo-tag-amber">Work Experience In Depth</span>
            <h2 id="experience-heading" style={{ fontSize: 'clamp(30px, 3.4vw, 40px)', marginTop: '12px' }}>
              Internship Roles &amp; Responsibilities
            </h2>
          </div>

          <div className="quotes-grid">
            {/* Experience Card 1: NexusCzar */}
            <div className="speech-panel">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                  <span className="geo-tag geo-tag-violet">Aug 2026 – Present</span>
                  <span className="geo-tag geo-tag-mint">Greater Noida, U.P</span>
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '4px' }}>Software Developer Intern</h3>
                <h4 style={{ color: 'var(--dp-color-accent)', marginBottom: '16px', fontSize: '16px' }}>
                  NexusCzar Private Limited
                </h4>
                <ul style={{ paddingLeft: '18px', fontSize: '15px', color: '#323d52', lineHeight: '1.65' }}>
                  <li>Developed and shipped full-stack features across multiple web applications using React, TypeScript, and Node.js.</li>
                  <li>Executed functional testing on the Sentinel web platform, identifying critical bugs and improving system reliability.</li>
                  <li>Troubleshot application defects, resolved UI issues, and optimized backend API performance.</li>
                </ul>
              </div>

              <div className="speech-author-row" style={{ marginTop: '24px' }}>
                <div className="author-avatar" style={{ backgroundColor: 'var(--dp-color-accent-fresh)', color: 'var(--dp-color-ink)' }}>
                  NC
                </div>
                <div className="author-info">
                  <h4>NexusCzar Engineering</h4>
                  <p>Enterprise Web Applications &amp; Platform QA</p>
                </div>
              </div>
            </div>

            {/* Experience Card 2: IBM-PBEL */}
            <div className="speech-panel">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                  <span className="geo-tag geo-tag-amber">Aug 2025 – Oct 2025</span>
                  <span className="geo-tag geo-tag-pink">Virtual Internship</span>
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '4px' }}>Cybersecurity Intern</h3>
                <h4 style={{ color: 'var(--dp-color-accent)', marginBottom: '16px', fontSize: '16px' }}>
                  IBM-PBEL
                </h4>
                <ul style={{ paddingLeft: '18px', fontSize: '15px', color: '#323d52', lineHeight: '1.65' }}>
                  <li>Conducted web application security testing in a controlled lab environment using DVWA, identifying and analyzing common security vulnerabilities.</li>
                  <li>Performed hands-on exploitation and assessment of SQL Injection (SQLi) and Cross-Site Scripting (XSS) vulnerabilities, gaining practical knowledge of attack methodologies and mitigation techniques.</li>
                  <li>Utilized Burp Suite to intercept, inspect, and manipulate HTTP/HTTPS traffic for vulnerability discovery and validation.</li>
                </ul>
              </div>

              <div className="speech-author-row" style={{ marginTop: '24px' }}>
                <div className="author-avatar" style={{ backgroundColor: 'var(--dp-color-accent-warm)', color: 'var(--dp-color-ink)' }}>
                  IBM
                </div>
                <div className="author-info">
                  <h4>IBM-PBEL Security Division</h4>
                  <p>Vulnerability Assessment &amp; Web Penetration Testing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            BROAD COMPARISON TICKETS (ROLE FIT MATRIX)
            ============================================================ */}
        <section className="section-wrap tickets-section" aria-labelledby="roles-heading">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="geo-tag geo-tag-violet">Hiring Alignment</span>
              <h2 id="roles-heading" style={{ fontSize: 'clamp(30px, 3.4vw, 42px)', marginTop: '10px' }}>
                Role Specialization &amp; Engineering Fit
              </h2>
              <p className="text-relaxed" style={{ color: '#444e63', marginTop: '6px' }}>
                Select a target domain to review my corresponding project artifacts and technical competencies.
              </p>
            </div>
            <span className="geo-tag geo-tag-mint">Select a track below</span>
          </div>

          <div className="tickets-list" role="radiogroup" aria-label="Role specializations">
            {roleTickets.map((ticket, index) => {
              const isSelected = selectedTicket === index;
              return (
                <div
                  key={ticket.role}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                  className={`comparison-ticket ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => setSelectedTicket(index)}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      setSelectedTicket(index);
                    }
                  }}
                >
                  <div className="ticket-choice-col">
                    <span className={`geo-tag ${ticket.fitColor}`} style={{ fontSize: '11px', padding: '3px 8px' }}>
                      {ticket.fit}
                    </span>
                    <h3 className="ticket-role-name">{ticket.role}</h3>
                  </div>

                  <div className="ticket-details-col">
                    <p>{ticket.details}</p>
                  </div>

                  <div className="ticket-action-col">
                    <button
                      type="button"
                      className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline'}`}
                      tabIndex={-1}
                    >
                      <span>{isSelected ? '✓ Selected Track' : 'Inspect Details'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            MINT BACK-COVER SHAPE WITH CLOSING STATEMENT & INSET SLATE FOOTER
            ============================================================ */}
        <section id="contact" className="closing-mint-cover" aria-labelledby="contact-heading">
          {/* Sparse geometric confetti around edges */}
          <div className="confetti-piece confetti-triangle-1" aria-hidden="true"></div>
          <div className="confetti-piece confetti-circle-1" aria-hidden="true"></div>
          <div className="confetti-piece confetti-square-1" aria-hidden="true"></div>
          <div className="confetti-piece confetti-circle-2" aria-hidden="true"></div>

          <div className="closing-statement-box">
            <span className="geo-tag geo-tag-violet">Let&apos;s Connect</span>
            <h2 id="contact-heading" className="closing-headline">
              Ready to build and secure high-impact software systems?
            </h2>
            <p className="closing-subtext">
              I am currently working as a Software Developer Intern at NexusCzar while pursuing my B.Tech in Computer
              Science and Engineering at Lloyd Institute (2023–2027). Open to full-stack, backend, and security roles.
            </p>

            <div style={{ display: 'inline-flex', gap: '16px', background: 'rgba(255,255,255,0.7)', padding: '12px 24px', borderRadius: '16px', border: '2px solid var(--dp-color-outline)', marginBottom: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span style={{ fontWeight: 700 }}>📧 harshvardhan2672@gmail.com</span>
              <span style={{ fontWeight: 700 }}>📞 +91 73106-66093</span>
              <span style={{ fontWeight: 700 }}>📍 Greater Noida, U.P</span>
            </div>

            <div className="closing-actions-row">
              <a
                href="mailto:harshvardhan2672@gmail.com?subject=Job%20Opportunity%20-%20Harshvardhan%20Singh%20Negi"
                className="btn btn-primary"
              >
                <span>✉️ Send an Email</span>
              </a>

              <a
                href="tel:7310666093"
                className="btn btn-warm"
              >
                <span>📞 Call +91 73106-66093</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <span>LinkedIn Profile ↗</span>
              </a>
            </div>
          </div>

          {/* Inset Dark Slate Footer with Broad Curved Top */}
          <footer className="inset-slate-footer" role="contentinfo">
            <div className="footer-grid">
              <div className="footer-col">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span className="brand-dot" style={{ backgroundColor: 'var(--dp-color-accent-fresh)' }}></span>
                  <span style={{ fontFamily: 'var(--dp-typography-display)', fontSize: '18px', fontWeight: 800 }}>
                    HARSHVARDHAN SINGH NEGI
                  </span>
                </div>
                <p>
                  Bachelor of Technology in Computer Science and Engineering (2023 - 2027)<br />
                  <strong>Lloyd Institute of Engineering &amp; Technology</strong>, Greater Noida, U.P.
                </p>
                <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="geo-tag geo-tag-mint" style={{ color: '#252b3a' }}>NexusCzar SDE Intern</span>
                  <span className="geo-tag geo-tag-warm" style={{ color: '#252b3a', backgroundColor: '#ffd05b' }}>IBM-PBEL Alum</span>
                </div>
              </div>

              <div className="footer-col">
                <h4>Navigation Index</h4>
                <ul className="footer-links-list">
                  <li><a href="#projects">AttendEase Platform</a></li>
                  <li><a href="#projects">GenAI Resume Analyzer</a></li>
                  <li><a href="#experience">NexusCzar &amp; IBM Experience</a></li>
                  <li><a href="#skills">Technical Skill Matrix</a></li>
                  <li><a href="#journey">Chronological Timeline</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Direct Profiles &amp; Contact</h4>
                <ul className="footer-links-list">
                  <li><a href="mailto:harshvardhan2672@gmail.com">harshvardhan2672@gmail.com</a></li>
                  <li><a href="tel:7310666093">+91 73106-66093</a></li>
                  <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn Profile ↗</a></li>
                  <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub Profile ↗</a></li>
                  <li><a href="https://leetcode.com" target="_blank" rel="noreferrer">LeetCode Profile ↗</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom-row">
              <span>© 2026 Harshvardhan Singh Negi. All rights reserved.</span>
              <span>Styled strictly with Playful Geometric Design Architecture.</span>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
