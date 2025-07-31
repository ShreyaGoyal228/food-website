import { useEffect, useState } from "react";

export default function useDebounce(value: string, time: number) {
  const [searchTerm, setSearchTerm] = useState<string>(value);
  useEffect(() => {
    setTimeout(() => {
      setSearchTerm(value);
    }, time);
  }, [value, time]);

  return searchTerm ;
}
