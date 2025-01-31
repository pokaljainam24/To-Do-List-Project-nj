const express = require('express');

const app = express();
const PORT = 8090;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let tasks = [];

// Home Route - Displays Tasks
app.get('/', (req, res) => {
    res.render('index', { tasks });
});

// Add Task Route
app.post('/add', (req, res) => {
    const newTask = {
        id: Date.now().toString(),
        task: req.body.task
    };
    tasks.push(newTask);
    res.redirect('/');
});

// Delete Task Route
app.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== id);
    res.redirect('/');
});

// Edit Task Route (Form)
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const taskEdit = tasks.find(task => task.id === id);
    res.render('edit', { taskEdit });
});

// Edit Task Route (Update Task)
app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    tasks = tasks.map(t => (t.id === id ? { ...t, task } : t));

    res.redirect('/');
});

//view Task Route
app.get('/view', (req, res) => {
    return res.render("view", { tasks });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
