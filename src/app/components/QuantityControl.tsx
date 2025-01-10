'use client';

interface QuantityControlProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  handleAddToCart: () => void;
  stock: number;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
  handleAddToCart,
  stock,
}) => {
  return (
    <div>
      <div className="flex items-center space-x-4 mt-8">
        <div className="flex items-center border rounded-lg">
          <button
            onClick={decrementQuantity}
            className={`px-3 py-2 bg-white text-gray-700 hover:text-gray-900 ${stock === 0 && 'cursor-not-allowed opacity-50'}`}
            disabled={stock === 0}
          >
            -
          </button>
          <span className="px-4 py-2 bg-white border-x text-gray-800">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className={`px-3 py-2 bg-white text-gray-700 hover:text-gray-900 ${stock === 0 && 'cursor-not-allowed opacity-50'}`}
            disabled={stock === 0}
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className={`px-6 py-2 rounded-lg ${stock > 0 ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-400 text-white cursor-not-allowed'}`}
          disabled={stock === 0}
        >
          {stock > 0 ? 'Agregar al carrito' : 'No disponible'}
        </button>
      </div>
    </div>
  );
};

export default QuantityControl;