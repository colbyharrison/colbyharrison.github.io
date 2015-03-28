
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
        // if(message[index]=='^'){
        //     $(target).append("<button>about</button>");
        // } 
            $(target).append(message[index++]);
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    }
};

