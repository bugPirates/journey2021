const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'health_db'
});

connection.connect(function(error) {
    if (!!error) console.log(error);
    else console.log('Database Terhubung!!!');
});

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) =>{
    let sql = "SELECT * FROM data_penyakit";
    let query = connection.query(sql, (err, rows) => {
        if(err) throw error;
        res.render('penyandang_index', {
            title: 'Data Penyandang Penyakit',
            data_penyakit :rows
        });
    });
});


app.get('/add', (req, res) => {
    res.render('penyandang_add', {
        title : 'Masukkan Data'
    });
});

app.get('/save', (req, res) => {
    let data = {nama: req.body.nama, jenis_penyakit: req.body.jenis_penyakit, usia:req.body.usia, alamat: req.body.alamat};
    let sql = "INSERT INTO data_penyakit SET ?";
    let query = connection.query(sql, data, (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/edit/:Id', (req, res) =>{
    const Id = req.params.Id;
    let sql = `Select * from data_penyakit where id = ${Id}`;
    let query = connection.query(sql, (err, result) => {
        if(err) throw err;
        res.render('penyandang_edit', {
            title : 'Save Data',
            data_penyakit : result[0]
        });
    });
});

app.get('/update', (req, res) => {
    const Id = req.body.id;
    let sql = "UPDATE data_penyakit SET nama='" + req.body.nama + "', jenis_penyakit='" + req.body.jenis_penyakit + "' WHERE id=" + req.body.id;
    let query = connection.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/delete/:Id', (req, res) => {
    const Id = req.params.Id;
    let sql = `DELETE form data_penyakit where id = ${Id}`;
    let query = connection.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log('Server Runnin on Port 3000');
});