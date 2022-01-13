// Given the Cost Price(CP) and Selling Price(SP) of a product.Write a Program to Calculate the Profit or Loss.

//     Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

let getProfitOrLoss = (cp, sp) => {
      let result = sp - cp
      return result ? `${result} Profit` : `${result} Loss`
}

console.log(getProfitOrLoss(1500,2000));
console.log(getProfitOrLoss(3125,1125));