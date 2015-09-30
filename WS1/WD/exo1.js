var datadrive = {
  "cars": [
    {
      "id": "p306",
      "vehicule": "peugeot 306",
      "pricePerDay": 20,
      "pricePerKm": 0.10
    },
    {
      "id": "rr-sport",
      "pricePerDay": 60,
      "pricePerKm": 0.30
    },
    {
      "id": "p-boxster",
      "pricePerDay": 100,
      "pricePerKm": 0.45
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
      "returnDate": "2015-09-14",
      "distance": 150
    },
    {
      "id": "2-rs-92",
      "driver": {
        "firstName": "Rebecca",
        "lastName": "Solanas"
      },
      "carId": "rr-sport",
      "pickupDate": "2015-09-09",
      "returnDate": "2015-09-13",
      "distance": 550
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": " Sami",
        "lastName": "Ameziane"
      },
      "carId": "p-boxster",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-14",
      "distance": 100
    }
    ]
}
var exercice_display;
document.addEventListener("DOMContentLoaded", function(event) {

exercice_display =document.getElementById('exercice_display');
});

function writeTitle(id,layout){
  layout.innerHTML = "<span class='mdl-layout-title marginFix'><h1>Exercice "+id+"</h1></span>";
}
function ex1(id){
  if(exercice_display.innerHTML != ''){exercice_display.innerHTML=''}
  writeTitle(id,exercice_display);

    for (var i = 0; i < datadrive.rentals.length; i++) {

          var pickupDate = new Date(datadrive.rentals[i].pickupDate);
          var returnDate= new Date(datadrive.rentals[i].returnDate);
          var distance = datadrive.rentals[i].distance;
          var days =dateDiff(pickupDate,returnDate);
          var carId = datadrive.rentals[i].carId;
          var prix=getPrice(carId,datadrive,days,distance,1);


          exercice_display.innerHTML+=('<p>'+ datadrive.rentals[i].driver.firstName+' '+datadrive.rentals[i].driver.lastName+' : '+prix+'</p>');

  }
}
function dateDiff(dateOld,dateNew)
{
  var msDiff=dateNew.getTime()-dateOld.getTime();
  var days =1+ msDiff/(1000*60*60*24);
  return days;
}
function getPrice(carId,datadrive,days,distance,exercice)
{
            for (var i = 0; i < datadrive.cars.length; i++) {
              if(datadrive.cars[i].id===carId)
              {
                var price = (days*datadrive.cars[i].pricePerDay)+(distance*datadrive.cars[i].pricePerKm);
                if(exercice===1)
                {
                return price;
                }
              }
            }
}
