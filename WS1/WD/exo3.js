var datadrive3 = {
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
function ex3(id){
  if(exercice_display.innerHTML != ''){exercice_display.innerHTML=''}
  writeTitle(id,exercice_display);
      for (var i = 0; i < datadrive3.rentals.length; i++) {

            var pickupDate = new Date(datadrive3.rentals[i].pickupDate);
            var returnDate= new Date(datadrive3.rentals[i].returnDate);
            var distance = datadrive3.rentals[i].distance;
            var days =dateDiff(pickupDate,returnDate);
            var carId = datadrive3.rentals[i].carId;
            var prix=getPrice3(carId,datadrive3,days,distance,2);
            exercice_display.innerHTML += ('<p>'+ datadrive3.rentals[i].driver.firstName+' '+datadrive3.rentals[i].driver.lastName+'<br> prix : '+prix[4]+' <br> commission :'+prix[0]+'<br> insurance :'+prix[1]
            +'<br> assistance :'+prix[2]+'<br> drivy :'+prix[3]+'</p>');
    }
}
function dateDiff(dateOld,dateNew)
{
  var msDiff=dateNew.getTime()-dateOld.getTime();
  var days =1+ msDiff/(1000*60*60*24);
  return days;
}
function getPrice3(carId,datadrive3,days,distance,exercice)
{
            for (var i = 0; i < datadrive3.cars.length; i++) {
              if(datadrive3.cars[i].id===carId){
                var price = (days*datadrive3.cars[i].pricePerDay)+(distance*datadrive3.cars[i].pricePerKm);
                  var array=[];
                  array[0] = price*0.3;//comm
                  array[1]= 0.5*array[0];//insurance
                  array[2]=days;//assistance
                  array[3] =array[0] - (array[1]+array[2]);//drivy
                  array[4]=price;
                  return array;
              }
            }
}
