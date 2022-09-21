import React, { useState, useEffect } from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";
import { fetchTasks } from "../services/taskServices";
import TaskInterface from "../../interfaces/TaskInterface";
import io  from "socket.io-client"

const TaskList = () => {
  const [tasks, setTasks] = useState<Array<TaskInterface>>([
    { _id: "0", task: "test1" },
    { _id: "1", task: "test2" },
    { _id: "2", task: "test3" },
  ]);
  const [updatingId, setUpdatingId] = useState("");

  useEffect(() => {
    const getTasks = () => {
      fetchTasks()
        .then((dbData) => {
          let {data} = dbData;
          setTasks(data);
        })
        .catch(err => console.log(err));
    }
    getTasks();

    const socket = io("http://localhost:8080");
    socket.on("db change", (data) => {
      console.log(`DB has ${data} an object`);
      getTasks();
    });
  }, [updatingId]);

  return (
    <div className='d-flex flex-column align-items-center pt-2'>
      <h1 className='text-center'>Tasks</h1>
      <div>
        { tasks.map((task, index) => task._id !== updatingId && <Task key={task._id ?? index} task={task} setUpdate={setUpdatingId}/>) }
      </div>
      <CreateTask task={tasks.filter(task => task._id === updatingId)[0] ?? {task: ""}} cancelUpdate={() => setUpdatingId("")} />
    </div>
  );
};

export default TaskList;
