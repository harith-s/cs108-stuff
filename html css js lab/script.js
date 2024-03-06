function validateName() {
    /*Check whether name is entered or not.
    Throw an error if name field is empty.
    Error message will be "Full name is required."*/
    let name = document.getElementById("fullname").value;
    regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/
    if ((isValid(name, regex))){
        console.log("pyayyy")
    }
    else{
        throw "Full name is required    "
    }
    
}
function isValid(content, regexp){
    return regexp.test(content);
}

function validateEmail() {
    /*Check whether email is valid or not, as per the rules stated in problem statement.
    Use regex and test() function to validate the email address.
    Throw an error if email is invalid.
    Error message will be "Invalid Email Address."*/
    let email = document.getElementById("email").value;
    regex = /^[0-9a-z]+@[a-z]+.[a-z]{3}$/
    if ((isValid(email, regex))){
        console.log("pyayyy")
    }
    else{
        throw "Error: Invalid Email Address."
    }

}

function validatePassword() {
    /*Check whether password is made of atleast 8 characters.
    /If not, throw an error.
    Error message will be "Password must be at least 8 characters"*/
    let password = document.getElementById("password").value;
    if (password.length < 8){
        throw "Error: Password must be at least 8 characters."
    }
}

function ConfirmPassword() {
    /*Check whether the re-entered password is same as the password entered first.
    If not, throw an error.
    Error message will be "Passwords do not match"*/
    let confirmpass = document.getElementById("confirmPassword").value;
    let password = document.getElementById("password").value;
    if (confirmpass != password){
        throw "Error: Passwords do not match."
    }
}

function validateForm() {
    try {

        /*Check whether all fields are entered or not*/
        //Your code here
        let name = document.getElementById("fullname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmpass = document.getElementById("confirmPassword").value;
        if (name.length == 0 || email.length == 0 || password.length == 0 || confirmpass.length == 0){
            throw "Error: All fields are required."
        }
        validateName();
        validateEmail();
        validatePassword();
        ConfirmPassword();
        document.getElementById("feedback").style.color = "green";
        document.getElementById('feedback').innerHTML = "Registration successful!";
        
        const tr = document.createElement('tr');
        let n_name = document.getElementById("fullname").value;
        let n_email = document.getElementById('email').value;
        let n_research = document.getElementById('message').value;
        let tablebody = document.getElementById('data');
        console.log(n_name, n_email, n_research);
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.innerHTML = n_name;
        td2.innerHTML = n_email;
        td3.innerHTML = n_research;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        console.log(document.getElementById(data));
        
        tablebody.appendChild(tr);
        console.log('hhere 3');
        document.getElementById('form').reset();
        
        // var table = document.getElementById("data");
        // var row = table.insertRow();
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // var cell3 = row.insertCell(2);
        // cell1.innerHTML = n_name;
        // cell2.innerHTML = n_email;
        // cell3.innerHTML = n_research;

        // Additional validation rules can be added here

        //After checking all the rules, if the program throws no error, it will reach this part of code.
        //Using "innerHTML" and "span" tag, give the message "Registration successful!" in GREEN colour to the div container "feedback" in index.html.
        //Your code here
    } catch (error) {
        //After checking all the rules, if the program throws an error, it will reach this part of code.
        //Using "innerHTML" and "span" tag, give the error message in RED colour to the div container "feedback" in index.html.
        //Your code here
        document.getElementById('feedback').style.color = 'red';
        document.getElementById('feedback').innerHTML = error;
    }
}
