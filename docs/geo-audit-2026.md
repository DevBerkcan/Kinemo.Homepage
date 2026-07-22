# Kinemo GEO-, SEO- und AI-Search-Audit 2026

Stand: 22. Juli 2026

## Leitentscheidung

GEO wird nicht als separates Ranking-Hack-System behandelt. Google bestätigt für AI Overviews und AI Mode dieselben technischen und qualitativen Grundlagen wie für die klassische Suche: crawlbare Seiten, hilfreiche Inhalte, klare Quellen und belastbare Aussagen. `llms.txt` ist eine ergänzende offene Konvention, aber kein bestätigter Rankingfaktor der großen Suchanbieter.

## Prioritäten und Befunde

### HIGH

- **Behoben:** Organization, ProfessionalService, Person, WebSite, WebPage, Service, FAQPage und Breadcrumb waren getrennte JSON-LD-Inseln ohne stabile Beziehungen. Jetzt verbindet `src/lib/schema.ts` die Entitäten über kanonische `@id`-Werte.
- **Behoben:** Homepage-FAQ und FAQ-Schema wurden doppelt gepflegt. Sichtbarer Inhalt und JSON-LD beziehen sich jetzt auf dieselben Daten.
- **Behoben:** Es fehlten ein crawlbares Wissenszentrum, ein zentraler FAQ-Hub, eine echte interne Suche und eine dedizierte Unternehmens-/Expertenseite.
- **Behoben:** Unbelegte Prozentwerte, Ergebniszeiten, Präzisionswerte und anonyme Erfolgsbeispiele im sichtbaren USP-Bereich wurden durch bauteilspezifische, überprüfbare Aussagen ersetzt.
- **Behoben:** Regionale Suchintentionen waren nicht abgedeckt. Zwölf statisch erzeugte Seiten bilden das Leistungsgebiet ab und benennen Wuppertal transparent als einzigen Unternehmens- und Laborstandort.
- **Offen:** Die Datenschutzerklärung enthält verkürzte Platzhalter und benötigt vor Veröffentlichung eine vollständige rechtliche Prüfung.
- **Offen:** Vier Fachartikel reichen nicht aus, um die Themenautorität über Verfahren, Werkstoffe, Defekte, Messtechnik und Branchen hinweg zu belegen. Der 50-Themen-Plan unten muss mit fachlicher Autorenschaft umgesetzt werden.

### MEDIUM

- Vorhandene Fachartikel benötigen Quellen, Prüfer/Autor, fachliches Review-Datum und eine sichtbare Methodik für Korrekturen.
- Die vier Prüfaufgaben decken wichtige Suchintentionen ab, aber separate belastbare Seiten für Wandstärkenanalyse, Soll-Ist-Vergleich, Montageprüfung, Rissanalyse und Schadensanalyse fehlen.
- Für regionale Autorität fehlen externe Belege: konsistentes Google Business Profile, Branchenverzeichnisse, Hochschul-/Partnerprofile und lokale Unternehmensnennungen.
- FAQ-Markup bleibt semantisch nützlich, erzeugt bei Google aber seit 2026 kein FAQ Rich Result mehr. Es darf nicht als SERP-Sonderdarstellung verkauft werden.
- Die Referenzseite besitzt eine korrekte Freigabesperre. Freigegebene Case Studies sollten später eigene URLs, Autor/Prüfer, Ausgangslage, Methode, Grenzen und messbare Ergebnisse erhalten.

### LOW

- Fachbegriffe können zusätzlich über ein Glossar mit eindeutigen Definitionen und Querverweisen erschlossen werden.
- Dynamische OG-Bilder pro Fachartikel und Prüfaufgabe erhöhen Wiedererkennbarkeit, sind aber kein GEO-Kernsignal.
- Englische Inhalte sind erst sinnvoll, wenn Akquise, Fachreview und laufende Pflege in englischer Sprache gesichert sind; vorher ist kein `hreflang` erforderlich.

## Entity Map

```text
Kinemo GmbH (#organization)
├── Typ: Organization + ProfessionalService
├── Standort: Wuppertal
├── Gründer: Sercan Atesoglu (#sercan-atesoglu)
├── Website: kinemo.de (#website)
├── Leistungen
│   ├── Industrielle Computertomographie
│   ├── 2D-Röntgenanalyse
│   ├── Fehler- und Schadensanalyse
│   ├── Porositäts- und Lunkeranalyse
│   ├── Soll-Ist-Vergleich mit CAD
│   └── Erstmuster- und entwicklungsbegleitende Prüfung
├── Zielgruppen
│   ├── Produktentwicklung
│   ├── Qualitätssicherung
│   ├── Konstruktion
│   └── Fehleranalyse
├── Branchen
│   ├── Automotive
│   ├── Elektronik
│   ├── Kunststoff
│   ├── Maschinenbau
│   └── Medizintechnik
└── Leistungsgebiet
    ├── Wuppertal als tatsächlicher Standort
    └── elf weitere Städte als bediente Regionen, nicht als Niederlassungen
```

## Implementierte URL-Struktur

