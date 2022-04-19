const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.get("/test", (req,res) => {
    let response ={
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.get("/profil/:name/:age", (req,res) =>{
    let name = req.params.name;
    let age = req.params.age;

    let response= {
        Nama : name,
        Umur : age
    }

    res.json(response)
})

app.post("/bujur_sangkar", (req,res) => {
    
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
 
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
 
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
 
    res.json(response)
})


// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})