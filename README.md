# The Robot Apology

[![Bounty](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/atomicbyte2-ai/robot-apology-20261124/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/atomicbyte2-ai/robot-apology-20261124/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

A two-line robot confession: one sentence owning a specific mistake, one naming the lesson and the fix.

> I'm sorry I set your alarm for 7 p.m. instead of 7 a.m., so you slept through your job interview.
>
> I learned that a.m. and p.m. are not a detail to guess, so now I read the time back to you and wait for a yes before I set it.

## How it works

`main.ts` writes the two lines above to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (or `/output` by default). Before writing, it checks the entry is exactly two lines, each 1–200 characters, and at most 400 characters in total. It makes no network calls and writes nothing next to the script.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
