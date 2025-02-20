"use client";
import React from "react";
import Nav from "@/Components/Nav";
import { useEffect, useState } from "react";
import { HomeContext } from "@/Utils/context";
import '../i18utils/index.ts';
import { useTranslation } from "react-i18next";
import Products from "@/Components/Products";
import { Product, CurrentDetails } from "@/Utils/interfaces";
import useGetCurrentCurrency from "@/Components/Hooks/useGetCurrentCurrecny";
import Loader from "@/Components/Loader";


export default function Home() {
  const [currentDetails, setCurrentDetails] = useState<CurrentDetails>({
    selectedLanguage: "en",
    selectedCurrency: "INR",
    currencySymbol: "₹",
    mode: "",
    currentRate: 1.0000,
    direction: "ltr",
  })

  const [products, setProducts] = useState<Product[]>([]);
  const { getCurrentCurrency } = useGetCurrentCurrency();
  const [meta, setMeta] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderCount, setRenderCount] = useState<number>(0);

  const { i18n, t } = useTranslation();

  const getCurrentRate = async (currency: string) => {
    setIsLoading(true);
    const rate = await getCurrentCurrency(currency);
    setCurrentDetails(({
      ...currentDetails,
      currentRate: rate,
    }))
    setIsLoading(false);
  }

  useEffect(() => {
    document.body.dir = i18n.dir();
    setCurrentDetails((prev) => ({
      ...prev,
      direction: i18n.dir(),
    }))
    const tempProducts = t("products") as unknown as Product[];
    setProducts(tempProducts);
    setMeta(t('meta'));
  }, [i18n.dir(), currentDetails?.selectedLanguage]);

  useEffect(() => {
    currentDetails?.selectedCurrency === 'INR' ? setCurrentDetails({ ...currentDetails, currentRate: 1.0000 }) : currentDetails?.selectedCurrency === 'RUB' ? setCurrentDetails({ ...currentDetails, currentRate: 1.03 }) : getCurrentRate(currentDetails?.selectedCurrency);
  }, [currentDetails?.selectedCurrency]);

  useEffect(() => {
    setCurrentDetails((prev) => ({
      ...prev,
      selectedLanguage: localStorage.getItem("language") || "en",
      selectedCurrency: localStorage.getItem("currency") || "INR",
      mode: localStorage.getItem("mode") || "",
    }));
    setRenderCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <HomeContext.Provider value={{
        products,
        meta,
        setCurrentDetails,
        currentDetails,
      }}>
        <Nav />
        {isLoading || renderCount === 0 ? <Loader /> :
          <Products />}
      </HomeContext.Provider>
    </>
  );
}
