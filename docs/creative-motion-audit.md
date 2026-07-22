# Kinemo Creative-Development-Audit

Stand: 22. Juli 2026

## Technische Ausgangslage

- Next.js 16.2.11 mit App Router, React 19.2.7, TypeScript und Tailwind CSS 4.
- 27 Build-Routen; Inhalte und SEO liegen überwiegend in Server Components.
- Zehn Client-Grenzen für Navigation, Consent, Formulare, Tabs, Suche und CT-Vergleich.
- Vor dem Motion-Pass: 585.049 Bytes unkomprimiertes First-Load-JavaScript auf `/` und 556.419 Bytes auf statischen Unterseiten.
- Keine zentrale Motion-Bibliothek vorhanden. Animationen bestehen aus CSS-Keyframes und lokalen Zustandswechseln.
- Bilder werden überwiegend über `next/image` ausgeliefert. Die größten lokalen Medien sind die beiden CT-Vergleichsbilder mit zusammen rund 519 KB.
- Security Header, Consent-gesteuertes Clarity, Dark Mode, Skip-Link und gemeinsame Root-Navigation sind lokal vorhanden. Der derzeitige Live-Deploy liefert noch keine CSP aus und entspricht nicht vollständig dem lokalen Stand.

## Zentrale Befunde

1. Die Live-Seite besitzt bei 390 × 844 sichtbares horizontales Overflow im Hero. Headline, Trust-Zeile und CTA werden abgeschnitten.
2. Desktop-Hero und CT-Motiv sind markenkonform, aber die folgenden Sektionen folgen zu oft demselben Kartenraster und erzeugen wenig dramaturgischen Wechsel.
3. Dauerhaft laufende CSS-Animationen sind nicht viewportgebunden. Sie werden zwar bei Reduced Motion deaktiviert, laufen sonst aber auch außerhalb des sichtbaren Bereichs.
4. Mobile Navigation besitzt noch keine kontrollierte Menü-Timeline und keine zentrale Scroll-Sperre.
5. Problem, Leistungen, Branchen und Prozess sind inhaltlich gut strukturiert, visuell jedoch statische Raster. Diese vier Bereiche bieten den größten Storytelling-Hebel.
6. Der CT-Vergleich ist interaktiv, aber die drei identischen Beispiele duplizieren Medien und Interaktionscode ohne zusätzlichen Informationsgewinn.
7. Kontakt-, Blog- und Terminseiten sind jeweils vollständig Client Components. Ihre statischen Shells können später abgespalten werden.
8. FAQ nutzt native `details` und ist damit robust, tastaturbedienbar und JavaScript-frei. Dieser ruhige Ansatz sollte erhalten bleiben.
9. Fokuszustände sind nicht als konsistentes Designsystem definiert. Modale benötigen zusätzlich Fokusmanagement, Escape-Schließen und Scroll-Lock.
10. Folgende Aussagen sind im Repository nicht belegbar und müssen vor Veröffentlichung fachlich/rechtlich bestätigt werden: „50+ Kunden“, „1000+ Analysen“, „5+ Jahre“, „3 Patente“, konkrete Namen und Zitate von Vorwerk, Hansgrohe, ABUS, Festool und Brose sowie die beschriebenen Fallstudien.

## Prioritäten

- P0: mobiles Overflow entfernen, Reduced Motion global absichern, Motion-Lifecycle zentralisieren.
- P1: Hero, Header und Problem-/Lösungsdramaturgie; nur Transform und Opacity animieren.
- P2: CT-Vergleich, Leistungen und Prozess als fokussierte visuelle Geschichten.
- P3: Branchen, Testimonials, Gründer, Kennzahlen, Kontakt und Unterseiten.
- P4: belastbare Browser-/Lighthouse-Messungen nach Deployment oder mit verfügbarem Automationsbrowser.

## Animation Map

