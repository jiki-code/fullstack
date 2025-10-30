import React from "react";
import { Card } from "./ui/card";
import { Circle } from "lucide-react";

const TaskEmpty = ({ filter }) => {
  return (
    <Card
      className={"p-6 text-center border-0 bg-gradient-card shawdow-custom-md"}
    >
      <div className="space-y-3">
        <Circle className="size-12 mx-auto text-muted-foreground" />
        <div>
          <h3 className="font-medium text-foreground">
            {filter === "active"
              ? "Chưa có nhiệm vụ nào đang làm"
              : filter === "completed"
              ? "Chưa có nhiệm vụ nào hoàn thành"
              : "Chưa có nhiệm vụ"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {filter === "all"
              ? "Thêm nhiệm vụ đầu tiên vào để bắt đầu!"
              : `Chuyển sang "Tất cả" để thấy nhiệm vụ ${filter === 'active' ? 'đã hoàn thành' : 'đang làm'}`}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TaskEmpty;
