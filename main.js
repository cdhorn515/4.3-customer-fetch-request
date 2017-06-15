// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function() {

  'use strict';

  var url = 'https://randomuser.me/api/?results=12'; //random user api
  var container = document.querySelector('.customers'); //could also use querySelector
  var heading = document.createElement('h2');
  heading.textContent = "INTERNAL COMPANY DIRECTORY";
  //add style to center text
  container.appendChild(heading);

  //will need to create a loop to get info 12 times
  fetch(url).then(function(response) { //what  you want it to run when data is fetched
    response.json().then(function(data) {
      console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        console.log('line 20 ', data.results[i].name.first);
        var first = data.results[i].name.first;
        console.log(first);
        var last = data.results[i].name.last;
        var fullName = first + " " + last;
        console.log(fullName);
        var email = data.results[i].email;
        //  console.log(companyProfile.email);
        var street = data.results[i].location.street;
        var city = data.results[i].location.city;
        var state = data.results[i].location.state;
        //  console.log(companyProfile.state);
        var zip = data.results[i].location.postcode;
        var phone = data.results[i].phone;
        var ssn = "123-45-6789";
        var picture = data.results[i].picture.large;

      // addToPage();
      }
    })
  });

  //


  function addToPage(data) {
      var tile = document.createElement('div');
      tile.innerHTML = '<img src="' + picture + '">';
      container.appendChild(tile);
      // var picture = document.createElement('div');
      // picture.textContent = fullName;
      // container.appendChild(picture);
      //
      // var name = document.createElement('div');
      // var firstName = response.results[i].name.first;
      // var lastName = response.results[i].name.last;
      // container.appendChild(firstName + " " + lastName);
      // console.log(firstName + " " + lastName);


  }


  //
  // response.results[].picture.thumbnail (or medium or large)
  // response.results[].name.first
  // response.results[].name.last
  // response.results[].email
  // response.results[].location.street
  // response.results[].location.city
  // response.results[].location.state
  // response.results[].location.postcode
  // response.results[].phone
  // blurred ssn --use css

  // .then(function(response) {//what  you want it to run when data is fetched
  //    // console.log(response.json());//returns a promise. should add a .then
  //
  //  response.json().then(function(coffee){
  //    for (var i = 0; i < coffee.length; i++) {
  //      console.log(coffee[i]);
  //      coffeeDisplay(coffee[i]);
  //    }
  //    // loop over array of opjects
  //    // convert to html
  //    // call function
  //  });
  //
  //   function coffeeDisplay(coffee){
  //     var tile = document.createElement('div');
  //     tile.innerHTML = '<img src="' + coffee.picture + '">' + coffee.coffeeNameInput;
  //     container.appendChild(tile);
  //   }

  // window.location = 'index.html';




}());
