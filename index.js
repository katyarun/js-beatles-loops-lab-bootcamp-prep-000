function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
    // console.log(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

const arr1 = ["John Lennon", "01", "02"];
const arr2 = ["guitar", "11", "12"];
// theBeatlesPlay(arr1, arr2);

function johnLennonFacts(facts) {
  
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];