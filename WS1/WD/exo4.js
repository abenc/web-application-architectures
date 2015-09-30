var datadrive4 = {
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
  ]
}
function ex4(id){
if(exercice_display.innerHTML != ''){exercice_display.innerHTML=''}
writeTitle(id,exercice_display);
    for (var i = 0; i < datadrive4.rentals.length; i++) {

          var pickupDate = new Date(datadrive4.rentals[i].pickupDate);
          var returnDate= new Date(datadrive4.rentals[i].returnDate);
          var distance = datadrive4.rentals[i].distance;
          var days =dateDiff(pickupDate,returnDate);
          var carId = datadrive4.rentals[i].carId;

          var prix=getPrice4(carId,datadrive4,days,distance,i);
          exercice_display.innerHTML+=('<p>'+ datadrive4.rentals[i].driver.firstName+' '+datadrive4.rentals[i].driver.lastName+' : '+prix[0]+'<br>deductibleReduction :'+prix[1]+'<br> commission : '+prix[2]+'<br> insurance : '+prix[3]+'<br> assistance : '+ prix[4]+'<br>drivy : '+prix[5]+' </p>')

    }
  }
    function dateDiff(dateOld,dateNew){
    var msDiff=dateNew.getTime()-dateOld.getTime();
    var days =1+ msDiff/(1000*60*60*24);
    return days;
    }



function getPrice4(carId,datadrive4,days,distance,driverIndex){
          array=[];
          for (var i = 0; i < datadrive4.cars.length; i++) {
            if(datadrive4.cars[i].id===carId){
              var price = (days*datadrive4.cars[i].pricePerDay)+(distance*datadrive4.cars[i].pricePerKm);
              console.log(price+"PRICE ");

              array[2] = price*0.3;//comm sans les charges supplementaire vu qu'elles vont directement a drivy
              array[3]= 0.5*array[2];//insurance
              array[4]=days;//assistance

              if(datadrive4.rentals[driverIndex].options.deductibleReduction == true){
                price = price + (4*days);
                array[1]=150;//prix de l'option deductibleReduction
                array[5] =(array[2]+(4*days))+ - (array[3]+array[4]);//drivy
              }
              else{
                array[1]=800;
                array[5] =array[2]+ - (array[3]+array[4]);//drivy
              }
                array[0]=price;//prix total


              return array;
            }
          }
}
