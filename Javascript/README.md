## Javascript solution
___
### Approach

This algorithm will ultimately be solved with functional programing via the elixir code language so I approached this problem with that mindset.
I decided this problem can be quickly solved mathematically considering the row and column sequences increase with a set pattern.

My first concern was be to calculate what the first column's value is for whichever row we are looking at
That figure can be calculated by adding the next row's index minus 1 to the current cell value. 

Iterating into the row will be done by taking the column 1's value at row y and adding the y index + 1 to get the next column's value. After that
initial increase value is found we will add one to it and increase again until our target column is found.

