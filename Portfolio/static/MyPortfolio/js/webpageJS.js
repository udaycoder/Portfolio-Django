var count=0;
var a1,a2,a3,a4,a5,a6,code,languageUsed,Url,secret,inputs,response_obj;



function takeInfo() {
code=document.getElementById('codeinput').value;
languageUsed=document.getElementById('languageSelector').value;
inputs= document.getElementById('consoleinput').value;
Url='/compile/';
secret = '62a42cd655bfb74fa2c458e824c11ecfd7a1aeff';
//AJAX
$.ajax(
{
   url: Url ,
   cache:false,
   data: {'sourcecode':code,'langused':languageUsed,'codeinput':inputs},
   cache:false,
   dataType:'json',
   success: function(response)
   {
         
	 response_obj=response;
     document.getElementById("outputs").innerHTML =JSON.stringify(response_obj.compile_status,null,2);
   },
   error: function(data)
   {
       document.getElementById("outputs").innerHTML ='<h2>Error could not retrieve data</h2>';
   }
});

}

function takeInfo1(){
code=document.getElementById('codeinput').value;
languageUsed=document.getElementById('languageSelector').value;
inputs= document.getElementById('consoleinput').value;
Url='/run/';

CLIENT_SECRET= '62a42cd655bfb74fa2c458e824c11ecfd7a1aeff';
//AJAX
$.ajax(
{
  url: Url ,
  cache:false,
  data: {'sourcecode':code,'langused':languageUsed , 'codeinput':inputs},
  dataType:'json',
   success: function(response)
   {
	   response_obj = response;
       document.getElementById("outputs").innerHTML =JSON.stringify(response_obj.run_status,null,2)+"  "+JSON.stringify(response_obj.compile_status,null,2);
   },
   error: function(data)
   {
        document.getElementById("outputs").innerHTML ='<h2>Error could not retrieve data</h2>';
   }
});

}


jQuery(document).ready(function($){

		$(window).on('scroll', function() {

				var y_scroll_pos = window.pageYOffset;
				var scroll_beg = 420;
        var scroll_end=900;
				var window_width=$(window).width();

        if(window_width < 1186){
                                         $("#daily-quotes").hide();
                                         $("#daily-quotes1").hide();
                                }

      else if(window_width>=1186 &&  y_scroll_pos < scroll_beg){
           $("#daily-quotes").fadeOut("slow");
					 $("#daily-quotes1").fadeOut("slow");
        }
			else	if(window_width>=1186 &&  y_scroll_pos > scroll_beg && y_scroll_pos < scroll_end) {
               $("#daily-quotes").fadeIn("slow");
							  $("#daily-quotes1").fadeIn("slow");
				}
      else  if(window_width>=1186 &&  y_scroll_pos > scroll_end) {
               $("#daily-quotes").fadeOut();
							  $("#daily-quotes1").fadeOut();
        }

		});


		var ar = document.getElementById("myCode");

    ar.onclick = function() {
			count=count+1;
			if(count == 1){
				 a1=document.getElementById("About");
			a2=document.getElementById("Project");
			a3=document.getElementById("daily-quotes");
			a4=document.getElementById("Training");
			a5=document.getElementById("Competitions");
			a6=document.getElementById("Extra");
			$("#About").remove();
			$("#Project").remove();
			$("#daily-quotes").remove();
			$("#Training").remove();
			$("#Competitions").remove();
			$("#Extra").remove();
            $('#outputs').remove();

		 $("#picdiv").after('<div class="col-lg-6" id="CodeNow"><div class="panel panel-default"><div class="panel-heading" >Code!Compile!Run!</div><div class="panel-body"><textarea rows="20" cols="50" id="codeinput" class="form-control" style="min-width: 100%" placeholder="Write your code here . Happy Coding :-)"></textarea><br> <textarea rows="5" cols="50" id="consoleinput" class="form-control" style="min-width: 100%" placeholder="Give your custom inputs here if required"></textarea> <select id="languageSelector"> <option value="C">C</option> <option value="CPP">C++</option> <option value="CPP11">C++11</option> <option value="CLOJURE">Clojure</option> <option value="CSHARP">C#</option> <option value="JAVA">Java</option> <option value="JAVASCRIPT">JavaScript</option> <option value="HASKELL">Haskell</option> <option value="PERL">Perl</option> <option value="PHP">PHP</option> <option value="PYTHON">Python</option> <option value="RUBY">Ruby</option> </select> <button type="button" class="btn btn-primary" id="Compile" onclick="takeInfo()">Compile</button> <button type="button" class="btn btn-primary" id="Run" onclick="takeInfo1()">Run</button>  </div></div></div>');
     $("#CodeNow").after('<div id="daily-quotes1" class="col-lg-3"><div><div class="panel panel-default"><div class="panel-heading">Inspirational Quotes</div><div class="panel-body"><p style="font-size:20px;">&#34; Arise,awake,and stop not till the goal is reached. &#34; <br>- Swami Vivekananda</p></div></div></div></div>');
		 $('#daily-quotes1').after('<div id="outeroutput" class="col-lg-6 col-lg-offset-3"><div><div class="panel panel-default"><div class="panel-heading">Output</div><div id="outputs" class="panel-body"></div></div></div></div>')
	 }
            return true;
          }

			function showAgain(){
				count=0;
				$('#outputs').remove();
				$("#CodeNow").remove();
				$("#daily-quotes1").remove();
                $("#outeroutput").remove();

        $("#picdiv").after(a1);
        $("#About").after(a2);
				$("#Project").after(a3);
				$("#daily-quotes").after(a4);
				$("#Training").after(a5);
				$("#Competitions").after(a6);
			}

			var l1=document.getElementById("myabout");
			var l2=document.getElementById("myproject");
			var l3=document.getElementById("mytraining");
			var l4=document.getElementById("mycompetitions");
			var l5=document.getElementById("myextra");
			var l6=document.getElementById("mycontact");
      var l7=document.getElementById("myhome");

			l1.onclick=function() {
        if(count > 0){
					count=0;
					showAgain();
				}
				return true;
			}

			l2.onclick=function() {
        if(count > 0){
					count=0;
					showAgain();
				}
				return true;
			}

			l3.onclick=function() {
        if(count > 0){
					count=0;
					showAgain();
				}
				return true;
			}

			l4.onclick=function() {
        if(count > 0){
					count=0;
					showAgain();
				}
				return true;
			}

			l5.onclick=function() {
        if(count > 0){
					count=0;
					showAgain();
				}
				return true;
			}

			l6.onclick=function() {
        if(count > 0){
					count=0;
					showAgain();
				}
				return true;
			}
      l7.onclick=function() {
				if(count > 0){
					count=0;
					showAgain();
				}
				return true;
			}






	})
