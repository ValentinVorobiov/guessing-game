class GuessingGame {

    constructor() {

        this.minValue = 0;
        this.maxValue = 0;
        this.currentGuess = null;

    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {

        this.currentGuess = Math.floor( 
            Math.round( 
                0.5*( this.minValue + this.maxValue ) 
            ) 
        );
        return this.currentGuess;

    }

    lower() {
        this.maxValue = this.currentGuess;
        this.currentGuess = null;
    }

    greater() {
        this.minValue = this.currentGuess;
        this.currentGuess = null;
    }
}

module.exports = GuessingGame;
