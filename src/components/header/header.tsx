import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  const [state, setState] = useState({
    isScrolled: false,
    isTop: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      setState((prevState) => ({
        ...prevState,
        isScrolled: window.scrollY > 50,
        isTop: window.scrollY < 10,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setState]);

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full text-center transition-all duration-300 ${
        state.isScrolled
          ? "bg-transparent backdrop-blur-lg"
          : " bg-gray-400 dark:bg-slate-900"
      } ${state.isTop ? "" : "bg-transparent backdrop-blur-lg"}`}
    >
      <section>
        <span
          className={`mx-auto sm:text-lg text-base flex h-16 max-w-6xl items-center justify-center sm:h-24 dark:text-slate-400 ${
            state.isScrolled ? "bg-opacity-75 backdrop-blur-lg" : ""
          }`}
        >
          <strong>{t("header-title")}</strong>
        </span>
      </section>
    </header>
  );
}
