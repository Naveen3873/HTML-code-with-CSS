function log() {
    if (document.getElementById('adlogin').checked) {

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username == null || username == "") {
            document.getElementById("invuname").innerHTML = "Please input your username";
            return false;
        }
        else{
            document.getElementById("invuname").innerHTML = "";
        }
        if (password == null || password =="") {
            document.getElementById("invpsw").innerHTML = "Please input your password";
            return false;
        }
        else {
            document.getElementById("invpsw").innerHTML = "";
        }
        if (username == "admin" && password == "admin") {
            alert("Login successfully");
            window.open("file:///D:/Naveen/HTML-code-with-CSS/adminlogin.html");
            location.reload();
            return true;
        }
        else {
            document.getElementById("invuname").innerHTML = "invalid username";
            document.getElementById("invpsw").innerHTML = "invalid password";
            return false;
        }
                
    }

    else if (document.getElementById('cllogin').checked) {
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username == null || username == "") {
        document.getElementById("invuname").innerHTML = "Please input your username";
        return false;
        }
        else{
            document.getElementById("invuname").innerHTML = "";
        }

        if (password == null || password =="") {
            document.getElementById("invpsw").innerHTML = "Please input your password";
            return false;
        }
        else {
            document.getElementById("invpsw").innerHTML = "";
        }

        if (username == "american" && password == "123456") {
            window.open("file:///D:/Naveen/HTML-code-with-CSS/clglogin.html");
            location.reload();
            return true;
        }
        else {
            document.getElementById("invuname").innerHTML = "invalid username";
            document.getElementById("invpsw").innerHTML = "invalid password";
            return false;
        }
                
    }
    else if (document.getElementById('stlogin').checked) {
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username == null || username == "") {
            document.getElementById("invuname").innerHTML = "Please input your username";
            return false;
        }
        else{
            document.getElementById("invuname").innerHTML = "";
        }
        if (password == null || password =="") {
            document.getElementById("invpsw").innerHTML = "Please input your password";
            return false;
        }
        else {
            document.getElementById("invpsw").innerHTML = "";
        }
        if (username == "Naveen" && password == "860865") {
            window.open("file:///D:/Naveen/HTML-code-with-CSS/stulogin.html");
            location.reload();
            return true;
        }
        else {
            document.getElementById("invuname").innerHTML = "invalid username";
            document.getElementById("invpsw").innerHTML = "invalid password";
            return false;
        }
                
    }
    else{
        alert("Please login");
    }
}


function adlog() {
    document.getElementById('loghead').innerHTML = "Admin Login";
}

function cllog() {
    document.getElementById('loghead').innerHTML = "College Login";
}

function stlog() {
    document.getElementById('loghead').innerHTML = "Student Login";
}
