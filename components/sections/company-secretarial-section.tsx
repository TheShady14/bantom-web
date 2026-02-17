import Image from "next/image"

const services = [
  "Company registrations",
  "Company De-registrations",
  "Company amendments",
  "Company restorations",
  "Annual returns",
]

export function CompanySecretarialSection() {
  return (
    <section id="company-secretarial" className="scroll-mt-32" aria-labelledby="company-secretarial-title">
      <div className="relative h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        <Image
          src="/images/bg-company.jpg"
          alt="Herd of African elephants, black and white"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center p-6 md:p-12 lg:p-20">
          <h2
            id="company-secretarial-title"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight tracking-tight"
          >
            Company Secretarial<br />Services
          </h2>
        </div>
      </div>

      <div className="bg-background px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans mb-6 md:mb-8">
            We assist our clients with compliance with various requirements of the Companies Act.
          </p>
          <ul className="space-y-4 md:space-y-5">
            {services.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="w-[5px] h-[5px] rounded-full bg-foreground mt-[9px] shrink-0" aria-hidden="true" />
                <span className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
