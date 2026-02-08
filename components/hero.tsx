import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-barber.jpg"
        alt="Luxury barber shop interior"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Tagline */}
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">
          Est. 2018
        </p>

        {/* Heading */}
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">
            Where tradition meets
            <br />
            <span className="italic text-primary">modern craft</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Premium haircuts, razor shaves, and grooming experiences tailored to
          the modern gentleman.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-sm bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="rounded-sm border border-border px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to services"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
