'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import SearchBar from './components/SearchBar';
import SortOrder from './components/SortOrder';
import ProductList from './components/ProductList';
import LoadingSpinner from './components/LoadingSpinner';

interface Product {
  sku: string;
  name: string;
  description: string;
  image: string;
  category: { id: string; name: string };
  brand: string;
  price: number;
  stock: number;
}

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [sortOrder, setSortOrder] = useState('');
  const pageSize = 8;

  const debouncedUpdateQuery = useRef(
    debounce((value: string) => {
      setDebouncedQuery(value);
    }, 500)
  ).current;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedUpdateQuery(value);
  };

  useEffect(() => {
    return () => {
      debouncedUpdateQuery.cancel();
    };
  }, [debouncedUpdateQuery]);

  useEffect(() => {
    fetchProducts(debouncedQuery, page, sortOrder);
  }, [debouncedQuery, page, sortOrder]);

  const fetchProducts = async (search: string = '', newPage: number = 1, sort: string = '') => {
    if (newPage === 1) {
      setLoading(true);
    }

    setNotFound(false);

    try {
      const response = await axios.get<Product[]>('/api/products');
      //const response = await axios.get<Product[]>('http://localhost:5001/products');
      const normalizedSearch = search.toLowerCase();
      const filteredProducts = response.data.filter(
        (product) =>
          product.sku.toLowerCase().includes(normalizedSearch) ||
          product.name.toLowerCase().includes(normalizedSearch)
      );

      if (sort === 'name-asc') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sort === 'name-desc') {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      } else if (sort === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sort === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      if (filteredProducts.length === 0) {
        setNotFound(true);
        setHasMore(false);
      } else {
        const startIndex = (newPage - 1) * pageSize;
        const endIndex = newPage * pageSize;
        const newProducts = filteredProducts.slice(startIndex, endIndex);

        if (newPage === 1) {
          setProducts(newProducts);
        } else {
          setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        }

        setHasMore(newProducts.length === pageSize);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      if (!loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Catálogo de Productos</h1>

        <SearchBar query={query} handleInputChange={handleInputChange} />
        <SortOrder sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} />

        {loading && page === 1 ? (
          <LoadingSpinner />
        ) : (
          <ProductList products={products} notFound={notFound} />
        )}

        {loading && page > 1 && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default HomePage;