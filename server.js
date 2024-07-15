const express = require('express');
const path = require('path');
const port = 5000;
const app = express();
const body = require('body-parser');

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
const db = new sqlite3.Database(':memory:')

db.serialize(() => {
//   db.run('CREATE TABLE lorem (info TEXT)')
//   const stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  for (let i = 0; i < 10; i++) {
    stmt.run(`Ipsum ${i}`)
  }

//   stmt.finalize()

  db.each('SELECT ***** FROM auth', (err, row) => {
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
