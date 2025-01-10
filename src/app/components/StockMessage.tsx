'use client';

interface StockMessageProps {
  stock: number;
}

const StockMessage: React.FC<StockMessageProps> = ({ stock }) => {
  return (
    <div>
      {stock > 0 ? (
        <p className="text-xs text-gray-700 mt-2">
          ¡Sólo queda{stock > 1 ? 'n' : ''} <span className="text-red-500">{stock} unidad{stock > 1 ? 'es' : ''}</span> disponibl{stock === 1 ? 'e' : 'es'}!
        </p>
      ) : (
        <p className="text-sm text-red-500 mt-2">¡Producto agotado!</p>
      )}
    </div>
  );
};

export default StockMessage;