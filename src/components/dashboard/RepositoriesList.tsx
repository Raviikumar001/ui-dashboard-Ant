import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { FaDatabase, FaPlus } from "react-icons/fa";
import { SlRefresh } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { ImSpinner8 } from "react-icons/im";
import repoData from "@/mock-data/repo.json";

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredRepositories = repoData.repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  function timeAgo(timestamp: string): string {
    const now = new Date();
    const date = new Date(timestamp);
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );
    return `Updated ${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-h-full">
      {/* Header */}
      <header className="p-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h1 className="text-2xl font-bold">Repositories</h1>
            <p className="text-neutral-600 text-sm">
              {repoData.repositories.length} Total Repositories
            </p>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <Button
              variant="outline"
              className="flex font-medium items-center gap-1 rounded-md border border-neutral-300"
            >
              <SlRefresh className="text-2xl" />
              Refresh All
            </Button>
            <Button className="flex items-center gap-1 bg-blue-600 rounded-md text-white ">
              <FaPlus className="text-lg text-white" />
              Add Repository
            </Button>
          </div>
        </div>
        <div className="relative mt-4">
          <div className="border border-neutral-300 shadow-sm sm:w-1/4 h-10 rounded-lg p-2 flex items-center gap-2">
            <CiSearch className="text-2xl font-bold" />
            <Input
              type="search"
              placeholder="Search Repositories"
              className="w-full focus:outline-none placeholder:text-gray-600 text-sm border-0 p-0 focus-visible:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Repository List */}
      <div className="mt-4 w-full custom-scrollbar overflow-y-scroll max-h-full">
        {" "}
        {loading ? (
          <div className="flex items-center justify-center h-32">
            <ImSpinner8 className="text-3xl animate-spin text-blue-600" />
          </div>
        ) : filteredRepositories.length > 0 ? (
          filteredRepositories.map((repo) => (
            <div
              key={repo.name}
              className="border-t hover:bg-neutral-100 transition-all rounded p-5 "
            >
              <span className="flex items-center gap-2">
                <h1 className="font-semibold">{repo.name}</h1>
                <p className="bg-blue-50 border border-blue-500 text-blue-500 text-xs px-1 rounded-full">
                  {repo.status}
                </p>
              </span>
              <div className="flex f items-center gap-4 flex-wrap mt-2">
                <p className="flex items-center gap-1 text-neutral-700 text-sm">
                  {repo.language}
                  <GoDotFill className="text-blue-600" />
                </p>
                <p className="flex items-center gap-1 text-neutral-700 text-sm">
                  <FaDatabase className="text-xs" />
                  {repo.size} KB
                </p>
                <p className="flex items-center gap-1 text-neutral-700 text-sm">
                  {timeAgo(repo.lastModified)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-neutral-600">No repositories found</p>
        )}
      </div>
    </div>
  );
};

export default Repositories;
