import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { HomeContext } from "@/Utils/context";
// import { languages } from "@/Utils/constats";

const Products = () => {
    const { products, currencySymbol, currentRate, direction, meta } = useContext(HomeContext);
    const { t } = useTranslation();

    const getCurrencyWithValue = (value: number) => {
        return value * currentRate;
    }

    return (
<div className={`flex w-full h-fit gap-12 p-6 flex-wrap justify-around items-center ${direction === 'rtl' ? 'bg-gradient-to-l' : 'bg-gradient-to-r' } from-blue-400 to-white`}>
        {Array.isArray(products) && products?.map((product) => (
            <div 
                className="flex items-center w-[650px] h-[250px] gap-5 rounded-md bg-white shadow-lg shadow-blue-300 p-4 transition-transform duration-300 transform hover:scale-110" 
                key={product.name}
            >
                <div>
                    <Image src={product?.image} alt={product.name} className="w-[200px] h-[200px] rounded-md shadow-md" />
                </div>
                <div className="flex flex-col w-fit h-full gap-1">
                <div className="font-bold rounded-md w-fit p-2 text-xl">{t(product.name)}</div>
                <div className="flex items-center gap-1 font-bold">
                    <p>{currencySymbol}</p>
                    <p>{getCurrencyWithValue(product?.price?.amount)?.toFixed(2)}</p>
                </div>
                <p className="font-mono text-sm">{t(product.description)?.slice(0, 150)}</p>
                <div className="flex items-center gap-1 font-mono font-semibold">
                    <p >{meta.available}:</p>
                    <p className={`${product?.inventory?.available > 20 ? 'text-green-500' : 'text-red-500'}`}>{product?.inventory?.available}</p>
                </div>
                <div className="flex items-center gap-1 font-mono font-semibold">
                    <p >{meta?.sold}:</p>
                    <p >{product?.inventory?.sold}</p>
                </div>
                </div>
            </div>
        ))}
        </div>
    );
};

export default Products;