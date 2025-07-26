"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function ClearFilter() {
  const searchParms = useSearchParams();
  const params = new URLSearchParams(searchParms.toString());
  const router = useRouter();

  const handleClearFilters = () => {
    params.delete("category");
    router.push(`?${params.toString()}`);
  };
  return (
    <>
      <div
        onClick={() => handleClearFilters()}
        className="cursor-pointer text-[#FF4A22] text-base font-normal"
      >
        Clear filter
      </div>
    </>
  );
}
