"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { paths } from "@/routes/path";
import { Button } from "@/components/ui/button";
import { Table_Type } from "@/type/type";
import { TABLE_DATA } from "@/constant/constant";
import { ArrowUpDown, ChevronDown } from "lucide-react";

export const columns: ColumnDef<Table_Type>[] = [
  {
    accessorKey: "no",
    header: () => <div className=" text-xs font-medium">No</div>,
    cell: ({ row }) => (
      <div className="capitalize font-normal text-xs">{row.getValue("no")}</div>
    ),
  },
  {
    accessorKey: "id",
    header: () => <div className="text-xs font-medium">ID</div>,
    cell: ({ row }) => (
      <div className="capitalize font-normal text-xs">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          className="text-xs font-medium"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="Uppercase font-normal text-xs">
        {row.getValue("date")}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <div className=" text-xs font-medium">Name</div>,
    cell: ({ row }) => {
      return <div className="font-normal text-xs">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "location",
    header: () => <div className=" text-xs font-medium">Location</div>,
    cell: ({ row }) => {
      return (
        <div className="font-normal text-xs">{row.getValue("location")}</div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className=" text-xs font-medium">Amount</div>,
    cell: ({ row }) => {
      return (
        <div className="font-normal text-xs">{row.getValue("amount")}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className=" text-xs font-medium">Status</div>,
    cell: ({ row }) => {
      return (
        <div className="font-normal text-xs">{row.getValue("status")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="text-xs font-medium">Action</div>,
    cell: ({}) => {
      return (
        <Link
          to={paths.event_detail}
          className="bg-blue-500 text-white text-xs p-2 rounded-md my-8"
        >
          Detail
        </Link>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: TABLE_DATA,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full border border-gray-200 rounded-md p-4 my-4">
      <div className="flex items-center py-4">
        <h1 className="font-medium text-xl">Lista de Evenimate</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Monthly <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
      <div className=" border-b">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="overflow-scroll w-full">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="h-12"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
