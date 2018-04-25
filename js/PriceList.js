/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
console.log("PriceList js");
function createNode(element) {
      return document.createElement(element);
  }
var table = document.createElement("table");
var tr = table.insertRow(-1);
  function append(parent, el) {
    return parent.appendChild(el);
  }

$.getJSON('http://localhost:8080/TruxxApp/webresources/com.truxx.entities.pricechart/', function(pricelist) {
           
	//console.log("test"+booksData);
      
      
      		$.each(pricelist, function(index, item) {
                    // console.log("Temp variable value"+temp);
					
					var th = document.createElement("th");      // TABLE HEADER.

                    if(item.genreId.genreId==genreid){
			console.log("TEst data "+item.bookName);
                                     			
                                let li = createNode('li'),a=createNode('a'),
				disp=createNode('text'),
				descr=createNode('text');
				disp.value=item.bookName;
				descr.value=item.bookDescr;
                var div1 = document.createElement("div");
              
                var div4=document.createElement("div");
                var textdisp= document.createTextNode(item.bookName);
					div1.className = 'col s4';
                                        div1.style.float='left';
                                        div1.style.marginLeft='20px';
					var div2 = document.createElement("div");
                                        var div5=document.createElement("div");
                                       
					div2.className = 'book-list';
                                        div2.style.align='left';
                                        div2.style.float='left';
                                        
                                        //<div class="row" style="margin-top:20px;margin-bottom: 40px" >
					var imagetag = document.createElement("img");
                                        imagetag.setAttribute('src',item.BImagesmall);
					var div3 = document.createElement("div");
                                        div4.className="row";
                                        div4.style.marginTop="20px";
                                        div4.style.marginBottom="40px";
                                    
					var hreftag = document.createElement("a");
					div3.className = 'book-page-title';
                                        div3.itemprop='name';
                                        div3.style.marginTop="20px";
                                        div3.style.lineHeight="21.33px";
                                        div3.style.textAlign="center";
					
					var para = document.createElement("h5");
                                        
                            var node = document.createTextNode(item.bookDescr);
                                        para.appendChild(node);
                                        para.style.textAlign="center";
                                        a.setAttribute('href', "url");
                                        a.appendChild(textdisp);    
                                       
                                       
					div3.appendChild(a);
					div2.appendChild(imagetag);
					div2.appendChild(div3);
					div1.appendChild(div2);
                                       
                                      div4.appendChild(div1);
                                      
                                      
                                      div4.appendChild(para);
                                       //outerdiv.appendChild(div4);				
				a.style.color="black";
                              
				append(document.getElementById('sortedBooksWrapper'), div4);

                                                           
                            }});
                          });
   