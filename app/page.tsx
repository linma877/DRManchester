const capabilities = [
  ["MI", "Multiscale Imaging", "From atomic interfaces to geological cores", "blue"],
  ["DE", "Dynamic Experiments", "Operando, high-pressure and reactive systems", "green"],
  ["AI", "Modelling & AI", "Physics-informed learning and digital twins", "violet"],
  ["DI", "Digital Infrastructure", "FAIR data, workflows and reproducible science", "cyan"],
  ["AP", "Applications", "Energy, environment and advanced materials", "olive"],
  ["IC", "Impact & Collaboration", "Industry, facilities, training and open science", "orange"],
];

const researchHighlights = [
  { image: "/research-multiscale.jpg", label: "Multiscale imaging", title: "Connecting pores across scales", description: "Correlative imaging and upscaling connect sub-nanometre structures with centimetre-scale rock architecture.", detail: "Sub-nm → cm" },
  { image: "/research-thermal.jpg", label: "4D thermal response", title: "Watching pore networks evolve under heat", description: "Nano-CT reveals progressive pore and fracture development from ambient conditions to 400°C.", detail: "0–400°C" },
  { image: "/research-particles.jpg", label: "Dynamic transport", title: "How particles block and reopen pores", description: "Time-resolved imaging captures attachment, bridging, pore filling, compaction and remobilisation.", detail: "3D + time" },
  { image: "/research-fractures.jpg", label: "Mechanical behaviour", title: "Where fractures begin—and why", description: "Digital volume correlation links local strain, mineral composition and rock fabric to fracture propagation.", detail: "Imaging + DVC" },
  { image: "/research-reactions.jpg", label: "Reactive transport", title: "When mineral reactions reshape flow", description: "4D imaging tracks dissolution and precipitation as they progressively alter fractures and nanoporous pathways.", detail: "Reaction + flow" },
];

const currentPostdocs = ["Dr. Jingyue Hao", "Dr. Heather Braid", "Dr. Zhongbei Li"];
const currentPhds = ["Xin Zhong", "Camilo Salazar", "Ali Bony Kaya", "Sonu Sudhikumar Seena", "Bengang Chen", "Jeffrey Akuoko", "Chunmiao Ma", "Yifan Yin", "Deni Suryo Pratama"];

