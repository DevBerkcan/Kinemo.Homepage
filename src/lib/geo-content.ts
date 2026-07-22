export type FaqItem = {
  question: string
  answer: string
}

export type RegionalPage = {
  slug: string
  city: string
  state: string
  context: string
  industries: string[]
}

export const kinemoTopics = [
  "Industrielle Computertomographie",
  "2D-Röntgenanalyse",
  "zerstörungsfreie Prüfung",
  "Bauteilprüfung",
  "Fehler- und Schadensanalyse",
  "Porositätsanalyse",
  "Lunker- und Hohlraumanalyse",
  "BGA-Lötstellenprüfung",
  "Soll-Ist-Vergleich mit CAD",
  "Wandstärkenanalyse",
  "Erstmusterprüfung",
  "Produktentwicklung",
  "Qualitätssicherung",
] as const

export const homeFaqs: FaqItem[] = [
  {
    question: "Welche Bauteile und Materialien können geprüft werden?",
    answer: "Prüfbar sind viele feste Werkstoffe und Materialkombinationen, darunter Metalle, Kunststoffe, Verbundwerkstoffe und elektronische Baugruppen. Ob ein konkretes Bauteil geeignet ist, hängt zusätzlich von Abmessungen, Wandstärke, Dichte und der gesuchten Struktur ab.",
  },
  {
    question: "Ist die Analyse zerstörungsfrei?",
    answer: "Ja. Industrielle CT und Röntgenanalyse bilden innere Strukturen ab, ohne das Bauteil für die Bildgebung zu öffnen oder zu zerschneiden. Das Prüfteil kann anschließend grundsätzlich weiter untersucht oder verwendet werden.",
  },
  {
    question: "Wann ist CT sinnvoller als 2D-Röntgen?",
    answer: "CT ist besonders geeignet, wenn ein vollständiges 3D-Volumen, eine räumliche Fehlerlokalisation oder ein Vergleich mit CAD-Daten benötigt wird. Für schnelle Projektionsaufnahmen und einfachere Geometrien kann 2D-Röntgen wirtschaftlicher sein.",
  },
  {
    question: "In welcher Entwicklungsphase ist eine CT-Analyse sinnvoll?",
    answer: "Typische Zeitpunkte sind Prototypenphase, Erstmusterprüfung, Vorserie, Serienfreigabe und Ursachenanalyse nach einem Ausfall. Eine frühe Prüfung schafft eine Datenbasis, bevor Konstruktion und Prozess festgeschrieben sind.",
  },
  {
    question: "Welche Informationen benötigt Kinemo für eine erste Einschätzung?",
    answer: "Hilfreich sind Bauteilabmessungen, Werkstoffe, Stückzahl, CAD-Daten falls vorhanden sowie eine möglichst konkrete Prüffrage. Auf dieser Basis lässt sich ein geeignetes Verfahren und der erforderliche Auswertungsumfang einordnen.",
  },
]

