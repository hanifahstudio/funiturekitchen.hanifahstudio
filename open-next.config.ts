import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// Always build the Next.js app with npm so CI builds behave the same
// everywhere, regardless of which package manager detects the lockfile.
config.buildCommand = "npm run build";

export default config;
