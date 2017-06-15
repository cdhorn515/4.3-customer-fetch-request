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

  var flexCont = document.createElement('div');
  flexCont.setAttribute('class', 'flex-container');
  container.appendChild(flexCont);

  // var flexItem = document.createElement('div');
  // flexItem.setAttribute('class', 'flex');
  // flexCont.appendChild(flexItem);


  //will need to create a loop to get info 12 times
  fetch(url).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        console.log(data.results.length);

        var pictureTile = document.createElement('div');
        pictureTile.setAttribute('class', 'profile-pic flex');
        pictureTile.innerHTML = '<img src="' + data.results[i].picture.large + '">';
        flexCont.appendChild(pictureTile);

        var nameNode = document.createElement('p');
        nameNode.setAttribute('class', 'info name');
        nameNode.innerHTML = data.results[i].name.first + " " + data.results[i].name.last;
        pictureTile.appendChild(nameNode);

        var emailNode = document.createElement('p');
        emailNode.setAttribute('class', 'info email');
        emailNode.innerHTML = data.results[i].email;
        pictureTile.appendChild(emailNode);

        //div tag with two p elements
        var streetAdd = document.createElement('p');
        streetAdd.setAttribute('class', 'info address');
        streetAdd.innerHTML = data.results[i].location.city;
        pictureTile.appendChild(streetAdd);

        var locationAdd = document.createElement('p');
        locationAdd.setAttribute('class', 'info address');
        locationAdd.innerHTML = data.results[i].location.city + ", " + data.results[i].location.state + "  " + data.results[i].location.postcode;
        pictureTile.appendChild(locationAdd);

        var phoneNumber = document.createElement('p');
        phoneNumber.setAttribute('class', 'info');
        phoneNumber.innerHTML = data.results[i].phone;
        pictureTile.appendChild(phoneNumber);

        var ssnBlurred = document.createElement('p');
        ssnBlurred.setAttribute('class', 'info socalNum');
        ssnBlurred.innerHTML = "123-45-6789";
        pictureTile.appendChild(ssnBlurred);
      }
    })
    });






//         console.log('line 20 ', data.results[i].name.first);
//         var first = data.results[i].name.first;
// // debugger;
        // var last = data.results[i].name.last;
        // var fullName = first + " " + last;
        // console.log(fullName);
        // var email = data.results[i].email;
        //  console.log(data.results[i].email);
        // var street = data.results[i].location.street;
        // console.log(street);
        // var city = data.results[i].location.city;
        // console.log(city);
        // var state = data.results[i].location.state;
        // console.log(state);
        //  console.log(data.results[i].state);
        // var zip = data.results[i].location.postcode;
        // var cityStateZip = city + ", " + state + " " + zip;
        // console.log(cityStateZip);
        // var phone = data.results[i].phone;
        // console.log(phone);
        // var ssn = "123-45-6789";
        // var picture = data.results[i].picture.large;
        // console.log("line 42: ", picture);
      // addToPage();


  // function addToPage() {
  // }


        // picture.textContent = fullName;
        // container.appendChild(picture);
        //
        // var name = document.createElement('div');
        // var firstName = response.results[i].name.first;
        // var lastName = response.results[i].name.last;
        // container.appendChild(firstName + " " + lastName);
        // console.log(firstName + " " + lastName);


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
