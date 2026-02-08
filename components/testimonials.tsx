"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "David Park",
    text: "The attention to detail at NOIR is unmatched. Marcus gave me the best fade I have ever had. The atmosphere alone is worth the visit - it truly feels like a premium experience.",
    rating: 5,
  },
  {
    name: "Alex Morgan",
    text: "I have been going to barber shops my whole life and NOIR is a cut above the rest. The hot towel shave is incredibly relaxing. Highly recommend the Full Experience package.",
    rating: 5,
  },
  {
    name: "Ryan Thompson",
    text: "Found NOIR through a friend's recommendation and I have been a regular for two years now. Sofia always knows exactly what I want. The consistency is remarkable.",
    rating: 5,
  },
  {
    name: "Michael Santos",
    text: "This place redefined what a barber shop should be. Clean, professional, and the results speak for themselves. Every visit feels like a treat, not a chore.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
            Client Words
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">What They Say</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-primary" />
        </div>

        {/* Testimonial card */}
        <div className="text-center">
          {/* Stars */}
          <div className="mb-6 flex items-center justify-center gap-1">
            {Array.from({ length: testimonials[current].rating }).map(
              (_, i) => (
                <Star
                  key={`star-${current}-${i}`}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ),
            )}
          </div>

          {/* Quote */}
          <blockquote className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
            &ldquo;{testimonials[current].text}&rdquo;
          </blockquote>

          {/* Author */}
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-primary">
            {testimonials[current].name}
          </p>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  type="button"
                  key={`dot-${testimonials[i].name}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
