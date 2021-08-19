
//get the values from the Page
//starts or control the funtion
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("You must enter intergers");
    }

}

//generate numbers from startvalue to the endValue
// logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    for (let i = sValue; i <= eValue; i++) {
        numbers.push(i);
    }
    return numbers;
}

// display the numbers and mark even numbers bold
// display or view functions
function displayNumbers(numbers) {
    let templateRows = "";
    for (let i = 0; i < numbers.length; i++) {
        let className = "even";
        let number = numbers[i];
        if (number % 2 == 0) {
            className = "even";
        }
        
        else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}