import Delete from "./Delete";
import { getAllTasks } from "@/utils/action";

import Link from "next/link";

const TaskList = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-bold text-lg">nothing to show ....</h2>;
  }

  return (
    <ul className="mt-8">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="mb-6 flex justify-between items-center px-5 py-5 border border-base-300 rounded-lg shadow-md "
          >
            <h2
              className={`text-lg capitalize${
                task.completed ? "line-through" : null
              }  `}
            >
              {task.content}
            </h2>
            <div className="flex items-center gap-5">
              <Link
                className="btn btn-accent text-white"
                href={`/tasks/${task.id}`}
              >
                edit
              </Link>
              <Delete id={task.id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
