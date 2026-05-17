import { Search } from "lucide-react";

export default function ListingsSearch() {
  return (
    <div className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center px-5">
      
      <Search className="text-zinc-400" />

      <input
        placeholder="Search marketplace..."
        className="bg-transparent flex-1 px-4 outline-none text-white placeholder:text-zinc-500"
      />

    </div>
  );
}