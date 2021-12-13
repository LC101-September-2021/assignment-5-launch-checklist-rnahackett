// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
        
    form.addEventListener("submit", function(event){
    event.preventDefault();
    
    let pilotName = document.querySelector("input[name=pilotName]");
    let pilot = pilotName.value 
    let copilotName = document.querySelector("input[name=copilotName]");
    let copilot = copilotName.value
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let fuel = fuelLevel.value
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let cargo = cargoMass.value
        
    formSubmission(document, form, list, pilot, copilot, fuel, cargo);
    
    });

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let planet = pickPlanet(listedPlanets) 

        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })
   
});