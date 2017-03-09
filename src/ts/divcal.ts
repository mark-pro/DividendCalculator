class DividendCalc {
    SharePrice: number;
    BaseNumberOfShares: number;

    constructor(sharePrice: number, baseNumberOfShares: number) {
        this.SharePrice = sharePrice;
        this.BaseNumberOfShares = baseNumberOfShares;
    }

    public Print() {
        console.log(this.toString());
    }

    public ToString = () => 
        `{ sharePrice: ${this.SharePrice}, baseNumberOfShares: ${this.BaseNumberOfShares} }`
}

export { DividendCalc };