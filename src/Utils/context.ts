import { createContext } from "react";
import { ContextProps } from "@/Utils/interfaces";


// Default values for Context API
export const HomeContext = createContext<ContextProps>({
    products: [],
    meta: {},
    setCurrentDetails: () => {},
    currentDetails: {
        selectedLanguage: "en",
        selectedCurrency: "INR",
        currencySymbol: "₹",
        mode: "",
        currentRate: 1.00,
        direction: "ltr",
    },
});