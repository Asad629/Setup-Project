import { paths } from "@/routes/path";
import { Table_Type } from "@/type";
import { Inbox, Search, Settings } from "lucide-react";
import { BsBarChart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export const TABLE_DATA: Table_Type[] = [
  {
    no: 1,
    id: "m5gr84i9",
    date: "Dec 1, 2015",
    name: "SATOSHI - Sport Cluj",
    location: "Ramania Cluj",
    amount: 316,
    status: "Active",
  },
  {
    no: 2,
    id: "5kma53ae",
    amount: 874,
    date: "Dec 1, 2015",
    name: "SATOSHI - Sport Cluj",
    location: "Ramania Cluj",
    status: "On Delivery",
  },
  {
    no: 3,
    id: "bhqecj4p",
    amount: 721,
    date: "Dec 1, 2015",
    name: "SATOSHI - Sport Cluj",
    location: "Ramania Cluj",
    status: "Finisat",
  },
];

export const chartData = [
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

export const items = [
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