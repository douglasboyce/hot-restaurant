// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var waitingArray = [
  {
    customerName: "Pam",
    customerEmail: "pam@example.com",
    customerID: "pam.ferguson",
    phoneNumber: "000-000-0000"
  },
  {
    customerName: "Hayley",
    customerEmail: "hayley@example.com",
    customerID: "hayley.ferguson",
    phoneNumber: "000-000-0000"
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = waitingArray;
