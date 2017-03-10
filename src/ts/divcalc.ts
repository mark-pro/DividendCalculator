class Result {
    numberOfShares: string;
    folioValue: number;
    
    constructor(numberOfShares: string, folioValue: number) {
        this.numberOfShares = numberOfShares;
        this.folioValue = folioValue;
    }
}

class DividendCalc {
    sharePrice: number;
    baseNumberOfShares: number;
    dividendPercentage: number;
    numberOfYears: number;
    results: Result[]; 

    constructor(
        sharePrice: number,
        baseNumberOfShares: number,
        dividendPercentage: number,
        numberOfYears: number) {
        
        this.sharePrice = sharePrice;
        this.baseNumberOfShares = baseNumberOfShares;
        this.dividendPercentage = dividendPercentage;
        this.numberOfYears = numberOfYears;
    }



    public print() {
        console.log(this.toString());
    }

    public toString = () => JSON.stringify(this);
}

export { DividendCalc };