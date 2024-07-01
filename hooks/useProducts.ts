import { API_URL } from "@/constants/API";
import { useState } from "react";

export default function useProducts() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true)

  function getProducts({search} : {search: string}) { 
    setLoading(true);
   fetch(`${API_URL}/products/?title=${search}&offset=${(page - 1) * itemsPerPage}&limit=${itemsPerPage}`)
    .then(response => response.json())
    .then(data => {
      setProducts(data);
      setLoading(false);
    });
  }

  return {
    products,
    currentPage: page,
    isLoading: loading,
    itemsPerPage,
    setPage,
    setItemsPerPage,
    getProducts
  }
}