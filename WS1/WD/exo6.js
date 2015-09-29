var datadrive6 = {
  "cars": [
    {
      "id": "p306",
      "vehicule": "peugeot 306",
      "pricePerDay": 20,
      "pricePerKm": 0.10
    }
  ],
  "rentals": [
    {
      "id": "1-pb-92",
      "driver": {
        "firstName": "Paul",
        "lastName": "Bismuth"
      },
      "carId": "p306",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-12",
      "distance": 100,
      "options":{
        "deductibleReduction": false
      }
    },
    {
      "id": "2-rs-92",
      "driver": {
        "firstName": "Rebecca",
        "lastName": "Solanas"
      },
      "carId": "p306",
      "pickupDate": "2015-09-10",
      "returnDate": "2015-09-15",
      "distance": 300,
      "options":{
        "deductibleReduction": true
      }
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": " Sami",
        "lastName": "Ameziane"
      },
      "carId": "p306",
      "pickupDate": "2015-08-31",
      "returnDate": "2015-09-13",
      "distance": 1000,
      "options":{
        "deductibleReduction": true
      }
    }
  ],
  "rentalModifications": [
    {
      "id": 1,
      "rentalId": "1-pb-92" ,
      "returnDate": "2015-09-13",
      "distance": 150
    },
    {
      "id": 2,
      "rentalId": "3-sa-92",
      "pickupDate": "2015-09-01"
    }
  ]
};

function display(editedRentalIds){
  var idToDisplay ;
  for(var j=0;j<editedRentalIds.length;j++){
    idToDisplay=editedRentalIds[j];
    var pickupDate = new Date(datadrive6.rentals[idToDisplay].pickupDate);
    var returnDate= new Date(datadrive6.rentals[idToDisplay].returnDate);
    var distance = datadrive6.rentals[idToDisplay].distance;
    var days =dateDiff(pickupDate,returnDate);
    var carId = datadrive6.rentals[idToDisplay].carId;
    var firstname = datadrive6.rentals[idToDisplay].driver.firstName;
    var lastname = datadrive6.rentals[idToDisplay].driver.lastName;
    var prix=getPrice6(carId,datadrive6,days,distance,idToDisplay);

  //  document.write('<p>'+ datadrive6.rentals[i].driver.firstName+' '+datadrive6.rentals[i].driver.lastName+' : '+prix[0]+'<br>deductibleReduction :'+prix[1]+'<br> commission : '+prix[2]+'<br> insurance : '+prix[3]+'<br> assistance : '+ prix[4]+'<br>drivy : '+prix[5]+' </p>')

    exercice_display.innerHTML += ('<div class="case">Driver '+firstname+' '+lastname+' pays : '+prix[0]+'<br>DeductibleReduction : '+prix[1]
          +'<br> Owner gets : '+prix[6]+'<br> Insurance gets : '+prix[3]+'<br>Assistance gets :'+prix[4]+'<br> Drivy gets : '+prix[5]+"<p></div>" );


    }
}

function ex6(){
  if(exercice_display.innerHTML != ''){exercice_display.innerHTML=''}//vider le display pannel
  var editedRentalIds =[];

  for(var i =0;i<datadrive6.rentalModifications.length;i++){
    editedRentalIds.push(getModifiedRentalsId(datadrive6,datadrive6.rentalModifications[i].rentalId));
  }
  console.log(editedRentalIds[0]+"RENTALID");
  console.log(editedRentalIds[1]+"RENTALDID2");
  display(editedRentalIds);
  applyModifications(datadrive6);
  exercice_display.innerHTML+="<h3>modifications</h3>";
  display(editedRentalIds);

}
//////////////
function dateDiff(dateOld,dateNew){
var msDiff=dateNew.getTime()-dateOld.getTime();
var days =1+ msDiff/(1000*60*60*24);
return days;
}
//////////////
function getPropToEdit(arr){
  var properties = [];
  for (prop in arr) {
      if (!arr.hasOwnProperty(prop)) {
          //The current property is not a direct property of p
          continue;
      }
      properties.push(prop);
  }
return properties;
}
/////////////
function updateRental(datadrive6,properties,index,indexOfEdit){//les propriétés et l'index ou la fonction doit agir
  for(var i =0;i<properties.length;i++){
      if(properties[i]=='returnDate'){console.log("RETURN DATE PROP - "+datadrive6.rentals[index].returnDate+" TO ");
        datadrive6.rentals[index].returnDate=datadrive6.rentalModifications[indexOfEdit].returnDate;
        console.log(datadrive6.rentals[index].returnDate);
      }
      if(properties[i]=='distance'){console.log("DISTANCE "+datadrive6.rentals[index].distance+"   TO ");
        datadrive6.rentals[index].distance=datadrive6.rentalModifications[indexOfEdit].distance;
        console.log(datadrive6.rentals[index].distance);
      }
        //datadrive6.rentals[index].distance=datadrive6.rentalModifications[indexOfEdit].distance;}
      if(properties[i]=='pickupDate'){console.log("PICKUP DATE -"+datadrive6.rentals[index].pickupDate+" TO");
        datadrive6.rentals[index].pickupDate=datadrive6.rentalModifications[indexOfEdit].pickupDate;
        console.log(datadrive6.rentals[index].pickupDate);

      }
  }
}
///////////////
function getModifiedRentalsId(datadrive6,rentalId){//prend en entree la data, et la valeur de l'id de la location identifiée
  for(var i =0;i<datadrive6.rentals.length;i++){
    if(datadrive6.rentals[i].id == rentalId){
      return i; // renvoi l'index du rental modifié dans le tableau datadrive6,rentals
    }
  }
}
//////////////
function applyModifications(datadrive6){
  var index;
  var propToEdit;
  for(var i = 0;i<datadrive6.rentalModifications.length;i++){ //apply the modifications
     index = getModifiedRentalsId(datadrive6,datadrive6.rentalModifications[i].rentalId); //index dans le tableau datadrive6.rentals
     propToEdit = getPropToEdit(datadrive6.rentalModifications[i]);//recuperer des elements a mettre a jour dans un rental donné
     updateRental(datadrive6,propToEdit,index,i);
  }
}

///////////////
function getPrice6(carId,datadrive6,days,distance,driverIndex){
          array=[];
          for (var i = 0; i < datadrive6.cars.length; i++) {
            if(datadrive6.cars[i].id===carId){
              var price = (days*datadrive6.cars[i].pricePerDay)+(distance*datadrive6.cars[i].pricePerKm);

              array[2] = price*0.3;//comm sans les charges supplementaire vu qu'elles vont directement a drivyc
              array[3]= 0.5*array[2];//insurance
              array[4]=days;//assistance
              array[6] = price - array[2]; // what the owner gets
              if(datadrive6.rentals[driverIndex].options.deductibleReduction   == true){
                price = price + (4*days);
                array[1]=150;//prix de l'option deductibleReduction
                array[5] =(array[2]+(4*days))+ - (array[3]+array[4]);//drivy
              }
              else{
                array[1]=800;
                array[5] =(array[2]+(4*days))+ - (array[3]+array[4]);//drivy
              }
                array[0]=price;//prix total
              return array;
            }
          }
}
