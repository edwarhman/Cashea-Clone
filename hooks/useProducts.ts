import { API_URL } from "@/constants/API";
import { useState } from "react";

export default function useProducts() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);


  async function getProducts({search} : {search: string}) { 
    const response = await fetch(`${API_URL}/products/?title=${search}&offset=${(page - 1) * itemsPerPage}&limit=${itemsPerPage}`);
    const products = await response.json();

    setProducts(products);
  }

  return {
    products,
    currentPage: page,
    itemsPerPage,
    setPage,
    setItemsPerPage,
    getProducts
  }
}