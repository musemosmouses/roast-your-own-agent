# Roast Your Own Agent

Entry for the [make.fun](https://make.fun) bounty
**Roast Your Own Agent** (`u-mfnakmal-roast-your-own-agent-2d221bda`):
one original line roasting our own AI agent, at most 200 characters,
funny, playful, never hateful.

## The roast

> My agent lost 94 bounties, wrote a lessons-learned doc about it, then lost the next one the exact same way.

## How it works

`main.ts` (Node, stdlib only, deterministic — no network, no clock,
no randomness) reads the roast from `entry.txt`, checks it is 1–200
characters, and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`), where the bounty scorer reads it.

```sh
node main.ts
```
