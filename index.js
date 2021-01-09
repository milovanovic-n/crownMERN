const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const PORT = process.env.PORT || 4000;
const path = require("path");
const schema = require("./schema/schema");

if(process.env.NODE_ENV !== "production") require("dotenv").config();

//connect to mongoDB
mongoose.connect(process.env.DATABASE_URL,
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// For Stripe
const stripe = require("stripe")(process.env.STRIPE_KEY);

// Init app
const app = express();
// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Allow cors
app.use(cors());

// For production
if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  })
}


app.use("/graphql", (req, res) => {
  return graphqlHTTP(req =>  ({
    schema,
    graphiql: true,
    context: req
  }))(req, res)
});

// Stripe
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if(stripeErr) {
      res.status(500).send({error: stripeErr});
    } else {
      res.status(200).send({success: stripeRes})
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running!")
});