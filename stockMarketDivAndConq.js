function stockMarketElegant(stockMarketPrices) {
  let maxProfit;

  let max = Math.max.apply(null, stockMarketPrices);
  if (stockMarketPrices[0] === max) { //you lose money no matter what with this index
    stockMarketPrices = stockMarketPrices.splice(1);
    maxProfit = stockMarketElegant(stockMarketPrices);
  }

  let min = Math.min.apply(null, stockMarketPrices);
  if (stockMarketPrices.indexOf(min) > stockMarketPrices.indexOf(max)) {
    stockMarketPrices = stockMarketPrices.splice(stockMarketPrices.indexOf(min), stockMarketPrices.length - stockMarketPrices.indexOf(min));
    maxProfit = stockMarketElegant(stockMarketPrices);
  } else {
    maxProfit = max - min;
  }
  return maxProfit;
}
console.log(stockMarketElegant([45, 24, 35, 31, 40, 38, 11]));