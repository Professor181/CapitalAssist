import { BANKS } from '../data/content.js'

// Auto-scrolling, infinite-loop banner of associated banks & NBFCs.
// Pure CSS animation (see `marquee-track` in index.css) — pauses on hover.
// Duplicated list gives the seamless loop without a jump.
export default function TrustMarquee({ light = false }) {
  const items = [...BANKS, ...BANKS]
  return (
    <div className={`overflow-hidden border-y ${light ? 'bg-white border-slate2-200' : 'bg-navy-950 border-white/5'}`}>
      <div className="container-x py-5">
        <p className={`text-center text-xs uppercase tracking-[0.22em] mb-4 ${light ? 'text-slate2-500' : 'text-navy-300'}`}>
          Trusted across 14+ leading banks & NBFCs
        </p>
        <div className="relative overflow-hidden no-scrollbar">
          {/* Fades on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
          <div className="marquee-track gap-10">
            {items.map((bank, i) => (
              <span
                key={`${bank.name}-${i}`}
                className={`whitespace-nowrap text-lg font-semibold tracking-tight ${light ? 'text-navy-800' : 'text-navy-100'}`}
              >
                {bank.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
