'use client';

interface ProductSpecificationsProps {
  specifications: { name: string; value: string }[];
  category: string;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ specifications, category }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Especificaciones</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left text-gray-700">Característica</th>
            <th className="px-4 py-2 border-b text-left text-gray-700">Valor</th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((spec, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b text-gray-600">{spec.name}</td>
              <td className="px-4 py-2 border-b text-gray-600">{spec.value}</td>
            </tr>
          ))}
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border-b text-gray-600">Categoría</td>
            <td className="px-4 py-2 border-b text-gray-600">{category}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecifications;