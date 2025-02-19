import React, { useContext } from "react";
// import { useTranslation } from "react-i18next";
// import { Product } from "@/Utils/interfaces";
import Image from "next/image";
import { HomeContext } from "@/Utils/context";


const Products = () => {
    const {products} = useContext(HomeContext);
    return (
       <div className="flex w-full h-full flex-wrap">
        {Array.isArray(products) && products?.map((product) => (
            <div className="flex flex-col w-fit h-full gap-1 rounded-md shadow-md shadow-[#c2c03c] p-4" key={product.name}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <Image src={product?.image} alt={product.name} className="w-[100px] h-[100px]" />
            </div>
        ))}
        </div>
    )
};

export default Products;