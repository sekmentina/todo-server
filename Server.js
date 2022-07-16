import { fastify } from "fastify";
import { addTodo, getAllTodos, removeTodo, updateTodo } from "./TodoService.js";

const addTodoSchema = {
  $id: "1",
  type: "object",
  properties: {
    title: {
      type: "string",
      minLength: 1,
    },

    finishAt: {
      type: ["number", "null"],
    },
  },

  required: ["title"],
};

const updateTodoSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      minLength: 1,
    },

    finishAt: {
      type: ["number", "null"],
    },

    id: {
      type: "number",
    },
  },

  required: ["title", "id"],
};

const todo = {
  $id: "2",
  type: "object",
  properties: {
    title: {
      type: "string",
      minLength: 1,
    },

    finishAt: {
      type: ["number", "null"],
    },

    createdAt: {
      type: "number",
    },

    isComplete: {
      type: "boolean",
    },

    id: {
      type: "number",
    },
  },

  required: ["title", "createdAt", "isComplete", "id"],
};

export const server = fastify({ logger: true });

server.get("/todo", async () => {
  return await getAllTodos();
});

server.put(
  "/todo",
  { schema: { body: addTodoSchema, response: { "2xx": todo } } },
  async (request) => {
    const { title, finishAt } = request.body;

    return await addTodo({ title, finishAt });
  }
);

server.delete(
  "/todo",
  {
    schema: {
      body: { type: "object", properties: { id: { type: "number" } } },
    },
  },
  async (req) => {
    const { id } = req.body;

    return await removeTodo(id);
  }
);

server.post(
  "/todo",

  { schema: { body: updateTodoSchema, response: { "2xx": todo } } },

  async (req) => {
    const { title, finishAt, id } = req.body;

    return await updateTodo({ id, title, finishAt });
  }
);
