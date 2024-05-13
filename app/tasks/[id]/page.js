import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/action";
import Link from "next/link";

const singleTaskPage = async ({ params }) => {
  const singleTask = await getTask(params.id);

  return (
    <>
      <div className="mb-14">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
        <EditForm task={singleTask} />
    </>
  );
};

export default singleTaskPage;
