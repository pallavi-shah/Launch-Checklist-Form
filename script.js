// Write your JavaScript code here

window.addEventListener("load",function(){
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
            response.json().then(function(jsonarray){
                  const div=document.getElementById("missionTarget");   
                  let var_randomindex=(Math.round(Math.random() * (jsonarray.length-1)));
                  let randomItem = jsonarray[var_randomindex];
                  div.innerHTML=`
                  <h2>Mission Destination</h2>
                  <ol class="mission">
                        <li>Name: ${randomItem.name}</li>
                        <li>Diameter: ${randomItem.diameter}</li>
                        <li>Star: ${randomItem.star}</li>
                        <li>Distance from Earth: ${randomItem.distance}</li>
                        <li>Number of Moons: ${randomItem.moons}</li>
                  </ol>
                  <img src="${randomItem.image}"> `;
            });
      });
                  
      let form=document.querySelector("form");
      form.addEventListener("submit",function(event){
            let pilotnameInput=document.querySelector("input[name=pilotName]");
            let copilotnameInput=document.querySelector("input[name=copilotName]");
            let fuellevelInput=document.querySelector("input[name=fuelLevel]");
            let cargomassInput=document.querySelector("input[name=cargoMass]");
            let launchstatusInput=document.getElementById("launchStatus");
            let var_faultyItems=document.getElementById("faultyItems");
            var_faultyItems.style.visibility="hidden";
            launchstatusInput.style.color="black";
            if(pilotnameInput.value===""||copilotnameInput.value===""||fuellevelInput.value===""||cargomassInput.value===""){
                  window.alert("All fields are required!");
                  launchstatusInput.innerHTML="Awaiting Information Before Launch";
                  event.preventDefault();
            }else if(isNaN(pilotnameInput.value)===false){ 
                  alert("Make sure to enter valid information for each field!")
                  event.preventDefault();
            } else if(isNaN(copilotnameInput.value)===false){
                  alert("Make sure to enter valid information for each field!");
                  event.preventDefault();
            } else if(isNaN(fuellevelInput.value)){
                  alert("Make sure to enter valid information for each field!");
                  event.preventDefault();
            } else if(isNaN(cargomassInput.value)){
                  alert("Make sure to enter valid information for each field!");
                  event.preventDefault();
            }else{
                  let var_ready = true;
                  let var_msgFuel = "";
                  let var_msgCargo="";  
                  let var_msgReady = "";
                  event.preventDefault();
                  var_faultyItems.style.visibility="visible";
                  if(fuellevelInput.value<=10000){
                        var_msgFuel="Fuel level too low for launch";
                        var_ready = false;
                  } else {
                        var_msgFuel="Fuel level high enough for launch";
                  }
                  if(cargomassInput.value>=10000){
                        var_ready= false;
                        var_msgCargo = "Cargo mass too high for launch";
                  } else {
                        var_msgCargo="Cargo mass low enough for launch";
                  } 

                  if (var_ready === true)
                  {
                        event.preventDefault();
                        var_msgReady = "Shuttle is Ready for Launch";
                        launchstatusInput.style.color="green";
                  } else {
                        var_msgReady="Shuttle Not Ready for Launch";
                        launchstatusInput.style.color="red";
                  }
                  launchstatusInput.innerHTML=var_msgReady;
                  document.getElementById("pilotStatus").innerHTML=`Pilot ${pilotnameInput.value} is ready for launch` ;
                  document.getElementById("copilotStatus").innerHTML=`Co-pilot ${copilotnameInput.value} is ready for launch` ;
                  document.getElementById("fuelStatus").innerHTML=var_msgFuel;
                  document.getElementById("cargoStatus").innerHTML= var_msgCargo;

            }
   });

});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
