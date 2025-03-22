# 🌦️ Weather App (Express + EJS on AWS Lambda)

A simple weather forecast application built using **Express.js**, **EJS templates**, and deployed serverlessly on **AWS Lambda** using the **Serverless Framework**.

---

## 🚀 Features

- 🌤️ Get current weather info by **City Name** or **Latitude/Longitude**
- 🖥️ Dynamic EJS views (`home`, `weather`, and `error`)
- 📦 Serverless deployment on AWS Lambda + API Gateway
- 🌐 Uses **WeatherStack API**
- 🔒 Environment variables managed via `.env` file and `serverless-dotenv-plugin`

---

## 🔧 Setup Instructions

1️⃣ Clone the Repository
git clone https://github.com/your-username/weather-app-serverless.git
cd weather-app-serverless

2️⃣ Install Dependencies
npm install

3️⃣ Configure .env
Create a .env file in the root directory:
WEATHERSTACK_API_KEY=your_api_key_here

5️⃣ Run Locally (Optional)
Install Serverless Offline (already in devDependencies):
npx serverless offline

6️⃣ Deploy to AWS
npx serverless deploy

🧩 Notes
Ensure serverless-http is installed (for wrapping Express)

If deployment throws module not found errors for dependencies like serverless-http or axios, ensure they are in dependencies, not devDependencies

If using .env, ensure serverless-dotenv-plugin is installed and configured

👨‍💻 Author
Bikram
GitHub: https://github.com/BikramPrasad
