# Task Management Application

A simple task management application built with Express.js and EJS for server-side rendering. This application allows users to add, view, edit, and delete tasks.

## Features

- **Add a new task**: Users can create new tasks by submitting a description.
- **View all tasks**: Tasks are displayed in a list or table format.
- **Edit an existing task**: Users can update the task description.
- **Delete a task**: Users can remove tasks from the list.

## Technologies Used

- **Node.js**: Runtime environment for running JavaScript on the server.
- **Express.js**: Web framework for handling routes and middleware.
- **EJS**: Templating engine for rendering dynamic HTML on the server-side.
- **Bootstrap**: Frontend framework used for styling and responsive design.

## Installation

### Clone the repository:

```bash
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
```
## Routes
1. **Home Route (GET /)**:Displays all tasks in a list or table format.
  If no tasks are available, a message is shown to add a new task.

2. **Add Task Route (POST /add)**:Adds a new task to the list.
  The task is assigned a unique ID using Date.now().
  Redirects to the home page after adding the task.

3. **Delete Task Route (POST /delete/:id)**:Deletes a task by its ID.
  Redirects to the home page after deletion.
  
4. **Edit Task Route (GET /edit/:id)**:Displays a form to edit a specific task by its ID.
  
5. **Update Task Route (POST /edit/:id)**:Updates the task description for a specific task by its ID.
  Redirects to the home page after updating.

6. **View Tasks Route (GET /view)**:Displays all tasks in a table format.

## Folder Structure
```
task-management-app/
│
├── app.js               # Main application file
├── views/               # EJS templates
│   ├── index.ejs        # Home page (list of tasks)
│   ├── edit.ejs         # Edit task form
│   └── view.ejs         # View tasks in a table format
├── README.md            # Project documentation
└── package.json         # Node.js dependencies and scripts
```

## Demo
![image](https://github.com/user-attachments/assets/373cb2a0-8380-4251-b510-4df577750864)

[Live Link](https://to-do-list-project-nj.onrender.com)

## Example Usage

**Add a Task**:  
On the home page, fill out the form and click "Add Task".  
The task will appear in the list.

**Edit a Task**:  
Click the "Edit" button next to a task.  
Update the task description in the form and submit.

**Delete a Task**:  
Click the "Delete" button next to a task.  
The task will be removed from the list.

**View Tasks in a Table**:  
Navigate to `/view` to see all tasks displayed in a table format.

## License
This project is open-source and available under the MIT License.

```
This `README.md` provides clear instructions on how to set up and use your task management application, explains all the routes and their purposes, and guides users through the process of adding, viewing, editing, and deleting tasks.
```

