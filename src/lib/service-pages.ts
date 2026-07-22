import type { FaqItem } from "@/lib/geo-content"

export type ServicePage = {
  slug: string
  name: string
  shortName: string
  title: string
  metaDescription: string
  description: string
  purpose: string
  suitableFor: readonly string[]
  deliverables: readonly string[]
  limits: readonly string[]
  process: readonly string[]
  faqs: readonly FaqItem[]
  related: readonly { label: string; href: string }[]
}

export const servicePages: readonly ServicePage[] = [
  {
    slug: "industrielle-computertomographie",
    name: "Industrielle Computertomographie",
    shortName: "Industrielle CT",
    title: "Industrielle Computertomographie für Bauteile",
    metaDescription: "Industrielle Computertomographie für Bauteile und Baugruppen: innere Strukturen dreidimensional untersuchen, Befunde lokalisieren und Ergebnisse nachvollziehbar dokumentieren.",
    description: "Industrielle CT rekonstruiert aus vielen Röntgenprojektionen ein dreidimensionales Volumen. Dadurch lassen sich innere und äußere Strukturen untersuchen, ohne das Bauteil für die Bildgebung zu öffnen.",
    purpose: "Das Verfahren eignet sich, wenn eine zweidimensionale Projektion nicht genügt und Merkmale räumlich lokalisiert, getrennt betrachtet oder mit Referenzdaten verglichen werden sollen.",
    suitableFor: ["Guss- und Kunststoffbauteile", "montierte Baugruppen", "elektronische Komponenten", "Prototypen und Erstmuster", "Bauteile mit innenliegenden Geometrien"],
    deliverables: ["relevante CT-Schnittbilder", "dreidimensionale Ansichten", "markierte und beschriebene Befunde", "vereinbarte Mess- oder Vergleichsergebnisse", "technischer Bericht im abgestimmten Umfang"],
    limits: ["Bauteilgröße, Werkstoffdichte und Durchstrahlungsweg beeinflussen die Bildqualität.", "Voxelgröße ist nicht automatisch mit Nachweisgrenze oder Messunsicherheit gleichzusetzen.", "Die Eignung muss anhand der konkreten Geometrie und Prüfaufgabe bewertet werden."],
    process: ["Prüffrage und Entscheidungsziel klären", "Bauteil-, Material- und Geometriedaten bewerten", "Aufnahme und Auswertung planen", "Volumendaten rekonstruieren und untersuchen", "Befunde dokumentieren und technisch einordnen"],
    faqs: [
      { question: "Wann ist industrielle CT sinnvoller als 2D-Röntgen?", answer: "CT ist sinnvoll, wenn ein räumliches Volumen, eine eindeutige Tiefenlokalisation, frei wählbare Schnittansichten oder ein Vergleich mit CAD-Daten benötigt werden. Für eine schnelle Projektionsaufnahme kann 2D-Röntgen ausreichen." },
      { question: "Welche Bauteildaten werden für eine Machbarkeitsprüfung benötigt?", answer: "Hilfreich sind Abmessungen, Werkstoffe, relevante Bereiche, CAD-Daten falls vorhanden und eine konkrete Prüffrage. Daraus lässt sich ableiten, welche Aufnahme und Auswertung sinnvoll ist." },
      { question: "Ist industrielle CT zerstörungsfrei?", answer: "Die Bildgebung selbst erfordert grundsätzlich kein Öffnen oder Zerschneiden des Bauteils. Ob das Prüfteil danach für jeden vorgesehenen Zweck weiterverwendet werden kann, muss die konkrete Anwendung bewerten." },
    ],
    related: [{ label: "CT für Aluminiumguss", href: "/ct-aluminiumguss" }, { label: "Porositätsanalyse", href: "/porositaetsanalyse" }, { label: "Technologie vergleichen", href: "/technologie" }],
  },
  {
    slug: "industrielle-roentgenpruefung",
    name: "Industrielle Röntgenprüfung",
    shortName: "2D-Röntgenanalyse",
    title: "Industrielle Röntgenprüfung und 2D-Röntgenanalyse",
    metaDescription: "Industrielle Röntgenprüfung für Bauteile und Baugruppen: verdeckte Strukturen als 2D-Projektion untersuchen und geeignete Prüfaufgaben technisch einordnen.",
    description: "Bei der 2D-Röntgenanalyse wird die durchstrahlte Struktur als Projektion abgebildet. Das Verfahren kann eine direkte Übersicht liefern, ohne ein vollständiges dreidimensionales Volumen zu rekonstruieren.",
    purpose: "2D-Röntgen ist vor allem für klar abgegrenzte Merkmale, flache oder geeignete Geometrien und vergleichende Aufnahmen interessant. Überlagerungen entlang des Strahlengangs müssen bei der Interpretation berücksichtigt werden.",
    suitableFor: ["elektronische Baugruppen und Lötverbindungen", "Steck- und Montageverbindungen", "vergleichende Projektionsaufnahmen", "Bauteile mit geeigneter Durchstrahlungsrichtung", "orientierende Fehler- und Strukturprüfungen"],
    deliverables: ["Röntgenprojektionen in abgestimmten Ansichten", "markierte Auffälligkeiten", "Vergleichsaufnahmen", "technische Befundbeschreibung", "Empfehlung, ob eine ergänzende CT sinnvoll ist"],
    limits: ["Strukturen entlang des Strahlengangs können sich überlagern.", "Eine eindeutige räumliche Tiefenlokalisation ist aus einer einzelnen Projektion nicht möglich.", "Hohe Dichte und große Wandstärken können den Informationsgehalt begrenzen."],
    process: ["Prüfmerkmal und geeignete Blickrichtung definieren", "Durchstrahlbarkeit bewerten", "Aufnahmeparameter und Positionierung festlegen", "Projektionsbilder aufnehmen und vergleichen", "Befund und Verfahrensgrenzen dokumentieren"],
    faqs: [
      { question: "Was ist der Unterschied zwischen 2D-Röntgen und CT?", answer: "2D-Röntgen erzeugt Projektionsbilder, in denen sich Strukturen überlagern können. CT rekonstruiert dagegen ein dreidimensionales Volumen mit frei wählbaren Schnittansichten." },
      { question: "Kann 2D-Röntgen für BGA-Lötstellen eingesetzt werden?", answer: "Ja, wenn Aufbau und Blickrichtung eine aussagekräftige Projektion ermöglichen. Bei komplexen Überlagerungen kann eine CT-Auswertung zusätzliche räumliche Information liefern." },
      { question: "Welche Materialien lassen sich röntgen?", answer: "Viele technische Werkstoffe und Materialkombinationen sind grundsätzlich prüfbar. Die konkrete Durchstrahlbarkeit hängt von Dichte, Wandstärke, Geometrie und dem gesuchten Merkmal ab." },
    ],
    related: [{ label: "BGA-Lötstellenprüfung", href: "/bga-loetstellenpruefung" }, { label: "CT oder Röntgen?", href: "/blog/ct-vs-roentgen" }, { label: "Industrielle CT", href: "/leistungen/industrielle-computertomographie" }],
  },
  {
    slug: "fehleranalyse",
    name: "Fehler- und Schadensanalyse",
    shortName: "Fehleranalyse",
    title: "Fehleranalyse für Bauteile mit CT und Röntgen",
    metaDescription: "Fehleranalyse für Bauteile und Baugruppen: innere Auffälligkeiten mit CT oder Röntgen untersuchen, dokumentieren und mit Prozess- und Schadensinformationen einordnen.",
    description: "Bildgebende Verfahren können innere Auffälligkeiten sichtbar machen und ihre Lage dokumentieren. Für eine belastbare Ursachenanalyse werden diese Befunde mit Bauteilfunktion, Belastung, Prozessdaten und Schadenshistorie zusammengeführt.",
    purpose: "Die Leistung richtet sich an Entwicklungs-, Qualitäts- und Reklamationsteams, die ein Versagen oder eine wiederkehrende Abweichung technisch eingrenzen müssen.",
    suitableFor: ["Rückläufer und Ausfallteile", "Vergleich von Gut- und Schlechtteilen", "Reklamations- und Lieferantenfälle", "wiederkehrende Fertigungsabweichungen", "verdeckte Defekte in geschlossenen Baugruppen"],
    deliverables: ["dokumentierte innere Auffälligkeiten", "Vergleich relevanter Bauteilbereiche", "räumliche Einordnung von Befunden", "Abgrenzung von Beobachtung und Ursachenhypothese", "Hinweise auf sinnvolle weitere Untersuchungen"],
    limits: ["Ein bildgebender Befund beweist nicht in jedem Fall allein die Schadensursache.", "Fehlende Prozess-, Belastungs- oder Werkstoffdaten können die Einordnung begrenzen.", "Je nach Fragestellung können weitere Prüfverfahren erforderlich sein."],
    process: ["Fehlerbild und Schadenshistorie aufnehmen", "Vergleichsteile und relevante Bereiche definieren", "geeignetes Bildgebungsverfahren auswählen", "Befunde vergleichen und dokumentieren", "Ergebnisse im technischen Kontext einordnen"],
    faqs: [
      { question: "Kann CT die Ursache eines Bauteilversagens beweisen?", answer: "CT kann relevante innere Befunde liefern. Ob daraus eine eindeutige Ursache abgeleitet werden kann, hängt von zusätzlichen Informationen zu Belastung, Werkstoff, Fertigung und Schadensverlauf ab." },
      { question: "Warum sind Gutteile für eine Fehleranalyse hilfreich?", answer: "Vergleichsteile helfen, normale Merkmale von auffälligen Abweichungen zu unterscheiden. Dafür sollten Aufnahmebedingungen und Auswertebereiche möglichst vergleichbar sein." },
      { question: "Welche Informationen sollte eine Anfrage enthalten?", answer: "Wichtig sind Fehlerbild, Zeitpunkt des Auftretens, Bauteilzustand, Werkstoff, relevante Belastungen, vorhandene Vergleichsteile und die Entscheidung, die aus der Analyse folgen soll." },
    ],
    related: [{ label: "Anwendungsfälle", href: "/anwendungsfaelle" }, { label: "Industrielle CT", href: "/leistungen/industrielle-computertomographie" }, { label: "Prüfaufgabe besprechen", href: "/kontakt" }],
  },
  {
    slug: "entwicklungsbegleitende-pruefung",
    name: "Entwicklungsbegleitende Prüfung",
    shortName: "Entwicklungsprüfung",
    title: "Entwicklungsbegleitende CT-Prüfung",
    metaDescription: "Entwicklungsbegleitende CT- und Röntgenprüfung für Prototyp, Vorserie und Freigabe: Varianten vergleichen, innere Merkmale prüfen und Entscheidungen dokumentieren.",
    description: "Entwicklungsbegleitende Prüfungen schaffen vergleichbare Bild- und Befunddaten zwischen Prototypen, Konstruktionsständen oder Prozessvarianten.",
    purpose: "Ziel ist nicht eine pauschale Prüfung, sondern eine definierte technische Frage pro Entwicklungsstufe. So bleiben Aufnahme, Auswertung und Entscheidungskriterium nachvollziehbar.",
    suitableFor: ["Prototypen und Funktionsmuster", "Konstruktions- und Prozessvarianten", "Vorserien- und Freigabeteile", "Montage- und Einbausituationen", "wiederkehrende Entwicklungsvergleiche"],
    deliverables: ["abgestimmter Prüf- und Vergleichsplan", "vergleichbare Schnitt- oder Projektionsbilder", "dokumentierte Änderungen zwischen Varianten", "Befunde zu definierten Entscheidungsmerkmalen", "Datenbasis für die nächste Entwicklungsschleife"],
    limits: ["Aussagekraft setzt definierte Vergleichsbedingungen voraus.", "Eine Prüfung ersetzt keine vollständige Konstruktions- oder Freigabeverantwortung.", "Änderungen an Aufnahme oder Auswertung müssen im Variantenvergleich berücksichtigt werden."],
    process: ["Entwicklungsphase und Entscheidung definieren", "Referenzzustand und Vergleichsmerkmale festlegen", "Prüfkonfiguration abstimmen", "Varianten unter vergleichbaren Bedingungen untersuchen", "Änderungen und Grenzen dokumentieren"],
    faqs: [
      { question: "In welcher Entwicklungsphase ist CT sinnvoll?", answer: "Mögliche Zeitpunkte sind Prototypenphase, Werkzeugkorrektur, Vorserie, Erstmuster und Ursachenanalyse. Entscheidend ist, ob die Bilddaten eine konkrete anstehende Entscheidung unterstützen." },
      { question: "Können mehrere Konstruktionsstände verglichen werden?", answer: "Ja. Für einen belastbaren Vergleich sollten relevante Bereiche, Ausrichtung, Aufnahmebedingungen und Auswertelogik zwischen den Varianten abgestimmt sein." },
      { question: "Werden CAD-Daten benötigt?", answer: "Für reine Struktur- oder Defektfragen nicht zwingend. Für Soll-Ist-Vergleiche und bestimmte geometrische Bewertungen sind geeignete Referenzdaten erforderlich." },
    ],
    related: [{ label: "Erstmusterprüfung mit CT", href: "/erstmusterpruefung-ct" }, { label: "Soll-Ist-Vergleich", href: "/leistungen/soll-ist-vergleich" }, { label: "Ablauf der Zusammenarbeit", href: "/HowItWorks" }],
  },
  {
    slug: "soll-ist-vergleich",
    name: "Soll-Ist-Vergleich mit CT und CAD",
    shortName: "Soll-Ist-Vergleich",
    title: "CT-Soll-Ist-Vergleich mit CAD-Daten",
    metaDescription: "CT-Soll-Ist-Vergleich für Bauteile: rekonstruierte Geometrie mit CAD- oder Referenzdaten abgleichen, Abweichungen visualisieren und Ergebnisse dokumentieren.",
    description: "Beim Soll-Ist-Vergleich wird eine aus CT-Daten abgeleitete Oberfläche zu einer Referenzgeometrie ausgerichtet. Abweichungen können anschließend räumlich dargestellt und für definierte Bereiche ausgewertet werden.",
    purpose: "Die Methode eignet sich, wenn äußere und innenliegende Geometrien gemeinsam betrachtet oder Varianten auf derselben Referenzbasis verglichen werden sollen.",
    suitableFor: ["Erstmuster und Vorserienteile", "innenliegende Geometrien", "Werkzeug- und Prozessvarianten", "Verzug und Formabweichungen", "Bauteile mit geeigneten CAD-Referenzen"],
    deliverables: ["dokumentierte Ausrichtung zur Referenz", "farbcodierte Abweichungsdarstellung", "Schnittbilder relevanter Bereiche", "vereinbarte Einzelmaße oder Flächenvergleiche", "technische Einordnung der Auswertungsgrenzen"],
    limits: ["Oberflächenbestimmung und Ausrichtung beeinflussen das Ergebnis.", "Messunsicherheit und Eignung müssen zur geforderten Toleranz passen.", "Ein Farbvergleich ersetzt keine ungeprüfte formale Konformitätsentscheidung."],
    process: ["Referenzdaten und Toleranzfrage prüfen", "CT-Aufnahme für die Geometrieauswertung planen", "Oberfläche aus den Volumendaten bestimmen", "Ist- und Soll-Geometrie definiert ausrichten", "Abweichungen auswerten und dokumentieren"],
    faqs: [
      { question: "Welche Referenzdaten werden benötigt?", answer: "In der Regel wird ein geeignetes CAD-Modell oder eine abgestimmte Referenzgeometrie benötigt. Version, Einheit und Bezugszustand müssen eindeutig sein." },
      { question: "Können innenliegende Flächen verglichen werden?", answer: "Ja, sofern diese Flächen in den CT-Daten ausreichend bestimmbar sind. Genau darin liegt ein Vorteil gegenüber ausschließlich von außen zugänglichen Messverfahren." },
      { question: "Ist jeder CT-Datensatz für Maßauswertungen geeignet?", answer: "Nein. Aufnahme, Kalibrierung, Material, Oberflächenkontrast und geforderte Toleranz bestimmen, ob eine geometrische Auswertung belastbar möglich ist." },
    ],
    related: [{ label: "Erstmusterprüfung", href: "/erstmusterpruefung-ct" }, { label: "Wandstärkenanalyse", href: "/leistungen/wandstaerkenanalyse" }, { label: "Industrielle CT", href: "/leistungen/industrielle-computertomographie" }],
  },
  {
    slug: "wandstaerkenanalyse",
    name: "Wandstärkenanalyse mit CT",
    shortName: "Wandstärkenanalyse",
    title: "Wandstärkenanalyse mit industrieller CT",
    metaDescription: "Wandstärkenanalyse mit industrieller CT: innen- und außenliegende Oberflächen auswerten, lokale Wandstärken visualisieren und kritische Bereiche dokumentieren.",
    description: "Eine CT-Wandstärkenanalyse bestimmt Abstände zwischen ausreichend erkennbaren Innen- und Außenoberflächen. Dadurch lassen sich lokale Wandstärken auch an Bereichen untersuchen, die mechanisch nicht zugänglich sind.",
    purpose: "Die Auswertung kann Konstruktion, Fertigungsabgleich und Erstmusterprüfung unterstützen, wenn die relevante Geometrie im Volumendatensatz hinreichend abgebildet wird.",
    suitableFor: ["Guss- und Kunststoffbauteile", "Hohlkörper und Kanäle", "komplexe innenliegende Geometrien", "Prototypen und Erstmuster", "lokale Dünn- oder Dickstellen"],
    deliverables: ["farbcodierte Wandstärkendarstellung", "definierte Mindest- und Maximalbereiche", "Schnittbilder auffälliger Zonen", "vereinbarte lokale Messwerte", "Dokumentation von Methode und Auswertebereich"],
    limits: ["Beide relevanten Oberflächen müssen in den CT-Daten bestimmbar sein.", "Artefakte und geringe Kontraste können die Oberflächenbestimmung beeinflussen.", "Die geforderte Toleranz muss zur erreichbaren Messqualität passen."],
    process: ["Bauteilbereiche und Wandstärkenfrage definieren", "Durchstrahlbarkeit und Detailanforderung bewerten", "CT-Volumen aufnehmen und rekonstruieren", "Innen- und Außenoberflächen bestimmen", "Wandstärken auswerten und kritische Bereiche dokumentieren"],
    faqs: [
      { question: "Welche Bauteile eignen sich für eine CT-Wandstärkenanalyse?", answer: "Geeignet sind Bauteile, deren relevante Innen- und Außenoberflächen im CT-Datensatz ausreichend kontrastreich dargestellt werden können. Die Machbarkeit ist bauteilspezifisch." },
      { question: "Kann die gesamte Oberfläche farbig ausgewertet werden?", answer: "Je nach Geometrie und Datenqualität kann eine flächige Wandstärkenkarte erstellt werden. Auswertebereich und Schwellenwerte sollten vorab definiert werden." },
      { question: "Ersetzt die Wandstärkenkarte eine abgesicherte Maßprüfung?", answer: "Nicht automatisch. Für formale Maßentscheidungen müssen Messstrategie, Messunsicherheit und geforderte Toleranz zusammenpassen." },
    ],
    related: [{ label: "Soll-Ist-Vergleich", href: "/leistungen/soll-ist-vergleich" }, { label: "CT für Aluminiumguss", href: "/ct-aluminiumguss" }, { label: "Industrielle CT", href: "/leistungen/industrielle-computertomographie" }],
  },
  {
    slug: "dokumentation-auswertung",
    name: "Dokumentation und Auswertung von CT- und Röntgendaten",
    shortName: "Dokumentation und Auswertung",
    title: "Dokumentation und Auswertung von CT- und Röntgendaten",
    metaDescription: "CT- und Röntgenergebnisse nachvollziehbar dokumentieren: relevante Befunde, Schnittbilder, Visualisierungen und vereinbarte Auswertungen für technische Entscheidungen.",
    description: "Eine technische Prüfung wird erst dann nutzbar, wenn Prüfaufbau, relevante Beobachtungen und Auswertungsgrenzen nachvollziehbar dokumentiert sind. Der Umfang richtet sich nach der Entscheidung, die mit den Daten unterstützt werden soll.",
    purpose: "Die Leistung strukturiert Bild- und Auswertungsdaten für Entwicklung, Qualitätssicherung, interne Freigaben oder technische Kommunikation mit Lieferanten und Projektpartnern.",
    suitableFor: ["CT- und Röntgenbefunde", "Varianten- und Chargenvergleiche", "interne Entwicklungsentscheidungen", "Qualitäts- und Reklamationsprozesse", "abgestimmte Mess- und Defektauswertungen"],
    deliverables: ["Beschreibung von Prüfobjekt und Fragestellung", "relevante Schnitt- oder Projektionsbilder", "markierte Befunde und Auswertebereiche", "vereinbarte Kennwerte und Visualisierungen", "Hinweise zu Methode und Aussagegrenzen"],
    limits: ["Der Bericht bildet den vereinbarten Prüf- und Auswertungsumfang ab.", "Nicht untersuchte Bereiche dürfen nicht als geprüft interpretiert werden.", "Normative oder vertragliche Konformität muss separat festgelegt sein."],
    process: ["Adressaten und Entscheidungsziel festlegen", "Prüf- und Auswerteumfang definieren", "relevante Bilder und Kennwerte auswählen", "Befunde eindeutig markieren und beschreiben", "Bericht auf Nachvollziehbarkeit und Grenzen prüfen"],
    faqs: [
      { question: "Was enthält ein technischer Analysebericht?", answer: "Der konkrete Umfang wird projektbezogen festgelegt. Typisch sind Prüfobjekt, Fragestellung, relevante Aufnahmeinformationen, markierte Bilder, vereinbarte Auswertungen und eine technische Einordnung der Befunde." },
      { question: "Können Roh- oder Volumendaten bereitgestellt werden?", answer: "Das geeignete Datenformat hängt von Auswertung, Dateigröße, Softwareumgebung und geplanter Weiterverwendung ab. Der benötigte Umfang sollte vor Projektbeginn abgestimmt werden." },
      { question: "Ist ein Analysebericht automatisch ein Prüfzeugnis?", answer: "Nein. Ein technischer Analysebericht dokumentiert den vereinbarten Untersuchungsumfang. Anforderungen an formale Prüfzeugnisse, Normen oder Abnahmekriterien müssen ausdrücklich vereinbart werden." },
    ],
    related: [{ label: "Fehleranalyse", href: "/leistungen/fehleranalyse" }, { label: "Soll-Ist-Vergleich", href: "/leistungen/soll-ist-vergleich" }, { label: "Prüfaufgabe besprechen", href: "/kontakt" }],
  },
]

export const servicePageMap = Object.fromEntries(servicePages.map((service) => [service.slug, service])) as Record<string, ServicePage>
