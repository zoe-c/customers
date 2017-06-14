// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element


console.log("talking");





(function () {

  'use strict';
console.log("test");
  // Your Code Goes Here
  fetch('https://randomuser.me/api/1.1/?results=12&nat=us')
   .then(
      function(response){
      if (response.status != 200) {
         console.log("WHOA! Error: " + response.status);
         return;
      }
      response.json().then(function(data) {
         //   console.log("Here is the data: " + data);
         // checked below if we were connected. result: yes!... now make shit happen.
         // console.log(data.results);

         //assign results to customers
         let customers = data.results;
         console.log(customers);

         //create a function to pull "cus"
         function renderCustomers(){
            // let customer = customers[0];
            // for (i = 0; i <= customers.length-1; i++) {
            return `
            <div class= "customers">
              ${customers.map(customer =>
                  `<ul>
                     <li><img src="${customer.picture.large}" alt="customer-photo"></li>
                     <li class= "customer-name">${customer.name.first} ${customer.name.last}</li>
                     <li class= "customer-email">${customer.email}</li>
                     <li class= "address">
                       <p>${customer.location.street}</p>
                       <p>${customer.location.city} , ${customer.location.state} ${customer.location.postcode}</p>
                    </li>
                    <li class= "phone">${customer.phone}</li>
                 </ul>`
               ).join('')}
            </div>
            `;
         }
         console.log(renderCustomers());

         let markup = `
              <div class= "title"> INTERNAL COMPANY DIRECTORY </div>
               ${renderCustomers()}
              `
         document.body.innerHTML = markup;

      });


   })
   .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });



})();
