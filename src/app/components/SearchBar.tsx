import React from 'react';

interface SearchBarProps {
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, handleInputChange }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar por Nombre o SKU"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500"
      />
    </div>
  );
};

export default SearchBar;