export interface Product {
    name: string;
    description: string;
    isSpecial?: boolean;
    price: {
      amount: number;
      currency: string;
    };
    image: string;
    inventory: {
      available: number;
      sold: number;
    };
  };


  export interface CurrentDetails {
    selectedLanguage: string;
    selectedCurrency: string;
    currencySymbol: string;
    mode: string;
    currentRate: any;
    direction: string;
  }

  export interface ContextProps {
    products: Product[];
    meta?: any;
    setCurrentDetails: (prev: CurrentDetails) => void;
    currentDetails: CurrentDetails;
} 

