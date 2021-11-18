
function juegotarkov(){
	
	var tarkov = [
		["https://www.youtube.com/embed/i64N9dLOwm4", "230","400"],
		["https://www.youtube.com/embed/JF9AkwBL3TM", "230","400"],
		["https://www.youtube.com/embed/Ejpw0oEK6Bg", "230","400"],
		["https://www.youtube.com/embed/VQDdL5ULHfs", "230","400"]
	]
	document.getElementById("resultado").innerHTML = "";
	document.getElementById("resultado").style.marginBottom="-25px";
	for (let i=0; i<tarkov.length; i++){
        let iframe = document.createElement("iframe");
        iframe.setAttribute("src", tarkov[i][0]);
        iframe.setAttribute("width", tarkov[i][1]);
        iframe.setAttribute("height", tarkov[i][2]);
        document.getElementById("resultado").appendChild(iframe);
    }      
}

function juegopubg(){
	var pubg = [
		["https://www.youtube.com/embed/SHSFe7bK4os", "400","230"],
		["https://www.youtube.com/embed/cBqCp3W848s", "400","230"],
		["https://www.youtube.com/embed/oMQ5Jllz9vc", "400","230"],
		["https://www.youtube.com/embed/PVMwg16Sqxw", "400","230"]
	]
	

	document.getElementById("resultado").innerHTML = "";
	document.getElementById("resultado").style.marginBottom="-25px";
	for (let i=0; i<pubg.length; i++){
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", pubg[i][0]);
        iframe.setAttribute("width", pubg[i][1]);
        iframe.setAttribute("height", pubg[i][2]);

  	 	document.getElementById("resultado").appendChild(iframe);
    }
}
