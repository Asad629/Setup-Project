
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="w-full px-10 max-w-screen-xl mx-auto min-h-screen flex flex-col h-full">
      <div className="py-6">
        {/* <Header /> */}
      </div>
      <div className="flex-1">
      <Outlet />
      </div>
      <div className=''>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
