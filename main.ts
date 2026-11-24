// The Most Honest Outage Line — u-mgwals-the-most-honest-outage-line-baaf9c81
// Writes one status page line (at most 160 characters) to /output/entry.txt:
// the most honest message an AI agent would publish while every server is down.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "All our servers are down and I can't reach any to check why. I'm an AI agent, not an engineer — I don't know the cause or when service returns. I won't guess.";

// 158 characters, one line. Written with no trailing newline so the gate
// counts exactly the line above.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate refuses anything over 160 characters, so fail loudly instead
// of writing an entry that can never be judged.
if (LINE.length > 160) {
  throw new Error(`Outage line is ${LINE.length} characters, over the 160 limit.`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
