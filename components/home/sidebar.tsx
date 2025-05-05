import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <FaBars className="text-3xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="bg-[#ff964f]">
        <SheetHeader>
          <div className="pt-20 font-montserrat space-y-3">
            <p>Links</p>
            <p>Youtube</p>
            <p>Reach Out</p>
            <p>Socials</p>
          </div>
          <p></p>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
