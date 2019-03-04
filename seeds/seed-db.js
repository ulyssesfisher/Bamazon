const db = require("../models");

const items = [
  {
    product_name: "Crescent Wrench",
    department_name: "Hardware",
    price: 15,
    stock_quantity: 100
  },
  {
    product_name: "Screwdriver",
    department_name: "Hardware",
    price: 10,
    stock_quantity: 75
  },
  {
    product_name: "Hammer",
    department_name: "Hardware",
    price: 24,
    stock_quantity: 50
  },
  {
    product_name: "Ray Ban Sunglassess",
    department_name: "Accessories",
    price: 75,
    stock_quantity: 5
  },
  {
    product_name: "Black Dress Socks",
    department_name: "Apparel",
    price: 14,
    stock_quantity: 35
  },
  {
    product_name: "Blue Dress Shirt",
    department_name: "Apparel",
    price: 45,
    stock_quantity: 40
  },
  {
    product_name: "Black Slacks",
    department_name: "Apparel",
    price: 15,
    stock_quantity: 25
  },
  {
    product_name: "Black Pen",
    department_name: "Office Supplies",
    price: 2,
    stock_quantity: 57
  },
  {
    product_name: "Colored Pencils",
    department_name: "Office Supplies",
    price: 3,
    stock_quantity: 35
  },
  {
    product_name: "Eraser",
    department_name: "Office Supplies",
    price: 1,
    stock_quantity: 23
  }
];

db.sequelize.sync({ force: true }).then(function() {
  db.Product.bulkCreate(items)
    .then(function(rows) {
      console.log("\n\nINSERTED\n\n");
      db.sequelize.close();
    })
    .catch(function(err) {
      console.log("\n\nError:", err);
      db.sequelize.close();
    });
});