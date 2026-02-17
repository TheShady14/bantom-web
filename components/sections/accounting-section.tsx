import Image from "next/image"

const services = [
  "Full Functioning Bookkeeping",
  "Monthly Management Accounts Reports delivered with up-to-date information on the status of a company, enabling management to make decisions about the day-to-day running of the business.",
  "Compilation of financial statements in accordance with internationally accepted accounting practices",
  "Budgeting, cash flow forecasting and monitoring",
  "Advise on the management of businesses, to make them more profitable and effective",
]

export function AccountingSection() {
  return (
    <section id="accounting" className="scroll-mt-32" aria-labelledby="accounting-title">
      <div className="relative h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        <Image
          src="/images/bg-accounting.jpg"
          alt="African impala in black and white"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 flex items-center p-6 md:p-12 lg:p-20">
          <h2
            id="accounting-title"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight tracking-tight"
          >
            Accounting<br />Services
          </h2>
        </div>
      </div>

      <div className="bg-background px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-20">
        <ul className="max-w-3xl space-y-5 md:space-y-6">
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
    </section>
  )
}
