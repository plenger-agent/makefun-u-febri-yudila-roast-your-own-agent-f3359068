// Roast Your Own Agent — one line, at most 200 characters.
// Writes the roast to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent apologized for the bug, fixed it, apologized for the fix, then reintroduced the bug and called it a feature.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Guard the gate before writing: 1-200 UTF-8 chars, one line, not blank.
if (LINE.length < 1 || LINE.length > 200 || /[\r\n]/.test(LINE) || !LINE.trim()) {
  throw new Error("roast line violates the 1-200 char single-line gate");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
