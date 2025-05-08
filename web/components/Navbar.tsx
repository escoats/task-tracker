import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem } from "./ui/navigation-menu";

export default function Navbar() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuItem>
          <Button variant="link">
            <a href={"/"}>Home</a>
          </Button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Button variant="link">
            <a href={"/tasks"}>Tasks</a>
          </Button>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
}
