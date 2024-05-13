import { deleteTask } from "@/utils/action";

const Delete = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input value={id} name="id" type="hidden" />
      <button className="btn btn-error capitalize text-white">delete</button>
    </form>
  );
};

export default Delete;
