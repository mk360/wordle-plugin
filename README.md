# Wordle

## Use cases
* Any application: web, server, Discord bots, anything.

## How to use

```ts
import { Wordle } from 'wordle';

const wordleSession = new Wordle({
    word: 'byleth',
    maxAttempts: 6,
});

const attempt1 = wordleSession.attemptGuess('kazuya');

// attempt1:
// letter k: wrong
// letter a: wrong
// letter z: wrong
// letter u: wrong
// letter y: not in the correct place
// letter a: wrong

const remainingAttempts = wordleSession.getRemainingAttempts();

// 5

```
