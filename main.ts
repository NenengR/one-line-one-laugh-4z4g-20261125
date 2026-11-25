// One Line, One Laugh: one funny line to /output/entry.txt (UTF-8, 1-140 chars).
// Chosen line (80 chars): a smart fridge that sends a grocery list and a breakup letter.
// Revision: verified output byte-identical across two runs; line text unchanged.
import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "My smart fridge just sent me a grocery list and a breakup letter, in that order.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
