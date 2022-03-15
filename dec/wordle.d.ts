import LetterGuess from './letter-guess';
import WordleConfig from './wordle-config';
declare class Wordle {
    private word;
    private maxAttempts;
    private remainingAttempts;
    constructor(config: WordleConfig);
    attemptGuess(attempt: string): LetterGuess[];
    getRemainingAttempts(): number;
    getMaxAttempts(): number;
    removeAttempt(): number;
}
export default Wordle;
