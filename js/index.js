

$(document).ready(function(){
	    
	     $('#text_value').click(function() {
            var text_value = $("#text").val();
            if(text_value=="") {
             //  alert("Enter Some Text In Input Field");
               }else{
              // alert(text_value);
				wordSearch(text_value);
			   }
               $("#text").val('');
        });

	/*
		$('#text_reset').click(function() {
        $("#text").val('');
    });
		
	*/
});

function wordSearch(keyword) {
	
	$.ajax({ 
    url: "https://en.wikipedia.org/w/api.php?action=query",
 
   dataType: 'jsonp',
		data: {
           format:'json',
			list:'search',
			srsearch: keyword
          },
		  
   success: function(data) {
      // console.log(response.query);
       if (data.query.searchinfo.totalhits > 0) {
       //  console.log(" hits found");
		   console.log(data.query.search);
           for (var index = 0; index < data.query.search.length; index++) {
                  var ref = data.query.search[index].title;
               //  $(".list-block").css(data.query.search[index].snippet);
              //   $("<div>" + data.query.search[index].snippet + "</div>" + "<br>").appendTo(".born");
            //     $("<li><p class=" + "born" + ">"+ data.query.search[index].snippet+"</p></li>").appendTo(".list");
            $('#to-jumbotron').addClass("jumbotron");
            $('a').attr("href","https://en.wikipedia.org/wiki/"+data.query.search[index].title);
            $('a').attr("target","_blank")
 $("<li><a><p>"+ data.query.search[index].snippet+"</p></a></li>").appendTo(".list");
           }
		   
	   }else{
		   console.log("no hits on that entry, try a new word");
		   }
		   },
	error:  function () {
    alert("Error retrieving search results, please refresh the page");
   }
});

}


	
	