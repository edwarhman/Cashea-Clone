import { API_URL } from "@/constants/API";
import { useEffect, useState } from "react";


type QueryOptions = {
  page?: number,
  itemsPerPage?: number,
}

export default function useProducts({
  page = 1,
  itemsPerPage = 10
}: QueryOptions) {

  const [products, setProducts] = useState([]);
  const [currentPage, setPage] = useState(page);
  const [itemsPerEachPage, setItemsPerPage] = useState(itemsPerPage);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts({search: ''});
  }, []);

  function getProducts({search} : {search: string}) { 
    setLoading(true);
   fetch(`${API_URL}/products/?title=${search}&offset=${(page - 1) * itemsPerPage}&limit=${itemsPerPage}`)
    .then(response => response.json())
    .then(data => {
        const parsedProducts = data.map((product: any) => ({
          ...product,
          // necesary becuase image URL generated by API AI aren't valid URLs. It usually contains square brackets and double quotes
          images: product.images.map((image: string) => image.replace(/[\[\]"\\]/g, '')),
        }))
        setProducts(parsedProducts);
      setLoading(false);
    });
  }

  return {
    products,
    currentPage,
    isLoading: loading,
    itemsPerPage: itemsPerEachPage,
    setPage,
    setItemsPerPage,
    getProducts
  }
}