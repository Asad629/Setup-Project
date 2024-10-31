export type Table_Type = {
  no: number;
  id: string;
  amount: number;
  status: "Active" | "Finisat" | "On Delivery";
  date: string;
  name: string;
  location: string;
};