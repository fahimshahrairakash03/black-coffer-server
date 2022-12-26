const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//dbUser: blackCoffer
//pass: w7EKQAxQPQGKSnZo

const uri =
  "mongodb+srv://blackCoffer:w7EKQAxQPQGKSnZo@cluster0.4r8e4ne.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const newsCollection = client.db("blackCoffer").collection("news");

    app.get("/news", async (req, res) => {
      const query = {};
      const result = await newsCollection.find(query).toArray();
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.log);

app.get("/", (req, res) => {
  res.send("black coffer api is running");
});

app.listen(port, () => {
  console.log("black-coffer api is running");
});
