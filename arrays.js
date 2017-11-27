var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, ele) {
  var cB = array.unshift(ele)
  return cB
}

function destructivelyAddElementToBeginningOfArray(array, ele) {
  array = array.unshift(ele)
  return array
}

function addElementToEndOfArray(array, ele) {
  var cB = array.push(ele)
  return cB
}

function destructivelyAddElementToEndOfArray(array, ele) {
  array = array.push(ele)
  return array
}