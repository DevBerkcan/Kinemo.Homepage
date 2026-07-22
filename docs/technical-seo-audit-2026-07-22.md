# Kinemo Technical SEO Audit und Migrationsplan

Stand: 22. Juli 2026

Geprüfte Ziele:

- Staging: `https://kinemo-homepage.vercel.app/`
- bestehende Website: `https://kinemo.de/`
- geplante kanonische Domain: `https://www.kinemo.de/`

Dieses Dokument trennt bestätigte technische Befunde von Aussagen, die vor der Veröffentlichung durch Kinemo oder eine fachlich verantwortliche Person freigegeben werden müssen. Es enthält keine geschätzten Suchvolumina.

## 1. Live-Befund vor der Korrektur

| Prüfung | Staging | Bestehende Domain | Bewertung |
|---|---|---|---|
| HTTP-Status Startseite | 200 | 200 | erreichbar |
| System | Next.js auf Vercel | WordPress auf Apache/PHP | zwei getrennte Websites |
| Meta Robots | `index, follow` | `index, follow` | Staging war fälschlich indexierbar |
| X-Robots-Tag | fehlte | fehlte | zusätzliche Staging-Sperre fehlte |
| robots.txt | Allow für alle relevanten Bots | WordPress-Regeln | Staging war crawlbar |
| Canonical | `https://www.kinemo.de` | `https://kinemo.de/` | widersprüchliche bevorzugte Hosts |
| www-Verhalten | nicht relevant | 301 auf Non-www | muss beim Wechsel umgekehrt werden |
| HTTP-Verhalten | HTTPS | 302 auf HTTPS | permanente 301/308-Weiterleitung bevorzugt |
| Sitemap | Next.js Sitemap | WordPress Sitemap-Index | Migration und Neueinreichung nötig |

## 2. Implementierte technische Korrekturen

- Indexierung ist über `SITE_INDEXING_ENABLED=true` explizit freizugeben.
- Ohne diese Freigabe liefern alle Seiten `noindex, nofollow`; `robots.txt` sperrt `/`; zusätzlich wird `X-Robots-Tag: noindex, nofollow, noarchive` gesetzt.
- Die Sitemap erzeugt nicht mehr bei jedem Deployment erfundene neue Änderungsdaten. Verlässliche Publikationsdaten bleiben nur bei Blogartikeln erhalten.
- Eine hilfreiche, intern verlinkte 404-Seite wurde ergänzt.
- Gemeinsame Seiten-Heroes und Dokumentseiten zeigen sichtbare Breadcrumbs. Das vorhandene Breadcrumb-Markup bleibt bestehen.
- Sieben eigenständige Leistungsseiten trennen die kommerziellen Intentionen für CT, 2D-Röntgen, Fehleranalyse, Entwicklungsprüfung, Soll-Ist-Vergleich, Wandstärkenanalyse sowie Dokumentation und Auswertung.
- Zusätzliche Stadtseiten außerhalb Wuppertals bleiben ohne `REGIONAL_CONTENT_APPROVED=true` auf `noindex` und außerhalb der Sitemap.
- Consent-abhängige Clarity-Events erfassen Formularstart/-erfolg, Terminstart/-erfolg, Telefon-, E-Mail- und CTA-Klicks sowie Leistungs- und Artikelaufrufe ohne personenbezogene Eventparameter.
- Nicht belegte 24-Stunden-Versprechen, pauschale Fehlerkostenfaktoren und absolute Aussagen zu automatischer Erkennung, Auflösung und Reproduzierbarkeit wurden neutralisiert.

## 3. Seiteninventar und Suchintention

