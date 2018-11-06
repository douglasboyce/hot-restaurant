// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    customerName: "Byron",
    customerEmail: "byron@example.com",
    customerID: "byron.ferguson",
    phoneNumber: "000-000-0000"
  },
  {
    customerName: "Courtney",
    customerEmail: "courtney@example.com",
    customerID: "courtney.ferguson",
    phoneNumber: "000-000-0000"
  },
  {
    customerName: "Keeley",
    customerEmail: "keeley@example.com",
    customerID: "keeley.ferguson",
    phoneNumber: "000-000-0000"
  },
  {
    customerName: "Elke",
    customerEmail: "elke@example.com",
    customerID: "elke.ferguson",
    phoneNumber: "000-000-0000"
  },
  {
    customerName: "Scott",
    customerEmail: "scott@example.com",
    customerID: "scott.ferguson",
    phoneNumber: "000-000-0000"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
