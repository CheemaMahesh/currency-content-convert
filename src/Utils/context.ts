import { createContext } from "react";

interface ContextProps {
    selectedLanguage: string;
    selectedCurrency: number;
    setSelectedLanguage: (language: string) => void;
    setSelectedCurrency: (currency: number) => void;
}

// Provide a default value for the context
export const HomeContext = createContext<ContextProps>({
    selectedLanguage: "en", // Default value
    selectedCurrency: 100, // Default value
    setSelectedLanguage: () => {}, // Default function
    setSelectedCurrency: () => {} // Default function
});