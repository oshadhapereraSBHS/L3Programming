var validEmail = true;

// Function to handle contact form submission
function contactSubmit() {
    //setting variables for the three required fields
    var required1 = document.getElementById("required1").value;
    var required2 = document.getElementById("required2").value;
    var required3 = document.getElementById("required3").value;

    //validate email function
    validateEmail()
    // //if name is not filled in, alert asking for name
    if (required1 == null || required1 == "") {
        alert("Please enter your first name")
    } else if (required2 == null || required2 == "") {
        //if email is not filled in, alert asking for email
        alert("Please enter your email address")
    } else if (validEmail == false) {
        //if email is not valid, alert asking for valid email
        alert("Please enter a valid email address")
    } else if (required3 == null || required3 == "") {
        //if message is not filled in, alert asking for message
        alert("Please enter your message")
    } else {
        //when submit is pressed, hide cntact form and show thank you message
        document.getElementById("row2").style.display = "none"
        document.getElementById("col2").style.display = "none"
        document.getElementById("col1").style.display = "none"
        document.getElementById("receivedContact").innerHTML = "Thank you for contacting us."

    }
} //end of contactSubmit function

//Function for validating email
function validateEmail() {
    // Get the input field value
    const emailAddress = document.getElementById('required2').value;

    // Define a regular expression pattern for email validation - a valid email needs to contain at least one alphanumeric character, followed by an @ symbol, followed by at least one alphanumseric character, followed by a dot, followed by at least two alphanumeric characters.
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the entered email address matches the pattern
    if (emailPattern.test(emailAddress)) {
        //if yes, set validEmail to true
        validEmail = true;
    } else {
        //if not, set validEmail to false
        validEmail = false;
    }
} //end of function