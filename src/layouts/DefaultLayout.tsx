import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppSidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    // <SidebarProvider>
      <div className="w-full min-h-screen grid grid-rows-[auto,1fr,auto] grid-cols-[auto,1fr] grid-areas-layout h-full mt-12">
        {/* Header */}
        <div className="grid-area-header col-span-2">
          <Header />
        </div>
        <div className="flex w-full">
          {/* Sidebar */}
          <div className="grid-area-sidebar border-r-2">
            <AppSidebar />
          </div>

          {/* Main Content */}
          <div className="grid-area-main bg-white flex flex-col">
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <div className="grid-area-footer col-span-2">
          <Footer />
        </div>
      </div>
    // </SidebarProvider>
  );
};

export default DefaultLayout;
