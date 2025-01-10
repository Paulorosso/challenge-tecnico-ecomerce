import React from 'react';

interface SortOrderProps {
  sortOrder: string;
  handleSortOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortOrder: React.FC<SortOrderProps> = ({ sortOrder, handleSortOrderChange }) => {
  return (
    <div className="mb-8 flex justify-end items-center space-x-2">
      <span className="text-gray-700">Ordenar por:</span>
      <select
        value={sortOrder}
        onChange={handleSortOrderChange}
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500"
      >
        <option value="" disabled>Seleccionar</option>
        <option value="name-asc">Nombre A-Z</option>
        <option value="name-desc">Nombre Z-A</option>
        <option value="price-asc">Precio más bajo</option>
        <option value="price-desc">Precio más alto</option>
      </select>
    </div>
  );
};

export default SortOrder;