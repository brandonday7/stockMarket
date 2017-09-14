function maxProfit(stockPricesArray) {
  let max = -1;
  for (index in stockPricesArray)
  {
    if (index == stockPricesArray.length -1)
    {
      break;
    }
    for (let i = Number(index) + 1; i < stockPricesArray.length; i++)
    {
      let profit = stockPricesArray[i] - stockPricesArray[index];
      if (profit > max)
      {
        max = profit;
      }
    }
  }
  return max;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));