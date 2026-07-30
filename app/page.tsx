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
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Digital Rock and Porous Materials Platform home">
          <span className="brand-mark" aria-hidden="true">DR</span>
          <span><strong>Digital Rock</strong><small>Porous Materials Platform</small></span>
        </a>
        <div className="nav-links">
          <a href="#framework">Platform</a><a href="#capabilities">Capabilities</a><a href="#applications">Applications</a>
        </div>
        <a className="nav-cta" href="mailto:hello@digitalrockmanchester.com">Collaborate</a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">The University of Manchester</p>
          <h1>Digital Rock <span>&amp; Porous Materials</span> Platform</h1>
          <p className="hero-tagline">From imaging matter to <em>predictive matter.</em></p>
          <p className="hero-intro">Integrating multiscale imaging, dynamic experiments and artificial intelligence to accelerate discovery across energy, environment and advanced materials.</p>
          <div className="hero-actions"><a className="primary-button" href="#framework">Explore the platform <span>↓</span></a><a className="text-link" href="#workflow">See how it works →</a></div>
        </div>
        <div className="hero-visual" aria-label="Abstract multiscale porous material visualisation">
          <div className="orb orb-one"/><div className="orb orb-two"/><div className="orb orb-three"/>
          <div className="scan-ring ring-one"/><div className="scan-ring ring-two"/><div className="scan-ring ring-three"/>
          <div className="visual-label label-a"><span>100 nm</span>Interface</div>
          <div className="visual-label label-b"><span>4D</span>Dynamics</div>
          <div className="visual-label label-c"><span>AI</span>Prediction</div>
          <p className="visual-caption">Matter, resolved across scale and time</p>
        </div>
      </header>

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
