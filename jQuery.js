function maleGreet() {
    alert("Hello Sir");
}
function femaleGreet() {
    alert("Hello Lady");
}
function promoFunction() {
    currentState = $("#state").val();
    if (currentState) {
        document.getElementById('promo').value = currentState + "-PROMO";
        $("#promo").val(currentState + "-PROMO");
        console.log(currentState)
    }
}
function isEmptyName() {
    let name = $("#name").val();
    if (name == "") {
        $("#blankName").text("Name is required");
    }
    else {
        $("#blankName").text("");
    }
}
function isEmptyMail() {
    let name = $("#mail").val();
    if (name == "") {
        $("#blankMail").text("Mail is required");
    }
    else {
        $("#blankMail").text("");
    }
}
function isEmptyOrg() {
    let name = $("#orgName").val();
    if (name == "") {
        $("#blankOrg").text("Organisation is Required");
    }
    else {
        $("#blankOrg").text("");
    }
}
function nameCheck() {
    let temp = $("#name").val();
    console.log(temp);
    if (temp == "") {
        $("#blankName").text("Name is required");
        return false;
    }
    else {
        return true;
    }
}
function orgCheck() {
    let temp = $("#orgName").val();
    if (temp == "") {
        $("#blankOrg").text("orgName is required");
        return false;
    }
    else {
        return true;
    }
}
function mailCheck() {
    let temp = $('#mail').val();
    if (temp == "") {
        $("#blankMail").text("Mail is required");
        return false;
    }
    else {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.match(mailformat)) {
            return true;
        }
        else {
            $("#blankMail").text("Enter valid mail");
            return fasle;
        }
    }
}
function validate() {
    let nameBool = nameCheck();
    let orgBool = orgCheck();
    let mailBool = mailCheck();
    if (nameBool && orgBool && mailBool) {
        let temp = 10;
        return true
    }
    else {
        $("#alertMsg").text("Please fill all the required fields");
        return false
    }
}
function clearForm(){
    $('formPage').trigger("reset");
}
