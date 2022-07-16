import { fastify } from "fastify";
import { addTodo, getAllTodos } from "./TodoService.js";

export const server = fastify({ logger: true });

server.get("/todo", async () => {
  return await getAllTodos();
});

server.put("/todo", async (request) => {
  const { title, finishAt } = request.body;

  return await addTodo({ title, finishAt });
});
