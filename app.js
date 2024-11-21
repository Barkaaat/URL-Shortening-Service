require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const urlRouter = require('./routes/urlRouter');

const app = express();

app.use(express.json());

async function main() {
    await mongoose.connect(process.env.URL || 'mongodb://localhost:27017/URLs');
}

main()
    .then(() => console.log('Successfully connect to mongoose'))
    .catch(err => console.error(err));

app.use('/', urlRouter);
    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App run on Port ${PORT}`);
});