import Column from "./Column";
import { DragDropContext } from "@hello-pangea/dnd";
import axios from "axios";

const Board = ({ todos, refresh }) => {
  const API = "http://localhost:5000/api/todos";

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    // If dropped in same column → ignore
    if (source.droppableId === destination.droppableId) return;

    await axios.patch(`${API}/${draggableId}/toggle`);
    refresh();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6">
        <Column
          title="Active"
          done={false}
          todos={todos}
          refresh={refresh}
          droppableId="active"
        />
        <Column
          title="Completed"
          done={true}
          todos={todos}
          refresh={refresh}
          droppableId="completed"
        />
      </div>
    </DragDropContext>
  );
};

export default Board;