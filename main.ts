// SPDX-License-Identifier: MIT
// Make the AI Judge Laugh: the Office Joke Open — writes one office joke to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const joke: string =
  "I asked a 'quick question' on Slack; it became a thread, the thread a doc, the doc a meeting, and the meeting's action item was: ask a quick question.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(joke);
