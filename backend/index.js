const mysql = require("mysql");
const express = require("express")
const app = express();

const cors = require("cors")
app.use(cors())
app.use(express.json())


var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "rootroot",
  database: "project",
})
connection.connect((error) => {
  if (error) {
    console.log("error", error)

  } else {
    console.log("connect to database")

  }
})
app.get("/user", (req, res) => {
  const q = "SELECT * FROM userdata"

  connection.query(q, (error, data) => {
    if (error) {
      console.log(error)
      return res.status(500).send({ error: "error while fetching error" })
    } return res.json(data)

  })
})

app.post("/user", (req, res) => {
  const q = "insert into `project`.`userdata` (`firstname`,`lastname`,`email`,`dateofbirth`,`uidnumber`,`pannumber`)values (?,?,?,?,?,?)"

  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.dateofbirth,
    req.body.uidnumber,
    req.body.pannumber
  ]
  connection.query(q, values, (error, data) => {
    if (error) {
      console.log(error)
      return res.status(500).send({ error: "error while fetching error" })
    } return res.json(data)

  })
})
app.get("/user/api/:id", (req, res) => {
  const userid = req.params.id;
  const q = "SELECT * FROM userdata where id= ?"

  connection.query(q, [userid], (error, data) => {

    if (error) {
      console.log(error)
      return res.status(500).send({ error: "fetch error" })
    }
    return res.json(data)

  })
})
app.put("/user/update/:id", (req, res) => {
  const userid = req.params.id;
  const sql = "UPDATE userdata SET `firstname`=?,`lastname`=?,`email`=?,`dateofbirth`=?,`uidnumber`=?,`pannumber`=? WHERE id=?"

  const values = [

    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.dateofbirth,
    req.body.uidnumber,
    req.body.pannumber,
    userid
  ]

  connection.query(sql, values, (error, data) => {
    if (error) {
      console.log(error)
      return res.status(500).send(error)
    }
    return res.json(data)
  })
})

app.delete("/user/delete/:id", (req, res) => {
  const userid = req.params.id;
  const q = "delete from userdata WHERE id=?"

  connection.query(q, [userid], (error, data) => {
    if (error) {
      console.log(error)
      return res.status(500).send(error)
    }
    return res.json(data)

  })
})


/*  OE cibile  */

app.get("/cibil", (req, res) => {
  const q = "SELECT * FROM cibil"

  connection.query(q, (error, data) => {
    if (error) {
      console.log(error)
      return res.status(500).send({ error: "error while fetching error" })
    } return res.json(data)

  })
})

app.post("/cibil", (req, res) => {
  const q = "insert into `project`.`cibil` (`id`,`cibilscore`,`cibilscoredate`,`status`,`remark`)values (?,?,?,?,?)"

  const values = [
    req.body.id,
    req.body.cibilscore,
    req.body.cibilscoredate,
    req.body.status,
    req.body.remark
  ]
  connection.query(q, values, (error, data) => {
    if (error) {
      console.log(error)
      return res.status(500).send({ error: "error while fetching error" })
    } return res.json(data)

  })
})

app.get("/cibil/:id", (req, res) => {
  const userid = req.params.id;
  const q = "SELECT * FROM cibil where id= ?"

  connection.query(q, [userid], (error, data) => {

    if (error) {
      console.log(error)
      return res.status(500).send({ error: "fetch error" })
    }
    return res.json(data)

  })
})

app.delete("/cibil/delete/:id", (req, res) => {
  const userid = req.params.id;
  const q = "delete from cibil WHERE id=?"

  connection.query(q, [userid], (error, data) => {
    if (error) {
      console.log(error)
      return res.status(500).send(error)
    }
    return res.json(data)

  })
})


app.listen(8080, () => {
  console.log("running port on 8080")
})