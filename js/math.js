//STEP 1
function dispAbsValue() {
    let num1 = parseInt($('num2-1').value)

    console.log(`${Math.abs(num1)}`)
}

//STEP 2
function dispFloatRoundedUp() {
    let num2 = parseFloat($('num2-2').value)

    console.log(`${Math.ceil(num2)}`)
}

//STEP 3
function dispFloatRoundedDown() {
    let num3 = parseFloat($('num2-3').value)

    console.log(`${Math.floor(num3)}`)
}

//STEP 4
function dispLargestSmallestNums() {
    let numList4 = $('numList2-4').value
    let numArray = numList4.split(',')

    for (a in numArray ) {
        numArray[a] = parseInt(numArray[a], 10);
    }

    console.log(`${Math.max(...numArray)} is the largest number entered & ${Math.min(...numArray)} is the smallest number entered.`)
}

//STEP 5
function dispSquareRoot() {
    let num5 = parseFloat($('num2-5').value)

    console.log(`${Math.sqrt(num5)}`)
}

$('btn2-1').addEventListener('click', dispAbsValue)
$('btn2-2').addEventListener('click', dispFloatRoundedUp)
$('btn2-3').addEventListener('click', dispFloatRoundedDown)
$('btn2-4').addEventListener('click', dispLargestSmallestNums)
$('btn2-5').addEventListener('click', dispSquareRoot)

