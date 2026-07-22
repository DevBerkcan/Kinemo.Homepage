/**
 * Indexing is deliberately opt-in so the Vercel staging domain cannot become
 * indexable just because it is the project's production deployment alias.
 * Set SITE_INDEXING_ENABLED=true only for the final www.kinemo.de deployment.
 */
export const isIndexingEnabled = process.env.SITE_INDEXING_ENABLED === "true"

/** Additional city pages stay excluded until their individual local value is approved. */
export const isRegionalContentApproved = process.env.REGIONAL_CONTENT_APPROVED === "true"
