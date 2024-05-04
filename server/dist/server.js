"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv")); // exporting the package dotenv to automatically get the sensitive data from the .env file
const shortUrl_1 = __importDefault(require("./routes/shortUrl"));
const cors_1 = __importDefault(require("cors"));
const dbconfig_1 = __importDefault(require("./config/dbconfig"));
dotenv_1.default.config(); // it carry out the function of process.env , basically acomplish the loading process of .env data into process.env.{variables_name}
(0, dbconfig_1.default)();
const port = process.env.PORT || 5001; // dotenv provide the data into process.env.{varialble name} 
const app = (0, express_1.default)();
const connectionString = process.env.CONNECTION_STRING || '';
if (connectionString) {
    console.log(process.env.CONNECTION_STRING);
}
app.use(express_1.default.json()); // to deal with the JSON data it parese into JS object
app.use(express_1.default.urlencoded({ extended: true })); // to deal with the form data , it parse it into JS object
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use('/api', shortUrl_1.default);
app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});
