import { Priority } from "@/pages";

export function PriorityTag({ priority }: { priority: Priority }) {
  let style = "bg-green-400";

  switch (priority) {
    case Priority.HIGH:
      style = "bg-red-200";
      break;
    case Priority.MEDIUM:
      style = "bg-orange-200";
      break;
    case Priority.LOW:
      style = "bg-green-200";
      break;
  }
  return (
    <div className={style + "  w-xxs p-2"}>
      <p>{priority.toUpperCase()}</p>
    </div>
  );
}
