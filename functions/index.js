const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IQIyOBS91zD4y70apnh3m6X0EKf8nXgDnTYmtqzK5ME135szp3Kcys8hMK38c73HNplnUt9905Bc2bYlA373xjA00EiSS5iYZ"
);
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) =>
  response.status(200).send("Hello New World")
);

app.post("/payments/create", async(request, response) => {
  const total = request.query.total;

//   console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
