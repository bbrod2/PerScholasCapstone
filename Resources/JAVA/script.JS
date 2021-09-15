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



