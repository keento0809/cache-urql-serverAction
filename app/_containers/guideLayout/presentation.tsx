"use client";

import { PropsWithChildren, useState } from "react";
import { Navbar } from "../../_components/common/navbar/Navbar";
import { Footer } from "../../_components/common/footer/Footer";

type GuideLayoutPresentationProps = PropsWithChildren<{ isLoggedIn: boolean }>;

export const GuideLayoutPresentation = ({
  children,
  isLoggedIn,
}: GuideLayoutPresentationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onToggle={toggleMenu} />
      {isMenuOpen && (
        <div className="p-4 border border-purple-400 rounded-lg">
          Menu component is here...
        </div>
      )}
      {children}
      <Footer />
    </>
  );
};
