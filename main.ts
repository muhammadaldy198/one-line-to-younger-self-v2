import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Kid, give your sister the remote, she flies to Australia and you'll still reach for her side of the sofa.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, ENTRY);
chmodSync(target, 0o644);
