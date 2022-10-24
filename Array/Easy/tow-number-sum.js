/*
Two Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two
numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two
numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer
to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

Sample Input :

array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Sample Output
[-1, 11] // the numbers could be in reverse order

Hints :

Hint 1
Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space
implications of this approach?

Hint 2
Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such
that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.

Hint 3
Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking
if the Y that you find is stored in the hash table. What are the time and space implications of this approach?
Optimal Space & Time Complexity
*/

array = [4, 6, 1, -3],
targetSum = 3

const solution1 = () => {
    for (let i in array) {
        for (let j in array) {
            if (array[i] + array[j] === targetSum && i !== j)
                return [array[i], array[j]]
        }
    }
    return []
}

const solution2=(array,targetSum)=>{
    const numbersObj={}
    let y;
    for (const x of array) {
        y=targetSum-x
        if(numbersObj[y]){
            return[x,y]
        }
        else{
            numbersObj[x]=true
        }
    }
    return []
}

const solution3=(array,targetSum)=>{
    let leftAndRightSum=0;
    array.sort((first,second)=>{
        return first-second
    })
    let leftPointer=0
    let rightPointer=array.length-1

    while (leftPointer < rightPointer) {
        leftAndRightSum=array[leftPointer]+array[rightPointer]
        if(leftAndRightSum===targetSum){
            return [array[leftPointer],array[rightPointer]]
        }
        leftAndRightSum < targetSum? leftPointer++:rightPointer--;
    }
    return []

}


