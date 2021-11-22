
function juegotarkov(){
	//almaceno las caracteristicas de los iframes para luego recorrerlo e introdocir cada uno a cada iframe
	var tarkov = [
		["https://www.youtube.com/embed/i64N9dLOwm4", "230","400"],
		["https://www.youtube.com/embed/JF9AkwBL3TM", "230","400"],
		["https://www.youtube.com/embed/Ejpw0oEK6Bg", "230","400"],
		["https://www.youtube.com/embed/VQDdL5ULHfs", "230","400"]
	]
	document.getElementById("resultado").innerHTML = "";//cada vez que le doy al boton se elimina el anterior
	document.getElementById("resultado").style.marginBottom="-25px";//para eliminar el margen sobrante y no se vaya hacia abajo
	for (let i=0; i<tarkov.length; i++){
        let iframe = document.createElement("iframe");
        iframe.setAttribute("src", tarkov[i][0]);
        iframe.setAttribute("width", tarkov[i][1]);	//recorro cada iframe y le añado las caracteristicas
        iframe.setAttribute("height", tarkov[i][2]);
        document.getElementById("resultado").appendChild(iframe);//lo muestro cada uno
    }      
}

function juegopubg(){//lo mismo que el de arriba
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

function encuesta(){
	document.getElementById("encuesta").style.marginBottom="60px";//margen para controlar el footer
	var input1=document.getElementById("lugar").value;
	var input2=document.getElementById("edad").value;
	var input3=document.getElementById("nombre").value;//valores del formulario
	var input4=document.getElementById("origen").value;

	var resultado = document.getElementById("resultado");//div donde guardaré el siguiente contenido
	resultado.innerHTML=""
	if ( input1=="granada" ||input1=="Granada") {
		resultado.innerHTML+="<h5>1º respuesta= <b class=\"correcto\">Correcto!</b></h5>";
	}else{
		resultado.innerHTML+="<h5>1º respuesta= <b class=\"incorrecto\">Incorrecto!</b></h5>";
	}
	if ( input2=="21") {
		resultado.innerHTML+="<h5>2º respuesta= <b class=\"correcto\">Correcto!</b></h5>";
	}else{
		resultado.innerHTML+="<h5>2º respuesta= <b class=\"incorrecto\">Incorrecto!</b></h5>";
	}
	if ( input3=="aladin" || input3=="Aladin") {
		resultado.innerHTML+="<h5>3º respuesta= <b class=\"correcto\">Correcto!</b></h5>";
	}else{
		resultado.innerHTML+="<h5>3º respuesta= <b class=\"incorrecto\">Incorrecto! </b></h5>";
	}
	if ( input4=="palestina" || input4=="Palestina") {
		resultado.innerHTML+="<h5>4º respuesta= <b class=\"correcto\">Correcto!</b></h5>";
	}else{
		resultado.innerHTML+="<h5>4º respuesta= <b class=\"incorrecto\">Incorrecto!</b></h5>";
	}
	// si es correcto saldrá en verde "correcto!", si no, en rojo "incorrecto!"
}
