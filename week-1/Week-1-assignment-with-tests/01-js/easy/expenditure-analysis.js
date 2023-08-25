/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function createObject(category, amount) {
  return {
    category: category,
    totalSpent: amount
  };
}



function calculateTotalSpentByCategory(transactions) {

  let output = [];

  for (let t = 0; t < transactions.length; t++) {

    let i = 0;
    let category = transactions[t].category;

    for (i; i < output.length; i++) {
      if (output[i].category.toUpperCase() === category.toUpperCase()) {
        output[i].totalSpent += transactions[t].price;
        break;
      }
    }

    if (i == output.length) {
      let obj = createObject(category, transactions[t].price);
      output.push(obj);
    }
  }

  return output;
}

module.exports = calculateTotalSpentByCategory;