function registerClick(){
   console.log("hello");
         
                 var firstname = document.getElementById('firstName').value;
                         
           
        var lastname = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var date = document.getElementById('date').value;
        var number = document.getElementById('phonenumber').value;
        var organisation = document.getElementById('organisation').value;
        var desciption = document.getElementById('desciption').value;

        var userjson = new Object();
        userjson.desciption = desciption;
        userjson.dob = '2019-03-16 07:33:28';
        userjson.email = email;
        userjson.gender = "Female";
        userjson.organization = organisation;
        userjson.phone = number;
        userjson.userFName = firstname;
        userjson.userId = Math.floor(Math.random() * 10000);
        userjson.userLName = lastname;

        var userString = JSON.stringify(userjson);


        var userauth = new Object();
        userauth.upswd = password;
        userauth.userId = userjson;
        userauth.userName = email;

        var userauthString = JSON.stringify(userauth);

               
$.ajax({
type: "POST",
url:'http://localhost:8080/AuthServicesFinal/webresources/com.auth.users',
data: userString,
success: function(data, status) {

                        alert(status);

                        
                        
                        
                    },
contentType:"application/json",
dataType:"json"



}).done(

                        
                        $.ajax({
type: "POST",
url:'http://localhost:8080/AuthServicesFinal/webresources/com.auth.usersauth',
data: userauthString,
success: function(data, status) {

                        alert(status);
                    },
contentType:"application/json",
dataType:"json"



})

);






}