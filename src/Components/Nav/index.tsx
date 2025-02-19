import React, { useContext } from "react";
import { languages } from "@/Utils/constats";
import { currencies } from "@/Utils/constats";
import Image from "next/image";
import reset from "../../Assets/reset_light_mode.png";
import { HomeContext } from "@/Utils/context";
import { useTranslation } from "react-i18next";

interface NavProps {};

const Nav = ({}: NavProps) => {
    const { t, i18n } = useTranslation();
    const {selectedLanguage, selectedCurrency, setSelectedLanguage, setSelectedCurrency} = useContext(HomeContext);
    const handleReset = () => {
        setSelectedLanguage("en");
        i18n.changeLanguage("en");
        setSelectedCurrency(100);
    }


    const changeLanguage = (language: string) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
    }

    return (
      <div className="flex w-full h-[70px] shadow-md">
            <div className="flex w-fit h-full items-center justify-between gap-2">
                    <label>Select Language</label>
                    <select onChange={(e) => changeLanguage(String(e.target.value))} value={selectedLanguage} className="font-semibold w-fit">
                        {languages?.map((language) => (
                            <option className="font-semibold" key={language.code} value={language.code}>
                                {`${language.name}${language.lname !== 'English' ? " - " +language.lname : ''}`}
                            </option>
                        ))}
                    </select>
            </div>
                       &emsp;
            <div className="flex w-fit h-full items-center justify-between gap-2">
                    <label htmlFor="currencies">Select Currency</label>
                    <select onChange={(e) => setSelectedCurrency(Number(e.target.value))} value={selectedCurrency} id="currencies" className="font-semibold w-fit">
                        {currencies?.map((currencie) => (
                            <option className="font-semibold" key={currencie.id} value={currencie.id}>
                                {`${currencie.symbol} - ${currencie.name}`}
                            </option>
                        ))}
                    </select>
            </div>

            <div onClick={handleReset} className="px-6 flex w-fit h-full items-center justify-between gap-2 cursor-pointer">
                <p className="font-semibold">Reset</p>
                <Image src={reset} alt="reset" className="w-4 h-4" />
            </div>

            <p>{t("greetings")}</p>
      </div>  
    );
}

export default Nav;