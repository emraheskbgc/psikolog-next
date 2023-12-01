import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleHamburger = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    // Scroll olayını dinle
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Eğer scroll değeri belirli bir noktadan daha fazlaysa, arka planı değiştir
      setIsScrolled(scrollTop > 70); // 100 değeri değiştirilebilir, istediğiniz scroll mesafesine göre
    };

    // Scroll olayını dinleme işlemi
    window.addEventListener("scroll", handleScroll);

    // Component kaldırıldığında event listener'ı temizle
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // useEffect sadece ilk render'da çalışsın

  return (
    <>
      <header
        className={`${
          isScrolled
            ? "bg-white mt-10 ml-5 mr-5 rounded-full  shadow-2xl duration-500 "
            : "  w-full bg-purple duration-200  "
        }hidden md:flex flex-cols justify-between text-l h-[120px]  pr-5 pl-5 text-darkPurple ${
          styles.header
        } fixed top-0 left-0 right-0 z-50`}
      >
        <div className="text-3xl">terappin</div>
        <nav className={styles.nav}>
          <Link href="/" className="mr-7">
            NASIL ÇALIŞIR
          </Link>
          <Link href="/" className="mr-7">
            HAKKIMIZDA
          </Link>
          <Link href="/" className="mr-7">
            PSİKOLOGLARIMIZ
          </Link>
          <Link href="/" className="mr-7">
            S.S.S.
          </Link>
          <Link href="/" className="mr-7">
            TESTLER{" "}
            <span
              className={`text-[10px] bg-gray-300 rounded-xl px-1  border `}
            >
              Yeni
            </span>
          </Link>
        </nav>
        <div className="border flex  border-darkPurple p-3 rounded-2xl">
          <TfiWorld className="mt-1 mr-1" /> TR{" "}
          <IoIosArrowDown className="mt-1 ml-1" />
        </div>
        <div className="mr-5">
          <button
            className={`mr-7 ${isScrolled ? "bg-purple rounded-2xl p-2 " : ""}`}
          >
            Giriş Yap
          </button>
          <button className=" border h-[55px] px-5 rounded-2xl bg-btnBg text-lg text-white">
            Hemen Kaydol
          </button>
        </div>
      </header>
      {/* mobile nav  */}
      <div className="relative">
        {showNav && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0  z-40"
            onClick={handleHamburger}
          >
            <div className="bg-gradient-to-b from-btnBg via-socialBg to-transparent h-full"></div>
          </div>
        )}
        <div
          className={`${
            isScrolled || showNav
              ? "bg-white mt-6   ml-5 mr-5 rounded-3xl mx-2 shadow-2xl duration-500 "
              : "  w-full bg-purple duration-200  "
          } md:hidden flex flex-col justify-between text-l h-auto  pr-5 pl-5 text-darkPurple ${
            styles.header
          } fixed top-0 left-0 right-0 z-50`}
        >
          <div className="flex flex-row  space-x-44 sm:space-x-96 sm:mr-24 items-center mt-5 mb-5">
            <div className="text-3xl ">terappin</div>
            <div className=" cursor-pointer text-2xl" onClick={handleHamburger}>
              {!showNav ? <GiHamburgerMenu /> : <IoClose />}
            </div>
          </div>
          {showNav ? (
            <div className="flex flex-col  mb-10 w-full duration-200 items-center text-center ">
              <div className="flex flex-col">
                <Link href="/" className="mb-8">
                  NASIL ÇALIŞIR?
                </Link>
                <Link href="/" className="mb-8">
                  HAKKIMZDA
                </Link>
                <Link href="/" className="mb-8">
                  PSİKOLOGLARIMIZ
                </Link>
                <Link href="/" className="mb-8">
                  S.S.S.
                </Link>
                <Link href="/" className="mb-8">
                  TESTLER
                  <span
                    className={`text-[10px] bg-gray-300 rounded-xl px-1  border `}
                  >
                    Yeni
                  </span>
                </Link>
              </div>

              <div className="border flex  border-darkPurple  p-2 rounded-2xl w-20 items-center mb-16">
                <TfiWorld className="mt-1 mr-1" /> TR
                <IoIosArrowDown className="mt-1 ml-1" />
              </div>

              <div className=" flex flex-col justify-center items-center w-full">
                <button className=" mb-5 w-full bg-purple rounded-2xl p-2">
                  Giriş Yap
                </button>
                <button className=" border w-full h-[55px] px-5 rounded-2xl bg-btnBg text-lg text-white">
                  Hemen Kaydol
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
