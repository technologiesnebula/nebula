import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/primitives/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs, whatsappUrl } from "@/lib/site";

export function FAQ() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            subtitle="Lo que más nos preguntan antes de empezar."
          />
          <Reveal delay={0.1} className="mt-6">
            <a
              href={whatsappUrl("Hola Nébula 👋, tengo una pregunta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-light hover:text-foreground"
            >
              ¿Otra pregunta? Escríbenos por WhatsApp →
            </a>
          </Reveal>
        </div>

        <Reveal>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
