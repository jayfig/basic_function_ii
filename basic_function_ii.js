//  1. Bigger size.
function biggieSize(array){
    for(var i = 0; i < array.length; i++){
        if(array[i]>0){
            array[i] = 'big';
        }
    }
    return array;
}
var testArr = [-1,3,5,-5];
console.log(biggieSize(testArr));

//  2. Print Low, Return High
function printReturn(array){
    var printLow = array[0];
    var returnHigh = array[0];
    for(var i = 0; i < array.length; i++){
        if(printLow>array[i]){          //Find lowest Value
            printLow = array[i];
        }
        if(returnHigh<array[i]){        //Find Highest Value
            returnHigh = array[i];
        }                 
    }
    console.log('Printing lowest value :',printLow);
    return returnHigh;
}
var testArr = [-1,3,5,-5];
console.log('Functions returns highest value of : ', printReturn(testArr));

//  3. Print One, Return Another
function printReturnAnother(array){
    console.log(secondToLastValue = array[array.length-1]);

    for(var i = 0; i < array.length; i++){
        if(array[i]%2 == 1){            // Find odd.
            return array[i];            // Return First Odd and terminate function.
        }
    }
}

var testArr = [-1,3,5,-5];
console.log(printReturnAnother(testArr));

//  4. Double Vision            Need to retain value of orginal array.
function doubleVision(array){
    var holdValue = array;
    for(var i = 0; i < holdValue.length; i++){
        holdValue[i] *= holdValue[i];
    }
    return holdValue;
}
var testArr = [1,2,3];
var holdValue = testArr;
console.log("Original Array :", testArr);
console.log("Double Vision Array :", doubleVision(holdValue));
console.log(testArr)

//  5. Count Positives
function countPositives(array){
    numberPositives = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i]>0)
        numberPositives++;
    }
    array[array.length-1] = numberPositives;
    return array;
}
var testArr = [-1,1,1,1];
console.log(countPositives(testArr));

//  6. Evens and Odds.
function evenOdd(array){
    counterOdd = 0;
    counterEven = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i]%2 == 0){
            counterEven++
            if(counterEven%3 == 0){
                console.log("Thats Even");
            }
        }
        else{
            counterOdd++;
            if(counterOdd%3 == 0){
                console.log("Thats Odd");
            }
        }
    }
}              

var testArr = [1,2,3,4,5,6,2,3,4,5,6,2,3,4,5,6,2,3,4,5,6];
evenOdd(testArr);

// 7. Increment the Seconds
function incrementSeconds(array){
    for(var i =0; i < array.length; i++){
        if(i%2 == 1){
            array[i]+=1;
        }
        console.log(array[i]);
    }
    return array;
}
var testArr = [1,2,3,4,5,6];
incrementSeconds(testArr);

// 8. Previous Lengths
function previousLengths(array){
    for(var i = array.length-1; i > 0; i--){
        array[i] = array[i-1].length;
    }
    return array;
}
var testArr = ["hello", "dojo", "awesome"];
console.log(previousLengths(testArr));

// 9. Add Seven
