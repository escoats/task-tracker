import Navbar from "@/components/Navbar";
import TaskSummaryCard from "@/components/TaskSummaryCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Task, Priority, Status } from ".";

export default function TaskPage() {
  const task1: Task = {
    id: 0,
    title: "Organize Dresser",
    description: "Clear out old clothes. Refold second and third drawers.",
    priority: Priority.MEDIUM,
    status: Status.BACKLOG,
  };
  const tasks = [task1, task1, task1, task1, task1, task1, task1];

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-row m-6 items-center h-[100%]">
        <Tabs defaultValue="backlog" className="w-full h-full">
          <TabsList className="w-full">
            <TabsTrigger value="backlog" className="text-md font-semibold">
              Backlog
            </TabsTrigger>
            <TabsTrigger value="complete" className="text-md font-semibold">
              Complete
            </TabsTrigger>
          </TabsList>
          <TabsContent value="backlog"></TabsContent>
          <TabsContent value="complete">
            <div className="flex flex-wrap m-2 gap-4 justify-betwen">
              {tasks.map((task) => {
                return (
                  <TaskSummaryCard task={task} key={null}></TaskSummaryCard>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