export const faqCategories: Array<{ name: string; slug: string; items: FaqItem[] }> = [
  {
    name: "Verfahren auswählen",
    slug: "verfahren",
    items: [
      { question: "Was ist industrielle Computertomographie?", answer: "Industrielle CT ist ein zerstörungsfreies Röntgenverfahren. Aus vielen Projektionen wird ein dreidimensionales Volumenmodell rekonstruiert, in dem äußere und innere Strukturen schichtweise untersucht werden können." },
      { question: "Was zeigt eine 2D-Röntgenaufnahme?", answer: "Eine 2D-Röntgenaufnahme zeigt die durchstrahlte Struktur als Projektion. Strukturen entlang des Strahlengangs können sich überlagern; dafür ist die Aufnahme häufig schneller als eine vollständige CT." },
      { question: "Was ist der wichtigste Unterschied zwischen CT und 2D-Röntgen?", answer: "2D-Röntgen liefert eine Projektion, CT ein räumlich auswertbares Volumen. Die Entscheidung hängt davon ab, ob eine Übersicht genügt oder Defekte und Maße dreidimensional lokalisiert werden müssen." },
      { question: "Kann Kinemo das geeignete Prüfverfahren auswählen?", answer: "Ja. Die Verfahrensauswahl wird aus Prüffrage, Material, Bauteilgeometrie, erforderlicher Detailerkennbarkeit und gewünschter Auswertung abgeleitet." },
    ],
  },
  {
    name: "Bauteile und Werkstoffe",
    slug: "bauteile-werkstoffe",
    items: [
      { question: "Können Aluminiumgussteile mit CT geprüft werden?", answer: "Ja. Typische Fragestellungen sind Lunker, Poren, Einschlüsse, Wandstärken und innere Geometrien. Die erreichbare Detailerkennbarkeit hängt von Größe und Wandstärke des Bauteils ab." },
      { question: "Eignet sich CT für Kunststoffteile?", answer: "Viele Kunststoffbauteile lassen sich gut durchstrahlen. Untersucht werden können beispielsweise innere Geometrien, Montagezustände, Lufteinschlüsse und Wandstärken." },
      { question: "Können elektronische Baugruppen geröntgt werden?", answer: "Ja. Röntgen und CT können verdeckte Verbindungen und innere Strukturen elektronischer Baugruppen sichtbar machen, etwa BGA-Lötstellen, Steckverbindungen oder Einbaulagen." },
      { question: "Gibt es Grenzen bei dichten Werkstoffen?", answer: "Ja. Hohe Materialdichte, große Wandstärken und lange Durchstrahlungswege reduzieren die verfügbare Information. Deshalb muss die Machbarkeit bauteilspezifisch bewertet werden." },
    ],
  },
  {
    name: "Fehlerbilder",
    slug: "fehlerbilder",
    items: [
      { question: "Welche Gussfehler kann CT sichtbar machen?", answer: "Je nach Bauteil und Aufnahmequalität können unter anderem Poren, Lunker, Einschlüsse, Risse und unvollständig gefüllte Bereiche erkannt und räumlich eingeordnet werden." },
      { question: "Lassen sich Poren automatisch auswerten?", answer: "Volumendaten können segmentiert und Poren nach Merkmalen wie Volumen, Lage und Verteilung ausgewertet werden. Die belastbare Auswertung benötigt passende Aufnahme- und Segmentierungsparameter." },
      { question: "Kann CT die Ursache eines Schadens allein beweisen?", answer: "Nicht immer. CT liefert starke bildgebende Befunde, doch eine Ursachenbewertung kann zusätzliche Informationen zu Belastung, Werkstoff, Prozess und Schadenshistorie erfordern." },
      { question: "Sind Risse immer im CT erkennbar?", answer: "Nein. Erkennbarkeit hängt unter anderem von Rissöffnung, Orientierung, Kontrast, Voxelgröße und Artefakten ab. Die konkrete Nachweisgrenze muss zur Prüffrage passen." },
    ],
  },
  {
    name: "Messung und Auswertung",
    slug: "messung-auswertung",
    items: [
      { question: "Kann ein CT-Datensatz mit CAD verglichen werden?", answer: "Ja. Nach geeigneter Ausrichtung können rekonstruierte Oberflächen mit Soll-Geometrien verglichen und Abweichungen farblich dargestellt werden." },
      { question: "Sind Maßmessungen im CT möglich?", answer: "Geometrische Messungen sind grundsätzlich möglich. Messunsicherheit und Eignung hängen vom System, der Aufnahme, dem Material, der Oberflächenbestimmung und den geforderten Toleranzen ab." },
      { question: "Was enthält ein Analysebericht?", answer: "Der Umfang wird zur Prüffrage festgelegt. Typisch sind Prüfaufbau, relevante Schnittbilder oder 3D-Ansichten, markierte Befunde, Mess- oder Defektergebnisse und eine nachvollziehbare Einordnung." },
      { question: "Können CT-Daten digital bereitgestellt werden?", answer: "Die geeigneten Ausgabeformate hängen von Auswertung und Weiterverwendung ab. Vor Projektbeginn sollte geklärt werden, ob Bericht, Bilddaten, Oberflächenmodell oder Volumendaten benötigt werden." },
    ],
  },
  {
    name: "Projektablauf",
    slug: "projektablauf",
    items: [
      { question: "Wie beginnt eine CT-Prüfung bei Kinemo?", answer: "Am Anfang steht die Prüffrage. Danach werden Bauteildaten, Material, relevante Bereiche, benötigte Ergebnisse und Terminrahmen geklärt, bevor das geeignete Verfahren festgelegt wird." },
      { question: "Muss das Bauteil vorbereitet werden?", answer: "Das hängt von Aufgabe und Bauteil ab. Wichtig sind ein definierter Zustand, eine sichere Verpackung und die eindeutige Zuordnung. Zusätzliche Präparation wird vorab abgestimmt." },
      { question: "Sind Einzelteile und kleine Stückzahlen möglich?", answer: "Eine Anfrage kann sich auch auf Prototypen, Einzelteile oder kleine Vergleichsreihen beziehen. Der sinnvolle Stichprobenumfang richtet sich nach dem Entscheidungsziel." },
      { question: "Werden CAD-Daten zwingend benötigt?", answer: "Nein. Für reine Defekt- oder Strukturfragen sind CAD-Daten nicht immer nötig. Für Soll-Ist-Vergleiche und bestimmte geometrische Auswertungen sind sie dagegen wichtig." },
    ],
  },
  {
    name: "Qualität und Nachweisgrenzen",
    slug: "qualitaet-nachweisgrenzen",
    items: [
      { question: "Was bedeutet Voxelgröße?", answer: "Die Voxelgröße beschreibt die Rastergröße des rekonstruierten Volumens. Sie beeinflusst die Detaildarstellung, ist aber nicht automatisch mit einer garantierten Nachweisgrenze oder Messunsicherheit gleichzusetzen." },
      { question: "Wovon hängt die CT-Auflösung ab?", answer: "Einfluss haben unter anderem Bauteilgröße, Vergrößerung, Detektor, Fokus, Material, Durchstrahlungsweg, Aufnahmeparameter und Rekonstruktionsverfahren." },
      { question: "Warum entstehen CT-Artefakte?", answer: "Artefakte können beispielsweise durch Strahlaufhärtung, Streustrahlung, hohe Dichteunterschiede, Bewegung oder unzureichende Projektionen entstehen. Aufnahme und Auswertung müssen sie berücksichtigen." },
      { question: "Kann vorab eine garantierte Fehlergröße zugesagt werden?", answer: "Eine belastbare Aussage erfordert die konkrete Bauteil- und Prüfkonfiguration. Allgemeine Voxelwerte allein reichen für eine garantierte Nachweiswahrscheinlichkeit nicht aus." },
    ],
  },
  {
    name: "Einsatz in Entwicklung und Qualitätssicherung",
    slug: "entwicklung-qualitaet",
    items: [
      { question: "Wie unterstützt CT die Produktentwicklung?", answer: "CT kann innere Geometrien, Montagezustände und Defekte sichtbar machen, ohne den Prototypen für die Bildgebung zu zerlegen. So entstehen Daten für Konstruktion und Prozessanpassung." },
      { question: "Wann ist eine Erstmusterprüfung mit CT sinnvoll?", answer: "Sie ist sinnvoll, wenn neben äußeren Maßen auch innere Strukturen, Wandstärken, verborgene Defekte oder ein vollständiger Geometrievergleich entscheidungsrelevant sind." },
      { question: "Kann CT bei Lieferantenreklamationen helfen?", answer: "Ja. Vergleichbare Aufnahmen und klar dokumentierte Befunde können die technische Kommunikation unterstützen. Vertragliche oder normative Bewertungen bleiben davon getrennt." },
      { question: "Eignet sich CT für Serienüberwachung?", answer: "Für definierte Stichproben und wiederkehrende Prüfmerkmale kann CT eingesetzt werden. Taktzeit, Prüfplan, Automatisierungsgrad und Akzeptanzkriterien müssen dafür abgestimmt werden." },
    ],
  },
  {
    name: "Aluminiumguss",
    slug: "aluminiumguss",
    items: [
      { question: "Warum wird Aluminiumguss häufig mit CT geprüft?", answer: "Gussteile können innere Hohlräume und komplexe Geometrien enthalten, die von außen nicht zugänglich sind. CT kann diese Merkmale räumlich darstellen und mit relevanten Bauteilbereichen verknüpfen." },
      { question: "Kann CT zwischen Gasporen und Schwindungshohlräumen unterscheiden?", answer: "Form, Verteilung und Lage liefern Hinweise auf unterschiedliche Entstehungsmechanismen. Eine abschließende werkstoff- oder prozessbezogene Bewertung benötigt jedoch zusätzliche Prozesskenntnis." },
      { question: "Lässt sich die Porosität eines Aluminiumgussteils quantifizieren?", answer: "Nach geeigneter Segmentierung können Volumenanteile, Einzelvolumina, Positionen und Verteilungen bestimmt werden. Schwellenwerte und Auswertebereich müssen dokumentiert sein." },
      { question: "Welche Bauteildaten sind für eine Gussprüfung hilfreich?", answer: "Hilfreich sind Legierung, Abmessungen, relevante Funktionsbereiche, Herstellprozess, bekannte Auffälligkeiten und die Frage, welche Entscheidung aus der Prüfung folgen soll." },
    ],
  },
  {
    name: "Druckguss und Gießprozess",
    slug: "druckguss",
    items: [
      { question: "Kann CT einen Gießprozess optimieren?", answer: "CT liefert räumliche Befunddaten, mit denen Prozessvarianten verglichen werden können. Die Prozessoptimierung selbst erfordert die gemeinsame Bewertung mit Werkzeug-, Material- und Prozessparametern." },
      { question: "Wie werden verschiedene Druckguss-Chargen verglichen?", answer: "Vergleichbare Aufnahmebedingungen, definierte Auswertebereiche und einheitliche Kennwerte sind wichtig, damit Unterschiede nicht durch die Messkonfiguration verursacht werden." },
      { question: "Kann eine einzelne CT-Aufnahme den Serienprozess freigeben?", answer: "Eine Einzelaufnahme beschreibt zunächst das geprüfte Teil. Eine Serienfreigabe benötigt einen begründeten Prüfplan, geeignete Stichproben und festgelegte Akzeptanzkriterien." },
      { question: "Sind dünnwandige Druckgussteile gut prüfbar?", answer: "Dünne Strukturen können vorteilhaft durchstrahlbar sein, stellen aber Anforderungen an Detaildarstellung und Oberflächenbestimmung. Die Eignung hängt vom gesamten Bauteil und der Fragestellung ab." },
    ],
  },
  {
    name: "Elektronik und Lötstellen",
    slug: "elektronik",
    items: [
      { question: "Was kann Röntgen bei BGA-Lötstellen zeigen?", answer: "Je nach Aufbau können Form, Lage, Brücken, fehlende Verbindungen und Hohlräume in verdeckten Lötstellen beurteilt werden. Überlagerungen können bei 2D-Aufnahmen die Interpretation begrenzen." },
      { question: "Wann ist CT für eine Leiterplatte sinnvoll?", answer: "CT ist sinnvoll, wenn Strukturen räumlich getrennt, bestimmte Ebenen isoliert oder komplexe Überlagerungen reduziert werden müssen." },
      { question: "Kann Röntgen eine kalte Lötstelle sicher erkennen?", answer: "Nicht jede metallurgische Fehlstelle erzeugt einen eindeutigen Dichte- oder Geometriekontrast. Röntgenbefunde müssen deshalb mit Fehlerbild und gegebenenfalls weiteren Analysen abgeglichen werden." },
      { question: "Werden elektronische Baugruppen durch die Prüfung beschädigt?", answer: "Die Bildgebung ist zerstörungsfrei, dennoch muss die zulässige Strahlendosis für empfindliche Komponenten und die konkrete Anwendung berücksichtigt werden." },
    ],
  },
  {
    name: "Kunststoff und Spritzguss",
    slug: "kunststoff-spritzguss",
    items: [
      { question: "Welche Spritzgussfehler sind im CT sichtbar?", answer: "Abhängig vom Kontrast können Lufteinschlüsse, Fremdkörper, innere Geometrieabweichungen und bestimmte Bindenahtbereiche sichtbar werden. Nicht jedes Materialmerkmal erzeugt ausreichenden Röntgenkontrast." },
      { question: "Kann CT die Wandstärke eines Kunststoffteils prüfen?", answer: "Ja, wenn Innen- und Außenoberfläche ausreichend bestimmt werden können. Die erreichbare Messqualität hängt von Aufnahme und Oberflächenkontrast ab." },
      { question: "Lassen sich Mehrkomponenten-Kunststoffe trennen?", answer: "Das ist möglich, wenn die Komponenten genügend unterschiedlichen Röntgenkontrast aufweisen. Bei ähnlichen Dichten kann eine eindeutige Segmentierung schwierig sein." },
      { question: "Kann ein komplettes Kunststoffgehäuse montiert geprüft werden?", answer: "Oft ja. Die Machbarkeit hängt von Abmessungen, Materialkombination, enthaltenen Metallteilen und der gesuchten Struktur ab." },
    ],
  },
  {
    name: "Verbundwerkstoffe",
    slug: "verbundwerkstoffe",
    items: [
      { question: "Eignet sich CT für Faserverbundwerkstoffe?", answer: "CT kann innere Strukturen und bestimmte Fehlstellen in Verbundwerkstoffen darstellen. Faserauflösung und Defekterkennbarkeit hängen stark von Materialkontrast und Aufnahmegeometrie ab." },
      { question: "Sind Delaminationen im CT erkennbar?", answer: "Ausreichend geöffnete oder kontrastreiche Trennbereiche können sichtbar sein. Sehr enge, ungünstig orientierte Delaminationen können unterhalb der Nachweisbarkeit liegen." },
      { question: "Kann die Faserorientierung ausgewertet werden?", answer: "Bei geeigneter Auflösung und ausreichendem Kontrast können Orientierungsinformationen abgeleitet werden. Dafür ist eine speziell abgestimmte Aufnahme und Auswertung erforderlich." },
      { question: "Welche Probengeometrie ist für Verbundwerkstoffe günstig?", answer: "Kurze Durchstrahlungswege und eine Positionierung, die das relevante Merkmal günstig abbildet, verbessern die Informationsqualität. Das reale Bauteil bestimmt die mögliche Geometrie." },
    ],
  },
  {
    name: "Baugruppen und Montage",
    slug: "baugruppen-montage",
    items: [
      { question: "Kann eine Baugruppe ohne Demontage geprüft werden?", answer: "Ja, wenn die relevanten Bereiche ausreichend durchstrahlbar sind. Dichte Komponenten können andere Strukturen verdecken oder Artefakte erzeugen." },
      { question: "Lassen sich fehlende Komponenten erkennen?", answer: "Fehlende, falsch positionierte oder abweichende Komponenten können bei ausreichendem Kontrast sichtbar sein, besonders im Vergleich zu einer Referenzbaugruppe." },
      { question: "Kann CT Presssitze und Fügezustände untersuchen?", answer: "Kontaktbereiche, Spalte und Lagebeziehungen können je nach Material und Detailgröße räumlich untersucht werden." },
      { question: "Wie werden Baugruppen mit vielen Metallen geprüft?", answer: "Aufnahmeparameter und Orientierung werden auf die dichten Bereiche abgestimmt. Trotzdem können Metallartefakte und starke Abschattung die Auswertung begrenzen." },
    ],
  },
  {
    name: "CAD und Soll-Ist-Vergleich",
    slug: "cad-soll-ist",
    items: [
      { question: "Welche CAD-Daten eignen sich für einen Soll-Ist-Vergleich?", answer: "Üblich sind geeignete Oberflächen- oder Volumenformate. Format, Koordinatensystem, Version und relevante Toleranzen sollten vorab abgestimmt werden." },
      { question: "Wie werden CT-Daten und CAD ausgerichtet?", answer: "Die Ausrichtung kann über Bezugsmerkmale, definierte Bezugssysteme oder mathematische Best-Fit-Verfahren erfolgen. Die Methode muss zur technischen Fragestellung passen." },
      { question: "Was zeigt eine Farbabweichungskarte?", answer: "Sie visualisiert den Abstand zwischen rekonstruierter Oberfläche und Referenzgeometrie. Sie ersetzt nicht automatisch eine normgerechte Toleranzbewertung." },
      { question: "Kann ein Soll-Ist-Vergleich innere Flächen enthalten?", answer: "Ja. Ein Vorteil der CT ist, dass auch ausreichend rekonstruierbare Innenflächen in den Geometrievergleich einbezogen werden können." },
    ],
  },
  {
    name: "Wandstärkenanalyse",
    slug: "wandstaerkenanalyse",
    items: [
      { question: "Wie wird Wandstärke aus CT-Daten bestimmt?", answer: "Nach Bestimmung von Innen- und Außenoberfläche wird der lokale Abstand mit einem definierten Verfahren berechnet und häufig farblich visualisiert." },
      { question: "Kann die minimale Wandstärke automatisch gefunden werden?", answer: "Software kann lokale Minima ermitteln. Relevanz, Auswertebereich und mögliche Oberflächenfehler müssen fachlich kontrolliert werden." },
      { question: "Eignet sich die Methode für gekrümmte Innenkanäle?", answer: "Gerade bei schwer zugänglichen Innengeometrien kann CT Wandstärken flächenhaft darstellen, sofern beide Grenzflächen ausreichend rekonstruierbar sind." },
      { question: "Ist eine Wandstärkenkarte eine Maßprüfung?", answer: "Sie ist eine geometrische Auswertung. Ob sie als formale Maßprüfung geeignet ist, hängt von Messstrategie, Unsicherheit und Anforderung ab." },
    ],
  },
  {
    name: "Porosität und Segmentierung",
    slug: "porositaet-segmentierung",
    items: [
      { question: "Was bedeutet Segmentierung bei einer Porositätsanalyse?", answer: "Segmentierung trennt rechnerisch Material und Hohlraum. Das Ergebnis hängt von Kontrast, Rauschen, Artefakten und den gewählten Auswerteparametern ab." },
      { question: "Welche Porenkennwerte können ausgegeben werden?", answer: "Möglich sind beispielsweise Volumen, äquivalenter Durchmesser, Oberfläche, Position, Formkennwerte und lokaler Porenanteil." },
      { question: "Warum unterscheiden sich Porenwerte zwischen Auswertungen?", answer: "Unterschiedliche Aufnahmequalität, Schwellenwerte, Filter, Auswertebereiche und Mindestgrößen können zu abweichenden Ergebnissen führen." },
      { question: "Wie bleibt eine Porositätsauswertung vergleichbar?", answer: "Aufnahme, Rekonstruktion, Segmentierung, Region of Interest und Berichtskennwerte müssen für alle Vergleichsteile konsistent definiert werden." },
    ],
  },
  {
    name: "Risse und feine Strukturen",
    slug: "risse-feinstrukturen",
    items: [
      { question: "Warum beeinflusst die Rissorientierung die Erkennbarkeit?", answer: "Ein sehr flacher Riss kann entlang bestimmter Strahl- oder Voxelorientierungen wenig Kontrast erzeugen. Eine günstige Positionierung kann die Sichtbarkeit verbessern." },
      { question: "Ist jeder sichtbare Spalt ein Riss?", answer: "Nein. Geometrische Fugen, Grenzflächen, Artefakte oder Montagezwischenräume können ähnlich erscheinen. Kontext und Bauteilkenntnis sind erforderlich." },
      { question: "Kann Mikro-CT feinere Risse erkennen?", answer: "Höhere geometrische Vergrößerung kann feinere Details darstellen, begrenzt aber häufig die mögliche Bauteilgröße und den abbildbaren Bereich." },
      { question: "Wie wird ein Rissbefund dokumentiert?", answer: "Typisch sind Lage, Orientierung, räumliche Ausdehnung, relevante Schnittbilder und die verwendete Aufnahme- beziehungsweise Auswertungsgrundlage." },
    ],
  },
  {
    name: "Prototypenprüfung",
    slug: "prototypen",
    items: [
      { question: "Warum lohnt sich CT bei einem frühen Prototyp?", answer: "Innere Geometrien und Montagezustände werden sichtbar, bevor Werkzeuge und Prozesse endgültig festgelegt sind. Der Befund kann gezielte Änderungen unterstützen." },
      { question: "Kann derselbe Prototyp nach der CT weiterverwendet werden?", answer: "Die Bildgebung verändert das Bauteil mechanisch nicht. Ob es anschließend für jeden vorgesehenen Zweck geeignet bleibt, muss die konkrete Anwendung bewerten." },
      { question: "Wie werden zwei Prototypenvarianten verglichen?", answer: "Beide Varianten sollten mit abgestimmten Parametern aufgenommen und anhand derselben Merkmale, Auswertebereiche und Referenzen bewertet werden." },
      { question: "Braucht ein Prototyp bereits feste Toleranzen?", answer: "Nicht zwingend. Auch explorative Fragen sind möglich. Für formale Gut-/Schlecht-Entscheidungen werden jedoch definierte Kriterien benötigt." },
    ],
  },
  {
    name: "Erstmuster und Freigabe",
    slug: "erstmuster-freigabe",
    items: [
      { question: "Welche inneren Merkmale können ein Erstmuster ergänzen?", answer: "Je nach Bauteil können innere Geometrie, Wandstärken, Hohlräume, Montagezustände und verdeckte Defekte ergänzt werden." },
      { question: "Ersetzt CT einen vollständigen Erstmusterprüfbericht?", answer: "Nein. CT ist ein Prüf- und Messverfahren innerhalb einer übergeordneten Bemusterungsstrategie. Umfang und normative Anforderungen bleiben projektspezifisch." },
      { question: "Wie werden CT-Ergebnisse freigabefähig dokumentiert?", answer: "Prüfgegenstand, Version, Methode, Ausrichtung, Auswertebereiche, Ergebnisse und Entscheidungskriterien müssen nachvollziehbar festgehalten werden." },
      { question: "Kann eine CT-Prüfung vor Werkzeugfreigabe erfolgen?", answer: "Ja, sobald ein geeignetes Prüfteil vorliegt. Der richtige Zeitpunkt richtet sich danach, welche Konstruktions- oder Prozessentscheidung beeinflusst werden soll." },
    ],
  },
  {
    name: "Serienprüfung und Stichprobe",
    slug: "serie-stichprobe",
    items: [
      { question: "Wie wird ein CT-Stichprobenplan festgelegt?", answer: "Risiko, Prozessfähigkeit, Fehlerart, Losgröße, Prüfdauer und Konsequenzen eines Fehlers bestimmen den geeigneten Umfang. Kinemo ersetzt keine statistische Qualitätsplanung." },
      { question: "Kann die CT-Auswertung automatisiert werden?", answer: "Wiederkehrende Auswertungen lassen sich teilweise automatisieren. Robuste Automatisierung benötigt stabile Bauteillage, Aufnahmequalität und eindeutig definierte Merkmale." },
      { question: "Ist CT für eine 100-Prozent-Prüfung geeignet?", answer: "Das kann bei bestimmten Aufgaben möglich sein, ist aber keine pauschale Eigenschaft. Taktzeit, Bauteilgröße, Datenmenge und Akzeptanzlogik müssen geprüft werden." },
      { question: "Wie werden Prozessveränderungen mit CT überwacht?", answer: "Definierte Referenzzustände und wiederholbare Kennwerte ermöglichen Trend- und Chargenvergleiche. Änderungen der Prüfkonfiguration müssen kontrolliert werden." },
    ],
  },
  {
    name: "Daten und Ausgabeformate",
    slug: "daten-formate",
    items: [
      { question: "Welche CT-Ergebnisse erhält der Auftraggeber?", answer: "Der vereinbarte Umfang kann Bericht, Bilder, Videos, Oberflächenmodelle, Messwerte oder Volumendaten umfassen. Nicht jedes Format ist für jede Aufgabe erforderlich." },
      { question: "Wie groß sind CT-Volumendaten?", answer: "Die Datenmenge hängt von Voxelmatrix, Bittiefe, Rekonstruktionsbereich und Dateiformat ab und kann deutlich größer als ein normaler Bilddatensatz sein." },
      { question: "Können CT-Daten in CAD-Systemen verwendet werden?", answer: "Aus den Volumendaten können je nach Qualität Oberflächenmodelle erzeugt werden. Nachbearbeitung und Format müssen auf den vorgesehenen CAD-Prozess abgestimmt sein." },
      { question: "Wie lange werden Projektdaten gespeichert?", answer: "Speicherdauer und Übergabe müssen im Projekt beziehungsweise in den geltenden Datenschutz- und Vertragsbedingungen festgelegt werden. Die Website macht dazu keine pauschale Zusage." },
    ],
  },
  {
    name: "Anfrage und Angebot",
    slug: "anfrage-angebot",
    items: [
      { question: "Welche Angaben beschleunigen ein CT-Angebot?", answer: "Prüffrage, Bauteilabmessungen, Werkstoffe, Stückzahl, relevante Bereiche, gewünschte Ausgabe und Terminrahmen ermöglichen eine gezielte Einschätzung." },
      { question: "Wovon hängen die Kosten einer CT-Prüfung ab?", answer: "Einfluss haben Aufnahmeaufwand, Bauteilgröße und Material, erforderliche Detailerkennbarkeit, Stückzahl, Rekonstruktion, Auswertung und Berichtsumfang." },
      { question: "Kann vorab eine Machbarkeit eingeschätzt werden?", answer: "Mit aussagekräftigen Bauteildaten und der konkreten Prüffrage kann eine erste technische Einschätzung erfolgen. Eine endgültige Aussage kann eine Vorprüfung erfordern." },
      { question: "Warum ist die Prüffrage wichtiger als nur das Bauteilfoto?", answer: "Dasselbe Bauteil kann sehr unterschiedliche Anforderungen haben. Die Prüffrage bestimmt, welcher Bereich, Kontrast, Datentyp und Auswertungsumfang benötigt wird." },
    ],
  },
  {
    name: "Versand und Bauteilhandling",
    slug: "versand-handling",
    items: [
      { question: "Wie werden Bauteile für den Versand verpackt?", answer: "Prüfteile sollten transportsicher, sauber, eindeutig gekennzeichnet und gegen Lageveränderung oder Beschädigung geschützt verpackt werden." },
      { question: "Welche Kennzeichnung gehört zum Prüfteil?", answer: "Projekt- oder Bauteilnummer, Variante, Stückidentifikation und gegebenenfalls markierter relevanter Bereich verhindern Verwechslungen." },
      { question: "Dürfen mehrere Varianten gemeinsam versendet werden?", answer: "Ja, wenn jede Variante und jedes Teil eindeutig zugeordnet ist. Eine Teileliste mit gewünschtem Vergleich erleichtert den Ablauf." },
      { question: "Müssen Gefahrstoffe vorab angegeben werden?", answer: "Ja. Werkstoffe, Betriebsmedien, Kontaminationen oder sonstige Handhabungsrisiken müssen vor Versand und Prüfung transparent abgestimmt werden." },
    ],
  },
  {
    name: "Vertraulichkeit und Projektdaten",
    slug: "vertraulichkeit",
    items: [
      { question: "Werden Projektdaten öffentlich als Referenz verwendet?", answer: "Nein, nicht ohne dokumentierte Freigabe. Die Website blendet nicht freigegebene Referenzen, Kundennamen und Ergebniskennzahlen standardmäßig aus." },
      { question: "Können vertrauliche CAD-Daten verwendet werden?", answer: "Die erforderliche Datenverarbeitung und Vertraulichkeit sollten vor Übergabe vertraglich und organisatorisch abgestimmt werden." },
      { question: "Welche Daten gehören in eine erste Anfrage?", answer: "Für die erste Einschätzung genügen häufig technische Eckdaten. Vertrauliche Detaildaten sollten erst über den abgestimmten Übertragungsweg bereitgestellt werden." },
      { question: "Veröffentlicht Kinemo anonyme Fallstudien automatisch?", answer: "Nein. Auch anonymisierte Projektdarstellungen bleiben deaktiviert, bis Inhalt und externe Nutzung dokumentiert freigegeben sind." },
    ],
  },
  {
    name: "Region und Standort",
    slug: "region-standort",
    items: [
      { question: "Wo befindet sich Kinemo?", answer: "Die Kinemo GmbH hat ihren Unternehmens- und Laborstandort in der Heinz-Fangman-Str. 2, 42287 Wuppertal." },
      { question: "Bedient Kinemo auch Unternehmen außerhalb Wuppertals?", answer: "Ja. Die regionalen Serviceseiten beschreiben das bediente Umfeld. Sie stellen ausdrücklich keine zusätzlichen Niederlassungen dar." },
      { question: "Wie wird ein Projekt aus einer anderen Stadt abgewickelt?", answer: "Technische Klärung, Übergabe oder Versand und Rückgabe werden projektbezogen abgestimmt. Der Prüfstandort bleibt Wuppertal." },
      { question: "Warum gibt es separate regionale Seiten?", answer: "Sie bündeln Ansprechpartner-, Leistungs- und Ablaufinformationen für regionale Suchintentionen und erklären transparent die Beziehung zum tatsächlichen Standort Wuppertal." },
    ],
  },
]

