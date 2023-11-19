//i need the data to be stored in json object format 
//i need name,email,and password(only if password and confirm passwd is the same)
//additional details i need is the stocks that the person buys



//requirements are npm install mongodb and npm install bcrypt to respectively handle interaction with backend and encryption of password

const { MongoClient } = require("mongodb");
const bcrypt=require('bcrypt');
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:%23admin4webtech@webtechprojectstockmark.htbou8u.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
 

                      
 async function run_signup(personDocument) {
    try {
        // Connect to the Atlas cluster stockmarket and the collection userlist inside it
         await client.connect();
         
        //  password="gojover";
        //  const hashedPassword = await bcrypt.hash(password, 10);
        //  // Create a new document                                                                                                                                           
        //  let personDocument = {
        //      "name": "Priyanshu Sachan" ,
        //      "email": "priyanshusachan37@gmail.com",                                                                                                                                 
        //      "passwd": hashedPassword                                                                                                                                  
        //      };
        await insertrecord(client,personDocument);
        return { success: true, message: 'User signed up successfully' };
        } catch (err) {
         console.error(err.stack);
         return { success: false, message: 'Signup failed. Email already exist' };
     }
 
     finally {
        await client.close();
    }
}

async function insertrecord(client,personDocument){
    const emailExists = await checkEmailExists(client, personDocument.email);

    if (emailExists) {
        throw new Error("Email already exists");
    }



    const p = await client.db("Stockmarket").collection("userlist").insertOne(personDocument);
    console.log("succesfull signin\n",p.insertedId);//if u need a varibale telling correct login or not let me know

}

async function checkEmailExists(client,email){
    const existing = await client.db("Stockmarket").collection("userlist").findOne({email:email});
    return (!!existing && email!==null);
}

module.exports={
    run_signup,
};
