/*
 * Function to calculate how many total bottles of pop can be redeemed given a customer investment.
 * Rules:
 * For every two empty bottles, you can get one free (full) bottle of pop.
 * For every four bottle caps, you can get one free (full) bottle of pop.
 * Each bottle of pop costs $2 to purchase.
 */
const bottles = function() {

  // initialize return object
  const result = {
    drunkBottles:   0,
    emptyBottles:   0,
    caps:           0,
    earnedBottles:  0,
    earnedCaps:     0
  };

  // validate investment and add to result
  if (process.argv.length > 2) {

    result['drunkBottles'] = Math.floor(process.argv[2] / 2);
    result['emptyBottles'] = result['drunkBottles'];
    result['caps'] = result['emptyBottles'];

  } else {

    return result;
  }

  redeem(result);

  // print formatted results
  console.log("TOTAL BOTTLES:", result['drunkBottles']);
  console.log("REMAINING BOTTLES:", result['emptyBottles']);
  console.log("REMAINING CAPS:", result['caps']);
  console.log("TOTAL EARNED:");
  console.log("   BOTTLES:", result['earnedBottles']);
  console.log("   CAPS:", result['earnedCaps']);
};

const redeem = function(object) {
  // base case
  if (object['emptyBottles'] < 2 && object['caps'] < 4) return object;

  // recursive case
  // swap 2 empty bottles for one full bottle
  if (object['emptyBottles'] >= 2) {

    object['drunkBottles'] += 1;
    object['emptyBottles'] -= 1; // 2 out, 1 in
    object['caps'] += 1;
    object['earnedBottles'] += 1;
  }

  // swap 4 caps for one full bottle
  if (object['caps'] >= 4) {

    object['drunkBottles'] += 1;
    object['emptyBottles'] += 1;
    object['caps'] -= 3; // 4 out, 1 in
    object['earnedCaps'] += 1;
  }
  // recall function for next iteration
  redeem(object);
};

bottles();

// expected output:
// investment 10: bottles 15
// investment 20: bottles 35
// investment 30: bottles 55
// investment 40: bottles 75