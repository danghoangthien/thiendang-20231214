export default class StockAnalyzer {
  private stockPrices: number[];

  constructor(stockPrices: number[]) {
    this.stockPrices = stockPrices;
  }

  calculateMaxProfit(): number {
    if (this.stockPrices.length < 2) {
      return 0;
    }

    let minPrice = this.stockPrices[0];
    let maxProfit = 0;

    for (let i = 1; i < this.stockPrices.length; i++) {
      const currentPrice = this.stockPrices[i];

      const currentProfit = currentPrice - minPrice;

      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }

      if (currentPrice < minPrice) {
        minPrice = currentPrice;
      }
    }

    return maxProfit;
  }
}

// const stockPriceList = [2, 3, 6, 4, 3];
// const stockAnalyzer = new StockAnalyzer(stockPriceList);
// const maxProfit = stockAnalyzer.calculateMaxProfit();
// console.log(maxProfit); // expected: 4
