const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

/*Initialize Express server*/
const app = express();
/*Call body-parser and cors middleware*/
var bodyOptions = {
  origin: 'http://localhost:4000'
}

const db = require('./db/server.js');
db.mongoose
  .connect(db.url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
  })
  .then(() => {
     console.log("Connected to the database!");
  })
  .catch(err => {
     console.log("Cannot connect to the database!", err);
     process.exit();
  });

app.use(cors(bodyOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', './routes/api');
/*Create default route*/
app.get('/', (req, res) => {
  res.json({message: "Welcome to the REST API"});
});
/*Set PORT and listen for request*/
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});