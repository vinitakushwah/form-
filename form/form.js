var formdata = document.getElementById('dataform');
var submit = document.getElementById('submit_btn');
var city = document.getElementById('city').value
var firstname_error = document.getElementById('firstname_error');
var password_error = document.getElementById('password_error');
var city_error = document.getElementById('city_error');
var email_error = document.getElementById('email_error');
var email = document.getElementById('email');
var firstname = document.getElementById('firstname');
var password = document.getElementById('password');
var city = document.getElementById('city');




function formsubmit() {

    //    validate email field
    if (email == "") {
        email_error.innerHTML = "please enter your email address";
    }
    else{
        var mailformat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.value.match(mailformat)) {

        }

        else {

            email_error.innerHTML = "invalid type ";

        };

    }


    // Validate city

    if (city == "") {
        city_error.innerHTML = "please select your city";

    }

    // validate name field
    if (firstname == "") {

        firstname_error.innerHTML = "please enter your name";
    }
    else {
        var pattern = /^[A-Za-z]+$/;

        if (firstname.value.match(pattern)) {

        }

        else {

            firstname_error.innerHTML = "invalid type ";

        };
    }

    // validate password field
    if (password == "") {
        password_error.innerHTML = "please enter password";
    }

    
}



function validator() {

    var submit = document.getElementById('submit_btn');
    submit.disabled = true;

    if (firstname.value != "" &&  password.value!= "" && email.value!= "" && (city.value!=  "")  ) {

        submit.disabled = false;
    }

};




function emailvalidation() {
    if (email !== "") {
        let emailerrormsg = document.getElementById('email_error');
        emailerrormsg.innerHTML = "";
        chekemail = true;
    }
}



function myvalidation() {
    var firstname = document.getElementById('firstname').value;
    var pattern = /^[A-Za-z]+$/;
    if (firstname.match(pattern)) {
        let errormsg = document.getElementById('firstname_error');
        errormsg.innerHTML = '';
        return true;
    }
}

function passwordvalidation() {

    var password = document.getElementById('password').value;
    if (password !== "") {
        let errorpassword = document.getElementById('password_error');
        errorpassword.innerHTML = "";
        return true;
    }
}

function selectvalidation() {
    var city = document.getElementById('city').value;
    if (city !== "") {
        let errorcity = document.getElementById('city_error');
        errorcity.innerHTML = "";
        return true;
    }
}