| URL/Typ | Rolle | Primäre Suchintention | Status |
|---|---|---|---|
| `/` | Marken- und Angebots-Hub | Kinemo; industrielle CT; Röntgenanalyse | erhalten, Fokus breit |
| `/leistungen` | Leistungsübersicht | CT-Dienstleister; Röntgenprüfung beauftragen | erhalten; eigene Leistungsseiten fehlen |
| `/technologie` | Verfahrensentscheidung | industrielle CT Funktionsweise; CT vs. Röntgen | gegenüber Grundlagenartikel abgrenzen |
| `/anwendungsfaelle` | Problem-Hub | Bauteilfehler analysieren; Prüfaufgaben | erhalten; zu Detailseiten führen |
| `/branchen` | Branchen-Hub | CT-Prüfung nach Branche | erhalten; reale Branchenbelege ergänzen |
| `/ct-aluminiumguss` | Aufgaben-Landingpage | CT Aluminiumguss; Lunkeranalyse | transaktional |
| `/porositaetsanalyse` | Aufgaben-Landingpage | Porositätsanalyse CT | transaktional |
| `/bga-loetstellenpruefung` | Aufgaben-Landingpage | BGA röntgen; Lötstellenprüfung | transaktional |
| `/erstmusterpruefung-ct` | Aufgaben-Landingpage | Erstmusterprüfung CT | transaktional |
| `/wissen` | Knowledge Hub | Orientierung und Themenauswahl | erhalten |
| `/faq` | Answer Hub | konkrete technische Fragen | erhalten; Antworten fachlich reviewen |
| `/blog` und `/blog/[slug]` | Fachartikel | informationale Long-Tail-Suchen | vier Artikel vorhanden |
| `/referenzen` | Vertrauens-/Case-Study-Hub | CT Referenzen; Praxisbeispiele | Inhalte bis Freigabe gesperrt |
| `/ueber-kinemo` | Unternehmen/Person/Standort | Kinemo GmbH; Ansprechpartner | Angaben bestätigen |
| `/industrielle-ct/[stadt]` | regionales Leistungsgebiet | industrielle CT + Stadt | zwölf Seiten; lokale Substanz ausbauen |
| `/kontakt`, `/termin-buchen` | Conversion | Anfrage/Termin | erhalten; Events ergänzen |
| `/suche` | interne Suche/SearchAction | Navigation | korrekt `noindex` |
| `/impressum`, `/datenschutz` | Recht | Vertrauen/Compliance | `noindex`; Datenschutz ist Release-Blocker |
| `/HowItWorks` | Prozess | Ablauf CT-Prüfung | später mit 301 auf kleingeschriebene URL migrieren |

## 4. Keyword-Mapping und Kannibalisierung

### Zielzuordnung

| Primärthema | Ziel-URL | Unterstützende URLs |
|---|---|---|
| industrielle CT als Kinemo-Angebot | `/` | `/leistungen`, `/technologie`, `/wissen` |
| CT-/Röntgen-Dienstleistung beauftragen | `/leistungen` | `/kontakt`, regionale Seiten |
| industrielle CT verstehen und Verfahren wählen | `/technologie` | `/blog/was-ist-industrielle-ct`, `/blog/ct-vs-roentgen` |
| Aluminiumguss prüfen | `/ct-aluminiumguss` | `/blog/lunkererkennung-gussteile`, `/porositaetsanalyse` |
| Porosität bewerten | `/porositaetsanalyse` | `/ct-aluminiumguss`, Guss-Fachartikel |
| BGA/Lötstellen prüfen | `/bga-loetstellenpruefung` | Elektronikbereich in `/branchen` und `/faq` |
| Erstmusterprüfung | `/erstmusterpruefung-ct` | `/anwendungsfaelle`, `/leistungen` |
| lokale CT-Dienstleistung | `/industrielle-ct/[stadt]` | `/leistungen`, `/kontakt` |

### Zu entschärfende Überschneidungen

1. Startseite und `/leistungen`: Startseite auf Problem, Marke und Gesamtangebot fokussieren; `/leistungen` auf Leistungsumfang, Eingangsdaten, Ergebnisformate und Anfrageentscheidung.
2. `/technologie` und `/blog/was-ist-industrielle-ct`: Technologie-Seite als Verfahrens-/Beschaffungsentscheidung; Artikel als zitierfähige Definition mit Quellen und Grenzen.
3. `/ct-aluminiumguss` und `/blog/lunkererkennung-gussteile`: Landingpage transaktional; Artikel auf Entstehung, Unterscheidung und technische Einordnung von Lunkern fokussieren.
4. `/anwendungsfaelle` und Detailseiten: Hub nur als Auswahlseite verwenden und mit beschreibenden Ankertexten auf die jeweilige Detailseite verlinken.

