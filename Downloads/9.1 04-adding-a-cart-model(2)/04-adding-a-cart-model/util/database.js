const mySql=require('mysql2');
const pool=mySql.createPool({
    host:'localhost',
    user:'root',
    database:'first_table',
    password:'Abhishek@#123'
})

module.exports=pool.promise();