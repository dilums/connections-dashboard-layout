import {
  Activity,
  ArrowLeftRight,
  BadgeCheck,
  ChevronsUpDown,
  CircleHelp,
  CreditCard,
  House,
  ScrollIcon,
  Search,
  Settings,
  Share2,
  Sheet,
  Users,
} from "lucide-react";

const sidebarTopItems = [
  { title: "dashboard", Icon: House },
  { title: "accounts", Icon: Sheet },
  { title: "cards", Icon: CreditCard },
  { title: "transaction", Icon: ArrowLeftRight },
  { title: "spend groups", Icon: BadgeCheck },
  { title: "insights", Icon: Activity },
  { title: "payees", Icon: Users },
  { title: "invoices", Icon: ScrollIcon },
  { title: "connections", Icon: Share2 },
];

const sidebarBottomItems = [
  { title: "help", Icon: CircleHelp },
  { title: "settings", Icon: Settings },
];

export default function Sidebar() {
  return (
    <>
      <div className="w-72 bg-zinc-950 flex flex-col p-4 shrink-0">
        <div className="shrink-0 bg-zinc-900 flex items-center p-2 rounded-md">
          <div className="h-12 w-12 bg-[#222228] shrink-0 rounded-md grid place-items-center">
            <svg
              className="w-10 h-10 text-[#466037]"
              viewBox="0 0 468 468"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M429 234H380.64C372.118 233.982 363.824 236.755 357.028 241.897C350.231 247.038 345.306 254.264 343.005 262.47L297.18 425.49C296.885 426.503 296.269 427.392 295.425 428.025C294.581 428.658 293.555 429 292.5 429C291.445 429 290.419 428.658 289.575 428.025C288.731 427.392 288.115 426.503 287.82 425.49L180.18 42.51C179.885 41.4974 179.269 40.6079 178.425 39.975C177.581 39.3421 176.555 39 175.5 39C174.445 39 173.419 39.3421 172.575 39.975C171.731 40.6079 171.115 41.4974 170.82 42.51L124.995 205.53C122.703 213.704 117.807 220.906 111.05 226.044C104.293 231.182 96.0437 233.976 87.555 234H39"
                stroke="currentColor"
                strokeWidth="35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="grow pl-2">
            <div className="text-sm"> Kevin Dukkon </div>
            <div className="text-sm text-zinc-500"> hey@kevdu.com </div>
          </div>

          <button className="shrink-0">
            <ChevronsUpDown className="w-6 h-6 text-zinc-500" />
          </button>
        </div>
        <div className="shrink-0 relative bg-zinc-900 mt-4 rounded-md mb-3">
          <input
            type="text"
            className="w-full bg-transparent py-2 text-zinc-300 rounded-md pl-10"
          />
          <div className="absolute left-0 inset-y-0 inline-flex items-center pl-3">
            <Search className="w-5 h-5 text-zinc-700" />
          </div>
          <div className="absolute right-0 inset-y-0 inline-flex items-center pr-2">
            <div className="w-6 h-6 grid place-items-center bg-zinc-800 text-xs font-semibold text-zinc-400 rounded-sm">
              /
            </div>
          </div>
        </div>
        <div className="flex-grow space-y-2 text-zinc-500 font-semibold">
          {sidebarTopItems.map(({ Icon, ...i }) => (
            <button
              className="flex items-center w-full py-2 rounded-md p-2"
              key={i.title}
            >
              <Icon className="size-5" />
              <span className="ml-2 capitalize">{i.title}</span>
            </button>
          ))}
        </div>

        <div className="shrink-0 space-y-2 text-zinc-500 font-semibold">
          {sidebarBottomItems.map(({ Icon, ...i }) => (
            <button
              className="flex items-center w-full py-2 rounded-md p-2"
              key={i.title}
            >
              <Icon className="size-5" />
              <span className="ml-2 capitalize">{i.title}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
