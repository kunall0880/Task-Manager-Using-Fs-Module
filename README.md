# Task Manager using Node.js FS Module

## Overview
Task Manager is a Node.js-based task management application that allows users to add, view, and delete tasks. It uses the built-in `fs` module for file-based data storage and **EJS** for rendering the frontend. This project is ideal for understanding how to manage data without databases and build a clean UI with server-side rendering.

## Features

### 🔹 Add & View Tasks
- Users can submit tasks with a title and description.
- Tasks are displayed dynamically using EJS templates.

### 🔹 File-Based Data Persistence
- Tasks are stored in a local JSON file using the Node.js `fs` module.
- No database setup required—portable and easy to maintain.

### 🔹 Delete Tasks
- Easily remove tasks directly from the interface.
- Data is instantly updated in the JSON file.

### 🔹 EJS Templating
- Clean and dynamic frontend rendering using EJS.
- Easy-to-understand server-rendered views.

### 🔹 Lightweight & Simple
- Minimal dependencies and easy to run locally.
- Great for beginners learning full-stack fundamentals.

## Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** EJS, HTML, CSS
- **Storage:** Local file storage using `fs` module

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kunall0880/Task-Manager-Using-Fs-Module.git
   cd Task-Manager-Using-Fs-Module
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Visit the app in your browser:**
   Open [http://localhost:3000](http://localhost:3000)

## Usage
1. Open the homepage to view all tasks.
2. Add a new task using the form.
3. Delete tasks as needed via the UI.
4. All data is stored in `data/tasks.json` and will persist unless deleted manually.

## Folder Structure
```
/Task-Manager-Using-Fs-Module
│── views              # EJS templates
│   └── index.ejs
│
│── public             # Static assets (CSS)
│   └── styles.css
│
│── data               # JSON file for tasks
│   └── tasks.json
│
│── app.js             # Main server file
│── package.json
│── README.md
```

## Contributing
Contributions are welcome! To contribute:
1. **Fork** the repository.
2. **Create a new branch** (`feature/your-feature-name`).
3. **Commit your changes** and push them to GitHub.
4. **Open a pull request** for review.

## License
This project is licensed under the **MIT License**.

## Contact
For any questions or suggestions, feel free to reach out:
- **GitHub:** [kunall0880](https://github.com/kunall0880)
- **Email:** kunall0880@gmail.com