export const regionalPages: RegionalPage[] = [
  { slug: "wuppertal", city: "Wuppertal", state: "Nordrhein-Westfalen", context: "Kinemo hat seinen Unternehmens- und Laborstandort in Wuppertal. Unternehmen aus dem Bergischen Land können Prüfaufgaben deshalb direkt mit einem regionalen Ansprechpartner abstimmen.", industries: ["Automotive-Zulieferung", "Werkzeug- und Maschinenbau", "Kunststofftechnik"] },
  { slug: "solingen", city: "Solingen", state: "Nordrhein-Westfalen", context: "Für Unternehmen aus Solingen verbindet die industrielle Bildgebung Werkstoff-, Geometrie- und Montagefragen mit einer nachvollziehbaren digitalen Befunddokumentation.", industries: ["Schneidwaren und Metallverarbeitung", "Automotive-Zulieferung", "Kunststoffverarbeitung"] },
  { slug: "remscheid", city: "Remscheid", state: "Nordrhein-Westfalen", context: "Betriebe aus Remscheid können CT und Röntgen für verdeckte Strukturen in Werkzeugen, Maschinenkomponenten, Gussteilen und Baugruppen einsetzen.", industries: ["Werkzeugindustrie", "Maschinenbau", "Metallverarbeitung"] },
  { slug: "velbert", city: "Velbert", state: "Nordrhein-Westfalen", context: "Für die in Velbert stark vertretene Schließ-, Beschlag- und Zuliefertechnik sind innere Montagezustände, Gussporosität und verdeckte Verbindungen typische bildgebende Fragestellungen.", industries: ["Schließ- und Beschlagtechnik", "Automotive-Zulieferung", "Druckguss"] },
  { slug: "duesseldorf", city: "Düsseldorf", state: "Nordrhein-Westfalen", context: "Entwicklungs- und Qualitätsteams aus Düsseldorf erhalten über den Wuppertaler Standort Zugang zu industrieller CT, Röntgenanalyse und technischer Befundauswertung.", industries: ["Medizintechnik", "Elektronik", "Industrie und Engineering"] },
  { slug: "essen", city: "Essen", state: "Nordrhein-Westfalen", context: "Für Unternehmen aus Essen eignet sich industrielle Bildgebung zur Untersuchung komplexer Komponenten aus Energie-, Anlagen-, Werkstoff- und Fertigungstechnik.", industries: ["Energie- und Anlagentechnik", "Werkstofftechnik", "Maschinenbau"] },
  { slug: "bochum", city: "Bochum", state: "Nordrhein-Westfalen", context: "Forschungsnahe Entwicklung und industrielle Fertigung in Bochum profitieren von zerstörungsfreien 3D-Daten für Prototypen, Bauteilvergleiche und Ursachenanalysen.", industries: ["Forschung und Entwicklung", "Automotive", "Maschinenbau"] },
  { slug: "hagen", city: "Hagen", state: "Nordrhein-Westfalen", context: "Unternehmen aus Hagen können metallische und polymere Bauteile sowie Baugruppen auf innere Merkmale untersuchen lassen, ohne sie für die Bildgebung zu zerstören.", industries: ["Metallverarbeitung", "Draht- und Verbindungstechnik", "Kunststofftechnik"] },
  { slug: "schwelm", city: "Schwelm", state: "Nordrhein-Westfalen", context: "Für Schwelmer Industrieunternehmen bietet der Wuppertaler Kinemo-Standort einen regionalen Zugang zu CT- und Röntgenprüfungen für Entwicklung und Qualitätssicherung.", industries: ["Metallverarbeitung", "Kunststofftechnik", "Technische Baugruppen"] },
  { slug: "gevelsberg", city: "Gevelsberg", state: "Nordrhein-Westfalen", context: "Fertigungsunternehmen aus Gevelsberg können verdeckte Defekte und Montagezustände mit 2D-Röntgen oder dreidimensionaler CT untersuchen lassen.", industries: ["Metallverarbeitung", "Automotive-Zulieferung", "Maschinenbau"] },
  { slug: "ennepetal", city: "Ennepetal", state: "Nordrhein-Westfalen", context: "Für Bauteile aus der Ennepetaler Metall- und Zulieferindustrie kann zerstörungsfreie Bildgebung Informationen über Gussqualität, Geometrie und innere Verbindungen liefern.", industries: ["Metallindustrie", "Gießereitechnik", "Automotive-Zulieferung"] },
  { slug: "sprockhoevel", city: "Sprockhövel", state: "Nordrhein-Westfalen", context: "Unternehmen aus Sprockhövel können Prüfprojekte über den Kinemo-Standort in Wuppertal abwickeln, ohne dass eine lokale Niederlassung behauptet wird.", industries: ["Maschinenbau", "Metallverarbeitung", "Technische Kunststoffe"] },
]

