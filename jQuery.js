function maleGreet() {
    alert("Hello Sir");
}
function femaleGreet() {
    alert("Hello Lady");
}
function promoFunction() {
    let currentState = $("#state").val();
    if (currentState) {
        $("#promo").val(currentState + "-PROMO");
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
        if (temp.match(mailformat)) {
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
        return true
    }
    else {
        $("#alertMsg").text("Please fill all the required fields");
        return false
    }
}
function clearForm() {
    $('formPage').trigger("reset");
    $("#blankMail").text("");
    $("#blankName").text("");
    $("#blankOrg").text("");
    $("#alertMsg").text("");
}
function addOptions() {
    let stateList = ['Andaman and Nicobar Islands',  'Andhra Pradesh','Arunachal Pradesh', 'Assam', 'Bihar',  'Chandigarh',
         'Chhattisgarh','Dadra and Nagar Haveli and Daman and Diu','Goa',  'Gujurat',  'Haryana',  'Himachal Pradesh',
         'Jammu and Kashmir',  'Jharkhand',  'Karnataka','Kerela',  'Ladakh',  'Lakshadweep',  'Madhya Pradesh',
         'Maharashtra',  'Manipur', 'Meghalaya', 'Mizoram',  'Nagaland', 'NCT of Delhi', 'Odisha',  'Puducherry',  'Punjab',
         'Rajasthan',  'Sikkim',  'Tamil Nadu', 'Telangana',  'Tripura',  'Uttarakhand', 'Uttar Pradesh',  'West Bengal'
    ];
    $.each(stateList, function (val, text) {
        $('#state').append(
            $('<option></option>').val(text).html(text)
        )
    });
}
$(function () {
    addOptions();
    $("#name").on("input", function () { isEmptyName(); });
    $("#name").trigger("focus");
    $("#mail").on("input", function () { isEmptyMail(); });
    $("#male").on("change", function () { maleGreet(); });
    $("#female").on("change", function () { femaleGreet(); });
    $("#orgName").on("input", function () { isEmptyOrg(); });
    $("#state").on("change", function () { promoFunction(); });
    $("#valBtn").on("click", function () { validate(); });
    $("#clrBtn").on("click", function () { clearForm(); });
})
