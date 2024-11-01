import { Outlet } from "react-router-dom";
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import { AppSidebar } from "@/components/custom/Sidebar";

const DefaultLayout = () => {
  return (
    <div className="w-full min-h-screen grid grid-rows-[auto,1fr,auto] grid-cols-[auto,1fr] grid-areas-layout h-full mt-12">
      <div className="grid-area-header col-span-2 sticky top-0 bg-white z-10">
        <Header />
      </div>
      <div className="grid grid-cols-[1fr_4fr]">
        <div className="grid-area-sidebar border-r-2 md:block lg:block sm:hidden xs:hidden">
          <AppSidebar />
        </div>

        <div className="grid-area-main bg-white  ">
          <Outlet />
        </div>
      </div>

      <div className="grid-area-footer col-span-2">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
