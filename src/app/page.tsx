"use client";
import React from "react";
import Nav from "@/Components/Nav";
import { useEffect, useState } from "react";
import { HomeContext } from "@/Utils/context";
import '../i18utils/index.ts';
import { useTranslation } from "react-i18next";
import Products from "@/Components/Products";
import { Product } from "@/Utils/interfaces";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [selectedCurrency, setSelectedCurrency] = useState<number>(100);
  const [products, setProducts] = useState<Product[]>([]);

  const { i18n, t } = useTranslation();
  // const changeDirection = () => {
  //   document.body.dir = i18n.dir();
  // }

useEffect(() => {
  // const all = t();
  document.body.dir = i18n.dir();
  // changeDirection();
  const tempProducts = t("products") as unknown as Product[];
  setProducts(tempProducts);
}, [i18n.dir(), selectedLanguage]);

  return (
    <>
    <HomeContext.Provider value={{
      selectedLanguage,
      selectedCurrency,
      setSelectedLanguage,
      setSelectedCurrency,
      products,
    }}>
    <Nav />
    <Products />
    </HomeContext.Provider>
    </>
  );
}
