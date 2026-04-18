import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  function handleSearch() {
    onSearch(input.trim().toLowerCase());
  }

  return (
    <div className="w-full flex justify-center mb-10 px-4 sm:px-0">
      <div className="flex w-full max-w-xl bg-white rounded-full shadow-md overflow-hidden border border-gray-200">
        
        {/* Input */}
        <input
          type="text"
          placeholder="Search for a fragrance..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
            flex-1 px-4 py-3 sm:px-6 sm:py-4 
            text-sm sm:text-base 
            outline-none bg-transparent
          "
        />

        {/* Button */}
        <button
          onClick={handleSearch}
          className="
            px-5 sm:px-8 
            bg-black text-white 
            text-sm sm:text-base 
            hover:bg-gray-800 
            transition
          "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;