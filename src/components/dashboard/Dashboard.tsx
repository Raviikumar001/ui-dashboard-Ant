import { useEffect, useState } from "react";
import SideNav from "./SideNav";
import Repositories from "./RepositoriesList";

const Dashboard = () => {
  const [hash, setHash] = useState<keyof typeof pages>("repositories");

  useEffect(() => {
    const getHashFromURL = () => {
      const currentHash = window.location.hash.replace("#", "");
      if (currentHash in pages) {
        setHash(currentHash as keyof typeof pages);
      } else {
        setHash("repositories");
      }
    };

    getHashFromURL();
    window.addEventListener("hashchange", getHashFromURL);
    return () => window.removeEventListener("hashchange", getHashFromURL);
  }, []);

  const pages = {
    repositories: <Repositories />,
    reviews: <div>AI Code Review</div>,
    security: <div>Cloud Security</div>,
    "how-to-use": <div>How to Use</div>,
    settings: <div>Settings</div>,
  };

  return (
    <div className="h-full w-full bg-gray-100">
      <div className="flex">
        <section className="md:w-64 flex-shrink-0">
          <SideNav />
        </section>
        <section className="flex-grow p-4 md:p-5 mt-14 md:mt-0">
          <div className="w-full h-screen bg-white border rounded-xl overflow-y-auto">
            {pages[hash] || pages.repositories}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
