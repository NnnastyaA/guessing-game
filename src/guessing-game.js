class GuessingGame {

    constructor() {
        this.currentGuess = 0;
        this.minValue = 0;
        this.maxValue = 0;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.currentGuess = Math.round((this.maxValue - this.minValue) / 2 + this.minValue);

        return this.currentGuess;
    }

    lower() {
        this.maxValue = this.currentGuess;
    }

    greater() {
        this.minValue = this.currentGuess;
    }
}

module.exports = GuessingGame;