- `/wissen` – kuratierter Knowledge Hub
- `/faq` – sichtbare, thematisch gruppierte Antworten
- `/suche?q=...` – echte serverseitige Suche und Ziel der SearchAction
- `/ueber-kinemo` – Organization-/Person-/Standortsignale
- `/llms.txt` – knapper AI-lesbarer Inhaltsindex
- `/industrielle-ct/[stadt]` – zwölf statisch generierte regionale Serviceseiten

## Schema-Governance

- Organization und LocalBusiness-Signale werden nur am realen Standort Wuppertal verwendet.
- Regionale Seiten erhalten `Service.areaServed`, aber keine erfundene lokale Adresse.
- Review und AggregateRating bleiben deaktiviert, bis Originalquelle, Wortlaut, Einwilligung und sichtbare Veröffentlichung dokumentiert sind.
- SearchAction wurde erst nach Implementierung einer funktionierenden `/suche` ergänzt.
- FAQPage wird ausschließlich aus den auf derselben Seite sichtbaren Fragen erzeugt.

## 50-Themen-Content-Cluster

| Nr. | Cluster | Arbeitstitel | Suchintention | GEO | Conversion |
|---:|---|---|---|---|---|
| 1 | CT Grundlagen | Industrielle CT einfach erklärt: Verfahren, Daten und Grenzen | informativ | hoch | mittel |
| 2 | CT Grundlagen | Wie entsteht aus Röntgenprojektionen ein CT-Volumen? | informativ | hoch | niedrig |
| 3 | CT Grundlagen | Voxelgröße, Auflösung und Nachweisgrenze: der Unterschied | informativ | sehr hoch | hoch |
| 4 | CT Grundlagen | Welche Bauteile eignen sich für industrielle CT? | kommerziell-informativ | hoch | hoch |
| 5 | CT Grundlagen | Industrielle CT vs. medizinische CT | vergleichend | hoch | niedrig |
| 6 | Verfahrenswahl | CT oder 2D-Röntgen: Entscheidungsmatrix | vergleichend | sehr hoch | sehr hoch |
| 7 | Verfahrenswahl | Wann ist 2D-Röntgen wirtschaftlicher als CT? | kommerziell | hoch | hoch |
| 8 | Verfahrenswahl | CT, Ultraschall oder Thermografie: welches ZfP-Verfahren? | vergleichend | sehr hoch | hoch |
| 9 | Verfahrenswahl | Fünf Fragen vor der Auswahl eines Prüfverfahrens | informativ | hoch | hoch |
| 10 | Verfahrenswahl | Machbarkeitsprüfung für industrielle CT vorbereiten | transaktional | hoch | sehr hoch |
| 11 | Guss | Lunker und Poren im Aluminiumguss unterscheiden | informativ | sehr hoch | hoch |
| 12 | Guss | Porositätsanalyse im CT: Kenngrößen und Grenzen | informativ | sehr hoch | sehr hoch |
| 13 | Guss | Druckguss zerstörungsfrei prüfen: typische Fehlerbilder | kommerziell | hoch | hoch |
| 14 | Guss | Dichtheitsproblem durch Poren: was CT beitragen kann | problemorientiert | hoch | sehr hoch |
| 15 | Guss | CT-Prüfung vor der Serienfreigabe von Gussteilen | transaktional | hoch | sehr hoch |
| 16 | Elektronik | BGA-Lötstellen röntgen: Voids, Brücken und offene Verbindungen | informativ | sehr hoch | sehr hoch |
| 17 | Elektronik | 2D-Röntgen oder CT für elektronische Baugruppen? | vergleichend | hoch | sehr hoch |
| 18 | Elektronik | Verdeckte Steck- und Crimpverbindungen prüfen | problemorientiert | hoch | hoch |
| 19 | Elektronik | Elektronikfehler ohne Entlöten lokalisieren | problemorientiert | hoch | hoch |
| 20 | Elektronik | Grenzen der Röntgenprüfung bei dicht bestückten Leiterplatten | informativ | sehr hoch | mittel |
| 21 | Kunststoff | Kunststoffbauteile mit CT untersuchen: Chancen und Grenzen | informativ | hoch | hoch |
| 22 | Kunststoff | Bindenaht, Lufteinschluss oder Fremdkörper? | problemorientiert | hoch | hoch |
| 23 | Kunststoff | Wandstärkenanalyse bei Spritzgussteilen | kommerziell | hoch | sehr hoch |
| 24 | Kunststoff | Montagezustände in Kunststoffbaugruppen zerstörungsfrei prüfen | kommerziell | hoch | hoch |
| 25 | Kunststoff | CT-Daten für Werkzeug- und Prozesskorrekturen nutzen | kommerziell | hoch | sehr hoch |
| 26 | Messtechnik | Soll-Ist-Vergleich zwischen CT und CAD erklärt | informativ | sehr hoch | sehr hoch |
| 27 | Messtechnik | CT-Messtechnik: Wovon hängt die Messunsicherheit ab? | informativ | sehr hoch | hoch |
| 28 | Messtechnik | Oberflächenbestimmung in CT-Daten | Expertenwissen | sehr hoch | mittel |
| 29 | Messtechnik | Innengeometrien messen, die taktil nicht erreichbar sind | problemorientiert | hoch | sehr hoch |
| 30 | Messtechnik | Wann braucht ein CT-Maß eine abgesicherte Messstrategie? | Expertenwissen | hoch | hoch |
| 31 | Fehleranalyse | Schadensanalyse mit CT: Befund oder Ursache? | informativ | sehr hoch | hoch |
| 32 | Fehleranalyse | Risse im CT: Orientierung und Nachweisgrenzen | Expertenwissen | sehr hoch | hoch |
| 33 | Fehleranalyse | Rückläufer zerstörungsfrei mit Neuteilen vergleichen | problemorientiert | hoch | sehr hoch |
| 34 | Fehleranalyse | Fremdkörper in geschlossenen Baugruppen lokalisieren | problemorientiert | hoch | sehr hoch |
| 35 | Fehleranalyse | CT-Befunde für Lieferantenreklamationen dokumentieren | kommerziell | hoch | sehr hoch |
| 36 | Entwicklung | CT im Prototyping: wann der erste Scan sinnvoll ist | informativ | hoch | hoch |
| 37 | Entwicklung | Erstmusterprüfung mit inneren Merkmalen erweitern | kommerziell | sehr hoch | sehr hoch |
| 38 | Entwicklung | Designiteration mit CT-Daten vergleichen | kommerziell | hoch | hoch |
| 39 | Entwicklung | Prüfplan für Prototyp, Vorserie und Serie aufbauen | informativ | hoch | hoch |
| 40 | Entwicklung | Welche Daten benötigt ein CT-Dienstleister? | transaktional | sehr hoch | sehr hoch |
| 41 | Qualität | CT-Stichproben in der Serienüberwachung planen | kommerziell | hoch | hoch |
| 42 | Qualität | Akzeptanzkriterien für Poren und Lunker definieren | Expertenwissen | sehr hoch | hoch |
| 43 | Qualität | Reproduzierbare CT-Vergleichsaufnahmen vorbereiten | Expertenwissen | hoch | hoch |
| 44 | Qualität | CT-Berichte für interne Freigaben strukturieren | informativ | hoch | mittel |
| 45 | Qualität | Von der Prüffrage zum belastbaren Befund | informativ | sehr hoch | hoch |
| 46 | Beschaffung | Was kostet eine industrielle CT-Prüfung? Einflussfaktoren | kommerziell | sehr hoch | sehr hoch |
| 47 | Beschaffung | CT-Dienstleister auswählen: technische Checkliste | kommerziell | sehr hoch | sehr hoch |
| 48 | Beschaffung | Bauteile sicher für eine CT-Prüfung versenden | transaktional | hoch | hoch |
| 49 | Beschaffung | Welche Ergebnisformate sollten im Angebot stehen? | transaktional | hoch | hoch |
| 50 | Beschaffung | Anfragevorlage für CT- und Röntgenprüfungen | transaktional | sehr hoch | sehr hoch |

