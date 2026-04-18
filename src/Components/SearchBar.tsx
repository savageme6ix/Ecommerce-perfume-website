import { useState, type KeyboardEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search for a fragrance...",
  disabled = false,
}: SearchBarProps) => {
  const [input, setInput] = useState("");

  function handleSearch() {
    if (disabled) return;
    onSearch(input.trim().toLowerCase());
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  }

  return (
    <div className="w-full flex justify-center mb-10 px-4 sm:px-0">
      <div
        className={`flex w-full max-w-xl bg-white rounded-full shadow-md overflow-hidden border border-gray-200 transition-opacity ${disabled ? "opacity-60" : ""}`}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          disabled={disabled}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="
            flex-1 px-4 py-3 sm:px-6 sm:py-4 
            text-sm sm:text-base 
            outline-none bg-transparent
            disabled:cursor-not-allowed
          "
        />

        <button
          type="button"
          onClick={handleSearch}
          disabled={disabled}
          className="
            px-5 sm:px-8 
            bg-black text-white 
            text-sm sm:text-base 
            hover:bg-gray-800 
            transition
            disabled:cursor-not-allowed disabled:hover:bg-black
          "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;