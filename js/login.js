function validate(){
var username = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( username == "Formget@gmail.com" && password == "formget#123"){
Redirect();// Redirecting to other page.

}
else{
alert("Invalid credentials");
return false;
}
}
function Redirect() {
               window.location="http://www.tutorialspoint.com";
            }