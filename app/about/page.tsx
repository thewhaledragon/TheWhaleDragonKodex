import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | TheWhaleDragonKodex',
  description:
    'AI/ML researcher building multi-agent systems, financial forecasting models, and simulation pipelines.',
}

/* ─────────────────────────── Timeline data ─────────────────────────── */

type TimelineEntry = {
  year: string
  kind: 'work' | 'edu'
  label: string       // company / institution
  role: string        // job title / degree
  items: string[]
}

const timeline: TimelineEntry[] = [
  {
    year: 'Mar 2025 – Present',
    kind: 'work',
    label: '████████████',
    role: 'AI / ML Researcher',
    items: [
      'Designed a multi-agent B2B sales simulation pipeline using Perplexity API, LinkedIn data, and LLM-driven decision-making agents.',
      'Developed a custom multi-agent finance assistant with intent-based routing and specialized agents for stock charts, economic data, and SEC reports.',
      'Built a SARIMAX forecasting model for stock and crypto prices, augmented with real-time LLM-driven sentiment analysis.',
      'Created geospatial intelligence tools using MapLibre/Deck.gl for interactive economic data visualization.',
      'Engineered a scraping and embedding pipeline for daily finance news using PostgreSQL + pgvector (HNSW indexing).',
    ],
  },
  {
    year: 'Jul – Sep 2024',
    kind: 'work',
    label: '████████',
    role: 'AI Research Intern',
    items: [
      'Fine-tuned VITS and StyleTTS2 text-to-speech models on custom datasets with multi-stage training pipelines.',
      'Implemented multispeaker support and voice-cloning capabilities for low-resource environments.',
      'Developed a Gradio-based interface to democratize access to the speech synthesis pipeline.',
    ],
  },
  {
    year: '2022 – 2024',
    kind: 'edu',
    label: '████████████████████████████',
    role: 'MSc Astronomy & Astrophysics',
    items: [
      'Thesis: Alien Megastructures in Transit — trained a CNN to reconstruct 2D opacity maps from 1D light curves with ~200k synthetic simulations.',
      'Achieved Folded MSE of 0.1615 on test data; presented at Strange New Worlds (2023) and Interstellar Frontiers 2024 (Perth).',
      'Applied deep learning models to the Kepler dataset to identify astrophysical anomalies.',
    ],
  },
  {
    year: '2018 – 2022',
    kind: 'edu',
    label: '█████████████████████████████████',
    role: 'BTech Electrical & Electronics Engineering',
    items: [
      'Thesis: Thrust Vector Control of Solid Propellant Model Rocket — PID-based pitch control modeled in MATLAB/Simulink and built with Arduino. Published at IEEE INCOFT 2023.',
      'Internship: Designed open-circuit fault-tolerant half-bridge LLC resonant converter for satellite power systems. Published at IEEE SPICES 2022.',
    ],
  },
]

/* ─────────────────────────── Components ─────────────────────────── */

function KindBadge({ kind }: { kind: 'work' | 'edu' }) {
  return (
    <span
      className="inline-block text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full"
      style={{
        background: kind === 'work' ? 'var(--tag-bg)' : 'var(--surface2)',
        color: kind === 'work' ? 'var(--tag-text)' : 'var(--muted)',
      }}
    >
      {kind === 'work' ? 'Work' : 'Education'}
    </span>
  )
}

