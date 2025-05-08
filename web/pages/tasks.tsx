import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";

export default function TaskPage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-row justify-around">
        <Tabs>
          


        </Tabs>
        <Button className="w-[50%]">Backlog</Button>
        <Button className="w-[50%]">Complete</Button>
      </div>
    </div>
  );
}
