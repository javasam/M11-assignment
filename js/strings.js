//STEP 1
function dispLength() {
    let name1 = $('name1-1').value

    alert(`The name \'${name1}\' contains ${name1.length} symbols` )
}


//STEP 2
function dispCharAtPosition() {
    let name2 = $('name1-2').value
    let num2 = parseInt($('num1-2').value)

    do {
        if (num2 < name2.length && num2 >= 0) {
            alert(`Your symbol is: ${name2.charAt(num2)}`)
        } else {
            alert(`Invalid number, please enter the correct number between 0 and ${name2.length - 1}`)
        }
    } while (num2 < 0 && num2 >= name2.length)
}


//STEP 3
function dispFullName() {
    let firstName3 = $('firstName1-3').value
    let lastName3 = $('lastName1-3').value

    alert(`Your name is: \'${firstName3.concat(lastName3)}\'` )
}

//STEP 4
function dispIndexOf() {
    let text = $('text1-4').value

    alert(`The index of the word \'fox\' is: ${text.indexOf('fox')}`)
}

//STEP 5
function dispLastIndexOf() {
    let text = $('text1-5').value

    alert(`The index of the word \'fox\' is: ${text.lastIndexOf('fox')}`)
}

//STEP 6
function dispYourName() {
    let text = $('text1-6').value
    let fullName6 = $('fullName1-6').value

    alert(`${text.replace('the lazy dog', fullName6)}`)
}

//STEP 7
function dispSearchWord() {
    let text = $('text1-7').value
    let searchWord7 = $('searchWord1-7').value

    if (text.search(searchWord7) >= 0) {
        alert(`Search Word \'${searchWord7}\' found at index position: ${text.search(searchWord7)}`)
    } else {
        alert(`Search Word \'${searchWord7}\' not found`)
    }
}

//STEP 8
function dispNewString() {
    let old_string = $('text1-8').value
    let search_string = 'the lazy dog'
    let start_pos = parseInt(old_string.search(search_string))
    let len = search_string.length
    let new_string = old_string.substring(start_pos, len)

    alert(`${new_string.toUpperCase()}`)
}

//STEP 9
function dispTrimmedLowercaseText() {
    let text = $('text1-9').value
    let trimmedText = text.trim()

    alert(`${trimmedText.toLowerCase()}`)
}

//STEP 10
function dispFirstWordCapitalized() {
    let text = $('text1-10').value
    let firstWordCap = text.charAt(0).toUpperCase() + text.slice(1)

    alert(`${firstWordCap}`)
}

$('btn1-1').addEventListener('click', dispLength)
$('btn1-2').addEventListener('click', dispCharAtPosition)
$('btn1-3').addEventListener('click', dispFullName)
$('btn1-4').addEventListener('click', dispIndexOf)
$('btn1-5').addEventListener('click', dispLastIndexOf)
$('btn1-6').addEventListener('click', dispYourName)
$('btn1-7').addEventListener('click', dispSearchWord)
$('btn1-8').addEventListener('click', dispNewString)
$('btn1-9').addEventListener('click', dispTrimmedLowercaseText)
$('btn1-10').addEventListener('click', dispFirstWordCapitalized)

$('name1-1').focus()
