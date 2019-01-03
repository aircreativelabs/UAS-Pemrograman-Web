function LoadJadwal(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			myFunction(this);
		}
	};
	xhttp.open("GET", "../xml/jadwaloperasional.xml", true);
	xhttp.send();
}

function myFunction(xml){
	var i;
	var xmlDoc = xml.responseXML;
	var table="<tr><th>Hari</th><th>Jam</th><th>Petugas</th></tr>";
	var x = xmlDoc.getElementsByTagName("DATA");
	for(i = 0; i < x.length; i++){
		table += "<tr><td>" + x[i].getElementsByTagName("HARI")[0].childNodes[0].nodeValue + "</td><td>"
		+ x[i].getElementsByTagName("JAM")[0].childNodes[0].nodeValue + "</td><td>"
		+ x[i].getElementsByTagName("PETUGAS")[0].childNodes[0].nodeValue + "</td></tr>";
	}
	document.getElementById("jadwal").innerHTML = table;
}