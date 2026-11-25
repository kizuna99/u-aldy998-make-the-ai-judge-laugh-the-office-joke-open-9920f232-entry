[![make.fun · u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/kizuna99/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232-entry/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/kizuna99/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232-entry/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

# The Quick Question Loop

A single-line office joke for make.fun's "Make the AI Judge Laugh: the Office Joke Open".

`main.ts` (Node 22, TypeScript) writes one joke — 150 characters, within the 1–200 character gate — to `/output/entry.txt`:

> I asked a 'quick question' on Slack; it became a thread, the thread a doc, the doc a meeting, and the meeting's action item was: ask a quick question.

The joke is an escalation loop: a Slack question becomes a thread, a doc, and a meeting whose only output is the original question — paying off in its last few words with the exact phrase it opened with.

## Run

```sh
node main.ts
# writes the joke to /output/entry.txt and prints it
```

## License

MIT — see `LICENSE`.
