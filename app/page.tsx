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

const postdocs = [
  ["Dr. Jingyue Hao", "current"], ["Dr. Heather Braid", "current"],
  ["Dr. Zhongbei Li", "current"], ["Dr. Ke Wang", "former"],
  ["Dr. Jing Zhang", "former"], ["Dr. Takshak Shende", "former"],
];

const primaryPhds = [
  ["Chenzi Shi", "graduated"], ["Heather Braid", "graduated"],
  ["Ziyu Zhang", "graduated"], ["Xin Zhong", "2022–"],
  ["Camilo Salazar", "2022–"], ["Ali Bony Kaya", "2023–"],
  ["Sonu Sudhikumar Seena", "2023–"], ["Bengang Chen", "2023–"],
  ["Jeffrey Akuoko", "2023–"], ["Chunmiao Ma", "2024–"],
  ["Yifan Yin", "2025–"], ["Deni Suryo Pratama", "2026–"],
];

const coSupervisedPhds = [
  ["Ke Wang", "graduated"], ["Georgy Borisochev", "graduated"],
  ["David Johnson", "graduated"], ["Shuangyi Gong", "graduated"],
  ["Aristarchos Mavridis", "graduated"], ["Peter Castellucci", "graduated"],
  ["Muhammad Faisal Abbasi", ""], ["Daniel Ronald", ""],
  ["Josh Marsh", ""], ["Abdelrazik Elfar", ""], ["Yue He", ""],
  ["Wei Hao", ""], ["Razlin Abd Rashid", ""], ["Holly Mills", ""],
  ["Xinyi Li", ""],
];

export default function Home() {
  return (
    <main>
      <section className="reference-hero" id="top" aria-label="Digital Rock and Porous Materials Platform">
        <img className="reference-image" src="/hero-reference.png" alt="Digital Rock and Porous Materials Platform — From Imaging Matter to Predictive Matter" />
        <nav className="reference-hotspots" aria-label="Primary navigation">
          <a className="hotspot home" href="#top">Home</a>
          <a className="hotspot research" href="#framework">Research</a>
          <a className="hotspot facilities" href="#facilities">Facilities</a>
          <a className="hotspot publications" href="#workflow">Publications</a>
          <a className="hotspot people" href="#people">People</a>
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
        <div className="facilities-concept">
          <div className="concept-axis concept-scale"><small>01 / Scale</small><strong>Nano</strong><i>→</i><strong>Micro</strong><i>→</i><strong>Core</strong></div>
          <div className="concept-techniques-image"><small>02 / Core techniques</small><img src="/facilities-core-techniques.png" alt="Core porous-material observation techniques across spatial and temporal scales" /></div>
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

      <section className="workflow-section" id="workflow">
        <div className="workflow-intro"><p className="section-index light">03 / Data-to-decision workflow</p><h2>A continuous path from observation to prediction.</h2><p>Every stage preserves context, uncertainty and provenance—so insight can move confidently from the scanner to real-world decisions.</p></div>
        <ol className="workflow-list">
          {workflow.map(([number, title, description]) => <li key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="step-arrow">→</span></li>)}
        </ol>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="section-heading compact"><div><p className="section-index">04 / Integrated capabilities</p><h2>Built as a platform,<br/>not a collection of tools.</h2></div><p>Six connected capabilities support research from fundamental science through industrial translation.</p></div>
        <div className="capability-grid">
          {capabilities.map(([code, title, description, colour]) => <article className={`capability-card ${colour}`} key={code}><span className="capability-code">{code}</span><div><h3>{title}</h3><p>{description}</p></div><span className="card-arrow">↗</span></article>)}
        </div>
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
          <a className="pi-card" href="https://research.manchester.ac.uk/en/persons/lin.ma/" target="_blank" rel="noreferrer"><span>Principal Investigator</span><h3>Lin Ma</h3><b>Manchester profile ↗</b></a>
          <a className="pi-card" href="https://research.manchester.ac.uk/en/persons/kevin.taylor/" target="_blank" rel="noreferrer"><span>Principal Investigator</span><h3>Kevin Taylor</h3><b>Manchester profile ↗</b></a>
        </div>
        <div className="team-groups">
          <article className="team-group"><p className="team-kicker">Team members</p><h3>PDRAs</h3><ul>{postdocs.map(([name, status]) => <li key={name}><span>{name}</span><small>{status}</small></li>)}</ul></article>
          <article className="team-group"><p className="team-kicker">PhD students</p><h3>Primary supervisor</h3><ul>{primaryPhds.map(([name, status]) => <li key={name}><span>{name}</span><small>{status}</small></li>)}</ul></article>
          <article className="team-group"><p className="team-kicker">PhD students</p><h3>Co-supervisor</h3><ul>{coSupervisedPhds.map(([name, status]) => <li key={name}><span>{name}</span>{status && <small>{status}</small>}</li>)}</ul></article>
        </div>
      </section>

      <footer><div className="footer-brand"><span className="brand-mark">DR</span><div><strong>Digital Rock &amp; Porous Materials Platform</strong><p>From Imaging Matter to Predictive Matter</p></div></div><div><p>The University of Manchester</p><a href="mailto:hello@digitalrockmanchester.com">Start a conversation →</a></div></footer>
    </main>
  );
}
