import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="flex-grow p-6 gap-6 bg-slate-50">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 lg:gap-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 container mx-auto flex-grow">
        {children}
      </ul>
    </main>
  );
};

export default Main;
