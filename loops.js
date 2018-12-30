/*
function makeArray() {
  const array = []
  const t = 10

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}
*/

var array = [];
function forLoop(array) {
for (let i = 0; i <= 25; i++;)
{
  if (i===0 || i===1){
  array.push(`I am ${i} strange loop.`)
}
else {
  array.push(`I am ${i} strange loops.`)
}

  return array
}
