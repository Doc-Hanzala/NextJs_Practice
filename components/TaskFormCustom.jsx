"use client";
import { createTaskCustom } from "@/utils/action";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="join-item btn btn-primary capitalize"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const TaskForm = () => {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input
          type="text"
          required
          placeholder="type here"
          name="content"
          className="join-item w-full input input-bordered outline-none "
        />
        <SubmitBtn/>
      </div>
    </form>
  );
};

export default TaskForm;
