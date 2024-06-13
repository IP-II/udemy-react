const logger = require("firebase-functions/logger");
const { onRequest } = require("firebase-functions/v2/https");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");

dotenv.config(); // Fetch env

console.log(process.env); // Debugging line to check if env vars are loaded
const secret_key = process.env.STRIPE_SECRET;

if (!secret_key) {
  throw new Error("Missing STRIPE_SECRET environment variable");
}

console.log(secret_key); // Debugging line

const stripe = new Stripe(secret_key);
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "working",
  });
});

//Uncomment if you want to enable the payment creation endpoint
app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
  
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(400).json({ error: "The amount must be greater than zero." });
  }
});

exports.api = onRequest(app);
