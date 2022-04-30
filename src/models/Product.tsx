import React from "react"
import Category from "./Category";
import Username from "./User";

interface Product {

            id: number;
            title: string;
            description: string;
            photo: string;
            price: number;
            category?: Category | null;
            username: Username | null;
}

export default Product;