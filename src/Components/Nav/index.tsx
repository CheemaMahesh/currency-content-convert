import React, { useContext } from "react";
import { languages } from "@/Utils/constats";
import { currencies } from "@/Utils/constats";
import Image from "next/image";
import reset from "../../Assets/reset_light_mode.png";
import darkReset from '../../Assets/reset_dark_mode.png'
import { HomeContext } from "@/Utils/context";
import { useTranslation } from "react-i18next";
import './Nav.css';
import Moon from '../../Assets/moon.png';
import Sun from '../../Assets/sun.png';

interface NavProps { };

const Nav = ({ }: NavProps) => {
    const { i18n } = useTranslation();
    const { selectedLanguage, selectedCurrency, setSelectedLanguage, setSelectedCurrency, setCurrencySymbol, mode, setMode } = useContext(HomeContext);
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

    const toggleMode = (type: string) => {
        localStorage.setItem('mode', type);
        setMode(type);
    };

    return (
        <div className={`sticky top-0 z-50 ${mode == 'Night' ? 'bg-black text-white shadow-blue-400' : 'bg-white shadow-[#000]'} flex w-full h-[85px] max-sm:gap-1 shadow-md items-center justify-between gap-4 py-2 px-4`}>
            <div className="flex w-fit h-[85px] gap-1  py-2 font-mono max-sm:items-center max-sm:mt-5 max-sm:py-1">
                <div className="flex flex-col w-fit h-full gap-1 font-mono max-sm:items-center max-sm:mt-5 max-sm:py-1">
                    <label className="font-semibold cursor-pointer text-md max-sm:hidden" htmlFor="languages">Select Language</label>
                    <select id="languages" onChange={(e) => changeLanguage(String(e.target.value))} value={selectedLanguage} className="font-semibold w-fit max-sm:w-full">
                        {languages?.map((language) => (
                            <option className="font-bold" key={language.code} value={language.code}>
                                {`${language.name}${language.lname !== 'English' ? " - " + language.lname : ''}`}
                            </option>
                        ))}
                    </select>
                </div>
                &emsp;
                <div className="flex flex-col w-fit h-full gap-1 font-mono max-sm:items-center max-sm:mt-6 max-sm:py-1">
                    <label className="font-semibold cursor-pointer text-md max-sm:hidden" htmlFor="currencies">Select Currency</label>
                    <select onChange={(e) => selectCurrency(String(e.target.value))} value={selectedCurrency} id="currencies" className="font-semibold w-fit max-sm:w-full">
                        {currencies?.map((currencie) => (
                            <option className="font-bold" key={currencie.id} value={currencie.symbol}>
                                {`${currencie.symbol} - ${currencie.name}`}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
            <div className="w-fit h-full flex gap-3 items-center">
                <div onClick={handleReset} className=" px-6 flex py-1 rounded-md w-fit h-fit items-center justify-between gap-2 cursor-pointer transition-all duration-300 ease-in-out bg-blue-400 text-semibold hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-lg hover:bg-blue-400 active:translate-y-1 active:translate-x-1 active:shadow-lg active:bg-blue-500">
                    <p className="font-semibold ">Reset</p>
                    <Image src={mode === 'Night' ? darkReset : reset} alt="reset" className="w-4 h-4" />
                </div>
                <div>
                    <Image onClick={() => toggleMode(mode === 'Night' ? 'Day' : 'Night')} className="w-[25px] h-[25px] cursor-pointer" src={mode === 'Night' ? Sun : Moon} alt="Mode" />
                </div>
            </div>
        </div>
    );
}

export default Nav;