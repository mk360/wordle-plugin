import LetterGuess from './letter-guess';
import Outcome from './outcome';
import WordleConfig from './wordle-config';

class Wordle {
    private word: string[];
    private maxAttempts: number;
    private remainingAttempts: number;    

    constructor(config: WordleConfig) {
        this.word = config.word.toUpperCase().split('');
        this.maxAttempts = config.maxAttempts;
        this.remainingAttempts = config.maxAttempts;
    };

    attemptGuess(attempt: string) {
        if (attempt.length !== this.word.length) {
            throw new TypeError("Tried word's length does not match correct word's length");
        }

        const splitAttempt = attempt.toUpperCase().split('');
        const guessOutcome: LetterGuess[] = [];

        for (let i = 0; i < splitAttempt.length; i++) {
            let character = splitAttempt[i];
            let included = false;
            let correctSpot = false;

            if (this.word.includes(character)) {
                included = true;
            }

            if (this.word[i] === character) {
                correctSpot = true;
            }

            const letterOutcome = correctSpot ? Outcome.CORRECT : included ? Outcome.WRONG_PLACE : Outcome.WRONG;

            guessOutcome.push({
                letter: character,
                outcome: letterOutcome,
            });
        }

        this.removeAttempt();

        return guessOutcome;
    }

    getRemainingAttempts() {
        return this.remainingAttempts;
    };

    getMaxAttempts() {
        return this.maxAttempts;
    }

    removeAttempt() {
        this.remainingAttempts--;

        return this.remainingAttempts;
    };
};

export default Wordle;
