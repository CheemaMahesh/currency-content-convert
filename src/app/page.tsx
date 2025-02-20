"use client";
import React from "react";
import Nav from "@/Components/Nav";
import { useEffect, useState } from "react";
import { HomeContext } from "@/Utils/context";
import '../i18utils/index.ts';
import { useTranslation } from "react-i18next";
import Products from "@/Components/Products";
import { Product } from "@/Utils/interfaces";
import useGetCurrentCurrency  from "@/Components/Hooks/useGetCurrentCurrecny";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("INR");
  const [currencySymbol, setCurrencySymbol] = useState<string>("₹")
  const [products, setProducts] = useState<Product[]>([]);
  const [currentRate, setCurrentRate] = useState<any>(1.0000);
  const { getCurrentCurrency } = useGetCurrentCurrency();
  const [direction, setDirection] = useState<string>("ltr");
  const [meta, setMeta] = useState<any>({})

  const { i18n, t } = useTranslation();

  console.log('currentRate --11', currentRate);

  const getCurrentRate = async (currency: string) => {
    const rate = await getCurrentCurrency(currency);
    console.log("rate", rate);
    setCurrentRate(rate);
  }

useEffect(() => {
  document.body.dir = i18n.dir();
  setDirection(i18n.dir());
  const tempProducts = t("products") as unknown as Product[];
  setProducts(tempProducts);
  setMeta(t('meta'));
}, [i18n.dir(), selectedLanguage]);

useEffect(() => {
  selectedCurrency === 'INR' ? setCurrentRate(1) : selectedCurrency === 'RUB' ? setCurrentRate(1.03) : getCurrentRate(selectedCurrency);
}, [selectedCurrency]);

  return (
    <>
    <HomeContext.Provider value={{
      selectedLanguage,
      selectedCurrency,
      setSelectedLanguage,
      setSelectedCurrency,
      products,
      setCurrencySymbol,
      currencySymbol,
      setCurrentRate,
      currentRate,
      direction,
      meta,
    }}>
    <Nav />
    <Products />
    </HomeContext.Provider>
    </>
  );
}
