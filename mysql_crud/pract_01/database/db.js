import mysql from 'mysql2';

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_db"
});

export default con;