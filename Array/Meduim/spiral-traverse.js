/*
Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the
array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element
has been visited.

Sample Input
array = [
 [1, 2, 3, 4],
 [12, 13, 14, 5],
 [11, 16, 15, 6],
 [10, 9, 8, 7],
]

Sample Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

Hints








Hint 1
You can think of the spiral that you have to traverse as a set of rectangle perimeters that progressively get smaller (i.e., that progressively move
inwards in the two-dimensional array).

Hint 2
Going off of Hint #1, declare four variables: a starting row, a starting column, an ending row, and an ending column. These four variables
represent the bounds of the first rectangle perimeter in the spiral that you have to traverse. Traverse that perimeter using those bounds, and
then move the bounds inwards. End your algorithm once the starting row passes the ending row or the starting column passes the ending
column.

Hint 3
You can solve this problem both iteratively and recursively followin g very similar logic.
Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the total number of elements in the array
*/

array = [
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
]

function solution1(array) {
    let spiralArray=[]
    let sr=0
    let er=array.length-1
    let sc=0
    let ec=array[0].length-1

    while (sr<=er && sc<=ec) {
        for (let col = sc; col <= ec; col++) {
            spiralArray.push(array[sr][col])
        }
        for (let row = sr+1; row <= er; row++) {
            spiralArray.push(array[row][ec])
        }
        for (let col = ec-1; col >= sr; col--) {
            if(er>sr)
            spiralArray.push(array[er][col])
        }
        for (let row = er-1; row > sr; row--) {
            if(ec>sc)
            spiralArray.push(array[row][sc])
        }

        sc++
        sr++
        ec--
        er--
    }
    return spiralArray
}

console.log(solution1(array))

