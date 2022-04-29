import React from "react"

interface Product {

            id: number;
            title: string;
            description: string;
            photo: string;
            price: number;
            category?: null;
            username?: null;
}

export default Product;