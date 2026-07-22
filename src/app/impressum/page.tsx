import DocumentPage from "@/app/components/DocumentPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Impressum",
  description: "Rechtliche Anbieterkennzeichnung von Kinemo.",
  path: "/impressum",
  noindex: true,
});

export default function ImpressumPage() {
  return (

    <DocumentPage
      eyebrow="Rechtliche Informationen"
      title="Impressum"
      description="Anbieterkennzeichnung und gesetzlich vorgeschriebene Kontaktinformationen."
    >
      <div className="space-y-5 text-base leading-relaxed">
        <p><strong>Sercan Atesoglu</strong><br />
        KINEMO GmbH<br />
        Heinz-Fangman-Str. 2<br />
        42287 Wuppertal<br />
        Deutschland</p>

        <p>Tel.: <a href="tel:+4915205765010" className="text-[#08415C] underline decoration-[#50C9E1] underline-offset-4 dark:text-[#50C9E1]">+49 1520 5765010</a><br />
        E-Mail: <a href="mailto:sercan.atesoglu@kinemo.de" className="text-[#08415C] underline decoration-[#50C9E1] underline-offset-4 dark:text-[#50C9E1]">sercan.atesoglu@kinemo.de</a></p>

        <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
        DE364016512</p>

        <p>Zuständige Aufsichtsbehörde für das Angebot audiovisueller Mediendienste:<br />
        Landesanstalt für Medien Nordrhein-Westfalen (LfM NRW)<br />
        Zollhof 2, 40221 Düsseldorf</p>

        <p>Plattform der EU-Kommission zur Online-Streitbeilegung:<br />
        <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-[#08415C] underline decoration-[#50C9E1] underline-offset-4 dark:text-[#50C9E1]">
          https://ec.europa.eu/odr
        </a></p>

        <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
      </div>
    </DocumentPage>
  );
}
