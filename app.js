const express = require('express')
const app = express()

const pool = require('./connction');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post("/home",async(req,res)=>{
    try{
       const { home } = req.body;
       const homePage = await pool.query("INSERT INTO restuarent_database{home}VALUES{$1} RETURNING *",[home]);

       console.log(req.body);
  
       res.json(homePage);
  
    }
    catch (err){
      console.error(err.message);
    }
  
  });

 
  app.get("/category",async(req,res) => {
    try {

      // const {feature} = req.body;

      const catg = await pool.query("SELECT * FROM category")

      res.json(catg.rows) ;
      
    } catch (err) {
      console.error(err.message);
      
    }
  });

  app.get("/feature",async(req,res) => {
    try {

      // const {feature} = req.body;

      const featurd = await pool.query("SELECT * FROM feature")

      res.json(featurd.rows) ;
      
    } catch (err) {
      console.error(err.message);
      
    }
  });

  app.get("/popular",async(req,res) => {
    try {

      // const {feature} = req.body;

      const pfood = await pool.query("SELECT * FROM popular")

      res.json(pfood.rows) ;
      
    } catch (err) {
      console.error(err.message);
      
    }
  });

app.listen(3000,()=>{
    console.log('server is running');
});

 