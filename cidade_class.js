class City {
    constructor(name, state, numPopulation, numMen, numWomen) {
        this.name = name;
        this.state = state;
        this.numPopulation = numPopulation;
        this.numMen = numMen;
        this.numWomen = numWomen;
    }

    percentageMen() {        
        let percentage = 0.0;
        percentage = (this.numMen / this.numPopulation) * 100.0;
        return percentage;
    }

    percentageWomen() {        
        let percentage = 0.0;
        percentage = (this.numWomen / this.numPopulation) * 100.0;
        return percentage;
    }
}

module.exports = City;