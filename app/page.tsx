import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DItem from "@/components/DItem";

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="p-4 grow h-screen overflow-hidden">
        <div className="bg-zinc-950 w-full rounded-md h-full flex flex-col">
          <Header />
          <div className="p-4 space-y-4 grow overflow-x-hidden overflow-y-auto">
            <DItem />
            <DItem />
          </div>
        </div>
      </div>
    </div>
  );
}