## 5. Kritische Content-Freigaben

Vor Setzen von `SITE_INDEXING_ENABLED=true` bestätigen oder korrigieren:

- Unternehmens- und Laboradresse: Der neue Code nennt Wuppertal; die bisherige Website nennt als Labor Talstraße 71 in Velbert.
- Rechtsform, Telefonnummern, E-Mail-Adressen, vertretungsberechtigte Person und Umsatzsteuer-ID.
- Rolle, Titel, Bild, Expertise und Zitate von Sercan Atesoglu.
- Beziehung zu Start-up Center, EFRE NRW, Berg Pitch und Bergischer Universität Wuppertal; Logos nur mit Nutzungsrecht und korrekter Bezeichnung.
- Antwortversprechen wie „innerhalb von 24 Stunden“.
- Kennzahlen zu Kunden, Analysen, Erfahrung und Patenten. Sie bleiben bis zur Freigabe per Flag verborgen.
- Kundennamen, Testimonials und Fallstudien. Sie bleiben bis zur Freigabe per Flag verborgen.
- Fachliche Aussagen zu Auflösung, Nachweisgrenze, Messunsicherheit, automatischer Defekterkennung, Reproduzierbarkeit und Branchenstandards.
- Alle Datenschutzangaben. Der aktuelle Text enthält verkürzte Platzhalter und nennt Dienste/Funktionen, die im Code nicht vollständig nachweisbar sind.

## 6. Informationsarchitektur – empfohlene nächste Ausbaustufe

Neue Seiten erst nach fachlicher Inhaltsfreigabe erstellen:

- `/leistungen/industrielle-computertomographie`
- `/leistungen/2d-roentgenanalyse`
- `/leistungen/fehler-schadensanalyse`
- `/leistungen/soll-ist-vergleich-cad`
- `/leistungen/wandstaerkenanalyse`
- `/leistungen/entwicklungsbegleitende-pruefung`

Jede Seite benötigt: eindeutige Prüfintention, geeignete/ungeeignete Bauteile, Eingangsdaten, Vorgehen, Ergebnisformate, Grenzen, sichtbare FAQ, passende interne Links und `Service`-Markup aus genau diesem sichtbaren Inhalt. Dünne Varianten derselben Seite sind nicht zulässig.

## 7. Regionalstrategie

- Wuppertal darf nur nach Adressbestätigung als tatsächlicher Standort beschrieben werden.
- Alle anderen Stadtseiten bleiben Seiten zum Leistungsgebiet und erhalten keine lokale Adresse oder `LocalBusiness`-Entität.
- Vor Indexierung sind je Stadt mindestens echte regionale Relevanz, nachvollziehbare Logistik/Anfahrt oder Branchenbezüge und einzigartige FAQ zu ergänzen.
- Wenn für eine Stadt keine belastbare individuelle Substanz vorhanden ist, bleibt sie vorerst `noindex` oder außerhalb der Sitemap.
- Kein Copy-Paste-Austausch von Städtenamen und keine künstlichen Ortsseiten.

## 8. Schema-Governance

Vorhanden sind verknüpfte `Organization`/`ProfessionalService`, `Person`, `WebSite` mit funktionierender `SearchAction`, `WebPage`, `Service`, `FAQPage`, `BreadcrumbList` und `Article`.

Regeln:

- Markup muss sichtbaren Inhalt derselben URL abbilden.
- Keine `Review`- oder `AggregateRating`-Daten ohne sichtbare Originalquelle und Freigabe.
- Kein zusätzlicher `LocalBusiness`-Standort für bediente Städte.
- Person-, Organisations- und Website-IDs bleiben über alle Seiten stabil.
- Die zwei derzeitigen Schema-Helfersysteme mittelfristig in `src/lib/schema.ts` konsolidieren.

## 9. Tracking-Konzept

Nur nach Analyse-Einwilligung auslösen:

