import axios from "axios";
import { Draggable } from "@hello-pangea/dnd";

const Card = ({ todo, refresh, index }) => {
  const API = "http://localhost:5000/api/todos";

  const toggle = async () => {
    await axios.patch(`${API}/${todo._id}/toggle`);
    refresh();
  };

  const remove = async () => {
    await axios.delete(`${API}/${todo._id}`);
    refresh();
  };

  return (
    <Draggable draggableId={todo._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition cursor-grab"
        >
          <h4 className="font-bold text-lg">{todo.title}</h4>
          <p className="text-sm text-gray-600 mb-3">{todo.description}</p>

          <div className="flex justify-between">
            <button
              onClick={toggle}
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600"
            >
              {todo.done ? "Undo" : "Done"}
            </button>

            <button
              onClick={remove}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;