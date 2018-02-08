function dwarfRollCall(dwarves) {
  	var newStr = "";
  	for(var i = 0; i < dwarves.length; i++) {
  		if(i === dwarves.length-1) {
  			newStr += (i+1 + ". " + dwarves[i]);
  		}else {
  			newStr += (i+1 + ". " + dwarves[i] + " ");
  		}
  	}
  	return newStr;
  }


function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(function(i) {
		return i.toUpperCase() + "!";
	});
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
  if(words[i].length > 4) {
    return true;
  }
}
return false;
}

function findTheCheese (foods) {
  var cheese = ["camembert", "cheddar", "gouda"];
for(var i = 0; i < foods.length; i++) {
  var foundcheese = cheese.indexOf(foods[i]);
  if(foundcheese!== -1) {
    return foods[i];
  }
}
return "no cheese!";
}
