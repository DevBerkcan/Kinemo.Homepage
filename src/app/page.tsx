// page.tsx
import Hero from "@components/herosection"
import KinemoShowcase from "@components/kinemoShowcase"
import LogoBanner from "./helpercomponents/logoBanner"
import About from "@components/about"
import UspSection from "./components/UspSection"
import DemoRequestForm from "./components/DemoRequestForm"
import TestimonialsSection from "./components/testimonials"
import FaqSection from "./components/faqsection"
import PainPointSection from "./components/PainPointSection"
import ServicesPreview from "./components/ServicesPreview"
import IndustriesSection from "./components/IndustriesSection"
import ProcessSteps from "./components/ProcessSteps"
import SeoLandingGrid from "./components/SeoLandingGrid"
import JsonLd from "./components/JsonLd"
import { homeFaqs, kinemoTopics } from "@/lib/geo-content"
import { createBreadcrumbNode, createFaqNode, createSchemaGraph, createServiceNode, createWebPageNode } from "@/lib/schema"

export default function Home() {
  const referenceContentApproved = process.env.REFERENCE_CONTENT_APPROVED === "true"
  const description = "Industrielle CT und Röntgenanalyse für Produktentwicklung, Fehleranalyse und Qualitätssicherung."
  const schema = createSchemaGraph([
    createWebPageNode({ path: "/", name: "Kinemo – Industrielle CT und Röntgenanalyse", description, about: [...kinemoTopics] }),
    createBreadcrumbNode([{ name: "Startseite", path: "/" }], "/"),
    createServiceNode({ path: "/leistungen", name: "Industrielle CT und Röntgenanalyse", description }),
    createFaqNode(homeFaqs, "/"),
  ])

  return (
    <>
      <JsonLd data={schema} />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <Hero />
        {referenceContentApproved && <LogoBanner />}
        <PainPointSection />
        <UspSection />
        <ServicesPreview />
        <SeoLandingGrid />
        <KinemoShowcase />
        <IndustriesSection />
        <ProcessSteps />
        {referenceContentApproved && <TestimonialsSection />}
        <About />
        <FaqSection />
        <DemoRequestForm />
      </main>
    </>
  )
}
