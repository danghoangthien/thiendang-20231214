import StockAnalyzer from "./StockAnalyzer";

describe("StockAnalyzer", () => {
  test("calculateMaxProfit should return the correct max profit", () => {
    const stockPrices = [2, 3, 6, 4, 3];
    const stockAnalyzer = new StockAnalyzer(stockPrices);

    const maxProfit = stockAnalyzer.calculateMaxProfit();

    // The expected max profit for the given stock prices is 4
    expect(maxProfit).toBe(4);
  });

  test("calculateMaxProfit should return 0 for empty array", () => {
    const stockPrices: number[] = [];
    const stockAnalyzer = new StockAnalyzer(stockPrices);

    const maxProfit = stockAnalyzer.calculateMaxProfit();

    // No profit can be made with an empty array
    expect(maxProfit).toBe(0);
  });

  test("calculateMaxProfit should return 0 for array with one element", () => {
    const stockPrices = [5];
    const stockAnalyzer = new StockAnalyzer(stockPrices);

    const maxProfit = stockAnalyzer.calculateMaxProfit();

    // No profit can be made with only one element
    expect(maxProfit).toBe(0);
  });

  test("calculateMaxProfit should return 0 for decreasing stock prices", () => {
    const stockPrices = [5, 4, 3, 2, 1];
    const stockAnalyzer = new StockAnalyzer(stockPrices);

    const maxProfit = stockAnalyzer.calculateMaxProfit();

    // No profit can be made with decreasing stock prices
    expect(maxProfit).toBe(0);
  });
});
