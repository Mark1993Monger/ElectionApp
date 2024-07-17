const express = require('express');
const path = require('path');
const port = 5000;
const app = express();
const body = require('body-parser');
const { INTERNAL } = require('sqlite3');

app.use(express.static(path.join(__dirname, 'views')));
app.set('views engine', 'ejs');

app.use(body.urlencoded(
    {
        expended: 'true'
    }
))

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
    
});

app.post('/login', (req, res) =>{
    
    const {name, password, email} = req.body;

    const userData = {
        name,
        password,
        email
    }
    // res.send("Registration successful");
    res.redirect('login');
   setInterval(() => {
    res.redirect('login.ejs')
   }, 1000)
    
})

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./election.db')

db.serialize(() => {

 db.run (`CREATE TABLE IF NOT EXISTS role(userID INT AUTO_INCREMENT PRIMARY KEY,Role_id INT NOT NULL)`);
   
 db.run (`CREATE TABLE IF NOT EXISTS authtable(id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(50) NOT NULL,
  user_id INT NOT NULL)`);

db.run(`CREATE TABLE IF NOT EXISTS usertable (id INT AUTO_INCREMENT PRIMARY KEY,Fname VARCHAR(50) NOT NULL,Mname VARCHAR(50) NOT NULL,Lname VARCHAR(50) NOT NULL,DOB DATE NOT NULL, Roll_id INT NOT NULL,Photo BLOB NOT NULL)`);

  db.run( `CREATE TABLE IF NOT EXISTS candidate (id INT AUTO_INCREMENT PRIMARY KEY,Fname VARCHAR(50) NOT NULL,Mname VARCHAR(50) NOT NULL,Lname VARCHAR(50) NOT NULL,Position_id VARCHAR(50) NOT NULL,Party_id INT NOT NULL,Photo BLOB NOT NULL)`);

db.run(`CREATE TABLE IF NOT EXISTS Party (id INT AUTO_INCREMENT PRIMARY KEY,Party VARCHAR(50) NOT NULL,Photo BLOG NOT NULL)`);

 
 


 
//   db.run('CREATE TABLE lorem (info TEXT)')
//   const stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  // for (let i = 0; i < 10; i++) {
  //   stmt.run(`Ipsum ${i}`)
  // }

//   stmt.finalize()

  db.each('SELECT  FROM role', (err, row) => {
    console.log(row)
  })
})

db.close();

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.listen(port, () => {
console.log(`Status: is listening on ${port}`);
})
