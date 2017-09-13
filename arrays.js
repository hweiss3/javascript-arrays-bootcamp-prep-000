var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(){
  return ["foo", ...chocolateBars]
}
function destrucivelyAddElementToBeginningOfArray(){
  chocolateBars = ["milkyway", ...chocolateBars]
  return chocolateBars
}
