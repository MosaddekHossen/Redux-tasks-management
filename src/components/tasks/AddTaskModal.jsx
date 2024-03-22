import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setInOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setInOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setInOpen} title={"Modal!"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Title
            </label>
            <input
              className="w-full rounded-md"
              type="text"
              id="title"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="title" className="mb-2">
              Description
            </label>
            <textarea
              className="w-full rounded-md"
              type="text"
              id="description"
              {...register("description")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Deadline
            </label>
            <input
              className="w-full rounded-md"
              type="date"
              id="date"
              {...register("date")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Assign to
            </label>
            <select
              className="w-full rounded-md"
              id="assignedTo"
              {...register("assignedTo")}
            >
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
              <option value={"One"}>One</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Priority
            </label>
            <select
              className="w-full rounded-md"
              id="priority"
              {...register("priority")}
            >
              <option value={"high"}>High</option>
              <option value={"medium"}>Medium</option>
              <option value={"low"}>Low</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => onCancel()}
              type="button"
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddTaskModal;
