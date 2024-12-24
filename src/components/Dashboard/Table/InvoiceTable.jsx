import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

export function InvoiceTable() {
  return (
    <div className="sm:w-[60%] w-[96%] mx-2 sm:mx-0 shadow-xl border-t rounded-xl">
      <h1 className="py-5 px-5 font-semibold text-lg">New invoice</h1>
      <div className="rounded-md ">
        <Table>
          <TableHeader className="h-[50px] bg-[#f4f6f8] ">
            <TableRow>
              <TableHead>Invoice ID </TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="h-[60px]">
              <TableCell>INV-1990</TableCell>
              <TableCell> Android</TableCell>
              <TableCell>$83.74</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-6 p-0">
                      <span className="sr-only">Open menu</span>
                      ...
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="flex flex-col justify-start w-full"
                  >
                    <button className="w-full px-2 py-2">Edit</button>
                    <button className="w-full px-2 py-2">Delete</button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow className="h-[60px]">
              <TableCell>INV-1990</TableCell>
              <TableCell> Android</TableCell>
              <TableCell>$83.74</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-6 p-0">
                      <span className="sr-only">Open menu</span>
                      ...
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="flex flex-col justify-start w-full"
                  >
                    <button className="w-full px-2 py-2">Edit</button>
                    <button className="w-full px-2 py-2">Delete</button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow className="h-[60px]">
              <TableCell>INV-1990</TableCell>
              <TableCell> Android</TableCell>
              <TableCell>$83.74</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-6 p-0">
                      <span className="sr-only">Open menu</span>
                      ...
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="flex flex-col justify-start w-full"
                  >
                    <button className="w-full px-2 py-2">Edit</button>
                    <button className="w-full px-2 py-2">Delete</button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow className="h-[60px]">
              <TableCell>INV-1990</TableCell>
              <TableCell> Android</TableCell>
              <TableCell>$83.74</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-6 p-0">
                      <span className="sr-only">Open menu</span>
                      ...
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="flex flex-col justify-start w-full"
                  >
                    <button className="w-full px-2 py-2">Edit</button>
                    <button className="w-full px-2 py-2">Delete</button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow className="h-[60px]">
              <TableCell>INV-1990</TableCell>
              <TableCell> Android</TableCell>
              <TableCell>$83.74</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-6 p-0">
                      <span className="sr-only">Open menu</span>
                      ...
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="flex flex-col justify-start w-full"
                  >
                    <button className="w-full px-2 py-2">Edit</button>
                    <button className="w-full px-2 py-2">Delete</button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow className="h-[60px]">
              <TableCell>INV-1990</TableCell>
              <TableCell> Android</TableCell>
              <TableCell>$83.74</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-6 p-0">
                      <span className="sr-only">Open menu</span>
                      ...
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="flex flex-col justify-start w-full"
                  >
                    <button className="w-full px-2 py-2">Edit</button>
                    <button className="w-full px-2 py-2">Delete</button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
          <div className="flex justify-end w-full border-t py-6 pr-3">
            <button>View all </button>
          </div>
      </div>
    </div>
  );
}
