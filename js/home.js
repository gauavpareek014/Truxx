/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {
function loginClick(){
    var userName=document.getElementById('eadd').value;
    var userpsw=document.getElementById('psw').value;
    
    console.log("Your username is "+userName+" and your password is: "+userpsw);
}

function clickSearch(){
    
}
  $("#login").click(function (event) {
    var username = $('#eadd').value;
    var password = $('#psw').value;
    console.log(username);
    console.log(password);

$.ajax({
  url: 'http://localhost:8080/AuthServicesFinal/webresources/com.auth.usersauth/',
  dataType: 'json',
  success: function( resp ) {
      if(resp['upswd']==password){

      // login succesful
    }else
    {

      //login unsuccessful
    }
   
      
    console.log("Hi"+resp);
  console.log("hwllooo");
  },
  error: function( req, status, err ) {
    console.log( 'something went wrong', status, err );
  }
});


});

});
