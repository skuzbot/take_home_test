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

}

// -End of Code-                                                   ===

// given tests:

console.log(answer(3, 2));
