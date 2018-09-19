const express = require('express');
const app = express();
const port = 3000;




app.listen(port, (err) => {
    if (err) {
        return console.log(err.message)
    }
    console.log(`Server is running on port ${port}`)
})