// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

function johnLennonFacts(array) {
  var newArray = []
  var i = 0;
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!");
  } while (number < 15);
  return emptyArray;
}