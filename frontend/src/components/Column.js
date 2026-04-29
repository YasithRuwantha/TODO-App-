import Card from "./Card";
import { Droppable } from "@hello-pangea/dnd";

const Column = ({ title, done, todos, refresh, droppableId }) => {
  const filtered = todos.filter((t) => t.done === done);

  return (
    <div className="bg-gray-200 p-4 rounded-xl w-1/2 shadow min-h-[400px]">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-3 min-h-[300px]"
          >
            {filtered.map((todo, index) => (
              <Card
                key={todo._id}
                todo={todo}
                index={index}
                refresh={refresh}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;