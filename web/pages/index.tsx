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
  const task1: Task = {
    id: 0,
    title: "Organize Dresser",
    description: "Clear out old clothes. Refold second and third drawers.",
    priority: Priority.MEDIUM,
    status: Status.BACKLOG,
  };
  const [activeTask, setActiveTask] = useState<Task | null>(task1);

  // TODO: implement
  const handleClickSkip = () => {
    // advance to next task
  };

  // TODO: implement
  const handleClickDone = () => {
    // edit corresponding task in dictionary (with matching id)
    // to have status COMPLETE
    // then advance to next task
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
              {activeTask ? <p>{activeTask.description}</p> : "Take a break!"}
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
