import { Inbox, Search, Settings } from "lucide-react";
import { paths } from "../../routes/path";
import { BsBarChart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { useEffect, useState } from "react";

// Menu items.
const items = [
  {
    title: "Overview",
    url: paths.root,
    icon: BsBarChart,
  },
  {
    title: "Product",
    url: paths.product,
    icon: Inbox,
  },
  {
    title: "Order",
    url: paths.order,
    icon: FaRegUser,
  },
  {
    title: "Checkout",
    url: paths.checkout,
    icon: Search,
  },
  {
    title: "Settings",
    url: paths.sitting,
    icon: Settings,
  },
];

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState(items[0]?.title || null);

  useEffect(() => {
    setActiveItem(items[0]?.title);
  }, [items]);

  return (
    <div className="py-8 pl-12">
      <div className="w-full">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col py-2">
            <div>
              <Link
                to={item.url}
                className={`flex items-center w-full gap-6 border-r-4 pr-32 font-medium ${
                  activeItem === item.title
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-500"
                }`}
                onClick={() => setActiveItem(item.title)}
              >
                <item.icon  className={`w-5 ${activeItem === item.title ? "text-blue-500" : "text-gray-500"}`}  />
                <span>{item.title}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
