import { createTask } from "@/utils/action";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          required
          placeholder="type here"
          name="content"
          className="join-item w-full input input-bordered outline-none "
        />
        <button type="submit" className="join-item btn btn-primary capitalize">
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
