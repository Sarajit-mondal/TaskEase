import React, { useState } from 'react';

// Types for Task
interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
}

const TaskMain: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'Low' | 'Medium' | 'High' | ''>('');
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'Low' as 'Low' | 'Medium' | 'High' });

  // Filter and sort tasks based on search and sort selection
  const filteredTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === '') return 0;
      if (sort === 'Low') return a.priority === 'Low' ? -1 : 1;
      if (sort === 'Medium') return a.priority === 'Medium' ? -1 : 1;
      return a.priority === 'High' ? -1 : 1;
    });

  // Handle task addition
  const handleAddTask = () => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
    setShowModal(false);
    setNewTask({ title: '', description: '', priority: 'Low' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 relative">
      <div className="bg-white shadow-md rounded-md p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search tasks..."
          className="border p-2 rounded-md w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sort Options */}
        <select
          className="border p-2 rounded-md w-full md:w-1/3"
          value={sort}
          onChange={(e) => setSort(e.target.value as 'Low' | 'Medium' | 'High' | '')}
        >
          <option value="">Sort by Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        {/* Add Task Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="mt-6">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="bg-white shadow-sm rounded-md p-4 mb-4 flex flex-col gap-2"
          >
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <span
              className={`px-2 py-1 rounded-full text-white ${
                task.priority === 'Low'
                  ? 'bg-green-500'
                  : task.priority === 'Medium'
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              }`}
            >
              {task.priority}
            </span>
          </div>
        ))}
      </div>

      {/* Add Task Modal */}
      {showModal && (
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
            <input
              type="text"
              placeholder="Task Title"
              className="border p-2 rounded-md w-full mb-4"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <textarea
              placeholder="Task Description"
              className="border p-2 rounded-md w-full mb-4"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            ></textarea>
            <select
              className="border p-2 rounded-md w-full mb-4"
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as 'Low' | 'Medium' | 'High' })}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default TaskMain
