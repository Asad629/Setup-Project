import {
  CircleCheck,
  Heart,
  Inbox,
  Search,
  Settings,
  UsersRound,
} from "lucide-react";
import { BsBarChart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { paths } from "@/routes/path";
import { Table_Type } from "@/type/type";
import { ChartConfig } from "@/components/ui/chart";

export const TABLE_DATA: Table_Type[] = [
  {
    no: 1,
    id: "m5gr84i9",
    date: "Dec 1, 2015",
    name: "SATOSHI ",
    location: "Ramania Cluj",
    amount: 316,
    status: "Active",
  },
  {
    no: 2,
    id: "5kma53ae",
    amount: 874,
    date: "Dec 1, 2015",
    name: "Sport Cluj",
    location: "Ramania Cluj",
    status: "On Delivery",
  },
  {
    no: 3,
    id: "bhqecj4p",
    amount: 721,
    date: "Dec 1, 2015",
    name: "Sport ",
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
    url: paths.setting,
    icon: Settings,
  },
];

export const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const LineChartData = [
  { month: "January", desktop: 186, mobile: 180 },
  { month: "February", desktop: 305, mobile: 260 },
  { month: "March", desktop: 237, mobile: 220 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 180 },
  { month: "June", desktop: 114, mobile: 140 },
];

export const LineChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const CardData = [
  {
    amount: "9,930",
    text: "Ventail total",
    value: "10.2",
    icon: { Heart },
  },
  {
    amount: "$ 52.3",
    text: "Total users",
    value: "12.4",
    icon: { UsersRound },
  },
  {
    amount: "7,4534",
    text: "Bilete vandiate",
    value: "55.5",
    icon: { Inbox },
  },
  {
    amount: "12,344",
    text: "Facourite",
    value: "16.5",
    icon: { CircleCheck },
  },
];
