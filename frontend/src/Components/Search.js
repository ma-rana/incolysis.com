import React from "react";
const Search = () => {
  return (
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <form>
        <div class="bg-gray-200 flex items-center rounded-full overflow-hidden shadow">
          <div class="">
            <input
              class="bg-gray-200 outline-none min-w-[400px] px-4 py-2 text-[1.1rem] max-sm:min-w-[90px]"
              placeholder="Enter unique token..."
            />
          </div>
          <div class="w-full">
            <button
              type="submit"
              class="hover:bg-blue-500 duration-100 min-w-[110px] px-4 bg-blue-400 py-2 text-[1.1rem] max-sm:min-w-[70px]"
            >
              <span class="font-bold text-white">Check</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Search;