| Bereich | Ausgangslage | Geplante Bewegung und Wirkung | Desktop | Mobil | Reduced Motion | Risiko |
|---|---|---|---|---|---|---|
| Header | Sticky, statisch | kompakter Zustand, präziser Link-Indikator, Menü-Timeline | Blur und Höhenwechsel | Fullscreen-Menü, Scroll-Lock | sofortige Zustände | mittel, globaler JS-Anteil |
| Hero | starkes Motiv, CSS-Daueranimation | schneller Text-Stagger, Mask-Reveal, dezente Visual-Parallaxe | Scroll-Transformation ohne Inhaltsverlust | kein Parallax, sichere Zeilenumbrüche | alles sofort sichtbar | mittel |
| Logos | CSS-Marquee | ruhiger, nahtloser Marquee; Duplikate verborgen | Pause bei Hover/Fokus | langsamer, kompakter | statische Logos | niedrig |
| Problem | gleichförmige Karten | Sticky Headline, vertikale Story, aktive Probleme | Karten nacheinander fokussieren | normale vertikale Liste | alle Karten gleich sichtbar | mittel |
| Lösung/USP | interaktive Karten | heller Gegenpol, gestaffeltes Reveal, vorhandene Kennzahlen | Fokuswechsel und Detailfläche | Tap statt Hover | keine Count-ups | niedrig |
| Leistungen | Kartenraster | nummerierte Split-/Stack-Darstellung | dezentes Sticky-Stacking | lineare Liste | kein Sticky | mittel |
| Prüfaufgaben | vier Karten | typografische Linkliste mit technischem Fokus | Bild-/Akzentwechsel | alle Details sichtbar | statisch | niedrig |
| CT-Vergleich | drei gleiche Slider | ein heroischer Vergleich, klare Labels, bessere Griffzone | optional kurze Sticky-Phase | nativer Touch-Slider | manuell bedienbar | mittel |
| Branchen | Kartenraster | nummerierte Liste und wechselnder Fokus | zweispaltig | Akkordeon/Liste | statisch | niedrig |
| Prozess | vier Karten | Fortschrittslinie und aktiver Schritt | Sticky Visual | lineare Timeline | kein Sticky | mittel |
| Testimonials | Tabs und Modale | ruhigere Zitat-Typografie, kontrollierter Wechsel | kein Autoplay | Swipe optional | sofortiger Wechsel | niedrig |
| Gründer | statischer Split | Portrait-Mask und subtile Tiefe | kleiner Parallax | statisches Bild | statisch | niedrig |
| Kennzahlen | statisch | einmaliger kurzer Count-up nur nach Freigabe | 1–1,5 s | große, ruhige Zahlen | Endwert sofort | niedrig |
| Institutionen | statische Logos | sanftes gruppiertes Reveal | dezentes Fade | statisch | statisch | niedrig |
| FAQ | native `details` | ruhige Icon-/Höhenwirkung | native Bedienung | native Bedienung | unverändert | sehr niedrig |
| Kontakt | Client-Formular | ruhiger Reveal, technische Scanfläche, klare Statusmeldungen | dezente Feldfolge | keine Ablenkung | statisch | niedrig |
| Footer | Server Component | nur Link- und Fokus-Mikrointeraktionen | ruhig | gestapelt | unverändert | sehr niedrig |
| Seitenwechsel | keiner | optional kurzer View-Transition-Fade | maximal 200 ms | reduziert | aus | mittel |

## Architekturentscheidung

- GSAP und ScrollTrigger werden dynamisch in genau einem Client-Provider geladen.
- Lenis besitzt genau eine Instanz und wird nur für Nutzer ohne Reduced Motion und ohne Touch-Primärgerät aktiviert.
- Allgemeine Reveals werden über `data-motion`-Attribute gesteuert; Speziallogik bleibt auf wenige Kernkomponenten begrenzt.
- Server Components bleiben Server Components. Motion wird als kleine progressive Enhancement-Schicht ergänzt.
- Inhalte sind ohne JavaScript sofort sichtbar; Animationen dürfen nie Voraussetzung für Lesbarkeit oder Navigation sein.

## Umsetzungsstand: erstes Kernpaket

