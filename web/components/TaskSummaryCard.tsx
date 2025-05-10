import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@/pages";
import { PriorityTag } from "./PriorityTag";
import { Ellipsis } from "lucide-react";
import { Button } from "./ui/button";

export default function TaskSummaryCard({ task }: { task: Task }) {
  return (
    <div className="w-[calc(33.333%-1rem)] text-center">
      <Card>
        <CardHeader className="flex items-center justify-center relative">
          <CardTitle className="text-center">{task.title}</CardTitle>
          <Button className="absolute right-0 mr-2" variant="ghost">
            <Ellipsis /> {/* TODO: add task editing functionality here! */}
          </Button>
        </CardHeader>
        <CardContent className="flex flex-row"></CardContent>

        <CardFooter className="flex flex-row justify-center">
          <PriorityTag priority={task.priority}></PriorityTag>
        </CardFooter>
      </Card>
    </div>
  );
}
