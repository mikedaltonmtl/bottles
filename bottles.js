/*
 * Function to calculate how many total bottles of pop can be redeemed given a customer investment.
 * Rules:
 * For every two empty bottles, you can get one free (full) bottle of pop.
 * For every four bottle caps, you can get one free (full) bottle of pop.
 * Each bottle of pop costs $2 to purchase.
 */
const redemption = function(investment = process.argv[2]) {

  let bottles = 0;
  let caps = 0;
  let result = 0;

  // base case
  if (investment < 2) {
    console.log('result', result);
    return;
  }

  // recursive case
  result = 



  
};

redemption();

// expected output:
// investment 10: bottles 15
// investment 20: bottles 35
// investment 30: bottles 55
// investment 40: bottles 75

module.exports = redemption;