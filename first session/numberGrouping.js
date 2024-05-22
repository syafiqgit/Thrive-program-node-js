/*
Kelompokkan angka dalam 3 nested array.
1. Index 0 mengelompokkan angka genap
2. Index 1 mengelompokkan angka ganjil
3. Index 2 mengelompokkan angka yang bisa dibagi 3
*/
function numberGrouping(numbers) {
  const result = [[], [], []]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      result[2].push(numbers[i])
    } else if (numbers[i] % 2 !== 0) {
      result[1].push(numbers[i])
    } else {
      result[0].push(numbers[i])
    }
  }
  console.log(result)
}

numberGrouping([1, 2, 4, 6, 8]) // Output: [[2, 4, 8], [1], [6]]