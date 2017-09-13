var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(){
  return ["milkyway", ...chocolateBars]
}
function destrucivelyAddElementToBeginningOfArray(){
  var chocolateBars = ["milkyway", ...chocolateBars]
  return chocolateBars
}
