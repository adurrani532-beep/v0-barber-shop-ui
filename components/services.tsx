"use client"

import { Scissors, Clock, DollarSign } from "lucide-react"

const services = [
  {
    title: "Classic Haircut",
    description:
      "Precision cut tailored to your face shape, includes hot towel and styling.",
    duration: "45 min",
    price: "$45",
  },
  {
    title: "Beard Sculpting",
    description:
      "Expert shaping and detailing with straight razor edge-up and beard oil finish.",
    duration: "30 min",
    price: "$35",
  },
  {
    title: "Hot Towel Shave",
    description:
      "Traditional straight razor shave with warm lather, hot towels, and balm.",
    duration: "40 min",
    price: "$50",
  },
  {
    title: "The Full Experience",
    description:
      "Haircut, beard trim, hot towel shave, and scalp massage. Our signature.",
    duration: "90 min",
    price: "$95",
  },
  {
    title: "Hair & Scalp Treatment",
    description:
      "Deep conditioning treatment with scalp massage for healthier, stronger hair.",
    duration: "35 min",
    price: "$40",
  },
  {
    title: "Kid's Cut",
    description:
      "A relaxed, friendly experience for the young gentlemen. Ages 12 and under.",
    duration: "30 min",
    price: "$25",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">Our Services</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-primary" />
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-sm border border-border bg-card p-8 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex items-start justify-between">
                <Scissors className="h-5 w-5 text-primary" />
                <span className="font-serif text-2xl text-primary">
                  {service.price}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-xl text-foreground">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="flex items-center gap-4 border-t border-border pt-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <DollarSign className="h-3.5 w-3.5" />
                  <span>Cash & Card</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
