//i need the data to be stored in json object format 
//i need name,email,and password(only if password and confirm passwd is the same)
//additional details i need is the stocks that the person buys



//requirements are npm install mongodb and npm install bcrypt to respectively handle interaction with backend and encryption of password

const { MongoClient } = require("mongodb");
const bcrypt=require('bcrypt');
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:%23admin4webtech@webtechprojectstockmark.htbou8u.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);


 async function run_login(email,password){
    try{
        await client.connect();
        const record=await client.db("Stockmarket").collection("userlist").findOne({email:email});
        console.log(record);
        if(record){
            console.log('userfound')
            if(password==record.passwd){
                console.log('succesful login');

                const portfolioRecord = await client.db("Stockmarket").collection("portfolio").findOne({ email: email.toLowerCase() });
                const userStocks = portfolioRecord ? portfolioRecord.stocks : [];

                console.log('User Stocks:', userStocks);

                return{login:true,message:'user login succesful',stocks:userStocks};
            }
            else{
                console.log('wrong passwd')
                return{login:false,message:'user id and password dont match'};
            }
        }
        else{
            console.log('user not found')
            return{login:false,message:'user email is not present pls signup'}
        }
    }
    catch(error){
        console.error('error during login',error.message);
    }
    finally{
        await client.close();
    }
 }
                      
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

        const portfolioRecord=await client.db("Stockmarket").collection("portfolio").insertOne({
            email: personDocument.email,
            stocks: [] // Start with an empty array of stocks
        });

        return { success: true, message: 'User signed up successfully',stocks:portfolioRecord.stocks };
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

async function run_stock(email, newStocks) {
    try {
        await client.connect();

        // Update the existing portfolio document with the new array of stocks
        const result = await client.db("Stockmarket").collection("portfolio").updateOne(
            { email: email.toLowerCase() },
            { $set: { stocks: newStocks } }
        );

        if (result.modifiedCount === 1) {
            console.log('Stocks updated successfully');
            return { status: true, message: 'Stocks updated successfully' };
        } else {
            console.log('Failed to update stocks');
            return { status: false, message: 'buy or sell stocks to update portfolio' };
        }
    } catch (error) {
        console.error('Error during updating stocks:', error.message);
        return { status: false, message: 'Internal Server Error' };
    } finally {
        await client.close();
    }
}

module.exports = {
    run_signup,
    run_login,
    run_stock,
};