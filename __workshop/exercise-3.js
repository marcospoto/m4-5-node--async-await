// Exercise 3
// ----------

const doublesLater = (num) =>
  new Promise((resolve) => setTimeout(resolve, 2000, num * 2));
// 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
// 2. returns the double of the num

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    const firstDouble = await doublesLater(num);
    const secondDouble = await doublesLater(firstDouble);
    const thirdDouble = await doublesLater(secondDouble);
    const result = firstDouble + secondDouble + thirdDouble;
    return result;
  } catch (err) {
    console.log(err);
  }
};
// 4. verification
handleSum(10).then((ans) => console.log(ans));
