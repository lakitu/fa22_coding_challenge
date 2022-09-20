import React, {useEffect, useState} from "react";
import { addTask, updateTask } from "../services/taskServices"
import TaskInterface from "../../interfaces/TaskInterface";

interface CTProps {
  task: TaskInterface | undefined,
  cancelUpdate: () => void,
}

const CreateTask = ( { task, cancelUpdate }: CTProps ) => {
  const [taskName, setTaskName] = useState(task?.task ?? "");
  const [taskDescription, setTaskDescription] = useState(task?.description ?? "");

  useEffect(() => {
    setTaskName(task?.task ?? "");
    setTaskDescription(task?.description ?? "");
  }, [task]);

  const runAddTask = () => {
        if (taskName !== "") {
            addTask({
                task: taskName,
                description: taskDescription,
            })
                .then(() => {
                  setTaskName("");
                  setTaskDescription("");
                })
                .catch((e: any) => console.error(e));
        }
    }
  const runUpdateTask = () => {
    // @ts-ignore
    updateTask({_id: task._id, task: taskName, description: taskDescription})
      .then(() => cancelUpdate());
  }

  const CreateButton = () => (
    <div>
      <input type="button" value={"Create Task"} onClick={runAddTask}/>
    </div>
  );
  const UpdateButton = () => (
    <div>
      <input type="button" value="Update Task" onClick={runUpdateTask} />
      <input type="button" value="Cancel" onClick={cancelUpdate} />
    </div>
  );

  return (
    <div id="createTask" className="d-flex flex-column align-items-left p-3">
      <div id="taskName" className="d-flex flex-row p-2">
        <label htmlFor="name" className="pe-2">
          <span style={{color: "red"}}>* </span>
          Task Name: </label>
        <input type="text" name="name" id="name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}/>
      </div>

      <div id="taskDesc" className="d-flex flex-row p-2">
        <label htmlFor="desc" className="pe-2">Task Description: </label>
        <input type="text" name="desc" id="desc"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}/>
      </div>

      {!task?._id ? <CreateButton/> : <UpdateButton />}
    </div>
  );
};

export default CreateTask;
