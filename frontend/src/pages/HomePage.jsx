import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import AddTask from "@/components/addTask";
import StatsAndFilters from "@/components/statsAndFilters";
import TaskList from "@/components/taskList";
import TaskListPagination from "@/components/taskListPagination";
import Footer from "@/components/footer";
import { toast } from "sonner";
import axios from "axios";
function HomePage() {
  const [taskBuffer, setTaskBuffer] = useState([]);
  const [activeTask, setActiveTask] = useState(0);
  const [completeTask, setCompleteTask] = useState(0);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/tasks");
        setTaskBuffer(res.data.tasks);
      setActiveTask(res.data.activeCount);
      setCompleteTask(res.data.completeCount);

    } catch (err) {
      setTaskBuffer([]);
      console.log(err);
      toast.error("Lỗi xảy ra khi truy xuất tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen w-full bg-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="container pt-8 mx-auto relative z-10">
          <div className="w-full max-w-2xl mx-auto space-y-6">
            <Header />
            <AddTask />
            <StatsAndFilters completedTaskCount={completeTask} activeTaskCount={activeTask} />
            <TaskList filteredTasks={taskBuffer} />
            <div className="flex flex-col justify-start items-center">
              <TaskListPagination />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
