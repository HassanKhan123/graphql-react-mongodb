const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const schema = require("./schema/schema");
const connectDB = require("./config/db");

const app = express();

// connect to database
connectDB();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === "development" })
);

app.listen(port, console.log("Server listening on Port", port));
