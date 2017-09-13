var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(){
  return ["foo", 1]
}
function destrucivelyAddElementToBeginningOfArray(){
  chocolateBars = ["milkyway", ...chocolateBars]
  return chocolateBars
}
