import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Calendar,
  CheckCircle2,
  Circle,
  SquarePen,
  Trash2,
} from "lucide-react";
import { Input } from "./ui/input";

const TaskCard = ({ task, index }) => {
  let isEdit = false;
  return (
    <Card
      className={cn(
        "p-4 bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fade-in group",
        task.status === "completed" && "opacity-75"
      )}
      style={{ animationDelay: `${index * 50}` }}
    >
      <div className="flex items-center gap-4">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="flex-shirk-0 size- 8 rounded-full text-muted-foreground hover:text-primary"
        >
          {task.status === "complete" ? (
            <CheckCircle2 className="size-5" />
          ) : (
            <Circle className="size-5" />
          )}
        </Button>
        <div className="flex-1 min-w-0">
          {isEdit ? (
            <Input
              placeholder="Bạn cần làm gì ?"
              className={
                "flex-1 h-12 text-base border-border/50 forcus:border-primary/50 focus:ring-primary/20"
              }
            />
          ) : (
            <p className="text-base text-muted-foreground">{task.title}</p>
          )}
          <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 mt-1">
            <Calendar className="size-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {new Date(task.createdAt).toLocaleString()}
            </span>
          </div>
          {task.completedAt && (
            <>
              <span className="text-xs text-muted-foreground">-</span>
              <Calendar className="size-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {new Date(task.completedAt).toLocaleString()}
              </span>
            </>
          )}
        </div>
        </div>

        <div className="hidden gap-2 group-hover:inline-flex animate-slide-up">
          <Button
            variant={"ghost"}
            size={"icon"}
            className={
              "flex-shirk-0 transition-colors size-8 text-muted-foreground hover:text-info"
            }
          >
            <SquarePen className="size-4"></SquarePen>
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className={
              "flex-shirk-0 transition-colors size-8 text-muted-foreground hover:text-destructive"
            }
          >
            <Trash2 className="size-4"></Trash2>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
