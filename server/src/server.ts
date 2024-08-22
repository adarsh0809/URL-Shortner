import express from "express"
import dotenv from "dotenv" // exporting the package dotenv to automatically get the sensitive data from the .env file
import shortUrl from "./routes/shortUrl";
import cors from "cors"
import connectDb from "./config/dbconfig";
dotenv.config();  // it carry out the function of process.env , basically acomplish the loading process of .env data into process.env.{variables_name}
connectDb();

const port = process.env.PORT || 5001; // dotenv provide the data into process.env.{varialble name} 
const app = express();
const connectionString = process.env.CONNECTION_STRING || '';


app.use (express.json());  // to deal with the JSON data it parese into JS object
app.use (express.urlencoded({extended : true}))  // to deal with the form data , it parse it into JS object
app.use(cors({
    origin: '*',
    credentials: true, // Optional: Include if you need to support cookies or authentication
}));

app.use('/api' , shortUrl);


app.listen (port , ()=>{
    console.log (`Server Started on port ${port}`);
})
