// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// Writes the single-line roast in entry.txt to /output/entry.txt.
// Deterministic: no network, no clock, no randomness.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const roast = readFileSync(join(repoDir, "entry.txt"), "utf8").trim();

// The gate scores /output/entry.txt: 1 to 200 characters, UTF-8, not blank.
if (roast.length < 1 || roast.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${roast.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
