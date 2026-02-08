import Image from "next/image"

const stats = [
  { number: "8+", label: "Years of Experience" },
  { number: "15K", label: "Happy Clients" },
  { number: "6", label: "Expert Barbers" },
  { number: "4.9", label: "Average Rating" },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/about-shop.jpg"
              alt="Interior of NOIR Barber Studio"
              fill
              className="object-cover"
            />
            {/* Accent border */}
            <div className="absolute inset-0 rounded-sm border border-primary/20" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
              Our Story
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              <span className="text-balance">
                Crafted with passion,
                <br />
                <span className="italic text-primary">built on trust</span>
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Founded in 2018, NOIR Barber Studio was born from a simple belief:
              every man deserves a grooming experience that respects tradition
              while embracing the art of modern styling. Our space is designed to
              be your retreat from the everyday.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We combine time-honored barbering techniques with contemporary
              design sensibility, creating a sanctuary where precision meets
              relaxation. From the moment you walk in, every detail is crafted
              for your comfort.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-serif text-3xl text-primary">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
