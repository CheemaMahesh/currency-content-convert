import { createContext } from "react";
import { Product } from "@/Utils/interfaces";

interface ContextProps {
    selectedLanguage: string;
    selectedCurrency: string;
    setSelectedLanguage: (language: string) => void;
    setSelectedCurrency: (currency: string) => void;
    products: Product[];
    currencySymbol: string;
    setCurrencySymbol: (symbol: string) => void;
    setCurrentRate: (rate: any) => void;
    currentRate: any;
    direction?: string;
    meta?: any;
}

// Provide a default value for the context
export const HomeContext = createContext<ContextProps>({
    selectedLanguage: "en", // Default value
    selectedCurrency: "INR", // Default value
    setSelectedLanguage: () => {}, // Default function
    setSelectedCurrency: () => {}, // Default function
    products: [],
    currencySymbol: "₹",
    setCurrencySymbol: () => {},
    setCurrentRate: () => {},
    currentRate: 1.00,
    direction: "ltr",
    meta: {},
});