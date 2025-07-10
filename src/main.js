

//  tasks to accomplish the challenge
// 1. we need form validation to get error when incorrect values are entered
// 2. we need to use the Date object for calculation

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let submit = document.querySelector(".submit-button");


// get the target error span elements
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

// target error message spans
let dayInputErrorMsg = document.querySelector(".day-input-error-msg");
let monthInputErrorMsg = document.querySelector(".month-input-error-msg");
let yearInputErrorMsg = document.querySelector(".year-input-error-msg");


let fieldRequiredText = "This field is required"; // blank input error
let validInput = "Must be a valid "; // invalid input error
let futureDateErrorText = "Date cannot be in the future"; // future date error



submit.addEventListener('click', () => {

    let dayValid = false;
    let monthValid = false;
    let yearValid = false;

    // day validation
    if (dayInput.value === "") {
        dayInputErrorMsg.style.display = "block";
        dayInputErrorMsg.textContent = fieldRequiredText;
        dayValid = false;
    } else if (dayInput.value > 31 || dayInput.value < 1    ) {
        dayInputErrorMsg.style.display = "block";
        dayInputErrorMsg.textContent = validInput + "day";
        dayValid = false;
    } else {
        dayValid = true;
        dayInputErrorMsg.style.display = "none"; // hide error message
    }


    // month validation
    if (monthInput.value === "") {
        monthInputErrorMsg.style.display = "block";
        monthInputErrorMsg.textContent = fieldRequiredText;
        monthValid = false;
    } else if (monthInput.value > 12 || monthInput.value < 1) {
        monthInputErrorMsg.style.display = "block";
        monthInputErrorMsg.textContent = validInput + "month";
        monthValid = false;
    } else {
        monthValid = true;
        monthInputErrorMsg.style.display = "none";  // hide error message
    }

    // year validation
    if (yearInput.value === "") {
        yearInputErrorMsg.style.display = "block";
        yearInputErrorMsg.textContent = fieldRequiredText;
        yearValid = false;
    } else if (yearInput.value > 2025 || yearInput.value < 1) {
        yearInputErrorMsg.style.display = "block";
        yearInputErrorMsg.textContent = validInput + "year";
        yearValid = false;
    } else {
        yearValid = true;
        yearInputErrorMsg.style.display = "none";  // hide error message
    }


    // this code should only run when all conditions are met
        // it means that all 3 input validations must be passed
    if (dayValid && monthValid && yearValid) {
        // final validation, don't allow dates in the future
        
        const inputDate = new Date(
            Number(year.value), 
            Number(month.value) - 1, 
            Number(day.value)
        );
        
        const now = new Date();
        const elapsed = now - inputDate; 

        if (inputDate > now) {

            dayInputErrorMsg.style.display = "block";
            dayInputErrorMsg.textContent = futureDateErrorText;

        } else {
            // conversion area
            const ageDate = new Date(elapsed); // Create a date from ms diff (since 1970)
            const years = ageDate.getUTCFullYear() - 1970; // Offset from epoch
            const months = ageDate.getUTCMonth(); // 0–11
            const days = ageDate.getUTCDate() - 1; // JS counts days from 1

            // output area 
            document.querySelector('.year-output').textContent = years;
            document.querySelector('.month-output').textContent = months;
            document.querySelector('.day-output').textContent = days;
        }
    }
}); 


