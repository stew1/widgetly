### Demo:
https://widgetly.herokuapp.com/

### Tech

* React
* Express
* MySql8

### Prerequisites

* MySql 8 installed and running
* node
* npm

### Setup

* Clone the project
* cd widgetly/client
* npm install
* cd ../data
* mysql -u root -p < widgetly-dump.sql
* cd ../server
* npm install
* PORT=3001 DATABASE_USER=widgetly-user DATABASE_PASS=w1dg3tly DATABASE=widgetly npm run watch
* cd ../client
* npm start
* localhost:3000

### Summary

* I really enjoyed working on this challenge. While I did not complete all the features, I hope it paints a good picture of my abilities. This was my first time using MySql and I had no complaints other than you can't dump database users and permissions with the database dump.
* I chose to go with a React and Express app because of how fast you can get your environment setup. With create-react-app and express generator you're up and running in minutes. I'm also very familiar with this tech.

### Feature List

* Display widgets
* Add widgets to cart
* Filter by category
* View inventory
* Edit widget quantities
* Create Orders
* Rest endpoints:
  * get widgets: /api/widgets
  * get widgets by category: /api/widgets/category/:id
  * get widgets by finish: /api/widgets/finish/:finish
  * update widget quantity: /api/widgets/quantity
  * create order: /api/orders/create
  * get categories: /api/categories

### Room for Improvement

* In the future I will definitely use some models and controllers on the backend
