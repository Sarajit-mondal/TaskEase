# Task Management App

**live link:** https://task-flarelink.netlify.app/

A simple, responsive task management application built with React and TypeScript. This app allows users to add, view, and delete tasks, filter and sort tasks by priority, and save tasks in `localStorage` to persist them across sessions. GSAP (GreenSock Animation Platform) is used for smooth, engaging animations.

## Features

- **Add, View, and Delete Tasks**: Create tasks with titles, descriptions, and priorities. View tasks in a structured layout, with options to delete tasks as needed.
- **Search & Sort**: Search tasks by title and sort by priority levels (Low, Medium, and High).
- **Task Persistence**: Stores tasks in `localStorage`, keeping them available even after a page refresh.
- **Smooth Animations**: GSAP powers animations, adding transitions for task addition, deletion, and selection.

## Screenshots

- **Main Screen**: Shows task list with search and sort options.
- **Add Task Modal**: Add task details, including title, description, and priority level.

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Sarajit-mondal/TaskEase.git
   ```

Navigate to the project directory:

## cd TaskEase

### Install dependencies:

```bash
npm install
```

### Starting the Project

To start the app in development mode:

```bash
npm run dev
```

## The app will run at http://localhost:3000.

### Usage

- **Add a Task:** Click "Add Task" to open a modal for creating a new task with a title, description, and priority.
- **Search:** Use the search bar to filter tasks by title.
- **Sort by Priority:** Use the dropdown menu to sort tasks based on priority (Low, Medium, High).
- **Select/Unselect a Task:** Click the checkbox icon on a task to mark it as selected/unselected.
- **Delete a Task:** Click the trash icon to remove a task from the list.

### Animation with GSAP

This app utilizes GSAP (GreenSock Animation Platform) to add animations.

## Install GSAP:

```bash
npm install gsap
```

## Import and Use GSAP: Import GSAP in your components as needed. For example:

```bash
import gsap from 'gsap';

useEffect(() => {
  gsap.from(".task", { opacity: 0, y: -20, stagger: 0.2 });
}, [tasks]);
```

## Animation Examples:

- **Task Addition/Deletion:** Animate tasks in or out as they are added or deleted.
- **Modal Animations:** Animate modal opening and closing.
- **Hover Effects:** Add interactive hover effects for buttons and icons.

## File Structure

src

- **components:** Holds reusable components (e.g., TaskMain.tsx).
  App.tsx: Main application file.
  index.tsx: Entry point for the React app.
  Technologies
  React: JavaScript library for building user interfaces.
  TypeScript: For static type-checking and improved code quality.

## GSAP: For creating smooth animations.

## LocalStorage: To persist data locally in the browser.

## Future Improvements

Add notifications for task creation or deletion.
Expand task filtering with more options.
Improve accessibility features.

## License

This project is open source.