export function createRegionalFaqs(region: RegionalPage): FaqItem[] {
  return [
    { question: `Hat Kinemo einen Standort in ${region.city}?`, answer: region.slug === "wuppertal" ? "Ja. Kinemo hat seinen Unternehmens- und Laborstandort in Wuppertal." : `Nein. Der Kinemo-Unternehmens- und Laborstandort befindet sich in Wuppertal. Die Leistungen richten sich auch an Unternehmen aus ${region.city}; Prüfablauf und Bauteilversand werden projektbezogen abgestimmt.` },
    { question: `Welche CT-Leistungen bietet Kinemo für Unternehmen aus ${region.city}?`, answer: "Zum Leistungsspektrum gehören industrielle CT, 2D-Röntgenanalyse, Fehler- und Schadensanalyse, Porositätsauswertung, geometrische Vergleiche und entwicklungsbegleitende Prüfungen. Die Auswahl richtet sich nach der konkreten Prüffrage." },
    { question: `Wie startet ein Prüfprojekt aus ${region.city}?`, answer: "Für die erste technische Einschätzung werden Prüffrage, Bauteilabmessungen, Werkstoffe, Stückzahl und gewünschte Ergebnisse benötigt. Danach werden Verfahren, Datenausgabe und organisatorischer Ablauf abgestimmt." },
    { question: `Können Bauteile aus ${region.city} an Kinemo gesendet werden?`, answer: "Der geeignete Übergabe- oder Versandweg wird im Angebot beziehungsweise vor Projektstart vereinbart. Empfindliche Prüfteile sollten eindeutig gekennzeichnet und transportsicher verpackt werden." },
  ]
}
