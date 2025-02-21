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
    const { setCurrentDetails, currentDetails } = useContext(HomeContext);

    // Function to reset language and currency
    const handleReset = () => {
        i18n.changeLanguage("en");
        setCurrentDetails({
            ...currentDetails,
            selectedLanguage: "en",
            selectedCurrency: "INR",
            currencySymbol: "₹",
            currentRate: 1.00,
            direction: "ltr",
        });
        localStorage.removeItem("language");
        localStorage.removeItem("currency");
    };
    
    // Function to change language
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
        setCurrentDetails({
            ...currentDetails,
            selectedLanguage: language
        });
    };

    // Function to select currency
    const selectCurrency = (currency: string) => {
        localStorage.setItem("currency", currency);
        setCurrentDetails({
            ...currentDetails,
            selectedCurrency: currency,
            currencySymbol: currencies.find((c) => c.symbol === currency)?.currencySymbol || '₹',
        });
    }

    // Function to toggle mode
    const toggleMode = (type: string) => {
        localStorage.setItem('mode', type);
        setCurrentDetails(({
            ...currentDetails,
            mode: type,
        }))
    };

    return (
        <div className={`sticky top-0 z-50 ${currentDetails?.mode == 'Night' ? 'bg-black text-white shadow-blue-400' : 'bg-white shadow-[#000]'} flex w-full h-[85px] max-sm:gap-1 shadow-md items-center justify-between gap-4 py-2 px-4`}>
            <div className="flex w-fit h-[85px] gap-1  py-2 font-mono max-sm:items-center max-sm:mt-5 max-sm:py-1">
                <div className="flex flex-col w-fit h-full gap-1 font-mono max-sm:items-center max-sm:mt-5 max-sm:py-1">
                    <label className="font-semibold cursor-pointer text-md max-sm:hidden" htmlFor="languages">Select Language</label>
                    <select id="languages" onChange={(e) => changeLanguage(String(e.target.value))} value={currentDetails?.selectedLanguage} className="font-semibold w-fit max-sm:w-full">
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
                    <select onChange={(e) => selectCurrency(String(e.target.value))} value={currentDetails?.selectedCurrency} id="currencies" className="font-semibold w-fit max-sm:w-full">
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
                    <Image src={currentDetails?.mode === 'Night' ? darkReset : reset} alt="reset" className="w-4 h-4" />
                </div>
                <div className="w-fit h-fit rounded-full hover:shadow-md hover:shadow-blue-600 hover:p-2 p-1 max-sm:w-[35px] max-sm:h-[35px] max-sm:shadow-none">
                    <Image onClick={() => toggleMode(currentDetails?.mode === 'Night' ? 'Day' : 'Night')} className="w-[25px] h-[25px] cursor-pointer" src={currentDetails?.mode === 'Night' ? Sun : Moon} alt="Mode" />
                </div>
            </div>
        </div>
    );
}

export default Nav;