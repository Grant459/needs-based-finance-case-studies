import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Must match the GitHub repository name for project Pages deployments.
  base: "/needs-based-finance-case-studies/",
  plugins: [react()],
});
