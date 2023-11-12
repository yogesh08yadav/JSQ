// 1
// console.log(["a", "b"] == ["a", "b"]); // false as arrays are objects
// /*refer line 8 */console.log(["a", "b"] == ["a", "b"] + []); //true, as explained it will have, ['a','b'] == 'a,b' => 'a,b' == 'a,b'
// console.log(["a", "b", "c"] == ["a", "b"] + []);
// console.log(["a", "b"] == ["b", "a"]);
// console.log(["a", "b"] == "a,b");

// console.log(["a", "b"] + []); // as there is plus sign it will convert array to string 'a,b' + ''

//2
let first = !+[] * []; //0, as +[] will convert it into 0 => !0 will give true => true * [] => 1 * 0 = 0
let second = !+[] + [] * []; //1 , true + 0 * 0
let third = (!+[] + [] + ![]).length; //9, 'true' + '' + 'false' = 'truefalse'.length

console.log(first);
console.log(second);
console.log(third);
