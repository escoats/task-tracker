import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

enum Priority {
  HIGH,
  MEDIUM,
  LOW,
}

enum Status {
  BACKLOG,
  COMPLETE,
}

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
}

export default function Home() {
  // TODO: move this somewhere else - unsure where yet
  //const tasks: Map<number, Task> = new Map();
  const task1: Task = {
    id: 0,
    title: "Organize Dresser",
    description: "Clear out old clothes. Refold second and third drawers.",
    priority: Priority.MEDIUM,
    status: Status.BACKLOG,
  };
  const task2: Task = {
    id: 1,
    title: "Meal Prep",
    description: "Make soup!",
    priority: Priority.MEDIUM,
    status: Status.BACKLOG,
  };

  const tasks: Task[] = [task1, task2];

  const [activeTask, setActiveTask] = useState<Task | null>(tasks[0]);

  const getRandomTask = () => {
    if (tasks.length == 1) return null;

    let idx = Math.floor(Math.random() * tasks.length);
    while (tasks[idx].title == activeTask!.title) {
      idx = Math.floor(Math.random() * tasks.length);
    }
    console.log(tasks[idx].title);

    setActiveTask(tasks[idx]);
  };

  const handleClickSkip = () => {
    getRandomTask();
  };

  // TODO: updating task doesn't show in the 
  const handleClickDone = () => {
    const idx = tasks.findIndex((t) => t.title === activeTask!.title);
    tasks[idx].status = Status.COMPLETE;
    getRandomTask();
  };
  return (
    <>
      <p className="text-4xl text-center m-12">Task Tracker</p>
      <div className="text-3xl m-8 flex flex-row content-center justify-center">
        <Card className="w-md">
          <CardHeader>
            {activeTask ? (
              <CardTitle>{activeTask.title}</CardTitle>
            ) : (
              <CardTitle>No more tasks!</CardTitle>
            )}
          </CardHeader>
          <CardContent>
            <CardDescription>
              {activeTask ? (
                <p>
                  {activeTask.description}, {activeTask.status}
                </p>
              ) : (
                "Take a break!"
              )}
            </CardDescription>
          </CardContent>

          {activeTask && (
            <CardFooter className="flex flex-row justify-between">
              <Button
                onClick={handleClickSkip}
                variant="secondary"
                className="bg-red-500"
              >
                Skip
              </Button>
              <Button
                onClick={handleClickDone}
                variant="default"
                className="bg-emerald-500"
              >
                Done!
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </>
  );
}
