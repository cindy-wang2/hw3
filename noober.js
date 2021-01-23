function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array

levelOfService = 'Noober X';

if (ride.length == 1){
  //passenger1
  passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last;
  passenger1Phone = ride[0].passengerDetails.phoneNumber;
  passenger1NumberOfPassengers = ride[0].numberOfPassengers;
  passenger1PickupAddressLine1 = ride[0].pickupLocation.address;
  passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ' ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip;
  passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address;
  passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ' ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip;
  passenger1PurpleRequested = ride[0].purpleRequested;

  if (passenger1NumberOfPassengers > 3){
      levelOfService = 'Noober XL';
    }else if (passenger1PurpleRequested == true){
      levelOfService = 'Noober Pool';
    }else{
      levelOfService = 'Noober X';
    }; 

} else if (ride.length == 2){
  //passenger1
  passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last;
  passenger1Phone = ride[0].passengerDetails.phoneNumber;
  passenger1NumberOfPassengers = ride[0].numberOfPassengers;
  passenger1PickupAddressLine1 = ride[0].pickupLocation.address;
  passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ' ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip;
  passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address;
  passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ' ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip;
  passenger1PurpleRequested = ride[0].purpleRequested;

  //passenger2
  passenger2Name = ride[1].passengerDetails.first + ' ' + ride[1].passengerDetails.last;
  passenger2Phone = ride[1].passengerDetails.phoneNumber;
  passenger2NumberOfPassengers = ride[1].numberOfPassengers;
  passenger2PickupAddressLine1 = ride[1].pickupLocation.address;
  passenger2PickupAddressLine2 = ride[1].pickupLocation.city + ' ' + ride[1].pickupLocation.state + ' ' + ride[1].pickupLocation.zip;
  passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address;
  passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + ' ' + ride[1].dropoffLocation.state + ' ' + ride[1].dropoffLocation.zip;
  passenger2PurpleRequested = ride[1].purpleRequested;

  if (passenger1NumberOfPassengers > 3 || passenger2NumberOfPassengers > 3){
    levelOfService = 'Noober XL';
  }else if (passenger1PurpleRequested == true || passenger2PurpleRequested == true){
    levelOfService = 'Noober Pool';
  }else{
    levelOfService = 'Noober X';
  }; 

}else {
//passenger1
passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last;
passenger1Phone = ride[0].passengerDetails.phoneNumber;
passenger1NumberOfPassengers = ride[0].numberOfPassengers;
passenger1PickupAddressLine1 = ride[0].pickupLocation.address;
passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ' ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip;
passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address;
passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ' ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip;
passenger1PurpleRequested = ride[0].purpleRequested;

//passenger2
passenger2Name = ride[1].passengerDetails.first + ' ' + ride[1].passengerDetails.last;
passenger2Phone = ride[1].passengerDetails.phoneNumber;
passenger2NumberOfPassengers = ride[1].numberOfPassengers;
passenger2PickupAddressLine1 = ride[1].pickupLocation.address;
passenger2PickupAddressLine2 = ride[1].pickupLocation.city + ' ' + ride[1].pickupLocation.state + ' ' + ride[1].pickupLocation.zip;
passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address;
passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + ' ' + ride[1].dropoffLocation.state + ' ' + ride[1].dropoffLocation.zip;
passenger2PurpleRequested = ride[1].purpleRequested;

//passenger 3
passenger3Name = ride[2].passengerDetails.first + ' ' + ride[2].passengerDetails.last;
passenger3Phone = ride[2].passengerDetails.phoneNumber;
passenger3NumberOfPassengers = ride[2].numberOfPassengers;
passenger3PickupAddressLine1 = ride[2].pickupLocation.address;
passenger3PickupAddressLine2 = ride[2].pickupLocation.city + ' ' + ride[2].pickupLocation.state + ' ' + ride[2].pickupLocation.zip;
passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address;
passenger3DropoffAddressLine2 = ride[2].dropoffLocation.city + ' ' + ride[2].dropoffLocation.state + ' ' + ride[2].dropoffLocation.zip;
passenger3Purplerequested = ride[2].purpleRequested;

  if (passenger1NumberOfPassengers > 3 || passenger2NumberOfPassengers > 3 || passenger3NumberOfPassengers > 3){
    levelOfService = 'Noober XL';
  }else if (passenger1PurpleRequested == true || passenger2PurpleRequested == true || passenger3PurpleRequested == true){
    levelOfService = 'Noober Pool';
  }else{
    levelOfService = 'Noober X';
  }; 
};
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}