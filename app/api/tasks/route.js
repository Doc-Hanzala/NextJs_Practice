import db from "@/utils/db";

export const Get = async (request) => {
  const tasks = await db.task.findMany();

  return Response.json({ data: tasks });
};
