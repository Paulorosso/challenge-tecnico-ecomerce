'use client';

import { useState, useEffect } from 'react';
import { useNotification } from '../../context/NotificationContext';
import axios from 'axios';
import Link from 'next/link';
import ProductImage from '../../components/ProductImage';
import ProductDetails from '../../components/ProductDetails';
import ProductDescription from '../../components/ProductDescription';
import ProductSpecifications from '../../components/ProductSpecifications';
import QuantityControl from '../../components/QuantityControl';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import StockMessage from '../../components/StockMessage';

interface Product {
  sku: string;
  name: string;
  description: string;
  image: string;
  category: { id: string; name: string };
  brand: string;
  price: number;
  stock: number;
  specifications: { name: string; value: string }[];
}

const ProductPage = ({ params }: { params: Promise<{ sku: string }> }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sku, setSku] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const { showNotification } = useNotification();

  const handleAddToCart = () => {
    showNotification({
      message: `Se agreg${quantity > 1 ? 'aron' : 'o'} ${quantity} unidad${quantity > 1 ? 'es' : ''} de ${product?.name} al carrito`,
      type: 'success',
    });
  };

  const incrementQuantity = () => setQuantity((prev) => Math.min(prev + 1, product?.stock ?? 10));
  const decrementQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setSku(resolvedParams.sku);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!sku) return;
        setLoading(true);
        const response = await axios.get<Product[]>(`/api/products?sku=${sku}`);
        //const response = await axios.get<Product[]>(`http://localhost:5001/products?sku=${sku}`);
        if (response.data.length === 0) {
          setError('Producto no encontrado');
        } else {
          setProduct(response.data[0]);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 404) {
            setError('No encontrado');
          } else if (err.response?.status === 500) {
            setError('No se pudo cargar');
          } else {
            setError('Error desconocido');
          }
        } else {
          setError('Error desconocido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [sku]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!product) {
    return <ErrorMessage error="Producto no encontrado" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-red-500">
            Inicio
          </Link>{' '}
          {' > '}
          <span className="text-gray-800">{product.name}</span>
        </nav>
        <div className="flex flex-col md:flex-row items-start md:space-x-6">
          <ProductImage image={product.image} name={product.name} />
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <ProductDetails
              brand={product.brand}
              sku={product.sku}
              name={product.name}
              price={product.price}
            />
            <QuantityControl
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              handleAddToCart={handleAddToCart}
              stock={product.stock}
            />
            <StockMessage stock={product.stock} />
            <ProductDescription description={product.description} />
          </div>
        </div>
        <ProductSpecifications
          specifications={product.specifications}
          category={product.category.name}
        />
      </div>
    </div>
  );
};

export default ProductPage;