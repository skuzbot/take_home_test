/*
Approach:
This will ultimately be solved with functional programing via the elixir code language so I will approach this problem with that mindset.
I think this problem can be solved mathematically considering the row and column sequences increase with a set pattern.

My first concern will be to calculate what the first column's value is for whichever row we are looking at
That figure can be calculated by adding the next row's index minus 1 to the current cell value. 

Iterating into the row will be done by taking the column 1's value at row y and adding the y index + 1 to get the next column's value. After that
initial increase value is found we will add one to it and increase again until our target column is found.

Essentially where N is x cord and M is y cord, i will iterate up with an increasing sequence until i reach the value M, then add one and continue.

Output:
string representing the box id for the given x and y cordinates

Input:
STDIN with two values and then a zero to represent input termination

Constrains/Conditions:
Use recursion over iteration to fultill functional programing paradigm.
return value must be a string representing the box id int

Examples/Edge Cases:
Keep in mind indices are not zero based

*/
//helper function

// -Start of Code-                                                 ===

const answer = (x, y) => {

  const traverseRows = (curCell, curRow) => {
    while (curRow < y) {
      curRow++;
      curCell = curCell + (curRow - 1);
    }
    return curCell;
  }

  const traverseColumns = (curCell, curCol, incAmount) => {
    while (curCol < x) {
      curCell += incAmount;
      incAmount++;
      curCol++;
    }
    return curCell;
  }

  //this function will give us the value of whatever is in column 1 on y's row.
  const colOneAtRowY = traverseRows(1, 1);

  //this will return a stringified version of the x and y coordinate
  return '' + traverseColumns(colOneAtRowY, 1, y + 1);
}

// -End of Code-                                                   ===

// given tests:

console.log(answer(2, 2), ' is expected to equal 5', answer(2, 2) === '5');
console.log(answer(3, 3), ' is expected to equal 13', answer(3, 3) === '13');
console.log(answer(2, 4), ' is expected to equal 12', answer(2, 4) === '12');
console.log(answer(4, 1), ' is expected to equal 10', answer(4, 1) === '10');
console.log(answer(4, 2), ' is expected to equal 14', answer(4, 2) === '14');
console.log(answer(4, 5), ' is expected to equal 32', answer(4, 5) === '32');
console.log(answer(5, 3), ' is expected to equal 26', answer(5, 3) === '26');
console.log(answer(100001, 100000), ' is expected to equal  20000000001', answer(100001, 100000) === '20000000001');
