import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import TaskInterface from "../../interfaces/TaskInterface";
import {deleteTask} from "../services/taskServices";

const Task = ( props: { task: TaskInterface, setUpdate: (_id: string) => void } ) => {
  const task = props.task;

  /* CREATE UPDATE OPERATION */

  return (
    <div className='d-flex flex-row pb-3 pt-1'>
      <div className="d-flex">
        <OverlayTrigger
          overlay={
            task.description ? <Tooltip>{task.description}</Tooltip> : <span></span>
          }
        >
          <p className='d-flex p-2 fs-4'>{`${task.task}`}</p>
        </OverlayTrigger>
      </div>
      <div className="d-flex">
          <button className="btn btn-warning mx-1" onClick={() => props.task._id && props.setUpdate(props.task._id)}>UPDATE</button>
          <button className="btn btn-danger mx-1" onClick={() => deleteTask(props.task)}>DELETE</button>
      </div>
    </div>
  );
};

export default Task;
