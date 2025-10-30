import React from "react";
import TaskEmpty from "./TaskEmpty";
import TaskCard from "./TaskCard";

const TaskList = ({filteredTasks}) => {
  let filter = "all";

  if (filteredTasks.length  === 0) {
    return <TaskEmpty filter={filter} />;
  }
  return ( 
    <div className="space-y-3">
      {filteredTasks.length && filteredTasks.map((item, key) => {
        return (
          <TaskCard key={item.id ?? key} task={item} />
        );
      })}

    </div>
  )
};

export default TaskList;
