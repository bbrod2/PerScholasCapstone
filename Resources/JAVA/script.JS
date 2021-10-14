/*------------------------------------------------------*/
/*--------------sign-up-form---------------------------*/
/*-----------------------------------------------------*/

function validateUsername() {
    let string = document.getElementById("username").value;
    const regex1 = /@/;
    const isExisting = regex1.test(string);
    console.log(isExisting);
    if (isExisting == true) {

        return true;

    } else {

        alert("Username must be a valid email");
        return false;
    }
}



function validateGender() {
    let string = document.getElementById("gender").value;

    const regex = /^Male$/;
    const regex1 = /^Female$/;
    const isExisting = regex1.test(string) || regex.test(string);
    if (isExisting == true) {

        return true;

    } else {

        alert("Input Male or Female");
        return false;
    }
}

function validateAge() {
    let string = document.getElementById("age").value;
    const regex = /[1-9]+/;
    const isExisting = regex.test(string);
    if(isExisting == true && string >= 18){
        return true;
    } else{
        alert("Age must be 18 or greater");
        return false
    }

}


const username = document.getElementById("username");
username.addEventListener('submit', validateUsername);


const gender = document.getElementById("gender");
gender.addEventListener('submit', validateGender);

const age = document.getElementById("age");
age.addEventListener('submit', validateAge);

/*------------------------------------------------------*/
/*--------------sign-up-form-end-----------------*/
/*-----------------------------------------------------*/

/*------------------------------------------------------*/
/*--------------FoodLog-Start-----------------*/
/*-----------------------------------------------------*/


function displayDayOne() {
   
    document.getElementById("dayOneInfo").style.display = "block";
    document.getElementById("dayTwoInfo").style.display = "none";
    document.getElementById("dayThreeInfo").style.display = "none";
    document.getElementById("dayFourInfo").style.display = "none";
    document.getElementById("dayFiveInfo").style.display = "none";
    document.getElementById("daySixInfo").style.display = "none";
    document.getElementById("daySevenInfo").style.display = "none";

}

function displayDayTwo() {
   
    document.getElementById("dayOneInfo").style.display = "none";
    document.getElementById("dayTwoInfo").style.display = "block";
    document.getElementById("dayThreeInfo").style.display = "none";
    document.getElementById("dayFourInfo").style.display = "none";
    document.getElementById("dayFiveInfo").style.display = "none";
    document.getElementById("daySixInfo").style.display = "none";
    document.getElementById("daySevenInfo").style.display = "none";



}

function displayDayThree() {
    document.getElementById("dayOneInfo").style.display = "none";
    document.getElementById("dayTwoInfo").style.display = "none";
    document.getElementById("dayThreeInfo").style.display = "block";
    document.getElementById("dayFourInfo").style.display = "none";
    document.getElementById("dayFiveInfo").style.display = "none";
    document.getElementById("daySixInfo").style.display = "none";
    document.getElementById("daySevenInfo").style.display = "none";

}

function displayDayFour() {
    document.getElementById("dayOneInfo").style.display = "none";
    document.getElementById("dayTwoInfo").style.display = "none";
    document.getElementById("dayThreeInfo").style.display = "none";
    document.getElementById("dayFourInfo").style.display = "block";
    document.getElementById("dayFiveInfo").style.display = "none";
    document.getElementById("daySixInfo").style.display = "none";
    document.getElementById("daySevenInfo").style.display = "none";

}


function displayDayFive() {
    document.getElementById("dayOneInfo").style.display = "none";
    document.getElementById("dayTwoInfo").style.display = "none";
    document.getElementById("dayThreeInfo").style.display = "none";
    document.getElementById("dayFourInfo").style.display = "none";
    document.getElementById("dayFiveInfo").style.display = "block";
    document.getElementById("daySixInfo").style.display = "none";
    document.getElementById("daySevenInfo").style.display = "none";

}

function displayDaySix() {
    document.getElementById("dayOneInfo").style.display = "none";
    document.getElementById("dayTwoInfo").style.display = "none";
    document.getElementById("dayThreeInfo").style.display = "none";
    document.getElementById("dayFourInfo").style.display = "none";
    document.getElementById("dayFiveInfo").style.display = "none";
    document.getElementById("daySixInfo").style.display = "block";
    document.getElementById("daySevenInfo").style.display = "none";

}

function displayDaySeven() {
    document.getElementById("dayOneInfo").style.display = "none";
    document.getElementById("dayTwoInfo").style.display = "none";
    document.getElementById("dayThreeInfo").style.display = "none";
    document.getElementById("dayFourInfo").style.display = "none";
    document.getElementById("dayFiveInfo").style.display = "none";
    document.getElementById("daySixInfo").style.display = "none";
    document.getElementById("daySevenInfo").style.display = "block";
}


function addTableRow() {
const table = document.getElementById("breakFastOneTable");
const row = table.inertRow(0);
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2); 
cell1.innerHTML = "New Item";
cell2.innerHTML = "5";
cell3.innerHTML = "600"; 
}

function displayForm() {
    document.getElementById("breakFastForm").style.display = "block";
    document.getElementById("formTitle").style.display = "block";
    document.getElementById("minusIcon").style.display = "block";
    document.getElementById("plusIcon").style.display = "none";
}

/*------------------------------------------------------*/
/*--------------FoodLog-End-----------------*/
/*-----------------------------------------------------*/
