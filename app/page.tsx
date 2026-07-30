const scales = [
  { range: "100 nm", title: "Nanopores", method: "TEM · FIB-SEM", note: "Interfaces & mineral texture" },
  { range: "1–10 µm", title: "Micropores", method: "Nano-CT · SEM", note: "Connectivity & wettability" },
  { range: "10–500 µm", title: "Porous media", method: "Micro-CT · Raman", note: "Multiphase displacement" },
  { range: "mm–cm", title: "Fractures", method: "Operando CT", note: "Reactive flow & mechanics" },
  { range: "cm–m", title: "Core", method: "HPHT experiments", note: "Upscaling & validation" },
  { range: "m–km", title: "Formation", method: "Field data · Models", note: "Storage & prediction" },
];

const workflow = [
  ["01", "Image", "Observe structure across scales"],
  ["02", "Characterise", "Quantify chemistry and topology"],
  ["03", "Experiment", "Capture matter in motion"],
  ["04", "Model", "Resolve coupled physics"],
  ["05", "Learn", "Connect data with AI"],
  ["06", "Predict", "Build actionable digital twins"],
];

const capabilities = [
  ["MI", "Multiscale Imaging", "From atomic interfaces to geological cores", "blue"],
  ["DE", "Dynamic Experiments", "Operando, high-pressure and reactive systems", "green"],
  ["AI", "Modelling & AI", "Physics-informed learning and digital twins", "violet"],
  ["DI", "Digital Infrastructure", "FAIR data, workflows and reproducible science", "cyan"],
  ["AP", "Applications", "Energy, environment and advanced materials", "olive"],
  ["IC", "Impact & Collaboration", "Industry, facilities, training and open science", "orange"],
];

export default function Home() {
  return (
    <main>
      <section className="reference-hero" id="top" aria-label="Digital Rock and Porous Materials Platform">
        <img className="reference-image" src="/hero-reference.png" alt="Digital Rock and Porous Materials Platform — From Imaging Matter to Predictive Matter" />
        <nav className="reference-hotspots" aria-label="Primary navigation">
          <a className="hotspot home" href="#top">Home</a>
          <a className="hotspot research" href="#framework">Research</a>
          <a className="hotspot facilities" href="#capabilities">Facilities</a>
          <a className="hotspot publications" href="#workflow">Publications</a>
          <a className="hotspot people" href="#capabilities">People</a>
          <a className="hotspot news" href="#applications">News</a>
          <a className="hotspot join" href="mailto:hello@digitalrockmanchester.com">Join Us</a>
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
          <div><p className="section-index">01 / Platform framework</p><h2>One connected view,<br/>from nanopores to formations.</h2></div>
          <p>We connect instruments, experiments and models across six orders of magnitude—turning observations into a coherent predictive system.</p>
        </div>
        <div className="scale-line" aria-label="Platform scales">
          {scales.map((scale, index) => <article className="scale-card" key={scale.title} tabIndex={0}>
            <div className="scale-top"><span>{String(index + 1).padStart(2, "0")}</span><span>{scale.range}</span></div>
            <div className={`scale-specimen specimen-${index + 1}`} aria-hidden="true"><i/><i/><i/></div>
            <h3>{scale.title}</h3><p className="method">{scale.method}</p><p className="scale-note">{scale.note}</p>
          </article>)}
        </div>
        <div className="scale-axis"><span>Nano</span><i/><span>Sample</span><i/><span>System</span></div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="workflow-intro"><p className="section-index light">02 / Data-to-decision workflow</p><h2>A continuous path from observation to prediction.</h2><p>Every stage preserves context, uncertainty and provenance—so insight can move confidently from the scanner to real-world decisions.</p></div>
        <ol className="workflow-list">
          {workflow.map(([number, title, description]) => <li key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="step-arrow">→</span></li>)}
        </ol>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="section-heading compact"><div><p className="section-index">03 / Integrated capabilities</p><h2>Built as a platform,<br/>not a collection of tools.</h2></div><p>Six connected capabilities support research from fundamental science through industrial translation.</p></div>
        <div className="capability-grid">
          {capabilities.map(([code, title, description, colour]) => <article className={`capability-card ${colour}`} key={code}><span className="capability-code">{code}</span><div><h3>{title}</h3><p>{description}</p></div><span className="card-arrow">↗</span></article>)}
        </div>
      </section>

      <section className="applications" id="applications">
        <div><p className="section-index light">04 / Applications</p><h2>Predictive porous materials for a changing world.</h2></div>
        <div className="application-list"><span>Natural hydrogen</span><span>CO₂ storage</span><span>Subsurface energy</span><span>Catalysis</span><span>Batteries</span><span>Environmental systems</span></div>
      </section>

      <footer><div className="footer-brand"><span className="brand-mark">DR</span><div><strong>Digital Rock &amp; Porous Materials Platform</strong><p>From Imaging Matter to Predictive Matter</p></div></div><div><p>The University of Manchester</p><a href="mailto:hello@digitalrockmanchester.com">Start a conversation →</a></div></footer>
    </main>
  );
}
