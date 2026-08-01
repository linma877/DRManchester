"use client";

import { useMemo, useRef, useState } from "react";

const steps = [
  { id: 1, icon: "↥", name: "Import", detail: "Image stack" },
  { id: 2, icon: "⌗", name: "Crop", detail: "Region of interest" },
  { id: 3, icon: "⌁", name: "Filter", detail: "Denoise & enhance" },
  { id: 4, icon: "✦", name: "AI Segmentation", detail: "Label phases" },
  { id: 5, icon: "▥", name: "Quantification", detail: "Measure structure" },
  { id: 6, icon: "◎", name: "Simulation", detail: "Predict transport" },
];

const phaseRows = [
  ["Pore", "#16d9ca", "34.8%"],
  ["Mineral", "#da66ff", "57.1%"],
  ["Inclusion", "#ffb643", "8.1%"],
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [threshold, setThreshold] = useState(52);
  const [slice, setSlice] = useState(128);
  const fileRef = useRef<HTMLInputElement>(null);
  const imported = Boolean(fileName);
  const active = steps[activeStep - 1];

  const status = useMemo(() => {
    if (!imported) return "Waiting for data";
    if (progress > 0 && progress < 100) return "Processing volume";
    return `${active.name} ready`;
  }, [active.name, imported, progress]);

  function handleFile(file?: File) {
    if (!file) return;
    setFileName(file.name);
    setProgress(18);
    const timer = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) { window.clearInterval(timer); return 100; }
        return Math.min(100, value + 17);
      });
    }, 180);
  }

  function runStep() {
    if (!imported) { fileRef.current?.click(); return; }
    setProgress(8);
    const timer = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) { window.clearInterval(timer); return 100; }
        return Math.min(100, value + 12);
      });
    }, 120);
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-cube">S4</span><div><strong>Syn4D<span>twin</span></strong><small>Digital Rock Intelligence</small></div><b>V1.0</b></div>
        <div className="project-title"><span>Project</span><strong>Untitled digital rock study</strong><i>●</i></div>
        <div className="top-actions"><button aria-label="Documentation">?</button><button aria-label="Settings">⚙</button><span className="user">YL</span></div>
      </header>

      <div className="workspace">
        <aside className="workflow-panel">
          <div className="workflow-heading"><p>Processing workflow</p><span>01—06</span></div>
          <nav aria-label="CT processing workflow">
            {steps.map((step) => (
              <button key={step.id} className={`workflow-step ${activeStep === step.id ? "active" : ""} ${imported && step.id < activeStep ? "done" : ""}`} onClick={() => setActiveStep(step.id)}>
                <span className="step-index">0{step.id}</span><i>{step.icon}</i><span><strong>{step.name}</strong><small>{step.detail}</small></span><b>{imported && step.id < activeStep ? "✓" : "›"}</b>
              </button>
            ))}
          </nav>
          <div className="pipeline-card"><span>Pipeline status</span><strong><i className={imported ? "online" : ""}/> {status}</strong><div><b style={{width: `${progress}%`}} /></div><small>{imported ? `${progress}% · ${fileName}` : "Import a volume to begin"}</small></div>
        </aside>

        <section className="viewer-panel">
          <div className="viewer-toolbar">
            <div className="view-tabs"><button className="selected">2D Slice</button><button>3D Volume</button><button>4D Time</button></div>
            <div className="viewer-tools"><button title="Fit view">⊞</button><button title="Pan">✥</button><button title="Zoom">⌕</button><button title="Reset">↻</button></div>
          </div>

          <div className={`ct-stage ${imported ? "has-data" : ""}`} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }}>
            <div className="axis axis-y">Y</div><div className="axis axis-x">X</div>
            {imported ? (
              <div className="ct-volume" aria-label="Synthetic CT slice preview">
                <div className="scan-grain grain-a"/><div className="scan-grain grain-b"/><div className="scan-grain grain-c"/><div className="scan-grain grain-d"/><div className="scan-grain grain-e"/>
                {activeStep === 2 && <div className="crop-box"><span>ROI 372 × 372 × 256</span></div>}
                {activeStep >= 4 && <div className="segmentation-overlay" style={{opacity: threshold / 130}}/>}
                <span className="slice-label">Z {slice.toString().padStart(4,"0")} / 0256</span>
                <span className="scale-bar"><i/> 500 μm</span>
              </div>
            ) : (
              <div className="drop-zone" onClick={() => fileRef.current?.click()} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && fileRef.current?.click()}>
                <span className="upload-icon">↥</span><h1>Import your CT data</h1><p>Drop a 3D or 4D image stack here to begin</p><button>Browse data</button><small>TIFF stack, DICOM, RAW, NIfTI, HDF5 · up to 20 GB</small>
              </div>
            )}
            <input ref={fileRef} type="file" hidden multiple accept=".tif,.tiff,.dcm,.raw,.nii,.h5,.hdf5,image/*" onChange={(e) => handleFile(e.target.files?.[0])}/>
          </div>
          <div className="slice-control"><span>001</span><input type="range" min="1" max="256" value={slice} onChange={(e) => setSlice(Number(e.target.value))}/><span>256</span><b>Slice {slice}</b></div>
        </section>

        <aside className="settings-panel">
          <div className="settings-title"><span>STEP 0{activeStep}</span><h2>{active.name}</h2><p>{active.detail}</p></div>
          {activeStep === 1 && <>
            <label className="field-label">Dataset</label><button className="file-card" onClick={() => fileRef.current?.click()}><span>▱</span><div><strong>{fileName || "Select image data"}</strong><small>{imported ? "512 × 512 × 256 · 16-bit" : "Local files or image stack"}</small></div><b>…</b></button>
            <div className="meta-grid"><div><span>Voxel size</span><strong>{imported ? "2.4 μm" : "—"}</strong></div><div><span>Time steps</span><strong>{imported ? "12" : "—"}</strong></div><div><span>Bit depth</span><strong>{imported ? "16-bit" : "—"}</strong></div><div><span>Volume</span><strong>{imported ? "512³" : "—"}</strong></div></div>
          </>}
          {activeStep === 2 && <><label className="field-label">Crop dimensions</label><div className="xyz"><label>X<input defaultValue="372"/></label><label>Y<input defaultValue="372"/></label><label>Z<input defaultValue="256"/></label></div><label className="check"><input type="checkbox" defaultChecked/> Lock aspect ratio</label><button className="secondary">Fit to material bounds</button></>}
          {activeStep === 3 && <><label className="field-label">Filter method</label><select defaultValue="nlm"><option value="nlm">Non-local means</option><option>Gaussian</option><option>Median 3D</option><option>Unsharp mask</option></select><Range label="Denoise strength" value="0.42"/><Range label="Search radius" value="7 vox"/><label className="check"><input type="checkbox" defaultChecked/> Preserve pore boundaries</label></>}
          {activeStep === 4 && <><label className="field-label">AI model</label><select defaultValue="rock"><option value="rock">RockSAM 3D · General</option><option>U-Net · Carbonate</option><option>U-Net · Sandstone</option></select><div className="range-line"><label>Confidence threshold <b>{threshold}%</b></label><input type="range" min="10" max="95" value={threshold} onChange={(e) => setThreshold(Number(e.target.value))}/></div><div className="phase-list">{phaseRows.map(([n,c,v])=><div key={n}><i style={{background:c}}/><span>{n}</span><b>{v}</b></div>)}</div></>}
          {activeStep === 5 && <><label className="field-label">Structural metrics</label><div className="metric"><span>Porosity</span><strong>34.82%</strong><small>± 0.16%</small></div><div className="metric"><span>Specific surface</span><strong>6.41</strong><small>mm²/mm³</small></div><div className="metric"><span>Connectivity</span><strong>0.87</strong><small>Euler-derived</small></div><button className="secondary">Export report (.csv)</button></>}
          {activeStep === 6 && <><label className="field-label">Simulation type</label><select><option>Single-phase flow</option><option>Multiphase flow</option><option>Reactive transport</option><option>Mechanical deformation</option></select><Range label="Inlet pressure" value="2.0 MPa"/><Range label="Viscosity" value="1.0 mPa·s"/><div className="metric"><span>Estimated permeability</span><strong>1.24</strong><small>Darcy</small></div></>}
          <div className="settings-footer"><button className="run-button" onClick={runStep}>{activeStep === 1 ? (imported ? "Re-import dataset" : "Import dataset") : `Run ${active.name}`}<span>→</span></button>{activeStep < 6 && <button className="next-button" disabled={!imported} onClick={() => setActiveStep(activeStep + 1)}>Continue to {steps[activeStep].name}</button>}</div>
        </aside>
      </div>
      <footer className="statusbar"><span><i className="green-dot"/> Engine ready</span><span>CPU 12%</span><span>GPU 2.1 / 24 GB</span><span className="spacer"/><span>Syn4Dtwin V1.0 · Local workspace</span></footer>
    </main>
  );
}

function Range({label,value}:{label:string;value:string}) { return <div className="range-line"><label>{label}<b>{value}</b></label><input type="range" defaultValue="44"/></div> }
