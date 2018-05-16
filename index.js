function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
    console.log(`${musicians[i]} plays ${instruments[i]}`);
  }
}

const arr1 = ["John Lennon", "01", "02"];
const arr2 = ["guitar", "11", "12"];

// for (let i = 0; i < arr1.length; i++) {
  // console.log(arr1[i]);
  // console.log(arr2[i]);
// }

theBeatlesPlay(arr1, arr2);
