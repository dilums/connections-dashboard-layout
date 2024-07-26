import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeRangeItems = [
  { label: "This Week", value: "w" },
  { label: "This Month", value: "m" },
  { label: "This Year", value: "y" },
  { label: "Last Year", value: "l" },
];

export default function Header() {
  return (
    <>
      <div className="border-b border-b-zinc-800 flex items-center justify-between px-4 py-3 shrink-0">
        <div className="">
          <div className=""> Hey Kevin </div>
          <div className="text-zinc-500"> Monday, Oct 23, 2023 </div>
        </div>

        <div className="inline-flex space-x-2">
          <Select>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="This Month" />
            </SelectTrigger>
            <SelectContent>
              {timeRangeItems.map((i) => (
                <SelectItem key={i.value} value={i.value}>
                  {i.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="capitalize">add integration</Button>
        </div>
      </div>
    </>
  );
}
