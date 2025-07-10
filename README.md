# Foodie Hub – Backend API

A public food ordering platform where users can browse restaurants and menus, place food orders, and manage customer data — all without authentication.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Query Library**: `pg` (no ORM)
- **Architecture**: MVC (Models, Controllers, Routes)

---

## 🛠️ Getting Started

### 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/foodie-hub-backend.git
   cd foodie-hub-backend
2. **Install dependencies**
   ```bash
   npm install
# 🍽️ Foodie Hub – Backend API

3. **Create a PostgreSQL database**
   CREATE DATABASE foodie_hub;
  
4. **Import the schema**

5. **Create a .env file**

6. **Start the server**
    node app.js

7. **API Reference**
    All endpoints run on http://localhost:3000 and can be tested using Postman.

   ### 🏪 Restaurants
   | Method | URL                | Description          |
| ------ | ------------------ | -------------------- |
| GET    | `/restaurants`     | Get all restaurants  |
| POST   | `/restaurants`     | Add a new restaurant |
| PUT    | `/restaurants/:id` | Update restaurant    |
| DELETE | `/restaurants/:id` | Delete restaurant    |


 ### 🧾 Menu Items

 | Method | URL                   | Description                         |
| ------ | --------------------- | ----------------------------------- |
| POST   | `/menu/:restaurantId` | Add menu item to restaurant         |
| GET    | `/menu/:restaurantId` | List all menu items of a restaurant |
| PUT    | `/menu/:id`           | Edit menu item                      |
| DELETE | `/menu/:id`           | Delete menu item                    |


 ### 👤 Customers

 | Method | URL              | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/customers`     | Get all customers |
| POST   | `/customers`     | Add a customer    |
| PUT    | `/customers/:id` | Update customer   |
| DELETE | `/customers/:id` | Delete customer   |


### 🛒 Orders

| Method | URL                   | Description             |
| ------ | --------------------- | ----------------------- |
| POST   | `/orders`             | Place a new order       |
| GET    | `/orders`             | View all orders         |
| GET    | `/orders/:customerId` | View orders by customer |
| PATCH  | `/orders/:id/status`  | Update order status     |
| DELETE | `/orders/:id`         | Cancel/delete an order  |


