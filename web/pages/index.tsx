import TaskCard from "@/components/TaskCard";
import TaskProps from "@/components/TaskCard"


export default function Home() {

  
  return (
    <>
    <div className="text-3xl m-8">
      <p>Hello!</p>

      {/* Render cards in for loop*/}
      <TaskCard title={"hello"} />
    </div>
    </>
  );
}