## Roadmap

### Quick Wins – 1 Woche

1. Neue Seiten fachlich gegenlesen und reale Servicegebiete bestätigen.
2. Google Business Profile vollständig mit identischem NAP, Leistungsbeschreibung und echten Laborbildern pflegen.
3. Search Console und Bing Webmaster Tools: Sitemap einreichen und neue Seiten prüfen.
4. Datenschutztext juristisch vervollständigen.
5. Bestehende vier Artikel mit sichtbarem Autor, fachlichem Review und Quellen ergänzen.

### Mittelfristig – 1 Monat

1. Zehn Beiträge aus dem Content-Plan publizieren, beginnend mit Verfahrenswahl, Voxelgröße, Guss und BGA.
2. Fünf zusätzliche Prüfaufgaben-Landingpages mit echten Beispielbildern und Nachweisgrenzen erstellen.
3. Freigegebene Case-Study-Vorlage implementieren; erst anschließend echte Fälle veröffentlichen.
4. Regionale Erwähnungen und Partnerprofile aus Hochschulen, Verbänden und Unternehmensnetzwerken aufbauen.
5. AI-Visibility-Baseline mit wiederholbaren Fragen und dokumentierten Zitierungen erfassen.

### Langfristig – 3 Monate

1. Alle 50 Themen nach fachlicher Priorität und Nachfrage abarbeiten; keine Massenveröffentlichung dünner Texte.
2. Glossar und Vergleichshub aus den wiederkehrenden technischen Entitäten aufbauen.
3. Originale CT-Bilder, annotierte Befunde und methodisch saubere Case Studies publizieren.
4. Autoren-/Review-Prozess mit Änderungsprotokoll und Aktualisierungsdatum institutionalisieren.
5. Search Console, Bing, AI-Zitierungen und qualifizierte Anfragen gemeinsam auswerten.

## Primärquellen für die Umsetzung

- Google Search Central: https://developers.google.com/search/docs/appearance/ai-features
- Google Organization Structured Data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Schema.org: https://schema.org/
- OpenAI Crawler: https://platform.openai.com/docs/bots
- Perplexity Crawler: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- llms.txt Proposal: https://llmstxt.org/
