import {
  CircleDollarSign,
  Coins,
  EllipsisVertical,
  Pencil,
  Share2,
  TagIcon,
  Trash2Icon,
  Wallet,
} from "lucide-react";
import Chart from "./Chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const moreMenuItems = [
  { title: "Edit", Icon: Pencil },
  { title: "Share", Icon: Share2 },
].map((i, j) => ({ ...i, key: j }));

const summaryItems = [
  //
  { title: "current balance", Icon: Wallet, value: "$0.00" },
  { title: "revenue", Icon: CircleDollarSign, value: "$2,431.23" },
  { title: "spend", Icon: TagIcon, value: "$1,618.50" },
  { title: "recent payout", Icon: Coins, value: "22 Mar 2023" },
].map((i, j) => ({ ...i, key: j }));

export default function DItem() {
  return (
    <div className="border border-zinc-800 rounded-md py-2">
      <>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="inline-flex items-center">
            <div className="w-14 h-14 bg-zinc-800 rounded-md border border-zinc-700/50">
              <img src="/stripe.png" />
            </div>
            <div className="ml-3">
              <div className=""> Stripe Demo Account </div>
              <div className="text-zinc-500"> E-Commerce Store </div>
            </div>

            <div className="inline-flex items-center rounded-full border border-zinc-700 px-3 py-0.5 ml-4">
              <div className="w-2 h-2 rounded-full bg-green-600"> </div>
              <div className="text-sm ml-2 capitalize"> active </div>
            </div>
          </div>

          <div className="inline-flex space-x-2">
            <Button variant="outline">View</Button>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {moreMenuItems.map(({ Icon, ...i }) => (
                  <DropdownMenuItem key={i.key}>
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{i.title}</span>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2Icon className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </>
      <div className="flex px-2">
        <div className="w-1/3 p-2">
          <div className="border border-zinc-800 rounded-md grid grid-cols-1 divide-y h-full">
            {summaryItems.map(({ Icon, ...i }) => (
              <div
                className="flex justify-between items-center py-3 px-4"
                key={i.key}
              >
                <div className="inline-flex items-center text-zinc-500">
                  <Icon className="size-5" />
                  <div className="ml-2 capitalize"> {i.title} </div>
                </div>
                <div className="text-zinc-200"> {i.value} </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 p-2">
          <Chart />
        </div>
        <div className="w-1/3 p-2">
          <Chart />
        </div>
      </div>
    </div>
  );
}
