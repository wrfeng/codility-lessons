// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

//   function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap.The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

//   N is an integer within the range[1..2, 147, 483, 647].

// this solution has time complexity of O(n)
// space complexity O(n)
function solution(N) {

  let binaryNum = N.toString(2)
  let indexes = []
  let binaryLengths = []
  let largestGap = 0

  binaryNum.split("").forEach((num, idx) => {
    if (num == 1) indexes.push(idx)
  })

  if (indexes.length > 1) {
    for (let i = indexes.length - 1; i > 0; i--) {
      binaryLengths.push(indexes[i] - indexes[i - 1] - 1)
    }

    largestGap = binaryLengths.reduce((accu, curr) => {
      return curr > accu ? curr : accu
    })
  }

  return largestGap
}

//this solution is just as fast O(n)
//better space complexity O(1)
function solution(N) {
  let binaryNum = N.toString(2)
  let largestGap = 0
  let gapLength = 0
  
  binaryNum.split("").forEach(num => {
    if(num == 0) {
      gapLength++
    }

    if (num == 1){
      if(largestGap < gapLength) largestGap = gapLength
      gapLength = 0
    }
  })

  return largestGap
}