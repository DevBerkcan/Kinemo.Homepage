import DocumentPage from "@/app/components/DocumentPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Kinemo gemäß DSGVO.",
  path: "/datenschutz",
  noindex: true,
});

export default function Datenschutz() {
  return (
    <DocumentPage
      eyebrow="Datenschutz"
      title="Datenschutzerklärung"
      description="Informationen zur Verarbeitung personenbezogener Daten und zu Ihren Rechten."
    >
      <div className="prose prose-neutral max-w-none prose-headings:tracking-[-0.02em] prose-headings:text-[#08415C] prose-a:text-[#08415C] prose-a:underline dark:prose-invert dark:prose-headings:text-white dark:prose-a:text-[#50C9E1]">
        <h2>1) Einleitung und Kontaktdaten des Verantwortlichen</h2>
        <p>1.1 Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse...</p>
        <p>1.2 Verantwortlicher ist Sercan Atesoglu, KINEMO GmbH, Heinz-Fangman-Str. 2, 42287 Wuppertal, Deutschland, Tel.: +49 1520 5765010, E-Mail: sercan.atesoglu@kinemo.de.</p>
        <p>1.3 Datenschutzbeauftragter: Sercan Atesoglu, E-Mail: sercan.atesoglu@kinemo.de</p>

        <h2>2) Datenerfassung beim Besuch unserer Website</h2>
        <p>2.1 Server-Logfiles, IP-Adresse (anonymisiert), verwendeter Browser, etc...</p>
        <p>2.2 SSL-/TLS-Verschlüsselung ist aktiv.</p>

        <h2>3) Cookies und Einwilligung</h2>
        <p>Technisch notwendige Funktionen werden ohne Einwilligung bereitgestellt. Optionale Analyse-Dienste werden erst geladen, nachdem Sie ausdrücklich zugestimmt haben. Ihre Auswahl wird lokal in Ihrem Browser gespeichert und kann über „Datenschutz-Einstellungen“ im Footer jederzeit geändert werden.</p>

        <h2>4) Kontaktaufnahme</h2>
        <h3>4.1 Calendly</h3>
        <p>Datenübermittlung an Calendly, USA – Datenschutzrahmen beachtet.</p>

        <h3>4.2 HubSpot</h3>
        <p>Vertrag zur Auftragsverarbeitung vorhanden. DSGVO-konform.</p>

        <h3>4.3 WhatsApp-Business</h3>
        <p>Verwendung mit Zustimmung. Adressbuch-Zugriff begrenzt auf WhatsApp-Kontakte.</p>

        <h2>5) Nutzung von Kundendaten zur Direktwerbung</h2>
        <p>5.1 Newsletter mit Double-Opt-In, Widerruf jederzeit möglich.</p>
        <p>5.2 Briefpost-Werbung auf Basis berechtigtem Interesse.</p>

        <h2>6) Datenverarbeitung zur Bestellabwicklung</h2>
        <p>Weitergabe an Versanddienstleister und Zahlungsanbieter gemäß Vertrag.</p>

        <h2>7) Reichweitenanalyse mit Microsoft Clarity</h2>
        <p>Nach Ihrer Einwilligung verwenden wir Microsoft Clarity, einen Analysedienst der Microsoft Corporation. Der Dienst hilft uns zu verstehen, wie Besucher unsere Website nutzen. Dabei können Nutzungsdaten, Geräteinformationen und gekürzte beziehungsweise pseudonymisierte Kennungen verarbeitet werden.</p>
        <p>Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Ohne Zustimmung wird Microsoft Clarity nicht geladen. Sie können Ihre Einwilligung jederzeit über „Datenschutz-Einstellungen“ im Footer mit Wirkung für die Zukunft widerrufen.</p>

        <h2>8) Seitenfunktionalitäten</h2>
        <p>Instagram, LinkedIn, Pinterest, Xing, YouTube Plugins – 2-Klick-Lösung & Einwilligung notwendig.</p>

        <h2>9) Rechte des Betroffenen</h2>
        <p>Auskunft, Löschung, Berichtigung, Einschränkung, Widerspruch – gemäß DSGVO.</p>

        <h2>10) Speicherdauer</h2>
        <p>Nach Ablauf gesetzlicher Pflichten oder Widerruf werden personenbezogene Daten gelöscht.</p>

        <p className="text-sm mt-6 italic">Diese Datenschutzerklärung wurde mit Unterstützung der IT-Recht Kanzlei München erstellt. © 2024</p>
      </div>
    </DocumentPage>
  );
}
