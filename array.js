// let arr = [1,2,3,4,5,6]

// let sl = arr.splice(2,2) (2 index se 2 element hta do) (it alters the array)
// console.log(sl,arr)

// let sl = arr.slice(2,4) (2 index se 4 index tak(usme bhi 4th index not included)) (it does not alter the array)
// console.log(sl,arr)

// const fib = (n) => {
//     let arr = [0,1]

//     for(let i = 2; i<=n; i++)
//     {
//         arr.push(arr[i-1] + arr[i-2])
//     }
//     console.log(arr.join(','))
// }

// fib(12)

// const anagram = (str1,str2) => {
//     console.log(str1.length)
//     if(str1.length !== str2.length) return false
//     let s1 = str1.split('').sort().join('')
//     let s2 = str2.split('').sort().join('')
//   return  s1 === s2
// }

// console.log(anagram('car','arc'))

// const firstSum = (arr,num) => {
//     for(let i = 0; i< arr.length; i++)
//     {
//         for(let j = 1; j< arr.length; j++){
//             // console.log(arr[i] + arr[j])
//             if(arr[i] + arr[j] == num) {
//                 console.log('i='+ i +',j='+j)
//               return console.log([i,j])
//             }
//         }
//     }
// }

// let arr = [1,2,3,8,1,3]

// firstSum(arr,9)

// const maxProfit = (arr) => {
//     let globalProfit = 0

//     for(let i = 0; i< arr.length -1; i++){
//         for(let j = i+1; j < arr.length; j++){
//             let currentProfit =  arr[j] - arr[i]
//             if(currentProfit > globalProfit)  globalProfit = currentProfit
//         }
//     }
//     console.log(globalProfit)
// }

// maxProfit([5,4,3,22,11])

// const rotateArray = (arr,k) => {

//     let rotate = arr.splice(arr.length - k, k)       [1,2,3,4,5,6,7,8]
//     console.log([...rotate,...arr])
// }

// rotateArray([1,2,3,4,5,6,7,8,9],9)

// const calculateUniqNo = (arr) => {
//     let count = 0

//     arr.map((elem,idx) => {
//       if (arr.indexOf(elem) == idx) count++
//     })

//     console.log(count)

// }
// calculateUniqNo([0,0,0,0,0,11,1,1,2,2,3,3,3,4])

//find the sub array with largest sum

// const   = (arr) => {
//     let sum = arr[0]
//     let strIdx, endIdx

//     for(let i = 0; i< arr.length; i++){
//         let currentSum = 0
//         for(let j = i; j< arr.length; j++){
//             currentSum = currentSum + arr[j]

//             if(currentSum > sum) {
//                 sum = currentSum

//                 strIdx = i
//                 endIdx = j
//             }
//         }
//     }
//     console.log(sum)
//      console.log(arr.slice(strIdx, endIdx+1))
// }

// subArray([-2,1,3,-1,4,2,3,1])

// const revWords = (str) => {
//      let strArr = str.trim().split(" ").reverse()
//      console.log(strArr)
//      let stack = []
//      for(let i of strArr) stack.push(i)
//      console.log(stack.join(' ').trim())
// }

// revWords("  Hello  World   ")

// const checkBrackets = (str) => {
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char == "(" || char == "{" || char == "[") {
//       stack.push(char);
//     } else if (char == ")" || char == "}" || char == "]") {
//       if (isEmpty(stack)) {
//         return false;
//       }
//       let top = stack.pop();
//       if (
//         (top == "(" && char !== ")") ||
//         (top == "{" && char !== "}") ||
//         (top == "[" && char !== "]")
//       ) {
//         return false;
//       }
//     }
//   }
//   return isEmpty(stack);
// };

// const isEmpty = (stack) => {
//   return stack.length === 0;
// };

// const string1 = "(]";

// console.log(checkBrackets(string1));

// const slidingWindow = (arr, k) => {
//   let res = [];
//   for (let i = 0; i <= arr.length - k; i++) {
//     let max = arr[i];
//     for (let j = 1; j < k; j++) {
//       if (arr[j + i] > max) {
//         max = arr[j + i];
//       }
//     }
//     res.push(max);
//   }
//   console.log(res);
// };

// slidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);

// const checkHamming = (str1,str2) => {
//     str1 = str1.toString(2)
//     str2 = str2.toString(2)
//     if(str1.length < str2.length) {
//         while(str1.length !== str2.length) str1 = '0'+str1
//     }
//     else if(str1.length > str2.length) {
//         while(str1.length !== str2.length) str2 = '0'+str2
//     }
//     let count = 0
//     for(let i = 0; i < str1.length ; i++){
//         if(str1[i] !== str2[i]) count ++
//     }
//     return count
// }
// console.log(checkHamming('hello','asddf'))

// let arr = [1,2,3,4,4,3,2,1]
// let unq = new Set([...arr])
// unq.add('fgfghfgh')
// console.log(unq)
// console.log(unq.size)

// const lenghtOfLongestSubstring = (s) => {
//     if(!s){
//         return 0
//     }

//     let end = 0; start = 0; maxLength = 0,startIdx = 0,lastIdx = 0
//     const unq = new Set()
//     while(end < s.length){
//         if(!unq.has(s[end])){
//             unq.add(s[end])
//             end++
//             maxLength = Math.max(maxLength, unq.size)
//             startIdx = start
//             lastIdx = end
//         }
//         else{
//             unq.delete(s[start])
//             start++
//         }
//     }
//     console.log(maxLength,startIdx,lastIdx)
// }

// lenghtOfLongestSubstring('pwwkew')

// Sort colour
// var sortColors = function(nums) {
//     let zero = 0
//     let one = 0
//     let two = 0
//     let last = nums.length

//     for(let  i of nums){
//         if(i === 0) zero++
//         else if(i === 1) one++
//         else two++
//     }
//     for(let j = 0; j< last;j++){
//        if(j<zero)
//            nums[j] = 0

//        else if(j >= zero && j < (zero+one)) nums[j] = 1
//        else nums[j] = 2

//     }
//     return nums

//  };
// sortColors([2,0,2,1,1,0])
