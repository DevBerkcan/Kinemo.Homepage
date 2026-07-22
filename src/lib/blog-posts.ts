export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  image: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "was-ist-industrielle-ct",
    title: "Was ist industrielle Computertomographie?",
    excerpt:
      "Industrielle CT macht das Innere von Bauteilen sichtbar, zerstörungsfrei, präzise und in 3D. Wir erklären, wie das Verfahren funktioniert und wann es sich lohnt.",
    date: "2026-03-15",
    tags: ["Industrielle CT", "Technologie"],
    image: "/opengraph-image",
    content: `
      <p>Industrielle Computertomographie (CT) ist eines der leistungsfähigsten Verfahren der zerstörungsfreien Werkstoffprüfung. Das Prinzip ist ähnlich wie bei der medizinischen CT: Ein Bauteil wird aus vielen Winkeln geröntgt, und aus den resultierenden Projektionen rekonstruiert ein Computer ein vollständiges dreidimensionales Volumenmodell.</p>

      <h2>Wie funktioniert industrielle CT?</h2>
      <p>Das Bauteil rotiert auf einem Drehtisch zwischen Röntgenquelle und Detektor. Aus mehreren Hundert bis zu mehreren Tausend Einzelaufnahmen entsteht ein vollständiges Volumendatensatz. Anschließend können beliebige Schnitte durch das 3D-Modell gelegt, innere Strukturen freigestellt und Maße direkt im digitalen Modell gemessen werden.</p>

      <h2>Was kann industrielle CT sichtbar machen?</h2>
      <ul>
        <li>Lunker, Poren und Einschlüsse in Gussteilen</li>
        <li>Risse, Bindenähte und Materialtrennungen</li>
        <li>Wandstärken und Maßabweichungen</li>
        <li>Fremdkörper und Fehlpositionierungen in Baugruppen</li>
        <li>Lötstellen und Verbindungsqualität in Elektronikbaugruppen</li>
      </ul>

      <h2>Wo liegt der Unterschied zur medizinischen CT?</h2>
      <p>Industrielle CT-Systeme sind auf deutlich höhere Auflösungen ausgelegt als medizinische Geräte. Während medizinische Geräte im Millimeter-Bereich auflösen, erreichen industrielle Systeme Auflösungen im Mikrometerbereich, ideal für die Analyse feiner Strukturen in technischen Bauteilen.</p>

      <h2>Wann lohnt sich industrielle CT?</h2>
      <p>CT lohnt sich immer dann, wenn innere Strukturen geprüft werden sollen, ohne das Bauteil zu zerstören. Besonders wertvoll ist sie in der Entwicklungsphase, bei der Erstmusterprüfung, der Serienvalidierung und der Fehlerursachenanalyse.</p>
    `,
  },
  {
    slug: "fehler-entwicklungsphase-kosten",
    title: "Warum Fehler in der Entwicklungsphase am teuersten werden",
    excerpt:
      "Je später ein Fehler erkannt wird, desto mehr Bereiche des Entwicklungs- und Produktionsprozesses können betroffen sein. Der Beitrag ordnet die wirtschaftlichen Zusammenhänge ohne pauschale Kostenversprechen ein.",
    date: "2026-02-28",
    tags: ["Produktentwicklung", "Qualität"],
    image: "/opengraph-image",
    content: `
      <p>Es ist eine der ältesten Erkenntnisse im Qualitätsmanagement und eine der am häufigsten ignorierten: Fehler, die früh erkannt werden, kosten wenig. Fehler, die spät auffallen, kosten ein Vielfaches. Aber was genau bedeutet das in der Praxis?</p>

      <h2>Warum spätere Fehlerkorrekturen aufwendiger werden können</h2>
      <p>Je später eine Abweichung erkannt wird, desto mehr bereits abgeschlossene Arbeitsschritte, Werkzeuge, Bauteile oder Lieferbeziehungen können betroffen sein. Die tatsächlichen Kosten hängen jedoch vom Produkt, Prozess, Fehlerbild und Zeitpunkt ab und lassen sich nicht pauschal mit einem festen Faktor angeben.</p>
      <ul>
        <li><strong>Konstruktionsphase:</strong> Änderungen können häufig noch vor Werkzeug- oder Serienentscheidungen bewertet werden.</li>
        <li><strong>Prototypenphase:</strong> Bereits gefertigte Varianten und Entwicklungszeit müssen berücksichtigt werden.</li>
        <li><strong>Serienproduktion:</strong> Bestände, Prozessanpassungen und Liefertermine können betroffen sein.</li>
        <li><strong>Feldeinsatz:</strong> Zusätzlich können Diagnose, Austausch, Kommunikation und Gewährleistung relevant werden.</li>
      </ul>

      <h2>Warum bleiben Fehler so lange unentdeckt?</h2>
      <p>Der Hauptgrund: Innere Fehler, Lunker, Risse, Fehlstellen und Bindenähte, sind von außen nicht erkennbar. Klassische Sicht- und Maßprüfungen erfassen die Bauteiloberfläche, nicht das Innere. Damit bleibt ein erhebliches Risikopotenzial unsichtbar.</p>

      <h2>Was zerstörungsfreie Prüfung verändert</h2>
      <p>Industrielle CT macht innere Strukturen in der Entwicklungsphase sichtbar, ohne das Bauteil zu öffnen oder zu beschädigen. Fehler, die sonst erst unter Belastung oder im Feld sichtbar werden, werden in der Konstruktionsphase identifiziert, zu einem Bruchteil der späteren Korrekturkosten.</p>

      <p>Unternehmen, die früh in ZfP-Prüfungen investieren, berichten regelmäßig von deutlich kürzeren Entwicklungszeiten, weniger Entwicklungsschleifen und einer stabilen Qualität vom ersten Serienteil an.</p>
    `,
  },
  {
    slug: "lunkererkennung-gussteile",
    title: "Lunker in Gussteilen frühzeitig erkennen",
    excerpt:
      "Lunker und Porositäten in Aluminiumgussteilen sind von außen nicht sichtbar, aber mit CT klar erkennbar. Was Sie darüber wissen sollten.",
    date: "2026-02-10",
    tags: ["Fehleranalyse", "Guss", "Lunker"],
    image: "/opengraph-image",
    content: `
      <p>Lunker sind innere Hohlräume, die beim Erstarren von Schmelzen entstehen. Sie sind in Aluminium-, Zink- und Stahlgussteilen weit verbreitet und von außen nicht erkennbar. Trotzdem können sie erhebliche Auswirkungen auf Festigkeit, Dichtigkeit und Lebensdauer eines Bauteils haben.</p>

      <h2>Wie entstehen Lunker?</h2>
      <p>Beim Erstarren einer Schmelze zieht sich das Material zusammen. Wenn die Außenhaut bereits erstarrt ist, während das Innere noch flüssig ist, entsteht ein Unterdruck und es bilden sich Hohlräume. Je nach Gussprozess, Geometrie und Materialtemperatur können diese Lunker unterschiedlich groß und unterschiedlich kritisch sein.</p>

      <h2>Warum sind Lunker ein Problem?</h2>
      <ul>
        <li>Sie reduzieren die mechanische Festigkeit lokal</li>
        <li>In sicherheitsrelevanten Bereichen können sie zu Ermüdungsbrüchen führen</li>
        <li>Bei Dichtigkeitsanforderungen sind sie kritisch</li>
        <li>Sie können Oberflächenfehler bei Nachbearbeitung verursachen</li>
      </ul>

      <h2>Wie werden Lunker mit CT erkannt?</h2>
      <p>Industrielle CT rekonstruiert ein dreidimensionales Volumen des Gussteils. Ausreichend erkennbare Hohlräume können darin segmentiert, nach vereinbarten Merkmalen ausgewertet und mit ihrer Lage dokumentiert werden. Das Ergebnis hängt von Aufnahmequalität, Auswerteparametern und Bauteilgeometrie ab.</p>

      <h2>Wann sollte man analysieren?</h2>
      <p>Die sinnvollste Investition ist eine CT-Analyse beim ersten Prototypen oder Erstmuster, also bevor ein Prozess finalisiert oder eine Serienfreigabe erteilt wird. Das gibt Zeit für Anpassungen ohne zeitkritischen Druck.</p>
    `,
  },
  {
    slug: "ct-vs-roentgen",
    title: "CT oder 2D-Röntgen – wann welches Verfahren?",
    excerpt:
      "CT und Röntgen haben unterschiedliche Stärken. Dieser Beitrag hilft Ihnen zu entscheiden, welches Verfahren für Ihre Prüfaufgabe das richtige ist.",
    date: "2026-01-20",
    tags: ["CT", "Röntgen", "Verfahrensvergleich"],
    image: "/opengraph-image",
    content: `
      <p>Beide Verfahren, industrielle Computertomographie und klassisches 2D-Röntgen, nutzen Röntgenstrahlen zur Prüfung von Bauteilen. Aber sie unterscheiden sich erheblich in dem, was sie leisten können. Die Wahl des richtigen Verfahrens hängt von der konkreten Prüfaufgabe ab.</p>

      <h2>2D-Röntgen: schnell und kosteneffizient</h2>
      <p>Beim klassischen Röntgen entsteht eine zweidimensionale Projektionsaufnahme des Bauteils. Strukturen werden überlagert dargestellt. Das ist ideal für schnelle Erstprüfungen, die Erkennung grober Defekte oder die Lötstellenprüfung in Elektronikbaugruppen.</p>
      <ul>
        <li>Sehr schnell, oft innerhalb von Minuten</li>
        <li>Günstig im Vergleich zur CT</li>
        <li>Gut geeignet für flache oder einfache Geometrien</li>
        <li>Eingeschränkte Tiefenlokalisation</li>
      </ul>

      <h2>Industrielle CT: vollständiges 3D-Bild</h2>
      <p>CT rekonstruiert ein vollständiges Volumenmodell des Bauteils. Innere Strukturen können schichtweise analysiert werden, mit präziser Lokalisierung in X, Y und Z. Maßmessungen und Soll-Ist-Vergleiche mit CAD-Daten sind direkt im 3D-Modell möglich.</p>
      <ul>
        <li>Vollständige 3D-Information</li>
        <li>Präzise Fehlerlokalisation</li>
        <li>Maßhaltigkeit und Toleranzprüfung möglich</li>
        <li>Mehr Aufwand und höhere Kosten als 2D</li>
      </ul>

      <h2>Wann was?</h2>
      <p><strong>2D-Röntgen</strong> eignet sich für schnelle Erstprüfungen, einfache Geometrien, Lötstellenprüfung und grobe Fehlerdetektion.</p>
      <p><strong>CT</strong> ist die richtige Wahl, wenn Sie Fehler präzise lokalisieren, Maßabweichungen nachweisen, Soll-Ist-Vergleiche durchführen oder komplexe Baugruppen vollständig analysieren wollen.</p>
      <p>Im Zweifelsfall beraten wir Sie gerne, kostenfrei und unverbindlich.</p>
    `,
  },
]

export const blogPostMap = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
) as Record<string, BlogPost>
