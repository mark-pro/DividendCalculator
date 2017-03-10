class Result {
    public numberOfShares: number;
    public folioValue: number;
    public remainingMoney: number;

    constructor(numberOfShares: number, remainingMoney: number, pricePerShare: number) {
        this.numberOfShares = numberOfShares;
        this.remainingMoney = remainingMoney;
        this.folioValue = this.numberOfShares * pricePerShare + remainingMoney;
        this.folioValue = Round(this.folioValue , 2);
    }

    public toString = () => JSON.stringify(this);
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

    public Start() {
        let dividend = this.baseNumberOfShares * this.sharePrice * this.dividendPercentage / 100;
        dividend = Round(dividend , 2);
        let newShares = Math.floor(dividend / this.sharePrice);
        let remainingMoney = Round(dividend % this.sharePrice, 2);
        let result = new Result(this.baseNumberOfShares + newShares, remainingMoney, this.sharePrice);
        this.results.push(result);
        this.Calculate(result, this.numberOfYears)
    }

    private Calculate(result: Result, count: number) {
        if (count > 0) {


        }

        count--;        
    }

    public print() {
        console.log(this.toString());
    }

    public toString = () => JSON.stringify(this);
}

let Round = (value: number, decimals: number) =>
    Number(value.toFixed(decimals));

export { DividendCalc };