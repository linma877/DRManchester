export default function FacilitiesPage() {
  return (
    <main className="facilities-detail">
      <header className="detail-header">
        <a href="/">← Back to platform</a>
        <span>Digital Rock &amp; Porous Materials Platform</span>
      </header>
      <section className="detail-intro">
        <p className="section-index">Facilities / Complete map</p>
        <h1>The observational space of porous matter.</h1>
        <p>Explore the complete multiscale, multimodal and operando framework. Open the original image for full-resolution inspection.</p>
      </section>
      <a className="full-map" href="/facilities-observational-space.png" target="_blank" rel="noreferrer" aria-label="Open original facilities diagram at full resolution">
        <img src="/facilities-observational-space.png" alt="Complete observational space of porous matter diagram" />
        <span>Open original image at full resolution ↗</span>
      </a>
    </main>
  );
}
