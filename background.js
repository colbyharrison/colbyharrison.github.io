
function runScript(e) {
	//var console = document.getElementById('console');
    	if (e.keyCode == 13) { 
            var help ="<br><p style='float:left;margin-right: 75px;''>Hello</p><p style='float: left;''>ABM</p>";
    		var para = document.createElement('div');
    		para.setAttribute('id','replace');
    		var terminal = document.getElementById('console');
    		var commandLine = document.getElementById('command');
    		var input = commandLine.value;

    		switch(input){
    			case "resume":
    				para.innerHTML= "$Input..."+ input+
    				"Resume Coming";
    				break;
    			case "help":
    				//para.setAttribute('id','help');
    				//terminal.insertBefore(para,document.getElementById('output'));
    				//$('#help').load('help.html');
    				para.innerHTML= "$Input..."+ input + help;
    				break;
    			case "about":
    				para.innerHTML= "$Input..."+ input + "<br>About goes here";
    				break;
    			case "contact":
    				para.innerHTML= "$Input..."+ input + "<br>Contact goes here";
    				break;
    			case "projects":
    				para.innerHTML= "$Input..."+ input + "<br>Projects goes here";
    				break;
    			default:
    				para.innerHTML= "$Input..."+ input + "<br>No Such Command <br> You need: help";
    		}


    		//terminal.insertBefore(para,document.getElementById('output'));
    		terminal.replaceChild(para, document.getElementById('replace'))
    		document.getElementById('command').value = '';
    	}
    }

