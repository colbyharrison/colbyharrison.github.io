
function runScript(e) {
	//var console = document.getElementById('console');
    	if (e.keyCode == 13) { 

           // console.log(document.getElementById('container'));
    		// var para = document.createElement('div');
    		// para.setAttribute('id','replace');
    		var terminal = document.getElementById('console');
    		var commandLine = document.getElementById('command');
    		var input = commandLine.value;

            var toPrint = document.getElementsByClassName("printed");
            //Any thing that could be displayed is closed. The reason I do 
            //this is because global variables are bad. So this is a simple fix.
            //Just close every element then display them when requested.
            for (i = 0; i < toPrint.length; i++) {
                toPrint[i].style.display = 'none';
            }

    		switch(input){
    			case "resume":
    				// para.innerHTML= "$Input..."+ input+"Resume Coming";
                    document.getElementById('resume').style.display = 'block';
    				break;
    			case "help":
    				//para.setAttribute('id','help');
    				//terminal.insertBefore(para,document.getElementById('output'));
    				//$('#help').load('help.html');
    				// para.innerHTML= "$Input..."+ input + "<br> Help ME";
                    document.getElementById('help').style.display = 'block';
    				break;
    			case "about":
                    document.getElementById('about').style.display = 'block';
                   // document.getElementById('printAbout').value = '';
                    // showText('#printAbout', 'As previously stated my name is Colby Harrison. I am a 4th year Computer Science Major at University of California,  San Diego. With expected graduation date: June 2016.', 0, 20);
    				// para.innerHTML= "$Input..."+ input + "<br>About goes here";
    				break;
    			case "contact":
                    document.getElementById('contact').style.display = 'block';
    				// para.innerHTML= "$Input..."+ input + "<br>Contact goes here";
    				break;
    			case "projects":
                    document.getElementById('projects').style.display = 'block';
    				// para.innerHTML= "$Input..."+ input + "<br>Projects goes here";
    				break;
    			default:
                    document.getElementById('intro').style.display = 'block';
    				// para.innerHTML= "$Input..."+ input + "<br>No Such Command <br> You need: help";
    		}


    		//terminal.insertBefore(para,document.getElementById('output'));
    		// terminal.replaceChild(para, document.getElementById('replace'))
    		document.getElementById('command').value = '';
    	}
    }

function intro(){
    document.getElementById('intro').style.display = 'block';

}

function buttons(){
    document.getElementById('butt').style.display = 'block';
}

var showText = function (target, message, index, interval) {
    if (index < message.length) {
        if(message[index]=='\n'){
            $(target).append("<br />");
        } 
        if(message[index]=='a' && message[index+1] == 'b'){

            $(target).append("<button id = 'aboutB'>about</button>");

            index = index + 5;
        } 
            $(target).append(message[index++]);
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    }
};

//moving towards jquery
$(document).ready(function() {

    //about -> resume
    $('#toResume').click(function(){
        $('#about').fadeOut('fast', function(){
            $('#resume').fadeIn('fast')
        })
    })

    $('#toProj').click(function(){
        $('#about').fadeOut('fast', function(){
            $('#projects').fadeIn('fast')
        })
    })

    $('#toCont').click(function(){
        $('#about').fadeOut('fast', function(){
            $('#contact').fadeIn('fast')
        })
    })

})

function test(){
    console.log("we clikced projects");
}
