function validateForm() {

    var fname = document.getElementsByName("firstname")[0].value;
    var lname = document.getElementsByName("lastname")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var contact = document.getElementsByName("contact")[0].value;
    var gender = document.getElementsByName("gender")[0].value;
    var dob = document.getElementsByName("dob")[0].value;

    if (fname == "" || lname == "" || email == "" || 
        contact == "" || gender == "" || dob == "") {
        
        alert("Please fill all fields");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
