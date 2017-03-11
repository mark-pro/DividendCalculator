class Result {
    public numberOfShares: number;
    public folioValue: number;
    public remainingMoney: number;

    constructor(numberOfShares: number, remainingMoney: number, pricePerShare: number) {
        this.numberOfShares = numberOfShares;
        this.remainingMoney = remainingMoney;
        this.folioValue = this.numberOfShares * pricePerShare + remainingMoney;
    }

    public toString = () => 
        JSON.stringify(this);
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
        this.setFirstResult();
    }

    private setFirstResult = () => {
        let total = this.baseNumberOfShares * this.sharePrice;
        let result = new Result(
            this.baseNumberOfShares + this.calculateNewShares(total), 
            this.calculateRemainingMoney(total), 
            this.sharePrice
        );

        this.results.push(result);
    }

    public start = () =>
        this.calculate(4 * this.numberOfYears - 1);

    private calculate(count: number) {
        let previousResult = this.results[this.results.length - 1];
        let total = previousResult.remainingMoney + 
            (this.sharePrice * previousResult.numberOfShares);
        this.results.push(this.createResult(total));
        
        if (--count > 0)
            this.calculate(count);
    }

    private calculateDividend = (total: number) =>
        total * (this.dividendPercentage / 100); 

    private calculateNewShares = (total: number) =>
        Math.floor(this.calculateDividend(total) / this.sharePrice);
    
    private calculateRemainingMoney = (total: number) =>
        Round(this.calculateDividend(total) % this.sharePrice, 2);

    private createResult = (total: number) =>
        new Result(
            this.calculateNewShares(total) + this.results[this.results.length - 1].numberOfShares ,
            this.calculateRemainingMoney(total) ,
            this.sharePrice
        );

    public print() {
        console.log(this.toString());
    }

    public toString = () => 
        JSON.stringify(this);
}

let Round = (value: number, decimals: number) =>
    Number(+value.toFixed(decimals));

export { DividendCalc };