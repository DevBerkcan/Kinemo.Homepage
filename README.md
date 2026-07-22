# Kinemo Homepage

Marketing-Website der Kinemo GmbH für industrielle CT- und Röntgenanalyse. Die Anwendung basiert auf Next.js mit App Router, React, TypeScript und Tailwind CSS.

## Lokale Entwicklung

Voraussetzungen:

- Node.js 22 (`.nvmrc`)
- npm

```bash
npm ci
npm run dev
```

Die Website ist anschließend unter `http://localhost:3000` erreichbar.

## Umgebungsvariablen

```bash
Copy-Item .env.example .env.local
```

Die SMTP-Werte werden erst beim Versand einer Anfrage benötigt. Der Produktions-Build läuft bewusst ohne Secrets. Microsoft Clarity wird ausschließlich nach einer Einwilligung geladen; die öffentliche Projekt-ID kann über `NEXT_PUBLIC_CLARITY_PROJECT_ID` überschrieben werden.

Testimonials und Fallstudien bleiben standardmäßig ausgeblendet, bis Namen, Zitate und Unternehmenszuordnungen dokumentiert freigegeben wurden. Erst danach darf `REFERENCE_CONTENT_APPROVED=true` gesetzt werden. Dasselbe gilt für die Kennzahlen im Gründerbereich über `KINEMO_METRICS_APPROVED=true`.

## Qualitätsprüfungen

```bash
npm run typecheck
npm run lint
npm run build
npm run check
npm audit --audit-level=low
```

`npm run check` führt TypeScript, ESLint und den Produktions-Build nacheinander aus.

## Indexierungsfreigabe

Die Indexierung ist bewusst opt-in. Preview- und Staging-Deployments müssen `SITE_INDEXING_ENABLED=false` verwenden und liefern damit Meta-Robots, `robots.txt` und `X-Robots-Tag` als Sperre aus. Erst beim verifizierten Domainwechsel auf `https://www.kinemo.de` darf die Variable in der Production-Umgebung auf `true` gesetzt werden. Danach müssen Startseite, `robots.txt`, Sitemap und eine Unterseite extern kontrolliert werden.

Weitere Stadtseiten außer Wuppertal bleiben zusätzlich mit `REGIONAL_CONTENT_APPROVED=false` außerhalb von Index und Sitemap, bis ihr individueller regionaler Inhalt bestätigt wurde. Clarity-Conversion-Events werden ausschließlich nach erteilter Analyse-Einwilligung ausgelöst.

## CI/CD

GitHub Actions prüft Pull Requests und Pushes auf `main` mit Node.js 22:

1. reproduzierbare Installation über `npm ci`
2. TypeScript
3. ESLint
4. Produktions-Build
5. Security-Audit der Produktionsabhängigkeiten

Dependabot erstellt wöchentlich gebündelte Pull Requests für npm-Abhängigkeiten und monatlich für GitHub Actions.

Das Deployment kann über die Vercel-Git-Integration erfolgen. Ein eigenes CLI-Deployment benötigt die GitHub-Secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` und `VERCEL_PROJECT_ID` und ist derzeit bewusst nicht im Workflow aktiviert.

## Wichtige Verzeichnisse

- `src/app` – App-Router-Seiten, Layouts und Route Handler
- `src/app/api/contact` – validierter Kontakt- und Terminversand
- `src/lib` – gemeinsame Daten-, SEO- und Formularlogik
- `public` – statische Assets
