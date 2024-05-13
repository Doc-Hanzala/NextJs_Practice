import { editTask } from "@/utils/action";

const EditForm = ({ task }) => {
  const { id, content, completed } = task;

  return (
    // <form
    //   action={editTask}
    //   className="max-w-sm border border-base-300 rounded-md shadow-md p-12 "
    // >
    //   <input type="hidden" value={id} name="id" />
    //   <input
    //     type="text"
    //     defaultValue={content}
    //     required
    //     name="content"
    //     className="input input-bordered w-full"
    //   />
    //   <div className="form-control">
    //     <label htmlFor="check" className="label cursor-pointer">
    //       <span className="label-text">completed</span>
    //       <input
    //         type="checkbox"
    //         defaultChecked={completed}
    //         id="check"
    //         name="completed"
    //         className="checkbox checkbox-success checkbox-sm"
    //       />
    //     </label>
    //   </div>
    //   <button type="submit" className="btn btn-primary btn-block mt-6">
    //     edit
    //   </button>
    // </form>
    <form
      action={editTask}
      className="max-w-sm bg-base-100 p-12 border border-base-300  rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      {/* content */}

      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />

      {/* completed */}
      <div className="form-control my-4">
        <label className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-primary btn-block btn-sm">edit</button>
    </form>
  );
};

export default EditForm;
