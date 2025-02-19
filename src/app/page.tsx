"use client";
import Nav from "@/Components/Nav";
import { useEffect, useState } from "react";
import { HomeContext } from "@/Utils/context";
import '../i18utils/index.ts';
import { useTranslation } from "react-i18next";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [selectedCurrency, setSelectedCurrency] = useState<number>(100);
  const { i18n } = useTranslation();

useEffect(() => {
document.body.dir = i18n.dir();
}, [i18n.dir()]);

  return (
    <>
    <HomeContext.Provider value={{
      selectedLanguage,
      selectedCurrency,
      setSelectedLanguage,
      setSelectedCurrency
    }}>
    <Nav />
    </HomeContext.Provider>
    </>
  );
}
