
import React, { useEffect, useState } from "react";
import AddTask from "./AddTask.jsx";
import GetAlltask from "./GetAllTask.jsx";
import { addTask, FetchAllTask } from "../../api/TaskServices.jsx";

const Index = () => {
  const [tasks, setTasks] = useState([]);

  // fetch all tasks
  useEffect(() => {
    async function getTasks() {
      const data = await FetchAllTask();
      setTasks(data || []);
    }
    getTasks();
  }, []);

  // add task
  const handleAddTask = async (taskData) => {
    try {
      await addTask(taskData);
      const updatedTasks = await FetchAllTask();
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div
        className="
        mx-auto
        w-full
        max-w-sm
        sm:max-w-md
        md:max-w-2xl
        lg:max-w-3xl
        xl:max-w-4xl
        space-y-6
      "
      >
        <AddTask onTaskAdded={handleAddTask} />
        <GetAlltask tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Index;
