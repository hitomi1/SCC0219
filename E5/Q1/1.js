const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9];

function findMostFrequent(arr) {
  let count = {};
  let mostFrequent;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    count[item] = (count[item] || 0) + 1;
    if (count[item] > maxCount) {
      mostFrequent = item;
      maxCount = count[item];
    }
  }

  return mostFrequent;
}

console.log(findMostFrequent(arr));