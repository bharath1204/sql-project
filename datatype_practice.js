use("retail_db");

// ==========================================
// PREPARE THE DATA
// ==========================================

db.data_type_practice.insertMany([
  {
    product_id: 501,
    product_name: "Laptop",
    price: 65000,
    stock: 10,
    available: true,
    launch_date: ISODate("2026-01-10"),
    colors: ["Black", "Silver"],
    details: {
      brand: "Dell",
      warranty_years: 2
    }
  },
  {
    product_id: 502,
    product_name: "Headphones",
    price: 4500,
    stock: 25,
    available: true,
    launch_date: ISODate("2026-03-15"),
    colors: ["Black", "Blue"],
    details: {
      brand: "Sony",
      warranty_years: 1
    }
  },
  {
    product_id: 503,
    product_name: "Office Chair",
    price: 9000,
    stock: 0,
    available: false,
    launch_date: ISODate("2025-12-20"),
    colors: ["Black", "Grey"],
    details: {
      brand: "GreenSoul",
      warranty_years: 3
    }
  },
  {
    product_id: 504,
    product_name: "Smart Watch",
    price: 18000,
    stock: 8,
    available: true,
    launch_date: ISODate("2026-06-01"),
    colors: ["Black", "Red"],
    details: {
      brand: "Samsung",
      warranty_years: 1
    }
  }
]);

// Check inserted data
db.data_type_practice.find();


// ==========================================
// EXERCISE 1
// Display all products
// ==========================================

db.data_type_practice.find();


// ==========================================
// EXERCISE 2
// Find the product named Laptop
// ==========================================

db.data_type_practice.find({
  product_name: "Laptop"
});


// ==========================================
// EXERCISE 3
// Find products whose price is greater than 10000
// ==========================================

db.data_type_practice.find({
  price: { $gt: 10000 }
});


// ==========================================
// EXERCISE 4
// Find products having stock less than 10
// ==========================================

db.data_type_practice.find({
  stock: { $lt: 10 }
});


// ==========================================
// EXERCISE 5
// Find products where available = true
// ==========================================

db.data_type_practice.find({
  available: true
});


// ==========================================
// EXERCISE 6
// Find products where available = false
// ==========================================

db.data_type_practice.find({
  available: false
});


// ==========================================
// EXERCISE 7
// Find products launched after 1 January 2026
// ==========================================

db.data_type_practice.find({
  launch_date: {
    $gt: ISODate("2026-01-01")
  }
});


// ==========================================
// EXERCISE 8
// Find products available in the color Black
// ==========================================

db.data_type_practice.find({
  colors: "Black"
});


// ==========================================
// EXERCISE 9
// Find products available in both Black and Blue
// ==========================================

db.data_type_practice.find({
  colors: {
    $all: ["Black", "Blue"]
  }
});


// ==========================================
// EXERCISE 10
// Find products where the brand is Samsung
// ==========================================

db.data_type_practice.find({
  "details.brand": "Samsung"
});


// ==========================================
// EXERCISE 11
// Find products having more than 1 year warranty
// ==========================================

db.data_type_practice.find({
  "details.warranty_years": {
    $gt: 1
  }
});


// ==========================================
// EXERCISE 12
// Increase the stock of product 502 by 5
// ==========================================

db.data_type_practice.updateOne(
  { product_id: 502 },
  { $inc: { stock: 5 } }
);


// ==========================================
// EXERCISE 13
// Change product 503 from unavailable to available
// ==========================================

db.data_type_practice.updateOne(
  { product_id: 503 },
  { $set: { available: true } }
);


// ==========================================
// EXERCISE 14
// Add the color White to product 501
// ==========================================

db.data_type_practice.updateOne(
  { product_id: 501 },
  { $push: { colors: "White" } }
);


// ==========================================
// EXERCISE 15
// Change the warranty of product 504 to 2 years
// ==========================================

db.data_type_practice.updateOne(
  { product_id: 504 },
  {
    $set: {
      "details.warranty_years": 2
    }
  }
);


// ==========================================
// EXERCISE 16
// Display only product_name and price
// ==========================================

db.data_type_practice.find(
  {},
  {
    _id: 0,
    product_name: 1,
    price: 1
  }
);


// ==========================================
// EXERCISE 17
// Find the datatype of the price field
// ==========================================

db.data_type_practice.find(
  {},
  {
    _id: 0,
    product_name: 1,
    price_type: {
      $type: "$price"
    }
  }
);


// ==========================================
// EXERCISE 18
// Find the datatype of the available field
// ==========================================

db.data_type_practice.find(
  {},
  {
    _id: 0,
    product_name: 1,
    available_type: {
      $type: "$available"
    }
  }
);


// ==========================================
// EXERCISE 19
// Find the datatype of the launch_date field
// ==========================================

db.data_type_practice.find(
  {},
  {
    _id: 0,
    product_name: 1,
    launch_date_type: {
      $type: "$launch_date"
    }
  }
);


// ==========================================
// EXERCISE 20
// Find the datatype of the colors field
// ==========================================

db.data_type_practice.find(
  {},
  {
    _id: 0,
    product_name: 1,
    colors_type: {
      $type: "$colors"
    }
  }
);