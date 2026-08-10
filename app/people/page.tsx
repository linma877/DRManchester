const groups = [
  { title: "Current PDRAs", people: ["Dr. Jingyue Hao", "Dr. Heather Braid", "Dr. Zhongbei Li"] },
  { title: "Current PhD researchers — primary supervision", people: ["Xin Zhong (2022–)", "Camilo Salazar (2022–)", "Ali Bony Kaya (2023–)", "Sonu Sudhikumar Seena (2023–)", "Bengang Chen (2023–)", "Jeffrey Akuoko (2023–)", "Chunmiao Ma (2024–)", "Yifan Yin (2025–)", "Deni Suryo Pratama (2026–)"] },
  { title: "Co-supervised PhD researchers", people: ["Muhammad Faisal Abbasi", "Daniel Ronald", "Josh Marsh", "Abdelrazik Elfar", "Yue He", "Wei Hao", "Razlin Abd Rashid", "Holly Mills", "Xinyi Li"] },
  { title: "Alumni — PDRAs and primary-supervised PhDs", people: ["Dr. Ke Wang", "Dr. Jing Zhang", "Dr. Takshak Shende", "Chenzi Shi", "Heather Braid", "Ziyu Zhang"] },
  { title: "Alumni — co-supervised PhDs", people: ["Ke Wang", "Georgy Borisochev", "David Johnson", "Shuangyi Gong", "Aristarchos Mavridis", "Peter Castellucci"] },
];

export default function PeoplePage() {
  return <main className="people-detail">
    <header className="detail-header"><a href="/">← Back to platform</a><span>Digital Rock &amp; Porous Materials Platform</span></header>
    <section className="detail-intro"><p className="section-index">People</p><h1>A connected research community.</h1><p>Our current researchers and alumni work across multiscale imaging, dynamic experiments, subsurface processes and predictive modelling.</p></section>
    <section className="detail-pis"><article><small>Principal Investigator</small><h2>Lin Ma</h2><a href="https://research.manchester.ac.uk/en/persons/lin.ma/" target="_blank" rel="noreferrer">Manchester profile ↗</a></article><article><small>Principal Investigator</small><h2>Kevin Taylor</h2><a href="https://research.manchester.ac.uk/en/persons/kevin.taylor/" target="_blank" rel="noreferrer">Manchester profile ↗</a></article></section>
    <section className="detail-groups">{groups.map(group => <article key={group.title}><h3>{group.title}</h3><ul>{group.people.map(person => <li key={person}>{person}</li>)}</ul></article>)}</section>
  </main>;
}
