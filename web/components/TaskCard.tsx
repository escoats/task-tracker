import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export interface TaskProps{
    title: string,

}
export default function TaskCard({title}: TaskProps) {
    return (

        <div className="border-blue-100 w-sm text-center">
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row">
                    <Checkbox className="m-4"></Checkbox>
                    <Label>Done!</Label>

                </CardContent>
                
            </Card>
        </div>
    )

}