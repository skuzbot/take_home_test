/*
Approach:
This will ultimately be solved with functional programing via the elixir code language so I will approach this problem with that mindset.
I think this problem can be solved mathematically considering the row and column sequences increase with a set pattern.

My first concern will be to calculate what the first column's value is for whichever row we are looking at
That figure is simple enough to calculate by taking the row index and adding that value minus 1 to the previous value. Dynamic programming 
will help.

Iterating into the row will be simple enough. I'll use the same sequence increase but I'll start at my found value + 1.

Essentially where N is x cord and M is y cord, i will iterate up with an increasing sequence until i reach the value M, then add one and continue.

Output:
string representing the box id for the given x and y cordinates

Input:
STDIN 

Constrains/Conditions:
Use recursion over iteration to fultill functional programing paradigm.
return value must be a string representing the box id int

Examples/Edge Cases:
Keep in mind indices are not zero based

*/
//helper function

// -Start of Code-                                                 ===

const answer = (x, y) => {
  //we'll start at 1, 1 in our pyramid. it has the box id of 1.
  let currentCell = 1;
  let currentRow = 1;
  let currentColumn = 1;

  const traverseRows = (curCell, curRow, maxRow) => {
    if (curRow < maxRow) {
      curRow++;
      curCell = curCell + (curRow - 1);
      let result = traverseRows(curCell, curRow, maxRow);
      return result;
    } else {
      return curCell;
    }
  }

  //this function will give us the value of whatever is in column 1 on y's row.
  let colOneAtRow = traverseRows(currentCell, currentRow, y);

  //to get the next box id in column 2 we will take y + 1 and add it to the box id we just found
  const colIncreaseInit = y + 1;

  const traverseColumns = (curCell, curCol, maxCol, incAmount) => {
    if (curCol < maxCol) {
      const nextColCell = curCell + incAmount;
      incAmount++;
      curCol++;
      return traverseColumns(nextColCell, curCol, maxCol, incAmount)
    } else {
      return curCell;
    }
  }

  let output = traverseColumns(colOneAtRow, currentColumn, x, colIncreaseInit);
  return '' + output;
}

// -End of Code-                                                   ===

// given tests:

console.log(answer(3, 3), ' is equal to expected 13');
console.log(answer(2, 2), ' is equal to expected 5');
console.log(answer(2, 4), ' is equal to expected 12');
console.log(answer(4, 1), ' is equal to expected 10');
console.log(answer(4, 2), ' is equal to expected 14');
console.log(answer(100000, 100000),' is equal to expected 20000000001');
