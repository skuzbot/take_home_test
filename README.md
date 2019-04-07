# take_home_test
## Take home coding challenge for [redacted]
___
I first solved this algorithm in Javascript with minimal manual testing. That file can be found at `Javascript/takeHomeCodeChallenge.js`

Next I refactored my logic to Elixir and wrote tests reflecting the initial problem prompt. The answer function is in `Elixir/lib/takehome.ex`  
To run the tests use `mix test` from the Elixir directory.
___
### Approach

This algorithm will ultimately be solved with functional programing via the elixir code language so I approached this problem with that mindset.
I decided this problem can be quickly solved mathematically considering the row and column sequences increase with a set pattern as opposed to building out an x by y matrix then iterating to the correct index.

My first concern was be to calculate what the first column's value is for whichever row we are looking at
That figure can be calculated by adding the next row's index minus 1 to the current cell value. 

Iterating into the row was be done by taking the column 1's value at row y and adding the y index + 1 to get the next column's value. After that I took the previous increase + 1 and added that for every column until I arrived at column x.  
I.e. x = 4 y = 3  
-> column 1's value at row 3 = 4.  
-> column 2's value is column 1 (4) + y + 1 (4) = 8  
-> previous increase was 4 so increase by 1 and add to current cell 8 + 5 = 13  
-> again 13 + 6 = 19.

___
### Note on given tests
In the prompt it stated that the answer for inputs [100000, 100000] should be 20000000001.
I have a suspicion that this may be a typo.
Here's my thinking...

If we look at this 7 x 7 stack

|22|  
|16|23|  
|11|17|24|  
| 7|12|18|**25**|  
| 4| 8|**13**|19|26|  
| 2| **5**| 9|14|20|27|  
| **1**| 3| 6|10|15|21|28|

Whenever x = y we can see the emerging pattern 5, 13, 25, 41, 61... which is the [Centered square numbers sequence](https://oeis.org/A001844).

The formula for this sequence is `a(n) = 2*n^2 + 2*n + 1 = n^2 + (n+1)^2`

If n = 99999 (taking 1 away from 100000 since A001844 starts at 5) we get 199980001.

I'm confident this is the correct answer and have adjusted my tests to reflect that. If I'm wrong I apologize and would love to know where I went wrong.
___

Thanks for reviewing this challenge. I hope it displays my ability to code in Javascript as well as my ability to pick up a new language like Elixir very quickly. Previously to this I had never written anything in Elixir but I really enjoyed it!
