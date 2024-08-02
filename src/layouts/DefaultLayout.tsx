import React from "react";
import { Header, Footer } from "@/components";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="bg-background">
      <Header />
      <div className="pt-[6rem]">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
