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
    if (isExisting == true && string >= 18) {
        return true;
    } else {
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

/*-------------------------------DayOne-----------------------------------*/

function displayForm() {

    if (document.getElementById("breakFastForm").style.display == "none") {

        document.getElementById("breakFastForm").style.display = "block";
        document.getElementById("plusIcon").style.display = "none";
        document.getElementById("minusIcon").style.display = "block";
    } else {
        document.getElementById("breakFastForm").style.display = "none";
        document.getElementById("plusIcon").style.display = "block";
        document.getElementById("minusIcon").style.display = "none";

    }
}


function displaySearchBar() {
    if (document.getElementById("breakFastSearchBar").style.display == "none") {

        document.getElementById("breakFastSearchBar").style.display = "block";
        document.getElementById("breakFastplusIcon").style.display = "none";
        document.getElementById("breakFastminusIcon").style.display = "block";
    } else {
        document.getElementById("breakFastSearchBar").style.display = "none";
        document.getElementById("breakFastplusIcon").style.display = "block";
        document.getElementById("breakFastminusIcon").style.display = "none";

    }
}

function displaySearchBar1() {
    if (document.getElementById("lunchSearchBar").style.display == "none") {

        document.getElementById("lunchSearchBar").style.display = "block";
        document.getElementById("lunchplusIcon").style.display = "none";
        document.getElementById("lunchminusIcon").style.display = "block";
    } else {
        document.getElementById("lunchSearchBar").style.display = "none";
        document.getElementById("lunchplusIcon").style.display = "block";
        document.getElementById("lunchminusIcon").style.display = "none";

    }
}

function displaySearchBar2() {
    if (document.getElementById("dinnerSearchBar").style.display == "none") {

        document.getElementById("dinnerSearchBar").style.display = "block";
        document.getElementById("dinnerplusIcon").style.display = "none";
        document.getElementById("dinnerminusIcon").style.display = "block";
    } else {
        document.getElementById("dinnerSearchBar").style.display = "none";
        document.getElementById("dinnerplusIcon").style.display = "block";
        document.getElementById("dinnerminusIcon").style.display = "none";

    }
}

function displaySearchBar3() {
    if (document.getElementById("snackSearchBar").style.display == "none") {

        document.getElementById("snackSearchBar").style.display = "block";
        document.getElementById("snackplusIcon").style.display = "none";
        document.getElementById("snackminusIcon").style.display = "block";
    } else {
        document.getElementById("snackSearchBar").style.display = "none";
        document.getElementById("snackplusIcon").style.display = "block";
        document.getElementById("snackminusIcon").style.display = "none";

    }
}
/*-------------------------------DayTwo-----------------------------------*/
function d2displayForm() {

    if (document.getElementById("d2breakFastForm").style.display == "none") {

        document.getElementById("d2breakFastForm").style.display = "block";
        document.getElementById("d2plusIcon").style.display = "none";
        document.getElementById("d2minusIcon").style.display = "block";
    } else {
        document.getElementById("d2breakFastForm").style.display = "none";
        document.getElementById("d2plusIcon").style.display = "block";
        document.getElementById("d2minusIcon").style.display = "none";

    }
}


function d2displaySearchBar() {
    if (document.getElementById("d2breakFastSearchBar").style.display == "none") {

        document.getElementById("d2breakFastSearchBar").style.display = "block";
        document.getElementById("d2breakFastplusIcon").style.display = "none";
        document.getElementById("d2breakFastminusIcon").style.display = "block";
    } else {
        document.getElementById("d2breakFastSearchBar").style.display = "none";
        document.getElementById("d2breakFastplusIcon").style.display = "block";
        document.getElementById("d2breakFastminusIcon").style.display = "none";

    }
}

function d2displaySearchBar1() {
    if (document.getElementById("d2lunchSearchBar").style.display == "none") {

        document.getElementById("d2lunchSearchBar").style.display = "block";
        document.getElementById("d2lunchplusIcon").style.display = "none";
        document.getElementById("d2lunchminusIcon").style.display = "block";
    } else {
        document.getElementById("d2lunchSearchBar").style.display = "none";
        document.getElementById("d2lunchplusIcon").style.display = "block";
        document.getElementById("d2lunchminusIcon").style.display = "none";

    }
}

function d2displaySearchBar2() {
    if (document.getElementById("d2dinnerSearchBar").style.display == "none") {

        document.getElementById("d2dinnerSearchBar").style.display = "block";
        document.getElementById("d2dinnerplusIcon").style.display = "none";
        document.getElementById("d2dinnerminusIcon").style.display = "block";
    } else {
        document.getElementById("d2dinnerSearchBar").style.display = "none";
        document.getElementById("d2dinnerplusIcon").style.display = "block";
        document.getElementById("d2dinnerminusIcon").style.display = "none";

    }
}

function d2displaySearchBar3() {
    if (document.getElementById("d2snackSearchBar").style.display == "none") {

        document.getElementById("d2snackSearchBar").style.display = "block";
        document.getElementById("d2snackplusIcon").style.display = "none";
        document.getElementById("d2snackminusIcon").style.display = "block";
    } else {
        document.getElementById("d2snackSearchBar").style.display = "none";
        document.getElementById("d2snackplusIcon").style.display = "block";
        document.getElementById("d2snackminusIcon").style.display = "none";

    }
}

/*-------------------------------DayThree-----------------------------------*/

function d3displayForm() {

    if (document.getElementById("d3breakFastForm").style.display == "none") {

        document.getElementById("d3breakFastForm").style.display = "block";
        document.getElementById("d3plusIcon").style.display = "none";
        document.getElementById("d3minusIcon").style.display = "block";
    } else {
        document.getElementById("d3breakFastForm").style.display = "none";
        document.getElementById("d3plusIcon").style.display = "block";
        document.getElementById("d3minusIcon").style.display = "none";

    }
}


function d3displaySearchBar() {
    if (document.getElementById("d3breakFastSearchBar").style.display == "none") {

        document.getElementById("d3breakFastSearchBar").style.display = "block";
        document.getElementById("d3breakFastplusIcon").style.display = "none";
        document.getElementById("d3breakFastminusIcon").style.display = "block";
    } else {
        document.getElementById("d3breakFastSearchBar").style.display = "none";
        document.getElementById("d3breakFastplusIcon").style.display = "block";
        document.getElementById("d3breakFastminusIcon").style.display = "none";

    }
}

function d3displaySearchBar1() {
    if (document.getElementById("d3lunchSearchBar").style.display == "none") {

        document.getElementById("d3lunchSearchBar").style.display = "block";
        document.getElementById("d3lunchplusIcon").style.display = "none";
        document.getElementById("d3lunchminusIcon").style.display = "block";
    } else {
        document.getElementById("d3lunchSearchBar").style.display = "none";
        document.getElementById("d3lunchplusIcon").style.display = "block";
        document.getElementById("d3lunchminusIcon").style.display = "none";

    }
}

function d3displaySearchBar2() {
    if (document.getElementById("d3dinnerSearchBar").style.display == "none") {

        document.getElementById("d3dinnerSearchBar").style.display = "block";
        document.getElementById("d3dinnerplusIcon").style.display = "none";
        document.getElementById("d3dinnerminusIcon").style.display = "block";
    } else {
        document.getElementById("d3dinnerSearchBar").style.display = "none";
        document.getElementById("d3dinnerplusIcon").style.display = "block";
        document.getElementById("d3dinnerminusIcon").style.display = "none";

    }
}

function d3displaySearchBar3() {
    if (document.getElementById("d3snackSearchBar").style.display == "none") {

        document.getElementById("d3snackSearchBar").style.display = "block";
        document.getElementById("d3snackplusIcon").style.display = "none";
        document.getElementById("d3snackminusIcon").style.display = "block";
    } else {
        document.getElementById("d3snackSearchBar").style.display = "none";
        document.getElementById("d3snackplusIcon").style.display = "block";
        document.getElementById("d3snackminusIcon").style.display = "none";

    }
}

/*-------------------------------DayFour-----------------------------------*/

function d4displayForm() {

    if (document.getElementById("d4breakFastForm").style.display == "none") {

        document.getElementById("d4breakFastForm").style.display = "block";
        document.getElementById("d4plusIcon").style.display = "none";
        document.getElementById("d4minusIcon").style.display = "block";
    } else {
        document.getElementById("d4breakFastForm").style.display = "none";
        document.getElementById("d4plusIcon").style.display = "block";
        document.getElementById("d4minusIcon").style.display = "none";

    }
}


function d4displaySearchBar() {
    if (document.getElementById("d4breakFastSearchBar").style.display == "none") {

        document.getElementById("d4breakFastSearchBar").style.display = "block";
        document.getElementById("d4breakFastplusIcon").style.display = "none";
        document.getElementById("d4breakFastminusIcon").style.display = "block";
    } else {
        document.getElementById("d4breakFastSearchBar").style.display = "none";
        document.getElementById("d4breakFastplusIcon").style.display = "block";
        document.getElementById("d4breakFastminusIcon").style.display = "none";

    }
}

function d4displaySearchBar1() {
    if (document.getElementById("d4lunchSearchBar").style.display == "none") {

        document.getElementById("d4lunchSearchBar").style.display = "block";
        document.getElementById("d4lunchplusIcon").style.display = "none";
        document.getElementById("d4lunchminusIcon").style.display = "block";
    } else {
        document.getElementById("d4lunchSearchBar").style.display = "none";
        document.getElementById("d4lunchplusIcon").style.display = "block";
        document.getElementById("d4lunchminusIcon").style.display = "none";

    }
}

function d4displaySearchBar2() {
    if (document.getElementById("d4dinnerSearchBar").style.display == "none") {

        document.getElementById("d4dinnerSearchBar").style.display = "block";
        document.getElementById("d4dinnerplusIcon").style.display = "none";
        document.getElementById("d4dinnerminusIcon").style.display = "block";
    } else {
        document.getElementById("d4dinnerSearchBar").style.display = "none";
        document.getElementById("d4dinnerplusIcon").style.display = "block";
        document.getElementById("d4dinnerminusIcon").style.display = "none";

    }
}

function d4displaySearchBar3() {
    if (document.getElementById("d4snackSearchBar").style.display == "none") {

        document.getElementById("d4snackSearchBar").style.display = "block";
        document.getElementById("d4snackplusIcon").style.display = "none";
        document.getElementById("d4snackminusIcon").style.display = "block";
    } else {
        document.getElementById("d4snackSearchBar").style.display = "none";
        document.getElementById("d4snackplusIcon").style.display = "block";
        document.getElementById("d4snackminusIcon").style.display = "none";

    }
}





/*------------------------------------------------------*/
/*--------------FoodLog-End-----------------*/
/*-----------------------------------------------------*/