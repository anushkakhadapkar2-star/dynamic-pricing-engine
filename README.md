# Dynamic Pricing Engine

A **Full Stack Web Application** that dynamically calculates product prices based on quantity and discount rules.

The system allows administrators to manage products, define pricing rules, and calculate final prices using a rule-based pricing engine.

---

## Project Overview

The **Dynamic Pricing Engine** is designed to simulate how e-commerce platforms apply discounts based on purchasing conditions such as quantity.

Admins can:

- Add and manage products
- Define pricing rules
- Calculate final product prices dynamically

---

## Features

- User Authentication (Register & Login)
- Admin Dashboard
- Product Management
- Pricing Rule Creation
- Dynamic Price Calculator
- REST API Backend
- MySQL Database Integration

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Tools
- VS Code
- Git
- GitHub
- Thunder Client (API testing)

---

## Project Structure
dynamic-pricing-engine
│
├── backend
│ ├── config
│ │ └── db.js
│ │
│ ├── controllers
│ │ ├── authController.js
│ │ ├── productController.js
│ │ └── ruleController.js
│ │
│ ├── middleware
│ │ └── auth.js
│ │
│ ├── models
│ │ ├── productModel.js
│ │ └── ruleModel.js
│ │
│ ├── routes
│ │ ├── authRoutes.js
│ │ ├── productRoutes.js
│ │ ├── ruleRoutes.js
│ │ └── priceRoutes.js
│ │
│ └── server.js
│
├── frontend
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ ├── dashboard.html
│ ├── products.html
│ ├── pricingRules.html
│ ├── calculator.html
│ │
│ ├── css
│ │ └── style.css
│ │
│ └── js
│ ├── auth.js
│ ├── products.js
│ ├── rules.js
│ └── calculator.js
│
└── .gitignore

---

## How to Run the Project

### 1 Clone Repository
git clone https://github.com/anushkakhadapkar2-star/dynamic-pricing-engine.git

### 2 Navigate to Backend
cd backend

### 3 Install Dependencies

npm install

### 4 Start Server

node server.js

Server will run on:

http://localhost:5000

### 5 Run Frontend

Open in browser:
frontend/index.html

---

## API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| POST | /api/register | Register new user |
| POST | /api/login | User login |
| GET | /api/products | Get all products |
| POST | /api/products | Add new product |
| POST | /api/rules | Create pricing rule |
| POST | /api/calculate-price | Calculate final product price |

---

## Example Dynamic Pricing Logic

If a product has pricing rules like:

| Minimum Quantity | Discount |
|------------------|---------|
| 5 | 10% |
| 10 | 20% |

If user buys **10 units**, the **20% discount rule** will be applied.

---

## Author

**Anushka Khadapkar**

---

## Future Improvements

- Role-based authentication
- Product editing and deletion
- UI improvements
- Deployment on cloud