- Zentraler Motion-Provider mit dynamischen Imports, GSAP MatchMedia, ScrollTrigger-Cleanup und einer einzelnen Lenis-Instanz.
- Lenis ist bei Reduced Motion und primären Touch-Pointern deaktiviert.
- Header mit kompaktem Scroll-Zustand, Route-Indikator, Fullscreen-Mobile-Menü, Escape-Steuerung und Scroll-Lock.
- Hero mit schnellem Entry-Stagger und ausschließlich desktopseitiger, dezenter Visual-Parallaxe.
- Problemsektion als Sticky-Story auf Desktop und lineare Story auf Mobilgeräten.
- Lösungsbereich an das zentrale Stagger-System angeschlossen.
- Leistungen als nummerierte, typografische Liste statt Kartenraster.
- CT-Vergleich als einzelner nativer, tastatur- und touchbedienbarer Range-Slider; Drittanbieter-Slider entfernt.
- Ablauf als vertikale Prozessgeschichte mit desktopseitigem Sticky Visual.
- Globale Fokuszustände, Overflow-Schutz und vollständiger Reduced-Motion-Fallback ergänzt.

## Umsetzungsstand: Detailpaket

- Prüfaufgaben und Branchen von gleichförmigen Kartenrastern in nummerierte, responsive Navigationslisten überführt.
- Testimonials typografisch neu strukturiert; Tabs besitzen korrekte Rollen, Zustände und Pfeiltastensteuerung. Anwendungsfälle verwenden native `details` statt einer fehleranfälligen Modal-Ebene.
- Nicht belegte Testimonials, Fallstudien und Kundenlogos werden ohne `REFERENCE_CONTENT_APPROVED=true` nicht gerendert.
- Nicht belegte Unternehmenskennzahlen werden ohne `KINEMO_METRICS_APPROVED=true` weder im Hero noch auf der Startseite oder auf `/HowItWorks` gerendert; Count-ups bleiben bewusst deaktiviert.
- Gründerbereich als ruhiger Editorial-Split mit Portrait, Quote und Fachgebieten neu aufgebaut.
- Doppelten Kontakt-CTA entfernt und dessen Inhalte mit dem Anfrageformular zu einem starken Abschluss zusammengeführt.
- Statische Kontaktstory bleibt Server Component; nur Formularzustand und Versandlogik bilden eine Client-Insel.
- Footer visuell neu geordnet, semantische Navigationen, Laboradresse, klare Social-Labels und größere Touchziele ergänzt.

## Umsetzungsstand: Unterseitenpaket

- Gemeinsamen technischen `PageHero` und einen wiederverwendbaren `PageCta` als Server Components ergänzt.
- Die vier SEO-Prüfseiten teilen sich jetzt eine zentrale `TaskLandingPage`; Metadaten, URLs, Breadcrumbs und Fachtexte bleiben seitenspezifisch erhalten.
- Leistungen, Branchen und Anwendungsfälle an dieselbe Hero- und CTA-Hierarchie angebunden.
- Kurzen CSS-basierten Seiten-Einstieg über `template.tsx` ergänzt: 240 ms, ausschließlich Opacity und Transform, kein Lade-Overlay und kein zusätzliches Client-JavaScript.
- Der Seiten-Einstieg ist bei `prefers-reduced-motion: reduce` vollständig deaktiviert.

## Umsetzungsstand: abschließendes Seitenpaket

- Technologie und Kontakt an den gemeinsamen technischen `PageHero` angebunden; Technologie verwendet außerdem den zentralen Abschluss-CTA.
- `/referenzen` rendert Fallstudien nur mit `REFERENCE_CONTENT_APPROVED=true`. Ohne Freigabe erscheint ein transparenter neutraler Status ohne Kunden-, Ergebnis- oder Zahlenbehauptungen.
- Blogübersicht in eine serverseitige Seite und eine kleine Such-Client-Insel getrennt. Vollständige Artikelinhalte werden nicht mehr an die Übersicht übertragen.
- Externe Blog-Vorschaubilder durch lokale, codebasierte Scan-Visuals ersetzt; die Karten benötigen damit keine Bildanfragen an Drittserver.
- Blogartikel besitzen eine gemeinsame Editorial-Hierarchie und den zentralen Abschluss-CTA.
- Impressum und Datenschutz verwenden ein gemeinsames ruhiges Dokumentlayout; die vorhandenen Rechtstexte wurden dabei nicht inhaltlich umgeschrieben.
- Mobile Text- und Dialogcontainer explizit gegen intrinsisches Grid- und Inhalts-Overflow abgesichert.
