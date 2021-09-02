function updprof() {
    let clgname = document.forms["proupda"]["clgname"];
    let uname = document.forms["proupda"]["uname"];
    let password = document.forms["proupda"]["paswd"];
    let password1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
    let pnum = document.proupda.pnum.value;
    let postadd = document.forms["proupda"]["postadd"];

    if (clgname.value == null || clgname.value == "" ) {
        document.getElementById("invnam").innerHTML = "Enter you name";
        clgname.focus();
        return false;
    }
    if (uname.value == null || uname.value == "") {
        document.getElementById("invuname").innerHTML = "Enter your username";
        uname.focus();
        return false;
    }
    if (password.value == null || password.value == "") {
        document.getElementById("invpsw").innerHTML = "Password must contain 6 character and one numbers and one uppercase";
        password.focus();
        return false;
    }
    if (pnum.value == null || pnum.value == "") {
        document.getElementById("invnum").innerHTML = "Enter mobile number";
        pnum.focus();
        return false;
    }
    if (isNaN(pnum)) {
        document.getElementById("invnum").innerHTML = "Enter numeric only";
        pnum.focus();
        return false;
    }
    if (postadd.value == null || postadd.value == "") {
        document.getElementById("invadr").innerHTML = "Enter your college address";
        postadd.focus();
        return false;
    }
    if (password.value.match(password1)) {
        document.getElementById("invpsw").innerHTML = "Your password is strength";
        return false;
    }
    else {
        alert("submit successfully");
        window.location.reload();
    }
}