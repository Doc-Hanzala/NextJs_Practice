'use client'

import { deleteTask } from "@/utils/action";
import { useFormStatus } from "react-dom";

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-error capitalize text-white">
      {pending ? "please wait" : "delete"}
    </button>
  );
};

const Delete = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input value={id} name="id" type="hidden" />
      <DeleteBtn />
    </form>
  );
};

export default Delete;
