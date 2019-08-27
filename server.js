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

const allowedTables = ["users", "posts", "user_filters", "myfriends", "mygames"];


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
app.get('/myfriends', async (req, res)=>{
    const query = `SELECT * FROM myfriends `
    const result = await sequelize.query(query)
    console.log(result)
    res.send(result)
})
app.get("/users", async (req, res) => {
    const query=`SELECT * FROM users`
    const result =await  sequelize.query(query)
    res.send(result)
})
app.get("/mygames", async (req, res) => {
    const query=`SELECT * FROM mygames`
    const result =await  sequelize.query(query)
    res.send(result)
})
app.get("/posts", async (req, res) => {
    const query=`SELECT * FROM posts`
    const result =await  sequelize.query(query)
    res.send(result)
})
app.get("/user_filters", async (req, res) => {
    const query=`SELECT * FROM user_filters`
    const result =await  sequelize.query(query)
    res.send(result)
})
app.put('/updates', async (req, res) => {
    const query1 = `UPDATE user_filters SET age='${req.body.age}', level='${req.body.level}' WHERE u_id = '${req.body.u_id}' AND sport = 'basketball' `
    sequelize.query(query1)
})
app.delete('/delposts', async (req, res)=> {
    let day = req.body.obj.day
    let time = req.body.obj.TIME
    let query = `DELETE FROM posts WHERE day = '${day}' AND TIME = '${time}'` 
         await  sequelize.query(query)
         res.end()
})
app.delete('/delgames', async (req, res)=> {
    console.log(req.body.obj)
    let post = req.body.obj.post_id
    let u_id = req.body.obj.u_id
    let query = `DELETE FROM mygames WHERE post_id = ${post} AND u_id = '${u_id}'` 
         await  sequelize.query(query)
         res.end()
})



app.listen(PORT, function (err, res) {
    console.log("the server runs on port " + PORT)
})



// const query = 
// `INSERT INTO usersfilters
//  VALUES(1, '${req.body.gender}','${req.body.age}',' ${req.body.sport}',
//             '${req.body.level}') `

//values(?,?) if i want to do the same with array
// https://sequelize.org/master/manual/raw-queries.html#replacements

// for( let i of corts){
//     const query = `INSERT INTO corts VALUES(null, '${i.city}', '${i.address}', '${i.cort_name}', '${i.cort_type}')`
//     sequelize.query(query) }