function TimelineItem({ entry, isLast }: { entry: TimelineEntry; isLast: boolean }) {
  return (
    <div className="relative flex gap-8 group">

      {/* ── Stem ── */}
      <div className="flex flex-col items-center">
        {/* dot */}
        <div
          className="relative z-10 mt-1 w-3 h-3 rounded-full border-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
          style={{
            borderColor: 'var(--accent)',
            background: 'var(--bg)',
          }}
          aria-hidden
        />
        {/* line */}
        {!isLast && (
          <div
            className="flex-1 w-px mt-2"
            style={{ background: 'var(--border)' }}
            aria-hidden
          />
        )}
      </div>

      {/* ── Content ── */}
      <div className="pb-14 flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <KindBadge kind={entry.kind} />
          <span className="text-xs text-[var(--muted)] font-medium">
            {entry.year}
          </span>
        </div>

        <p
          className="text-xs uppercase tracking-wider font-semibold mb-1"
          style={{ color: 'var(--accent)' }}
        >
          {entry.label}
        </p>

        <h3 className="text-lg font-semibold leading-snug text-[var(--text)] mb-4">
          {entry.role}
        </h3>

        <ul className="space-y-2.5">
          {entry.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-sm text-[var(--muted)] leading-relaxed">
              <span
                className="mt-[0.55rem] w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent2)' }}
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

/* ─────────────────────────── Page ─────────────────────────── */

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">

      <Header />

      <main className="mx-auto max-w-3xl px-6 py-24">

        {/* ── Hero ── */}
        <section className="mb-24 animate-fade-up">

          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-5"
            style={{ color: 'var(--accent)' }}>
            AI / ML Researcher
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-8 text-[var(--text)]">
            Bridging <span className="gradient-text">Astrophysics</span> and{' '}
            <span className="gradient-text">Systems Engineering</span> to build
            autonomous agents.
          </h1>

          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mb-12">
            I specialize in designing multi-agent frameworks and deep learning pipelines.
            From reconstructing opacity maps of alien megastructures to building
            intent-aware financial assistants, my work centers on making complex
            systems both observable and intelligent.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-[var(--muted)] border-t border-[var(--border)] pt-8">
            {[
              { label: 'Publications', value: '2× IEEE' },
              { label: 'Conference Talks', value: '3 International' },
              { label: 'Simulation Data', value: '200k+ Samples' },
              { label: 'Systems Built', value: 'Multi-Agent AI' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-[var(--text)] font-semibold">{s.value}</span>
                <span className="text-[10px] uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>

        </section>

        {/* ── Key Competencies ── */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--muted)] mb-8">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              'Multi-Agent LLMs',
              'Deep Learning (CV)',
              'Finance Forecasting',
              'Data Pipelines',
              'Signal Processing',
              'Geospatial Intel',
              'Static Site Gen',
              'Hardware Control',
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent2)]" />
                <span className="text-xs font-medium text-[var(--text)]">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Selected Projects ── */}
        <section className="mb-24">

          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--muted)] mb-8">
            Featured Research & Builds
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Multi-Agent Finance framework',
                desc: 'Specialized agents for SEC filings analysis, market sentiment integration, and real-time visualization.',
                tags: ['OpenAI', 'Python', 'pgvector'],
              },
              {
                title: 'Alien Megastructure Detection',
                desc: 'CNN-based reconstruction of 2D opacity maps from 1D light curves to detect Dyson-like structures.',
                tags: ['TensorFlow', 'Simulation', 'Science'],
              },
              {
                title: 'B2B Sales Simulation Engine',
                desc: 'Simulating complex Decision Maker Units (DMU) interactions through multi-agent behavioral modeling.',
                tags: ['LLMs', 'Simulation', 'Persona AI'],
              },
              {
                title: 'Thrust Vector Control System',
                desc: 'Active pitch stability for model rockets using PID control and real-time sensor fusion.',
                tags: ['Arduino', 'Control Theory', 'Hardware'],
              },
            ].map((p) => (
              <div
                key={p.title}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="text-[9px] uppercase tracking-tighter bg-[var(--surface2)] px-1.5 py-0.5 rounded text-[var(--muted)] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-semibold text-[var(--text)] mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* ── Timeline ── */}
        <section>

          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--muted)] mb-12">
            Journey So Far
          </h2>

          <div className="pl-4 border-l border-[var(--border)] ml-1">
            {timeline.map((entry, i) => (
              <TimelineItem
                key={i}
                entry={entry}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>

        </section>

      </main>

      <Footer />

    </div>
  )
}