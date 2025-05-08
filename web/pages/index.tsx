import Navbar from "@/components/Navbar";
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
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low",
}

enum Status {
  BACKLOG = "Backlog",
  COMPLETE = "Complete",
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
  const task3: Task = {
    id: 2,
    title: "Pack picnic!",
    description:
      "Bring: blanket, speaker, cooler (with sparkling soda), cheese plate, and strawberries",
    priority: Priority.HIGH,
    status: Status.BACKLOG,
  };
  const task4: Task = {
    id: 3,
    title: "Get pants tailored",
    description: "North Hills?",
    priority: Priority.LOW,
    status: Status.BACKLOG,
  };
  const task5: Task = {
    id: 4,
    title: "Find internship clothes",
    description: "Kuhu recommends Express?",
    priority: Priority.MEDIUM,
    status: Status.BACKLOG,
  };

  // placholder value
  const [taskList, setTaskList] = useState<Task[]>([
    task1,
    task2,
    task3,
    task4,
    task5,
  ]);

  const [activeTaskIdx, setActiveTaskIdx] = useState<number | null>(0);

  // Sets a new active task that is different than the previous task
  const setRandomTaskIdx = () => {
    if (taskList.length == 1) {
      return;
    }

    let idx = Math.floor(Math.random() * taskList.length);
    while (idx == activeTaskIdx) {
      idx = Math.floor(Math.random() * taskList.length);
    }
    setActiveTaskIdx(idx);
  };

  const handleClickSkip = () => {
    if (taskList.length == 1) {
      window.alert("This is your only task left! Add some more or get it done");
      return;
    }
    setRandomTaskIdx();
  };

  const handleClickDone = () => {
    if (activeTaskIdx === null) return;

    // create new object
    const completedTask: Task = {
      id: taskList[activeTaskIdx].id,
      title: taskList[activeTaskIdx].title,
      description: taskList[activeTaskIdx].description,
      priority: taskList[activeTaskIdx].priority,
      status: Status.COMPLETE,
    };

    // update list
    const newTaskList: Task[] = taskList.map((task, i) => {
      if (i === activeTaskIdx) return completedTask;
      else return task;
    });

    setTaskList(newTaskList);

    if (taskList.length == 1) {
      console.log("list length is 1");
      setActiveTaskIdx(null);
      return;
    }

    setRandomTaskIdx();
  };
  return (
    <>
      <Navbar />
      <p className="text-4xl text-center m-12">Task Tracker</p>
      <div className="text-3xl m-8 flex flex-row content-center justify-center">
        <Card className="w-md">
          <CardHeader>
            {activeTaskIdx != null ? (
              <CardTitle>{taskList[activeTaskIdx].title}</CardTitle>
            ) : (
              <CardTitle>No more tasks!</CardTitle>
            )}
          </CardHeader>
          <CardContent>
            <CardDescription>
              {activeTaskIdx != null ? (
                <p>{taskList[activeTaskIdx].description}</p>
              ) : (
                "Take a break!"
              )}
            </CardDescription>
          </CardContent>

          {activeTaskIdx != null && (
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
