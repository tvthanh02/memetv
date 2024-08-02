import { Header } from "@/components";
import { Outlet } from "react-router-dom";

type sidebarProps = {
  children: React.ReactNode;
};

const SidebarLayout = ({ children }: sidebarProps) => {
  return (
    <div className="bg-background">
      <Header />
      <main className="w-full">
        <div className="fixed top-0 left-0 bottom-0 w-auto pt-[6rem] bg-white z-1 shadow-sidebar text-gray">
          <div className="w-full h-full overflow-y-scroll bg-white">
            {/* Sidebar Menu Component */}
            {children}
          </div>
        </div>
        <div className="w-full flex bg-background scroll-smooth">
          <div className="w-[26rem]"></div>
          <div className="flex-1 container pt-[6rem]">
            <div className="py-[2rem]">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;