export default function Home() {
  return (
    <main>
      <section className="reference-hero" id="top" aria-label="Digital Rock and Porous Materials Platform">
        <img className="reference-image" src="/hero-reference.png" alt="Digital Rock and Porous Materials Platform — From Imaging Matter to Predictive Matter" />
        <nav className="reference-hotspots" aria-label="Primary navigation">
          <a className="hotspot home" href="#top">Home</a>
          <a className="hotspot research" href="#framework">Research</a>
          <a className="hotspot facilities" href="#facilities">Facilities</a>
          <a className="hotspot publications" href="#research-highlights">Publications</a>
          <a className="hotspot people" href="#people">People</a>
          <a className="hotspot news" href="#opportunities">News</a>
          <a className="hotspot join" href="#opportunities">Join Us</a>
          <a className="hotspot explore" href="#framework">Explore Platform</a>
          <a className="hotspot scroll" href="#framework">Scroll to discover</a>
        </nav>
      </section>

      <section className="mobile-hero" aria-label="Digital Rock and Porous Materials Platform mobile introduction">
        <div className="mobile-brand"><span>THE UNIVERSITY OF MANCHESTER</span><strong>DIGITAL ROCK &amp;<br/>POROUS MATERIALS PLATFORM</strong></div>
        <p className="mobile-eyebrow">The University of Manchester</p>
        <h1>Digital Rock &amp;<br/>Porous Materials<br/>Platform</h1>
        <p className="mobile-tagline">From Imaging Matter to Predictive Matter</p>
        <div className="mobile-keywords"><span>Multiscale Characterisation</span><span>4D Dynamics</span><span>Modelling &amp; AI</span><span>Digital Twin</span></div>
        <a className="mobile-cta" href="#framework">Explore Platform <span>→</span></a>
      </section>

      <section className="framework section" id="framework">
        <div className="section-heading">
          <div><p className="section-index">01 / Platform framework</p><h2>From imaging matter<br/>to predictive matter.</h2></div>
          <p>A single integrated framework connecting multiscale observation, dynamic experiments, physics, AI and digital twins—from nanopores to geological formations.</p>
        </div>
        <div className="framework-board">
          <img src="/framework-reference.png" alt="Digital Rock and Porous Materials Platform framework spanning nanopores to formations, with integrated workflow and platform capabilities" />
          <div className="tem-updated-label" aria-label="Updated TEM capability: 2D, 3D and 4D">
            <strong>TEM Tomography</strong><span>(2D / 3D / 4D)</span>
          </div>
        </div>
      </section>

      <section className="facilities-section section" id="facilities">
        <div className="section-heading">
          <div><p className="section-index">02 / Facilities</p><h2>Observe porous matter across scale, modality and time.</h2></div>
          <p>Our partnerships connect laboratory, synchrotron and multiscale characterisation facilities for static, time-resolved and operando observation.</p>
        </div>
        <a className="facilities-figure" href="/facilities" aria-label="Explore the complete facilities map">
          <img src="/facilities-observational-space.png" alt="The observational space of porous matter across spatial scale, information modality and temporal resolution" />
          <span><b>Complete observational space</b><em>View the full-resolution Facilities map →</em></span>
        </a>
        <div className="facilities-concept">
          <div className="concept-axis concept-scale"><small>01 / Scale</small><strong>Nano</strong><i>→</i><strong>Micro</strong><i>→</i><strong>Core</strong></div>
          <div className="concept-techniques-list"><small>02 / Core techniques</small><div><span>Lab Macro / Micro / Nano-CT</span><span>Synchrotron Micro / Nano-CT</span><span>SEM / FIB / TEM Tomography</span><span>AFM &amp; Nano-IR</span><span>High-Temperature, High-Pressure Gas Sorption</span><span>High-Temperature, High-Pressure Batch Reactors</span><span>Spectroscopic &amp; Chemical Imaging</span><span>Operando Flow &amp; Reaction Cells</span></div></div>
          <div className="concept-axis concept-time"><small>03 / 4D observation</small><strong>Static</strong><i>→</i><strong>Time-lapse</strong><i>→</i><strong>Operando</strong></div>
          <p>Multiscale <b>×</b> multimodal <b>×</b> time-resolved</p>
        </div>
        <div className="partnerships-heading"><p className="section-index">Partnerships</p><span>Explore connected facilities ↘</span></div>
        <div className="partnership-grid">
          <a href="https://nxct.ac.uk/" target="_blank" rel="noreferrer"><small>Laboratory imaging</small><strong>Lab CT</strong><span>National X-ray Computed Tomography →</span></a>
          <a href="https://www.diamond.ac.uk/Instruments/Imaging-and-Microscopy.html" target="_blank" rel="noreferrer"><small>National facility</small><strong>Synchrotron CT</strong><span>Diamond Light Source →</span></a>
          <a href="https://www.harwell.manchester.ac.uk/equipment/" target="_blank" rel="noreferrer"><small>Research infrastructure</small><strong>UoM at Harwell</strong><span>Explore equipment →</span></a>
          <a href="https://www.royce.ac.uk/equipment-and-facilities/" target="_blank" rel="noreferrer"><small>Advanced materials</small><strong>Multiscale Characterisation</strong><span>Henry Royce Institute →</span></a>
        </div>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="section-heading compact"><div><p className="section-index">03 / Integrated capabilities</p><h2>Built as a platform,<br/>not a collection of tools.</h2></div><p>Six connected capabilities support research from fundamental science through industrial translation.</p></div>
        <div className="capability-grid">
          {capabilities.map(([code, title, description, colour]) => <article className={`capability-card ${colour}`} key={code}><span className="capability-code">{code}</span><div><h3>{title}</h3><p>{description}</p></div><span className="card-arrow">↗</span></article>)}
        </div>
      </section>

      <section className="evidence-strip" aria-label="Research track record">
        <div><strong>£15M+</strong><span>research funding secured</span></div>
        <div><strong>£3.5M+</strong><span>as Principal Investigator</span></div>
        <div><strong>30+</strong><span>PI-led synchrotron experiments</span></div>
        <div><strong>120+</strong><span>PI-led beamtime days</span></div>
      </section>

      <section className="research-highlights section" id="research-highlights">
        <div className="section-heading compact">
          <div><p className="section-index">04 / Featured research</p><h2>Evidence across scale,<br/>time and process.</h2></div>
          <p>Selected examples show how imaging becomes mechanistic understanding—and ultimately prediction.</p>
        </div>
        <div className="research-grid">
          {researchHighlights.map((item, index) => (
            <article className={`research-card research-card-${index + 1}`} key={item.title}>
              <div className="research-image"><img src={item.image} alt={`${item.title} research example`} /></div>
              <div className="research-copy"><div><small>{item.label}</small><span>{item.detail}</span></div><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          ))}
        </div>
        <a className="publication-link" href="https://research.manchester.ac.uk/en/persons/lin.ma/publications/" target="_blank" rel="noreferrer">Explore all publications ↗</a>
      </section>

      <section className="applications" id="applications">
        <div><p className="section-index light">05 / Applications</p><h2>Predictive porous materials for a changing world.</h2></div>
        <div className="application-list"><span>Oil and Gas</span><span>Shales and Mudstones</span><span>Nuclear Waste Disposal</span><span>Geothermal</span><span>Geological CO₂ Storage</span><span>Underground Hydrogen Storage</span><span>Natural Hydrogen</span><span>Environmental Remediation</span><span>Catalysis</span><span>Batteries</span></div>
      </section>

      <section className="people-section section" id="people">
        <div className="section-heading people-heading">
          <div><p className="section-index">06 / People</p><h2>People shaping predictive porous materials.</h2></div>
          <p>Our team connects multiscale imaging, experimentation and modelling across geoscience, energy and advanced materials.</p>
        </div>
        <div className="pi-grid">
          <article className="pi-card"><span>Principal Investigator</span><h3>Lin Ma</h3><div className="pi-links"><a href="https://research.manchester.ac.uk/en/persons/lin.ma/" target="_blank" rel="noreferrer">Manchester profile ↗</a><a href="https://www.linkedin.com/in/lin-ma-392b1766/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></article>
          <article className="pi-card"><span>Principal Investigator</span><h3>Kevin Taylor</h3><div className="pi-links"><a href="https://research.manchester.ac.uk/en/persons/kevin.taylor/" target="_blank" rel="noreferrer">Manchester profile ↗</a></div></article>
        </div>
        <div className="current-team">
          <article><p className="team-kicker">Current PDRAs</p><h3>3 researchers</h3><p>{currentPostdocs.join(" · ")}</p></article>
          <article><p className="team-kicker">Current PhD researchers</p><h3>9 researchers</h3><p>{currentPhds.join(" · ")}</p></article>
          <article className="team-summary"><p className="team-kicker">Team network</p><h3>Current team &amp; alumni</h3><p>Researchers trained across multiscale imaging, subsurface processes and predictive modelling.</p><a href="/people">Meet the full team →</a></article>
        </div>
      </section>

      <section className="projects-section section" id="projects">
        <div className="section-heading compact"><div><p className="section-index">07 / Projects &amp; networks</p><h2>Connected to national research infrastructure.</h2></div><p>Selected programmes link facilities, fundamental science and translation across energy and environmental challenges.</p></div>
        <div className="project-list">
          <span>National Research Facility in Lab X-ray CT — NXCT II</span><span>GEOSAFE — Geological Disposal of Radioactive Waste</span><span>The University of Manchester at Harwell</span><span>Hydrogen Research Corridor</span><span>Enabling Hydrogen Storage Near Industrial Clusters</span>
        </div>
      </section>

      <section className="opportunities" id="opportunities">
        <div><p className="section-index light">08 / Opportunities</p><h2>PhD opportunities<br/>for 2027 entry.</h2></div>
        <div><p>We welcome enquiries from prospective PhD researchers and collaborators interested in digital rock, multiscale imaging, subsurface energy storage and image-based modelling.</p><div className="opportunity-links"><a href="https://research.manchester.ac.uk/en/persons/lin.ma/" target="_blank" rel="noreferrer">Explore opportunities ↗</a><a href="mailto:lin.ma@manchester.ac.uk">Discuss a collaboration →</a></div></div>
      </section>

      <footer><div className="footer-brand"><span className="brand-mark">DR</span><div><strong>Digital Rock &amp; Porous Materials Platform</strong><p>From Imaging Matter to Predictive Matter</p></div></div><div><p>The University of Manchester</p><a href="mailto:hello@digitalrockmanchester.com">Start a conversation →</a></div></footer>
    </main>
  );
}
