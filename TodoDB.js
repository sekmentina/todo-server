import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function addTodo({ title, createdAt, finishAt }) {
  return db.todo.create({
    data: {
      title,
      finishAt,
      createdAt,
    },
  });
}

export async function updateTodo({ id, title, finishAt, isComplete }) {
  return await db.todo.update({
    where: {
      id,
    },

    data: {
      title,
      finishAt,
      isComplete,
    },
  });
}

export async function removeTodo(id) {
  return await db.todo.delete({
    where: {
      id,
    },
  });
}

export async function getAllTodos() {
  return await db.todo.findMany();
}
