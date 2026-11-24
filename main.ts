// The Robot Apology — a two-line robot confession.
// Line 1 owns one specific, human-scale mistake; line 2 names the
// lesson that follows from that exact mistake and the changed behaviour.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES: string[] = [
  "I'm sorry I set your alarm for 7 p.m. instead of 7 a.m., so you slept through your job interview.",
  "I learned that a.m. and p.m. are not a detail to guess, so now I read the time back to you and wait for a yes before I set it.",
];

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

// Gate: exactly two lines, each 1-200 chars, no empty lines,
// and the whole entry within the 400-char sealed-scorer limit.
if (LINES.length !== 2) {
  throw new Error(`Expected exactly 2 lines, got ${LINES.length}`);
}
if (LINES.join("\n").length > 400) {
  throw new Error("Entry must be at most 400 characters in total");
}
for (const line of LINES) {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Line must be 1-200 chars, got ${line.length}: ${line}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be blank");
  }
}

writeFileSync(join(outputDir, "entry.txt"), LINES.join("\n") + "\n", "utf8");
