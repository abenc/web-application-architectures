var datadrive5 = {
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
};

function ex5(id){
if(exercice_display.innerHTML != ''){exercice_display.innerHTML=''}
writeTitle(id,exercice_display);
    for (var i = 0; i < datadrive5.rentals.length; i++) {
          var pickupDate = new Date(datadrive5.rentals[i].pickupDate);
          var returnDate= new Date(datadrive5.rentals[i].returnDate);
          var distance = datadrive5.rentals[i].distance;
          var days =dateDiff(pickupDate,returnDate);
          var carId = datadrive5.rentals[i].carId;
          var firstname = datadrive5.rentals[i].driver.firstName;
          var lastname = datadrive5.rentals[i].driver.lastName;

          console.log(i);
          var prix=getPrice5(carId,datadrive5,days,distance,i);
        //  document.write('<p>'+ datadrive5.rentals[i].driver.firstName+' '+datadrive5.rentals[i].driver.lastName+' : '+prix[0]+'<br>deductibleReduction :'+prix[1]+'<br> commission : '+prix[2]+'<br> insurance : '+prix[3]+'<br> assistance : '+ prix[4]+'<br>drivy : '+prix[5]+' </p>')
          exercice_display.innerHTML += ('<p> Driver '+firstname+' '+lastname+' pays : '+prix[0]+'<br>DeductibleReduction : '+prix[1]
                +'<br> Owner gets : '+prix[6]+'<br> Insurance gets : '+prix[3]+'<br>Assistance gets :'+prix[4]+'<br> Drivy gets : '+prix[5]+'</p>' );

    }
}

function dateDiff(dateOld,dateNew)
{
var msDiff=dateNew.getTime()-dateOld.getTime();
var days =1+ msDiff/(1000*60*60*24);
return days;
}
function getPrice5(carId,datadrive5,days,distance,driverIndex){
          array=[];
          for (var i = 0; i < datadrive5.cars.length; i++) {
            if(datadrive5.cars[i].id===carId){
              var price = (days*datadrive5.cars[i].pricePerDay)+(distance*datadrive5.cars[i].pricePerKm);

              array[2] = price*0.3;//comm sans les charges supplementaire vu qu'elles vont directement a drivyc
              array[3]= 0.5*array[2];//insurance
              array[4]=days;//assistance
              array[6] = price - array[2]; // what the owner gets
              if(datadrive5.rentals[driverIndex].options.deductibleReduction == true){
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
