class DividendCalc {
    SharePrice: number;
    BaseNumberOfShares: number;

    constructor(sharePrice: number, baseNumberOfShares: number) {
        this.SharePrice = sharePrice;
        this.BaseNumberOfShares = baseNumberOfShares;
    }

    public print() {
        console.log(this.toString());
    }

    public toString = () => 
        `{ sharePrice: ${this.SharePrice}, baseNumberOfShares: ${this.BaseNumberOfShares} }`
}

export { DividendCalc };