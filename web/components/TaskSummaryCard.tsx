import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@/pages";
import { PriorityTag } from "./PriorityTag";

export default function TaskSummaryCard({ task }: { task: Task }) {
  return (
    <div className="border-blue-100 w-[calc(33.333%-1rem)] text-center">
      <Card>
        <CardHeader>
          <CardTitle>{task.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row"></CardContent>

        <CardFooter className="flex flex-row justify-center">
          <PriorityTag priority={task.priority}></PriorityTag>
        </CardFooter>
      </Card>
    </div>
  );
}
