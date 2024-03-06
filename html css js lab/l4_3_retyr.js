function validateName() {
    /*Check whether name is entered or not.
    Throw an error if name field is empty.
    Error message will be "Full name is required."*/
    let name = document.getElementById("fullName").value;
    let regexp = /^[A-Za-z]*( [A-Za-z]*)*$/
    if ((regexp.test(name))){
        console.log('woorks');
    }
    else{
        throw "Error: Full name is required"
    }
}

function validateEmail() {
    /*Check whether email is valid or not, as per the rules stated in problem statement.
    Use regex and test() function to validate the email address.
    Throw an error if email is invalid.
    Error message will be "Invalid Email Address."*/
    let name = document.getElementById("email").value;
    let regexp = /^([a-z0-9])+@([a-z])+.[a-z]{3}$/
    if ((regexp.test(name))){
        console.log('woorks');
    }
    else{
        throw "Error: Invalid Email Address."
    }
}

function validatePassword() {
    /*Check whether password is made of atleast 8 characters.
    /If not, throw an error.
    Error message will be "Password must be at least 8 characters"*/
    let pass = document.getElementById('password').value;
    if (pass.length < 8){
        throw 'Error: Password must be at least 8 characters.';
    }
}

function ConfirmPassword() {
    /*Check whether the re-entered password is same as the password entered first.
    If not, throw an error.
    Error message will be "Passwords do not match"*/
    let cpass = document.getElementById('confirmPassword').value;
    let pass = document.getElementById('password').value;
    if (pass!=cpass){
        throw "Error: Passwords do not match."
    }

}

function validateForm() {
    try {
        let name = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById('password').value;
        let cpassword = document.getElementById('confirmPassword').value;
        if((name== '') ||(email == '')||(password='')||(cpassword='')){
            throw "Error: All fields are required.";
        }
        /*Check whether all fields are entered or not*/
        //Your code here

        validateName();
        validateEmail();
        validatePassword();
        ConfirmPassword();


        // Additional validation rules can be added here

        //After checking all the rules, if the program throws no error, it will reach this part of code.
        //Using "innerHTML" and "span" tag, give the message "Registration successful!" in GREEN colour to the div container "feedback" in index.html.
        //Your code here
        document.getElementById('feedback').innerHTML = "<span style='color:green'>Registration Successful!</span>";
    } catch (error) {
        //After checking all the rules, if the program throws an error, it will reach this part of code.
        //Using "innerHTML" and "span" tag, give the error message in RED colour to the div container "feedback" in index.html.
        //Your code here
        document.getElementById('feedback').innerHTML = error;
        document.getElementById('feedback').style.color = 'red';
    }
}
