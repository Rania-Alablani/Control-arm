window.addEventListener('load', function(){
	var a = document.getElementById("voice");
	var b = document.getElementById("voice1");
	var c = null;

    getXmlHttpRequestObject = function(){
        if(!c){
            c = new XMLHttpRequest();
        }
        return c;
    };

    function evenHandler(){
        if(c.readyState == 4 && c.status == 200){
            dataDiv = document.getElementById('liveData');
            dataDiv.innerHTML = c.responseText;
			var b=c.responseText;

			if(b==1){
				a.play();
				output.classList.add("hidden");
				var y = document.getElementById("voice").duration;
				y=(y*1000);
				console.log(y);
				document.getElementById("demo").innerHTML = y;
				document.getElementById("p1").style.display = "block";
				document.getElementById("p2").style.display = "none";
				setTimeout(function(){ document.getElementById("p1").style.display = "none"; document.getElementById("p2").style.display = "block";}, y);
			}

			document.getElementById("sound").src=c.responseText;
        }
    }

	function stt(){
		var output = document.getElementById("output");
		var action = document.getElementById("act");

        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();

        recognition.onstart = function() {
            action.innerHTML = "<small>أنا اسمعك، تكلم معي</small>";
        };

        recognition.onspeechend = function() {
            action.innerHTML = "<small>توقفت عن الاستماع</small>";
            recognition.stop();
        }

        recognition.onresult = function(event) {
          var transcript = event.results[0][0].transcript;
			    var confidence = event.results[0][0].confidence;
            output.innerHTML = "<b></b> " + transcript;

            output.classList.remove("hidden");

				x2.play();
				var yy = document.getElementById("voice1").duration;
				yy=yy*1000;
				console.log(yy);
				document.getElementById("demo").innerHTML = yy;
				document.getElementById("p1").style.display = "block";
				document.getElementById("p2").style.display = "none";
				setTimeout(function(){ document.getElementById("p1").style.display = "none"; document.getElementById("p2").style.display = "block";}, yy);
        };
        recognition.start();
	}
});

	function stt(){
		var output = document.getElementById("output");
		var action = document.getElementById("act");

        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();

        recognition.onstart = function() {
            action.innerHTML = "<small>أنا اسمعك، تكلم معي</small>";
        };

        recognition.onspeechend = function() {
            action.innerHTML = "<small>توقفت عن الاستماع</small>";
            recognition.stop();
        }

        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
			      var confidence = event.results[0][0].confidence;

            output.innerHTML = "<b></b> " + transcript;
            output.classList.remove("hidden");

				x2.play();
				var a1 = document.getElementById("voice1").duration;
				a1=a1*1000;
				console.log(yy);
				document.getElementById("demo").innerHTML = a1;
				document.getElementById("p1").style.display = "block";
				document.getElementById("p2").style.display = "none";
				setTimeout(function(){ document.getElementById("p1").style.display = "none"; document.getElementById("p2").style.display = "block";}, yy);
        };
        recognition.start();
	}

function playSound(){
  var x = document.getElementById("voice");
  x.play();
  var y = document.getElementById("voice").duration;
  y=y*1000;
  document.getElementById("demo").innerHTML = y;
  document.getElementById("p1").style.display = "block";
  document.getElementById("p2").style.display = "none";
  setTimeout(function(){ document.getElementById("p1").style.display = "none"; document.getElementById("p2").style.display = "block";}, y);
}
