// function findNextZero
// when found zero, place 1..9 in cell and
// function checkIfLegal
//   check row
//   check col
//   check box
//   returns false/true for each
//   if more than one true, findNextZero
//     else (only one true)
//       fill in with the true value

var array = []
var cellNumber
var rowNumber
var colNumber
var boxNumber
var coordinates

function cellsForSet(number,setComparator) {
  var cells = []
  for(var i = 0; i < array.length; i++) {
    if (setComparator(i) == number) {
      cells.push(array[i])
    }
  }
  return cells
}

function getRowNumber(cellNumber){
  return Math.floor(cellNumber / 9)
}

function getColNumber(cellNumber) {
  return cellNumber % 9
}

function locations(cellNumber){
  rowNumber = getRowNumber(cellNumber)
  colNumber = getColNumber(cellNumber)
  coordinates = [rowNumber, colNumber]
}

function getBoxNumber(cellNumber){
  locations(cellNumber)
  return ( (Math.floor(coordinates[0] / 3)) * 3 ) + (Math.floor(coordinates[1] / 3))
}

// create a function that converts sudoko string into an array of integers
Sudoku = function(string) {
  array = string.split("")
  for(var i = 0; i < array.length; i ++){
    array[i] = parseInt(array[i])
  }
  findZero(array)
}

// Create a function that finds the next zero
findZero = function(array){
  for(i = 0; i < array.length; i ++){
    if(i === 0){
      cellNumber = array.indexOf(i)
      rowNumber = getRowNumber(cellNumber)
      colNumber = getColNumber(cellNumber)
      boxNumber = getBoxNumber(cellNumber)
      console.log("row: " + rowNumber)
      console.log("col: " + colNumber)
      console.log("box: " + boxNumber)

    }
  }
}

Sudoku('609238745274561398853947621486352179792614583531879264945723816328196457167485932')
console.log("josh's row: " + cellsForSet(rowNumber, getRowNumber))
console.log("josh's col: " + cellsForSet(colNumber, getColNumber))
console.log("josh's box: " + cellsForSet(boxNumber, getBoxNumber))

//Create checkIfLegal function
checkIfLegal = function(){
}

// rowCheck function - checks to see if guessed number is present in that row - returns t/f
checkRow = function(row){
  if(row == rowNumber){}
}
// colCheck function - checks to see if guessed number is present in that column - returns t/f

// boxCheck function - checks to see if guessed number is present in that box - returns t/f


// replace cellNumber with 1
    // check if 1 is present in rowNumber = rowCheck
    //   if false
    //    check if 1 is present in colNumber = colCheck
    //     if false
    //       check if 1 is present in boxNumber = boxCheck
    //         if false
    //           then it could be 1...
    // try 2 in cellNumber
    //   if it could be 2, skip this cell and find next zero
    //     but if you get all the way to 9, and there's only one possible answer, make cellNumber = answer



// function checkIfLegal(cellNumber)
//   check RowNumber
//   check position in rowNumber array(colNumber)
//     against same position in other rows (colNumber)
//   check against other numbers in same box




Sudoku.prototype = {

  solve: function() {

  },

  showBoard: function() {

  },

}



game = new Sudoku('')

game.solve()

game.showBoard()

// PSEUDOKU

// setUpBoard

//cell27 = row4, col0, box3

// box0 = cells 0,1,2,9,10,11,18,19,20
// box1 = cells 3,4,5,12,13,14,21,22,23
// box2 = cells 6,7,8,15,16,17,24,25,26
// box3 = cells 27,28,29,36,37,38,45,46,47
// box4 = cells 30,31,32,39,40,41,48,49,50
// box5 = cells 33,34,35,42,43,44,51,52,53
// box6 = cells 54,55,56,63,64,65,72,73,74
// box7 = cells 57,58,59,66,67,68,75,76,77
// box8 = cells 60,61,62,69,70,71,78,79,80

// col0 = cells 0,9,18,27,36,45,54,63,72
// col1 = cells 1,10,19,28,37,46,55,64,73
// col2 = cells 2,11,20,29,38,47,56,65,74
// col3 = cells 3,12,21,30,39,48,57,66,75
// col4 = cells 4,13,22,31,40,49,58,67,76
// col5 = cells 5,14,23,32,41,50,59,68,77
// col6 = cells 6,15,24,33,42,51,60,69,78
// col7 = cells 7,16,25,34,43,52,61,70,79
// col8 = cells 8,17,26,35,44,53,62,71,80

// row0 = cells 0,1,2,3,4,5,6,7,8
// row1 = cells 9,10,11,12,13,14,15,16,17
// row2 = cells 18,19,20,21,22,23,24,25,26
// row3 = cells 27,28,29,30,31,32,33,34,35
// row4 = cells 36,37,38,39,40,41,42,43,44
// row5 = cells 45,46,47,48,49,50,51,52,53
// row6 = cells 54,55,56,57,58,59,60,61,62
// row7 = cells 63,64,65,66,67,68,69,70,71
// row8 = cells 72,73,74,75,76,77,78,79,80






