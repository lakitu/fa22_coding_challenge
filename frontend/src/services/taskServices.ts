import axios from "axios";
import TaskInterface from "../../interfaces/TaskInterface";
const apiUrl = "http://localhost:8080/api/tasks";

export function fetchTasks() {
  return axios.get(apiUrl);
}

export function addTask(task: TaskInterface) {
  return axios.post(apiUrl + "/create", task);
}

/* CREATE 'PUT' FUNCTIONS */
export function updateTask(task: TaskInterface) {
  return axios.post(apiUrl + "/put", task);
}

/* CREATE 'DELETE' FUNCTIONS */
export function deleteTask(task: TaskInterface) {
  return axios.post(apiUrl + "/delete", task);
}
