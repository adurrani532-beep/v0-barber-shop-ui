import Image from "next/image"
import { Instagram } from "lucide-react"

const team = [
  {
    name: "Marcus Rivera",
    role: "Founder & Master Barber",
    image: "/images/barber-1.jpg",
    instagram: "#",
  },
  {
    name: "Sofia Chen",
    role: "Senior Stylist",
    image: "/images/barber-2.jpg",
    instagram: "#",
  },
  {
    name: "James Holden",
    role: "Beard Specialist",
    image: "/images/barber-3.jpg",
    instagram: "#",
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
            The Experts
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">Meet the Team</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-primary" />
        </div>

        {/* Team grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative mx-auto mb-6 aspect-[3/4] max-w-sm overflow-hidden rounded-sm">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end justify-center bg-background/0 pb-6 transition-all duration-300 group-hover:bg-background/40">
                  <a
                    href={member.instagram}
                    className="translate-y-4 rounded-full border border-foreground/30 p-2.5 text-foreground opacity-0 transition-all duration-300 hover:border-primary hover:text-primary group-hover:translate-y-0 group-hover:opacity-100"
                    aria-label={`Follow ${member.name} on Instagram`}
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <h3 className="font-serif text-xl text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
