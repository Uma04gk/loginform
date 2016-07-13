localStorage.setItem("login", "123");
localStorage.setItem("password", "123");
alert(login);
function validate() {

    var username = document.getElementById("fname").value;
    var password = document.getElementById("password").value;
    if (username == localStorage.getItem("login") && password ==localStorage.getItem("password")) {
        alert("Login successfully");
        window.location = "reg.html"; // Redirecting to other page.
    } else {
alert("Wrong login Details");
    }
}
