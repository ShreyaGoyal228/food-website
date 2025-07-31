import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import FilterContent from "./filter-content";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Filters() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openSheet, setOpenSheet] = useState<boolean>(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <>
      <div className="flex flex-row ">
        <div
          onClick={() => {
            setOpenDialog(true);
            setOpenSheet(true);
          }}
          className="cursor-pointer flex flex-row items-center justify-between border-[1.65px] border-[#BDBDBD] bg-[rgba(0,0,0,0.12)] p-[6px] rounded-[164.96px]"
        >
          <div className="flex flex-row items-center gap-2 ">
            <div className="rounded-full bg-[#FF3B30] w-5 h-5 flex items-center justify-center text-xs font-normal text-white">
              1
            </div>
            <div className="font-normal text-base text-[rgba(0,0,0,0.87)] ">
              Filters
            </div>
          </div>
          <div className="relative w-7 aspect-square">
            <Image
              src={"/icons/filter.svg"}
              alt="filter-icon"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>

      {/* filter dialog */}
      {/* for screens above 1024px  */}
      {!isSmallDevice && (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogOverlay className="bg-black/70">
            <DialogContent className="bg-white ">
              <DialogHeader className="">
                <DialogTitle className="text-left p-5">Filter</DialogTitle>
                <div className="h-[2px] bg-[#E9E9E9] w-full"></div>
              </DialogHeader>
              <FilterContent />

              <div className="h-[2px] bg-[#E9E9E9] w-full"></div>
              <DialogFooter className="flex flex-row gap-4 justify-end pr-2 py-4">
                <DialogClose>
                  <div className="absolute right-6 top-6 md:top-4 md:right-3 size-6 md:size-8 xl:size-6 cursor-pointer">
                    <Image
                      src={"/icons/cross.svg"}
                      alt="cross-icon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </DialogClose>
                <button
                  onClick={() => setOpenDialog(false)}
                  className="text-[#FF4A22] text-base font-normal bg-white"
                >
                  Clear Filters
                </button>
                <button className="text-white text-base font-normal py-[8px] px-[40.5px] bg-[#FF4A22] rounded-[33px]">
                  Apply
                </button>
              </DialogFooter>
            </DialogContent>
          </DialogOverlay>
        </Dialog>
      )}

      {/* for screens below 768px */}
      {isSmallDevice && (
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetContent className="bg-white" side="bottom">
            <SheetHeader>
              <SheetTitle className="text-left p-5">Filter</SheetTitle>
              <div className="h-[2px] bg-[#E9E9E9] w-full"></div>
            </SheetHeader>
            <FilterContent />
            <div className="h-[2px] bg-[#E9E9E9] w-full"></div>
            <SheetFooter className="flex flex-row gap-6 lg:gap-4 justify-end pr-2 py-4">
              <SheetClose>
                <div className="absolute right-6 top-6 md:top-4 md:right-3 size-6 md:size-8 xl:size-6 cursor-pointer">
                  <Image
                    src={"/icons/cross.svg"}
                    alt="cross-icon"
                    fill
                    className="object-cover"
                  />
                </div>
              </SheetClose>
              <button
                onClick={() => setOpenSheet(false)}
                className="text-[#FF4A22] text-sm font-normal bg-white"
              >
                Clear Filters
              </button>
              <button className="text-white text-sm font-normal py-[8px] px-[40.5px] bg-[#FF4A22] rounded-[33px]">
                Apply
              </button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
