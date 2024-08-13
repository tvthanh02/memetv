import { useEffect, useMemo, useRef, useState } from "react";

const Search = () => {
  const topSearch: string[] = useMemo(
    () => ["Thầy giáo ba", "Mixigaming", "Rambo", "Hằng Đàm", "SBTC Clear"],
    []
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(topSearch[0]);
  const indexPlaceholder = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      indexPlaceholder.current++;
      if (indexPlaceholder.current > topSearch.length - 1) {
        indexPlaceholder.current = 0;
      }

      setPlaceholder(topSearch[indexPlaceholder.current]);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [topSearch]);

  return (
    <div className="w-full h-full rounded-[1.5rem] flex items-center justify-center bg-background text-[1.3rem] font-light gap-2 overflow-hidden">
      <div className="w-[2.6rem] h-full flex items-center justify-center">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="flex-1 h-full">
        <input
          className="w-full h-full border-none outline-none bg-transparent text-[1.2rem]"
          type="text"
          placeholder={placeholder}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
