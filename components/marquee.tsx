'use client';

const items = [
  "Precision Cuts",
  "Hot Towel Shaves",
  "Beard Sculpting",
  "Scalp Treatments",
  "Straight Razor",
  "Hair Styling",
  "Premium Products",
  "Walk-ins Welcome",
]

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-card py-4">
      <div className="flex animate-[marquee_30s_linear_infinite] gap-8">
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {item}
            </span>
            <span className="text-primary" aria-hidden="true">
              &#x2726;
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
