var datadrive2 = {
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
function ex2(){
  if(exercice_display.innerHTML != ''){exercice_display.innerHTML=''}
      for (var i = 0; i < datadrive2.rentals.length; i++) {

            var pickupDate = new Date(datadrive2.rentals[i].pickupDate);
            var returnDate= new Date(datadrive2.rentals[i].returnDate);
            var distance = datadrive2.rentals[i].distance;
            var days =dateDiff(pickupDate,returnDate);
            var carId = datadrive2.rentals[i].carId;
            var prix=getPrice2(carId,datadrive2,days,distance,2);
            exercice_display.innerHTML += ('<p>'+ datadrive2.rentals[i].driver.firstName+' '+datadrive2.rentals[i].driver.lastName+' : '+prix+'</p><br>');

    }
}
function dateDiff(dateOld,dateNew)
{
  var msDiff=dateNew.getTime()-dateOld.getTime();
  var days =1+ msDiff/(1000*60*60*24);
  return days;
}
function getPrice2(carId,datadrive2,days,distance,exercice){
            for (var i = 0; i < datadrive2.cars.length; i++) {
              if(datadrive2.cars[i].id===carId){
                var price = (days*datadrive2.cars[i].pricePerDay)+(distance*datadrive2.cars[i].pricePerKm);
                if(days>1 && days < 4)
                  {
                    return (price-(price*0.1));
                  }
                  if(days>4 && days <10)
                  {
                    return (price-(price*0.3));
                  }
                  if(days>10)
                  {
                    return (price-(price*0.5));
                  }
                }
              }
}
