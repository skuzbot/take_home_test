/*
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

// -Start of Code-                                                 ===
const answer = (x, y) => {
  // checkout commit 58be930 to see my recursive solution
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

console.log('x = 2, y = 2 is expected to equal 5', answer(2, 2) === '5');
console.log('x = 3, y = 3 is expected to equal 13', answer(3, 3) === '13');
console.log('x = 2, y = 4 is expected to equal 12', answer(2, 4) === '12');
console.log('x = 4, y = 1 is expected to equal 10', answer(4, 1) === '10');
console.log('x = 4, y = 2 is expected to equal 14', answer(4, 2) === '14');
console.log('x = 4, y = 5 is expected to equal 32', answer(4, 5) === '32');
console.log('x = 5, y = 3 is expected to equal 26', answer(5, 3) === '26');
console.log('x = 100000, y = 100000 is expected to equal 199980001', answer(100000, 100000) === '19999800001');
