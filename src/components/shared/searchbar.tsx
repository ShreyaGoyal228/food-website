"use client";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { useRouter, useSearchParams } from "next/navigation";
import useDebounce from "./hooks/useDebounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  //   custom-debounce-hook
  const debounceTerm = useDebounce(value, 300);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debounceTerm != "") {
      params.set("search", debounceTerm);
      router.push(`?${params.toString()}`, { scroll: false });

      const scrollTimeout = setTimeout(() => {
        const section = document.getElementById("all-products");
        section?.scrollIntoView({ behavior: "smooth" });
      }, 500);

      return () => clearTimeout(scrollTimeout);
    } else {
      params.delete("search");
      router.push(`?${params.toString()}`, { scroll: false });
    }
    // scroll to products after a short delay
  }, [debounceTerm]);

  return (
    <>
      <div className="hidden sm:block relative">
        <Input
          value={value}
          onChange={(e) => handleValueChange(e)}
          type="text"
          placeholder="Search item..."
          className="relative pl-[15px] sm:pr-0 md:pr-[40px] md:mr-5 placeholder:text-base placeholder:text-[#808080] border border-[#808080] rounded-[10px]"
        />
        <CiSearch
          className="absolute top-[12px] right-3 size-[19px] text-[#808080]"
          strokeWidth={1}
        />
      </div>
    </>
  );
}
