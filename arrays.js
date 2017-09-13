var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(){
  return ["milkyway", ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(){
  chocolateBars.unshift("milkyway")
  return chocolateBars
}
