// server.js
const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
const { run_signup } = require('./backend_functions.cjs'); // Adjust the path accordingly

const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json());

// const client = new MongoClient(url);
// const url = "mongodb+srv://admin:%23admin4webtech@webtechprojectstockmark.htbou8u.mongodb.net/?retryWrites=true&w=majority";

// try {
//   await client.connect();
//   console.log("Connected to MongoDB");
// } catch (error) {
//   console.error("Error connecting to MongoDB:", error);
// }

app.post('/signup', async (req, res) => {
  try {
    console.log(req.body); 
    const { name, email, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);

    const personDocument = {
      name,
      email,
      passwd: password,
    };

    const signedResponse= await run_signup(personDocument);
    console.log('signedResponse:', signedResponse);
    if(signedResponse.success){
        res.status(201).json(signedResponse);
    }
    else{
        res.status(400).json(signedResponse);
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
