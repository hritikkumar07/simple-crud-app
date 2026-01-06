Simple CRUD App
A RESTful API built with Node.js, Express, and MongoDB for performing CRUD (Create, Read, Update, Delete) operations on products.
🚀 Features

Create new products
Retrieve all products or a single product by ID
Update existing products
Delete products
MongoDB integration with Mongoose
Environment variable configuration for security
Clean MVC architecture

🛠️ Technologies Used

Node.js - JavaScript runtime
Express.js - Web application framework
MongoDB - NoSQL database
Mongoose - MongoDB object modeling
dotenv - Environment variable management

📋 Pre-requisites
Before running this project, make sure you have:

Node.js (v14 or higher)
npm or yarn
MongoDB Atlas account (or local MongoDB installation)

⚙️ Installation

Clone the repository:

git clone https://github.com/hritikkumar07/simple-crud-app.git
cd simple-crud-app

Install dependencies:

npm install

Create a .env file in the root directory:

envMONGODB_URI=your_mongodb_connection_string
PORT=3000

Start the server:

npm start
The server will run on http://localhost:3000
📚 API Endpoints
Base URL
http://localhost:3000/api/products