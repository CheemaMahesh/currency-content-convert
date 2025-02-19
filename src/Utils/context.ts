import { createContext } from "react";
import { Product } from "@/Utils/interfaces";

interface ContextProps {
    selectedLanguage: string;
    selectedCurrency: number;
    setSelectedLanguage: (language: string) => void;
    setSelectedCurrency: (currency: number) => void;
    products: Product[];
}

// Provide a default value for the context
export const HomeContext = createContext<ContextProps>({
    selectedLanguage: "en", // Default value
    selectedCurrency: 100, // Default value
    setSelectedLanguage: () => {}, // Default function
    setSelectedCurrency: () => {}, // Default function
    products: [],
});