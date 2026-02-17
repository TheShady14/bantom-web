import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { AccountingSection } from "@/components/sections/accounting-section"
import { TaxationSection } from "@/components/sections/taxation-section"
import { CompanySecretarialSection } from "@/components/sections/company-secretarial-section"
import { BoardSecretarialSection } from "@/components/sections/board-secretarial-section"
import { IndependentReviewsSection } from "@/components/sections/independent-reviews-section"
import { FounderSection } from "@/components/sections/founder-section"
import { ContactSection } from "@/components/sections/contact-section"
import { BantomPageClient } from "@/components/bantom-page-client"

function Divider() {
  return <div className="section-divider" />
}

export default function Page() {
  return (
    <BantomPageClient>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <AccountingSection />
      <Divider />
      <TaxationSection />
      <Divider />
      <CompanySecretarialSection />
      <Divider />
      <BoardSecretarialSection />
      <Divider />
      <IndependentReviewsSection />
      <Divider />
      <FounderSection />
      <ContactSection />
    </BantomPageClient>
  )
}
