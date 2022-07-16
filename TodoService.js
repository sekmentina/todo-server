import * as todoDB from "./TodoDB.js";

export async function addTodo({ title, finishAt }) {
  const createdAt = Math.ceil(new Date().getTime() / 1000);

  return todoDB.addTodo({ title, finishAt, createdAt });
}

export async function updateTodo({ id, title, finishAt, isComplete }) {
  return todoDB.updateTodo({ id, title, finishAt, isComplete });
}

export async function removeTodo(id) {
  return todoDB.removeTodo(id);
}

export async function getAllTodos() {
  return todoDB.getAllTodos();
}
