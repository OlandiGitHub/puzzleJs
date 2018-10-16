// module "functions.js"
export var createMatrix = function () {
  var matrix = {}
  var element = []
  for (i=0; i < 4; i++){
    for (j=0; j < 4; j++){
      element.push(String(i) + '-' + String(j))
    }
  }
  var orderMatrix = element.slice(0)
  var unsort = element.sort(function() { return 0.5 - Math.random() });
  unsort.splice(-1,1)
  unsort.push("x-x")

  orderMatrix.forEach(function (orderMatrix,i) { matrix[orderMatrix] = unsort[i]})
  return matrix
}

export var hasEmpty = function (position) {
  var splitPosition = position.split('-')
  splitPosition[0] = parseInt(splitPosition[0])
  splitPosition[1] = parseInt(splitPosition[1])

  var searchId = []
  var element = ''

  if (splitPosition[1]-1 >= 0) {
    searchId = [splitPosition[0],splitPosition[1]-1]
    searchId = searchId.join('-')
    element = document.getElementById(searchId).children[0]
    if (element.dataset.id === "x-x") {
      return searchId
    }
  }

  if (splitPosition[1]+1 <= 3) {
    searchId = [splitPosition[0],splitPosition[1]+1]
    searchId = searchId.join('-')
    element = document.getElementById(searchId).children[0]
    if (element.dataset.id === "x-x") {
      return searchId
    }
  }

  if (splitPosition[0]-1 >= 0) {
    searchId = [splitPosition[0]-1,splitPosition[1]]
    searchId = searchId.join('-')
    element = document.getElementById(searchId).children[0]
    if (element.dataset.id === "x-x") {
      return searchId
    }
  }

  if (splitPosition[0]+1 <= 3) {
    searchId = [splitPosition[0]+1,splitPosition[1]]
    searchId = searchId.join('-')
    element = document.getElementById(searchId).children[0]
    if (element.dataset.id === "x-x") {
      return searchId
    }
  }

  if (element !== '') {
    return false
  }
}

export var thisReady = function () {
  var element = []
  for (i=0; i < 4; i++){
    for (j=0; j < 4; j++){
      element.push(String(i) + '-' + String(j))
    }
  }

  let response = true

  element.forEach(function(value){
    var data = document.getElementById(value).childNodes[0].dataset.id
    if (data !== 'x-x' && data !== value) {
      response =  false
    }
  })

  if (response === true) {
    var finish = document.querySelectorAll('[data-id="x-x"]')[0]
    finish.dataset.id = finish.dataset.position
    finish.src = finish.src.replace("x-x", finish.dataset.position)
  }
}
