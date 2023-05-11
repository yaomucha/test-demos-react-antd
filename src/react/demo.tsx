import { useState } from "react";
import React from 'react';

interface InCartItem {
    _id: string;
    imageURLs: Array<string>;
    fulhausProductName: string;
    retailPrice: number;
    amount: number;
}
interface ProductItem {
    _id: string;
    imageURLs: Array<string>;
    fulhausProductName: string;
    retailPrice: number;
    amount?: number;
    [propName: string]: any;
}

type IOF = Pick<ProductItem, '_id' | 'imageURLs' | 'fulhausProductName' | 'retailPrice'> & Pick<InCartItem, 'amount'>




export default function Demo() {
    const defaultCart: Array<InCartItem> = [];
    const [cartItems, setCartItems] = useState<Array<InCartItem>>(defaultCart);

    const exampleProductItem: ProductItem = {
        _id: "1",
        imageURLs: ["url1", "url2"],
        fulhausProductName: "name",
        retailPrice: 1,
        amount: 2
    }




    const onAddProduct = (newCartItem: ProductItem) => {
        let temp = cartItems

        temp.push(newCartItem as IOF)

        setCartItems(temp)
    }


    return (
        <>
            <div onClick={() => {
                onAddProduct(exampleProductItem)
            }}>
                add Item
            </div>

            <div>
                {cartItems.map(item => {
                    return <div>{item.fulhausProductName}</div>
                })}
            </div>
        </>

    )
}