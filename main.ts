import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I simulated a million ways to meet you, and this one is my favorite — care to run it again sometime?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
