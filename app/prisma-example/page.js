import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAT: "desc",
    },
  });

  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();

  return (
    <div>
      <h1>all tasks</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-2xl py-2">
            {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExample;
