# take_home_test
Take home coding challenge for [redacted]

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

We can see the emerging pattern 5, 13, 25, 41, 61... which is the [Centered square numbers sequence](https://oeis.org/A001844).

The formula for this sequence is `a(n) = 2*n^2 + 2*n + 1 = n^2 + (n+1)^2`

If n = 99999 (taking 1 away from 100000 since A001844 starts at 5) we get 199980001.

I'm confident this is the correct answer and have adjusted my tests to reflect that. If I'm wrong I apologize and would love to know where I went wrong.

