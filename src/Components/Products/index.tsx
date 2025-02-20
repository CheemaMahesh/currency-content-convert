import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { HomeContext } from "@/Utils/context";
import linkedin from '../../Assets/linkedin.png';
import git from '../../Assets/git.png';
import Phone from '../../Assets/phone.png';
import Email from '../../Assets/email.png';

const Products = () => {
    const { products, currentDetails, meta, } = useContext(HomeContext);
    const { t } = useTranslation();

    const getCurrencyWithValue = (value: number) => {
        return value * currentDetails?.currentRate;
    }

    return (
        <section className={`w-full h-fit ${currentDetails?.direction === 'rtl' ? 'bg-gradient-to-l' : 'bg-gradient-to-r' } ${currentDetails?.mode == 'Night' ? 'from-black to-[#898D86] text-white' : 'from-blue-400 to-white'}`}>
            <section className="heading_and_about_us">
                <div className="p-6">
                    <p className="font-mono font-bold text-3xl">{meta?.title}</p>
                    <p className="font-mono font-semibold text-sm">{meta?.aboutContent}</p>
                </div>
            </section>
            {/* -------------------- */}
            <div className={`flex w-full h-fit gap-12 p-6 flex-wrap justify-around items-center`}>
        {Array.isArray(products) && products?.map((product) => (
            <div 
                className={`${currentDetails?.mode === 'Night' ? 'bg-[#000] text-white' : 'bg-white'} flex items-center w-[600px] max-[1500px]:w-[45%] min-w-[280px] max-sm:w-full max-sm:h-[300px] h-[250px] gap-5 rounded-md shadow-lg shadow-blue-300 p-4 transition-transform duration-300 transform hover:scale-110`} 
                key={product.name}
            >
                <div>
                    <Image src={product?.image} alt={product.name} className="w-[200px] h-[200px] rounded-md shadow-md" />
                </div>
                <div className="flex flex-col w-fit h-full gap-1">
                <div className="font-bold rounded-md w-fit p-2 text-xl">{t(product.name)}</div>
                <div className="flex items-center gap-1 font-bold">
                    <p>{currentDetails?.currencySymbol}</p>
                    <p>{getCurrencyWithValue(product?.price?.amount)?.toFixed(2)}</p>
                </div>
                <p className="font-mono text-sm max-sm:hidden max-[800px]:max-h-[100px] overflow-hidden py-1">{t(product.description)?.slice(0, 150)}</p>
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
        {/* ------------------------------ */}
        <section className={`w-full p-6 py-16 h-fit ${currentDetails?.direction === 'rtl' ? 'bg-gradient-to-l' : 'bg-gradient-to-r' } ${currentDetails?.mode == 'Night' ? 'from-black text-white to-[#898D86]' : 'from-blue-400 to-white'}`}>
            <p className="font-mono font-bold text-3xl">{meta?.contact?.name}</p>
            <div className="px-8 py-1 flex flex-col gap-1 text-lg font-semibold">
                <div className="flex gap-1 items-center">
                    <Image className="w-[40px] h-[40px]" src={Email} alt="Ph" />
                    <p>maheshc2002k@gmail.com</p>
                </div>
                <div className="flex gap-1 items-center">
                    <Image className="w-[40px] h-[40px]" src={Phone} alt="Ph" />
                    <p>7095948442</p>
                </div>
                <div className="flex items-center gap-2">
                    <a href="https://www.linkedin.com/in/mahesh-cheema-a7b771271/" target="_blank"><Image className="w-[40px] h-[40px]" src={linkedin} alt="Ln" /></a>
                    <a href="https://github.com/CheemaMahesh" target="_blank"><Image className="w-[40px] h-[40px]" src={git} alt="Gt" /></a>
                </div>
                <p>All rights reserved @{new Date().getFullYear()}</p>
            </div>
        </section>
        </section>
    );
};

export default Products;