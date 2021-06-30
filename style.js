function request(query){
                   
		   var searchText = document.getElementById("uinput").value;
		   var xhr = new XMLHttpRequest();
		   
		   xhr.open("GET", "http://192.168.43.219/cgi-bin/dock.py?q="+searchText, true); //192.168.43.219
		   xhr.send();
		   
		   xhr.onload= function (){
		   var output = xhr.responseText;
		   document.getElementById("textfield").innerHTML = output;
		   }
}

function commandProcess(e){
	var searchText = document.getElementById("uinput").value;
// checking condition for enter key hot or not
    if ((e.keyCode == 13) && (searchText.length > 0)) {
		var idd = 0;
		var query = "";
		    
 // searching text related to  deploymet creation ....
		if (((searchText.includes("deploy")) || (searchText.includes("dp")) || (searchText.includes("deployment"))) && ((searchText.includes("create")) || (searchText.includes("build")) || (searchText.includes("apply")) || (searchText.includes("launch")))){
			var deploymentName = prompt("Enter Deployment Name: ");
			if (deploymentName.length > 0){
				var imageName = prompt("Enter Image Name: ");
				if (imageName.length > 0){
					idd = 1;
					query = `${idd} + ${deploymentName}  + ${imageName}`;
				}else {	window.confirm("Image Name can't be empty !!! "); }
			} else {	window.confirm("Deployment Name can't be empty !!! "); }			
		} 
// searching keyword related to delete deployment ...	
	   else if(((searchText.includes("deploy")) || (searchText.includes("dp")) || (searchText.includes("deployment"))) && ((searchText.includes("delete")) || (searchText.includes("del")) || (searchText.includes("destroy"))|| (searchText.includes("remove")))){		
			var deploymentName = prompt("Enter Deployment Name: ");
			if (deploymentName.length > 0){ idd = 2; query = `${idd} + ${deploymentName}`; 
			} else { window.confirm("Deployment Name can't be empty !!! "); }
			
		} 

// searching keyword related to pod creation ...	
		else if (((searchText.includes("pods")) || (searchText.includes("pod")) || (searchText.includes("po"))) && ((searchText.includes("create")) || (searchText.includes("build")) || (searchText.includes("make")) || (searchText.includes("launch"))))
		{
			var podName = prompt("Enter Pod Name: ");
				if (podName.length > 0){
					var imageName = prompt("Enter Image Name: ");
					if (imageName.length > 0){
						idd = 3;
						query = `${idd} + ${podName} + ${imageName}`;
					}else {	window.confirm("Image Name can't be empty !!! "); }
				} else {	window.confirm("Pod Name can't be empty !!! "); }
			
		}
		
// searching keyword related to deletion of pods ...
		else if(((searchText.includes("pods")) || (searchText.includes("pod")) || (searchText.includes("po"))) && ((searchText.includes("delete")) || (searchText.includes("del")) || (searchText.includes("destroy")) || (searchText.includes("remove")))){		
			var  podName= prompt("Enter Pod Name: ");
			if (podName.length > 0){ idd = 4; query = `${idd} + ${podName}`; 
			} else { window.confirm("Pod Name can't be empty !!! "); }
			
	    }
	    
// here, finding keyword related to scale-in or scale-out ... 
		else if (((searchText.includes("deploy")) || (searchText.includes("dp")) || (searchText.includes("deployment"))) && ((searchText.includes("scale")) || (searchText.includes("scale-in")) || (searchText.includes("scale-out")) || (searchText.includes("scaling")))){
			var deploymentName = prompt("Enter Deployment Name: ");
			if (deploymentName.length > 0){
				var scaleNo = prompt("How many pods you want to scale-in/scale-out: ");
				if (scaleNo.length > 0){
					idd = 5;
					query = `${idd} + ${deploymentName} + ${scaleNo}`;
				}else {	window.confirm("scale value can't be empty !!! "); }
			} else { window.confirm("Deployment Name can't be empty !!! "); }			
		} 
// searching keyword related to exposing services
		else if (((searchText.includes("deploy")) || (searchText.includes("dp")) || (searchText.includes("pod")) || (searchText.includes("pods")) || (searchText.includes("po")) || (searchText.includes("deployment"))) && ((searchText.includes("expose")) || (searchText.includes("service")))){
			var deploymentName = prompt("Enter Deployment/pod Name: ");
			if (deploymentName.length > 0){
				var portNo = prompt("Enter port no. : ");
				var stype = prompt("Enter service type : ");
				if (portNo.length > 0){					
					idd = 6;
					query = `${idd} + ${deploymentName} + ${portNo} + ${stype}`;
				}else {	window.confirm("port no. can't be empty !!! "); }
			} else { window.confirm("Deployment/pod Name can't be empty !!! "); }
		}

// searching keyword related to get deployment
		else if(((searchText.includes("deploy")) || (searchText.includes("dp")) || (searchText.includes("deployment")))&& ((searchText.includes("get")) || (searchText.includes("list")) || (searchText.includes("show"))|| (searchText.includes("status")))){		
			
			idd = 7; query = `${idd}`		
			
		} 
// seraching keyword related to get pods
		else if(((searchText.includes("pod")) || (searchText.includes("po")) || (searchText.includes("pods")))&& ((searchText.includes("get")) || (searchText.includes("list")) || (searchText.includes("show"))|| (searchText.includes("status")))){		
			
			idd = 8; query = `${idd}`;			
			
		} 
// searching keyword related to get services
		else if(((searchText.includes("svc")) || (searchText.includes("service")) || (searchText.includes("services"))) && ((searchText.includes("get")) || (searchText.includes("list")) || (searchText.includes("show")) || (searchText.includes("status")))){		
			idd = 9; query = `${idd}`;			
			
		} 
// searching keyword related to delete service
		else if (((searchText.includes("service")) || (searchText.includes("expose")) || (searchText.includes("services")) || (searchText.includes("svc"))) && ((searchText.includes("delete")) || (searchText.includes("del")))){
			var serviceName = prompt("Enter service Name: ");
			if (serviceName.length > 0){								
				idd = 10;
				query = `${idd} + ${serviceName}`;
				
			} else { window.confirm("service Name can't be empty !!! "); }
		}
		else{ window.confirm(`'${searchText.toUpperCase()}' is not a relevant keyword or string !!!`); }	
  	
		   var xhr = new XMLHttpRequest();		   
		   xhr.open("GET", "http://192.168.43.219/cgi-bin/dock.py?q=" + query, true); //192.168.43.219
		   xhr.send();		   
		   xhr.onload= function (){
		   var output = xhr.responseText;
		   document.getElementById("textfield").innerHTML = output;
			}
   }
}
	
	
