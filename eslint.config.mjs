import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypeScript from "eslint-config-next/typescript"

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    rules: {
      // These effects hydrate browser-owned state (localStorage and route UI).
      "react-hooks/set-state-in-effect": "off",
    },
  },
  globalIgnores([".next/**", ".audit/**", "node_modules/**", "out/**", "build/**"]),
])
