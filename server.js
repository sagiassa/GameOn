const cors = require("cors");
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3030
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost:/sql_project')
const courts = require('./courts_data.json')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({
    allowedHeaders: ["content-type"],
    origin: "*"
}))

const allowedTables = ["users", "corts", "posts", "posts_count", "user_filters", "users"];

// for( let i of corts){
//     const query = `INSERT INTO corts VALUES(null, '${i.city}', '${i.address}', '${i.cort_name}', '${i.cort_type}')`
//     sequelize.query(query)
// }

app.post('/insert', (req, res)=> {
    if (!allowedTables.includes(req.body.entity)) {
        res.status(400).json({
        })
        return;
    }
    const temp = {
        ...req.body.fields
    };
    
    const query = 
    `INSERT INTO ${req.body.entity}
    (${Object.keys(temp).join(",")})
    VALUES(:${Object.keys(temp).join(", :")})`
    //values(?,?) if i want to do the same with array
    // https://sequelize.org/master/manual/raw-queries.html#replacements
    sequelize.query(query, {
        replacements: temp
    }).then(() => {
        console.log("added to db")
        res.send({})
    }, (error) => {
        console.error(error)
        res.status(400).json(error);
    })
})

app.get("/users", async (req, res) => {
    const query=`SELECT * FROM users`
    const result =await  sequelize.query(query)
    console.log(result)
    res.send(result)
})
app.get("/posts", async (req, res) => {
    const query=`SELECT * FROM posts`
    const result =await  sequelize.query(query)
    console.log(result)
    res.send(result)
})

app.listen(PORT, function (err, res) {
    console.group("the server runs on port " + PORT)
})



// const query = 
// `INSERT INTO usersfilters
//  VALUES(1, '${req.body.gender}','${req.body.age}',' ${req.body.sport}',
//             '${req.body.level}') `