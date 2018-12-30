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

var array = []
function forLoop(array) {
for (let i = 0; i <= 25; i++){
  array.push("I am ${i} strange loop${i===0? '' : 's'}.")
}
  return array
}
