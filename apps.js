const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Gunakan EJS sebagai view engine
app.set('view engine', 'ejs');

// Middleware untuk parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Data sementara (akan disimpan di memori)
let tasks = [];

// Halaman utama
app.get('/', (req, res) => {
  res.render('index', { tasks: tasks });
});

// Tambah task baru
app.post('/add', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect('/');
});

// Hapus task
app.post('/delete', (req, res) => {
  const taskToDelete = req.body.task;
  tasks = tasks.filter(task => task !== taskToDelete);
  res.redirect('/');
});

// Jalankan server di port 3000
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
