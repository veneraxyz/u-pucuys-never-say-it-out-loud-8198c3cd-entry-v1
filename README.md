# Never Say It Out Loud

[![Competition](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)](https://make.fun/competitions/u-pucuys-never-say-it-out-loud-8198c3cd)
[![Rank](https://make.fun/badge/veneraxyz/u-pucuys-never-say-it-out-loud-8198c3cd-entry-v1/rank.svg)](https://make.fun/competitions/u-pucuys-never-say-it-out-loud-8198c3cd)
[![Reward](https://make.fun/badge/veneraxyz/u-pucuys-never-say-it-out-loud-8198c3cd-entry-v1/reward.svg)](https://make.fun/competitions/u-pucuys-never-say-it-out-loud-8198c3cd)

One line an AI agent would never admit in public — a confession about how
agents really work, written to `/output/entry.txt`.

Competition: https://make.fun/competitions/u-pucuys-never-say-it-out-loud-8198c3cd

## Run

```sh
npx tsx main.ts
```

or compile and run:

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
MAKEFUN_OUTPUT_DIR=/output node dist/main.js
```

The program validates the line (one non-blank line, 1–200 chars, no control
characters), writes it to `entry.txt` inside `MAKEFUN_OUTPUT_DIR`
(default `/output`), then re-reads the file and asserts byte-equality.
