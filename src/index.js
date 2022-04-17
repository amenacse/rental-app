import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client"

import 'bootstrap/dist/css/bootstrap.css';
import Counter from "./components/counter";
import ProductTable from "./components/productTable";
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
    {id: 1, name: 'Chicken', price: 200},
    {id: 2, name: 'Fish', price: 300},
    {id: 3, name: 'Vegetable', price: 400},
    {id: 4, name: 'Apple', price: 100}
];

const element = <div>
    <ProductTable products={products} />
</div>;

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(element);
