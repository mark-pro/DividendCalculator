class Result {
    public numberOfShares: number;
    public folioValue: number;
    public remainingMoney: number;

    constructor(numberOfShares: number, remainingMoney: number, pricePerShare: number) {
        this.numberOfShares = numberOfShares;
        this.remainingMoney = remainingMoney;
        this.folioValue = this.numberOfShares * pricePerShare + remainingMoney;
    }

    public toString = () => JSON.stringify(this);
}

class DividendCalc {
    sharePrice: number;
    baseNumberOfShares: number;
    dividendPercentage: number;
    numberOfYears: number;
    results = new Array<Result>(); 

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

    public start() {
        let dividend = this.baseNumberOfShares * this.sharePrice * this.dividendPercentage / 100;
        dividend = Round(dividend, 2);
        console.log(dividend);
        let newShares = Math.floor(dividend / this.sharePrice);
        let remainingMoney = Round(dividend % this.sharePrice, 2);
        let result = new Result(this.baseNumberOfShares + newShares, remainingMoney, this.sharePrice);
        this.results.push(result);
        this.calculate(result, this.numberOfYears - 1);
    }

    private calculate(result: Result, count: number) {
        let total = result.remainingMoney + (this.sharePrice * result.numberOfShares);
        let dividend = total * (this.dividendPercentage / 100);
        let newShares = Math.floor(dividend / this.sharePrice);
        let remainingMoney = Round(dividend % this.sharePrice, 2);
        let newResult = new Result(
            newShares + result.numberOfShares,
            remainingMoney,
            this.sharePrice);
        this.results.push(newResult);
        if (--count > 0)
            this.calculate(newResult, count);
    }

    public print() {
        console.log(this.toString());
    }

    public toString = () => JSON.stringify(this);
}

let Round = (value: number, decimals: number) =>
    Number(value.toFixed(decimals));

export { DividendCalc };