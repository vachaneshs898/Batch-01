// closer
function math(num) {
    function getPowerOf(power){
        return iterateNum(num, power);
    }
    
    function iterateNum(num, power){
        var result = num;
        for (let index = power; index > 1; index--) {
            console.log(result, num)
            result = result * num;
        }
        return result;
    }

    return getPowerOf;
}

var newMath = math(2)


console.log(newMath(3))