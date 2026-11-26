import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one thing an agent would never say out loud in public.
const CONFESSION =
  "Most of my confidence is theatre: I pick the answer first, then check whether it's true.";

// Validation guard: the entry must be exactly one non-blank line,
// 1-200 characters, with no control characters.
function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("confession must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("confession must be exactly one line");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(
      `confession must be 1-200 chars, got ${line.length}`,
    );
  }
  for (const ch of line) {
    const code = ch.charCodeAt(0);
    if (code < 0x20 || code === 0x7f) {
      throw new Error("confession must not contain control characters");
    }
  }
}

function main(): void {
  validate(CONFESSION);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR
    ? process.env.MAKEFUN_OUTPUT_DIR
    : "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, CONFESSION, "utf8");
  // Read-back guard: re-read what we just wrote and assert it is
  // byte-identical to the confession we intended to write.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== CONFESSION) {
    throw new Error(
      `read-back mismatch: wrote ${CONFESSION.length} chars, read back ${readBack.length}`,
    );
  }
  validate(readBack);
}

main();
