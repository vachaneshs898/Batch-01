// normal functions

function printValue(){
    return 'hello'
}

function printSquer(num){
    return num * 2;
}


function printMultiplyBy(num, by = 2){
    return num * by
}

// arrow functions

const getDataPrint = (value, key = "jskjadhk") => {
    return value + '    ' +key
}


// console.log(getDataPrint("hello this is value", "this is second"))
//annonimus funstion

// (function (){
//     console.log("i am self calling function")
// })();

