const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql =  require("mysql2");
const cors = require('cors');
require("dotenv");

const multer =  require("multer"); 

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// app.use(bodyParser);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cartopia'
  });
  // connect to the MySQL database
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // let sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price INT(10), category VARCHAR(45), description VARCHAR(255), image TEXT)";
    // connection.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });
  });

  let  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg') //Appending .jpg
    }
  })
  
  let  upload = multer({ storage: storage });


  app.post('/uploadImage',upload.single('image'),(req,res,err)=>{
      const file = req.file;
      console.log(file);
      if(!file){
        throw err;
      } else{
        res.send({status:true,'data':file.filename});
      }
  });

  app.post('/addProduct',(req,res)=>{
    if(req.body){

        // console.log(req.body);
        let sql = `INSERT INTO products (name, price, category, description, image) VALUES (?, ?, ?, ?, ?)`;
        connection.query(sql,[req.body.name,req.body.price,req.body.category,req.body.description,req.body.image], function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
        res.send({'status':true,'message':'Product Added Successfully'});
    }
  });


  app.get('/getProduct',(req,res)=>{
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        res.send({status:true,data:result});
      });
  });

  app.post("/getSingleProduct",(req,res)=>{
    connection.query(`SELECT * FROM products WHERE id = ${req.body.id}`,(err, result, fields)=> {
        if (err) throw err;
        res.send({'data':result})
      });
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port 3000`)
  });