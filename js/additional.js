const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const errorD = document.querySelector(".error-day");
const errorM = document.querySelector(".error-month");
const errorY = document.querySelector(".error-year");
const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");
const labelD = document.querySelector(".label-d");
const labelM = document.querySelector(".label-m");
const labelY = document.querySelector(".label-y");
const btn = document.querySelector(".purple-btn");

const dayP = document.querySelector("#day-purple");
const monthP = document.querySelector("#month-purple");
const yearP = document.querySelector("#year-purple");

const dayR = document.querySelector("#r-days");
const monthR = document.querySelector("#r-months");
const yearR = document.querySelector("#r-years");



btn.addEventListener("click", function () {
    console.log(day.value);
    console.log(month.value);
    console.log(year.value);
    console.log(day.value.length);

    const date = new Date();
    const dob = new Date(year.value, month.value - 1, day.value);





    if (day.value == '') {

        errorD.innerText = "This field is required";
        errorD.classList.add("alert-empty");
        input.forEach(Element => Element.style.borderColor = "var(--light-red)");
        label.forEach(Element => Element.style.color = "var(--light-red)");


    }
    else if (day.value.length < 2) {
        errorD.innerText = "Enter as per the format";
        errorD.classList.add("alert-empty");
        input.forEach(Element => Element.style.borderColor = "var(--light-red)");

        label.forEach(Element => Element.style.color = "var(--light-red)");


    }
    else {
        errorD.innerText = "";

        errorD.classList.remove("alert-empty");
        labelD.style.color = "var(--smokey-grey)";
        day.style.borderColor = "var(--light-grey)";

        if (day.value < 1 || day.value > 31) {
            errorD.innerText = "Must be a valid day";
            errorD.classList.add("alert-empty");
            input.forEach(Element => Element.style.borderColor = "var(--light-red)");
            label.forEach(Element => Element.style.color = "var(--light-red)");
        }

    }

    if (month.value == '') {

        errorM.innerText = "This field is required";
        errorM.classList.add("alert-empty");
        input.forEach(Element => Element.style.borderColor = "var(--light-red)");
        label.forEach(Element => Element.style.color = "var(--light-red)");
    }

    else if (month.value.length < 2) {
        errorM.innerText = "Enter as per the format";
        errorM.classList.add("alert-empty");
        input.forEach(Element => Element.style.borderColor = "var(--light-red)");

        label.forEach(Element => Element.style.color = "var(--light-red)");
    }
    else {
        errorM.innerText = "";

        errorM.classList.remove("alert-empty");
        labelM.style.color = "var(--smokey-grey)";
        month.style.borderColor = "var(--light-grey)";

        if (month.value < 1 || month.value > 12) {
            errorM.innerText = "Must be a valid month";
            errorM.classList.add("alert-empty");
            input.forEach(Element => Element.style.borderColor = "var(--light-red)");
            label.forEach(Element => Element.style.color = "var(--light-red)");
        }

    }

    if (year.value == '') {

        errorY.innerText = "This field is required";
        errorY.classList.add("alert-empty");
        input.forEach(Element => Element.style.borderColor = "var(--light-red)");
        label.forEach(Element => Element.style.color = "var(--light-red)");
    }

    else if (year.value.length < 4) {
        errorY.innerText = "Enter as per the format";
        errorY.classList.add("alert-empty");
        input.forEach(Element => Element.style.borderColor = "var(--light-red)");

        label.forEach(Element => Element.style.color = "var(--light-red)");

    }


    else if (year.value < 1000) {

        console.log(year.value);
        errorY.innerText = "Enter a valid year";
        errorY.classList.add("alert-empty");
        input.forEach(Element => Element.style.borderColor = "var(--light-red)");

        label.forEach(Element => Element.style.color = "var(--light-red)");

    }

    else if (date.getYear() < dob.getYear()) {
        errorY.innerText = "Enter a year in past please!";
        errorY.classList.add("alert-empty");
        input.forEach(Element => Element.style.borderColor = "var(--light-red)");

        label.forEach(Element => Element.style.color = "var(--light-red)");

    }



    else {
        errorY.innerText = "";

        errorY.classList.remove("alert-empty");
        labelY.style.color = "var(--smokey-grey)";
        year.style.borderColor = "var(--light-grey)";
    }
    // leap year
    if ((year.value) % 4 == 0) {
        if (date.getMonth() < dob.getMonth()) {
            const dayF = Math.abs(date.getDate() - dob.getDate()) + 7;
            const monthdiff = Math.abs((date.getMonth() - dob.getMonth()));
            const monthF = 12 - monthdiff - 1;
            const yearF = date.getYear() - dob.getYear() - 1;
            dayP.innerText = `${dayF}`;
            monthP.innerText = `${monthF}`;
            yearP.innerText = `${yearF}`;
            if (dayF < 2) {
                dayR.innerText = "day";
            }

            if (monthF < 2) {
                monthR.innerText = "month";
            }

            if (yearF < 2) {
                yearR.innerText = "year";
            }

        }
        else {
            const dayF = Math.abs(date.getDate() - dob.getDate()) + 7;
            const monthF = Math.abs((date.getMonth() - dob.getMonth())) - 1;
            const yearF = date.getYear() - dob.getYear();
            dayP.innerText = `${dayF}`;
            monthP.innerText = `${monthF}`;
            yearP.innerText = `${yearF}`;
            if (dayF < 2) {
                dayR.innerText = "day";
            }

            if (monthF < 2) {
                monthR.innerText = "month";
            }

            if (yearF < 2) {
                yearR.innerText = "year";
            }

        }
    }

    else {
        if (date.getMonth() < dob.getMonth()) {
            const dayF = Math.abs(date.getDate() - dob.getDate());
            const monthdiff = Math.abs((date.getMonth() - dob.getMonth()));
            const monthF = 12 - monthdiff;
            const yearF = date.getYear() - dob.getYear() - 1;
            dayP.innerText = `${dayF}`;
            monthP.innerText = `${monthF}`;
            yearP.innerText = `${yearF}`;
            if (dayF < 2) {
                dayR.innerText = "day";
            }

            if (monthF < 2) {
                monthR.innerText = "month";
            }

            if (yearF < 2) {
                yearR.innerText = "year";
            }
        }
        else {
            const dayF = Math.abs(date.getDate() - dob.getDate());
            const monthF = Math.abs((date.getMonth() - dob.getMonth()));
            const yearF = date.getYear() - dob.getYear();
            dayP.innerText = `${dayF}`;
            monthP.innerText = `${monthF}`;
            yearP.innerText = `${yearF}`;
            if (dayF < 2) {
                dayR.innerText = "day";
            }

            if (monthF < 2) {
                monthR.innerText = "month";
            }

            if (yearF < 2) {
                yearR.innerText = "year";
            }


        }



    }




    if (day.value === "" || month.value === "" || year.value === "") {
        yearP.innerText = "--";
        dayP.innerText = "--";
        monthP.innerText = "--";
        dayR.innerText = "days";
        monthR.innerText = "months";
        yearR.innerText = "years";
    }

    if (month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11) {
        if (day.value > 30) {
            errorD.innerText = "Must be a valid day (less than 31)";
            errorD.classList.add("alert-empty");
            input.forEach(Element => Element.style.borderColor = "var(--light-red)");
            label.forEach(Element => Element.style.color = "var(--light-red)");
            yearP.innerText = "--";
            dayP.innerText = "--";
            monthP.innerText = "--";
            dayR.innerText = "days";
            monthR.innerText = "months";
            yearR.innerText = "years";
        }
    }

    if (month.value == 2) {

        if (day.value == 29 && (year.value) % 4 != 0) {

            errorD.innerText = "Must be a valid day (Not a leap year)";
            errorD.classList.add("alert-empty");
            input.forEach(Element => Element.style.borderColor = "var(--light-red)");
            label.forEach(Element => Element.style.color = "var(--light-red)");
            yearP.innerText = "--";
            dayP.innerText = "--";
            monthP.innerText = "--";
            dayR.innerText = "days";
            monthR.innerText = "months";
            yearR.innerText = "years";


        }

        if (day.value > 29) {


            errorD.innerText = "Must be a valid day (less than 29)";
            errorD.classList.add("alert-empty");
            input.forEach(Element => Element.style.borderColor = "var(--light-red)");
            label.forEach(Element => Element.style.color = "var(--light-red)");
            yearP.innerText = "--";
            dayP.innerText = "--";
            monthP.innerText = "--";
            dayR.innerText = "days";
            monthR.innerText = "months";
            yearR.innerText = "years";
        }


    }

    if (day.value < 1 || day.value > 31) {
        yearP.innerText = "--";
        dayP.innerText = "--";
        monthP.innerText = "--";
        dayR.innerText = "days";
        monthR.innerText = "months";
        yearR.innerText = "years";

    }


    if (month.value < 1 || month.value > 12) {
        yearP.innerText = "--";
        dayP.innerText = "--";
        monthP.innerText = "--";
        dayR.innerText = "days";
        monthR.innerText = "months";
        yearR.innerText = "years";

    }

    if (day.value.length < 2 || month.value.length < 2 || year.value.length < 4) {
        yearP.innerText = "--";
        dayP.innerText = "--";
        monthP.innerText = "--";
        dayR.innerText = "days";
        monthR.innerText = "months";
        yearR.innerText = "years";
    }


    if (dob.getYear() > date.getYear()) {
        yearP.innerText = "--";
        dayP.innerText = "--";
        monthP.innerText = "--";
        dayR.innerText = "days";
        monthR.innerText = "months";
        yearR.innerText = "years";

    }


    console.log(day.value);
    console.log(date.getDate());
    console.log(month.value);
    console.log(date.getMonth());
    console.log(year.value);
    console.log(date.getYear());


    if (day.value > date.getDate() && month.value > date.getMonth() && dob.getYear() >= date.getYear()) {
        errorD.innerText = "You're yet to enter this world!";
        errorD.classList.add("alert-empty");
        errorM.innerText = "You're yet to enter this world!";
        errorM.classList.add("alert-empty");
        errorY.innerText = "You're yet to enter this world!";
        errorY.classList.add("alert-empty");
        input.forEach(Element => Element.style.borderColor = "var(--light-red)");
        label.forEach(Element => Element.style.color = "var(--light-red)");
        yearP.innerText = "--";
        dayP.innerText = "--";
        monthP.innerText = "--";
        dayR.innerText = "days";
        monthR.innerText = "months";
        yearR.innerText = "years";
    }

    if (year.value < 1000) {
        yearP.innerText = "--";
        dayP.innerText = "--";
        monthP.innerText = "--";
        dayR.innerText = "days";
        monthR.innerText = "months";
        yearR.innerText = "years";

    }
});

input.forEach(
    (Element) => {
        Element.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                btn.click();
            }
        });
    }
);