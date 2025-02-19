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