| Event | Auslöser | Zweck |
|---|---|---|
| `contact_form_start` | erste Interaktion mit Anfrageformular | Formular-Einstieg |
| `contact_form_success` | serverseitig bestätigter Versand | Hauptconversion |
| `booking_start` | Klick auf Terminbuchung | Intent |
| `phone_click` | `tel:`-Klick | Lead |
| `email_click` | `mailto:`-Klick | Lead |
| `service_cta_click` | CTA auf Leistungs-/Aufgabenseite | Journey |

Keine Marketing-/Analyse-Events vor Einwilligung. Serverseitige Formularerfolge dürfen zusätzlich datensparsam als Betriebskennzahl erfasst werden, sofern Rechtsgrundlage und Speicherkonzept geklärt sind.

## 10. Domain-Cutover-Checkliste

1. Vollständigen Datenschutztext und alle Fakten freigeben.
2. Finale URL-Matrix Alt → Neu aus dem WordPress-Export erstellen; jede relevante Alt-URL bekommt genau ein Ziel.
3. `www.kinemo.de` als kanonischen Host festlegen; `http`, Non-www und alte URLs permanent per 301/308 in höchstens einem Hop weiterleiten.
4. Vercel-Production-Umgebung mit `SITE_INDEXING_ENABLED=true` bauen. Preview-/Branch-Umgebungen bleiben `false`.
5. Vor DNS-Umschaltung den finalen Build über Deployment-URL und Host-Konfiguration prüfen.
6. Nach Umschaltung live prüfen: Status, Canonical, Robots-Meta, X-Robots-Tag, `robots.txt`, Sitemap, strukturierte Daten, Formulare und 404.
7. Neue Sitemap in Google Search Console und Bing Webmaster Tools einreichen; wichtige URLs einzeln kontrollieren.
8. Crawlingfehler, Weiterleitungen, Indexabdeckung, Core Web Vitals und Leads für mindestens vier Wochen beobachten.

## 11. Priorisierte Roadmap

### P0 – vor Veröffentlichung

- Fakten-/Rechtsfreigabe abschließen.
- Adress- und Hoststrategie bestätigen.
- Redirect-Matrix aus realen WordPress-URLs erstellen.
- Staging-Sperre und Produktionsfreigabe extern verifizieren.
- Vollständigen Crawl mit Status, Canonical, Robots, Title, Description und H1 durchführen.

### P1 – erste zwei Wochen

- Bestehende vier Artikel fachlich reviewen, Quellen und Autor/Reviewer ergänzen.
- Conversion-Events implementieren und mit Consent testen.
- Hauptleistungsseiten nach echter Suchintention ausarbeiten.
- Regionale Seiten anhand realer Substanz priorisieren; schwache Varianten nicht indexieren.

### P2 – erster Monat

- Content-Cluster aus `docs/geo-audit-2026.md` nach Geschäftswert statt Menge umsetzen.
- Eigene industrielle Bilddaten, annotierte Befunde und Methodik einsetzen.
- Freigegebene Case Studies auf eigenen URLs veröffentlichen.
- Interne Links anhand Search-Console-Daten und Nutzerpfaden nachschärfen.

### P3 – kontinuierlich

- Rankings, qualifizierte Leads, indexierte Seiten, Rich-Result-/Schemafehler und Core Web Vitals monatlich prüfen.
- Inhalte mit Review-Datum aktualisieren; Sitemap-Datum nur bei echter wesentlicher Änderung setzen.
- Lokale Erwähnungen und fachlich relevante Links ohne gekaufte oder massenhaft erzeugte Einträge aufbauen.

## 12. Noch nicht messbar

- Keyword-Volumina und Ranking-Baseline: kein Zugriff auf Search Console, Ads Keyword Planner, Sistrix oder Ahrefs.
- Feld-Core-Web-Vitals: für die neue Domainversion liegen noch keine belastbaren CrUX-Daten vor.
- Lighthouse: nach dem nächsten Deployment gegen die tatsächlich ausgelieferte Version messen; keine Werte schätzen.
- Conversion-Baseline: Die Events sind implementiert, liefern aber erst nach Deployment, Einwilligung und realer Nutzung eine belastbare Datenbasis.
