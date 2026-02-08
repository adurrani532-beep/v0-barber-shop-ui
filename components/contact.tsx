"use client"

import React from "react"

import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { useState } from "react"

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
  { day: "Saturday", time: "8:00 AM - 6:00 PM" },
  { day: "Sunday", time: "10:00 AM - 4:00 PM" },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">Book Your Visit</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-primary" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="mb-8 font-serif text-2xl text-foreground">
              Visit Us
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    742 Craft Avenue, Suite 101
                    <br />
                    Brooklyn, NY 11201
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href="mailto:hello@noirbarber.com"
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    hello@noirbarber.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Hours</p>
                  <div className="mt-1 space-y-1">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between gap-6 text-sm text-muted-foreground"
                      >
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="mb-8 font-serif text-2xl text-foreground">
              Send a Message
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="classic-haircut">Classic Haircut</option>
                    <option value="beard-sculpting">Beard Sculpting</option>
                    <option value="hot-towel-shave">Hot Towel Shave</option>
                    <option value="full-experience">The Full Experience</option>
                    <option value="hair-treatment">
                      Hair & Scalp Treatment
                    </option>
                    <option value="kids-cut">{"Kid's Cut"}</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="Any preferences or special requests..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
