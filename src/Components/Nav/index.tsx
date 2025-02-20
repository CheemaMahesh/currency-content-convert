import React, { useContext } from "react";
import { languages } from "@/Utils/constats";
import { currencies } from "@/Utils/constats";
import Image from "next/image";
import reset from "../../Assets/reset_light_mode.png";
import { HomeContext } from "@/Utils/context";
import { useTranslation } from "react-i18next";
import './Nav.css';

interface NavProps {};

const Nav = ({}: NavProps) => {
    const { i18n } = useTranslation();
    const {selectedLanguage, selectedCurrency, setSelectedLanguage, setSelectedCurrency, setCurrencySymbol} = useContext(HomeContext);
    const handleReset = () => {
        setSelectedLanguage("en");
        i18n.changeLanguage("en");
        setSelectedCurrency("INR");
        setCurrencySymbol("₹");
    }

    const changeLanguage = (language: string) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
    };

    const selectCurrency = (currency: string) => {
        setSelectedCurrency(currency);
        setCurrencySymbol(currencies.find((c) => c.symbol === currency)?.currencySymbol || '₹');
    }

    return (
        <div className="sticky top-0 z-50 bg-white flex w-full h-[85px] shadow-md shadow-[#c2c03c] items-center gap-4 py-2 px-4">
            <div className="flex flex-col w-fit h-full gap-1 font-mono">
                    <label className="font-semibold cursor-pointer text-md" htmlFor="languages">Select Language</label>
                    <select id="languages" onChange={(e) => changeLanguage(String(e.target.value))} value={selectedLanguage} className="font-semibold w-fit">
                        {languages?.map((language) => (
                            <option className="font-semibold" key={language.code} value={language.code}>
                                {`${language.name}${language.lname !== 'English' ? " - " +language.lname : ''}`}
                            </option>
                        ))}
                    </select>
            </div>
                       &emsp;
            <div className="flex flex-col w-fit h-full gap-1 font-mono">
                    <label className="font-semibold cursor-pointer text-md" htmlFor="currencies">Select Currency</label>
                    <select onChange={(e) => selectCurrency(String(e.target.value))} value={selectedCurrency} id="currencies" className="font-semibold w-fit">
                        {currencies?.map((currencie) => (
                            <option className="font-semibold" key={currencie.id} value={currencie.symbol}>
                                {`${currencie.symbol} - ${currencie.name}`}
                            </option>
                        ))}
                    </select>
            </div>

            <div onClick={handleReset} className="mt-4 px-6 flex py-1 rounded-md w-fit h-fit items-center justify-between gap-2 cursor-pointer transition-all duration-300 ease-in-out bg-blue-400 text-semibold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-lg hover:bg-blue-400 active:translate-y-1 active:translate-x-1 active:shadow-lg active:bg-blue-500">
                <p className="font-semibold">Reset</p>
                <Image src={reset} alt="reset" className="w-4 h-4" />
            </div>
      </div>  
    );
}

export default Nav;