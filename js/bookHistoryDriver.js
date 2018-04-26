
window.onload = function() {
 CreateTableFromJSON();
};


function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";expires=" + d.toGMTString();
}

function deleteCookie(name) { setCookie(name, '', -1); }


    function CreateTableFromJSON() {
setCookie('userId',1,8);
        var myBooks;

        $.ajax({
  url: 'http://localhost:8080/DB/webresources/trips/driver/'+getCookie('userId'),
//url: 'http://localhost:8080/DB/webresources/trips/driver/8',
  dataType: 'json',
  success: function( resp ) {
     
      myBooks = resp;
    
  console.log("hwllooo");
  },
  error: function( req, status, err ) {
    console.log( 'something went wrong', status, err );
  }
}).done(
        
        function(data){
            
            // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = ['tripDate', 'tripDestinationStreetName','tripEndTime','tripStartLocationStreetName','tripStartTime'];
        

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myBooks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
            
            
            
            
            
            
            
            
            
            
        }

        );

        
        }
   