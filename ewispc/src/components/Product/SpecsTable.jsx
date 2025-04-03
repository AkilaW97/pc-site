import React from "react";

const SpecsTable = ({ specs }) => {
  return (
    <table className="w-full border-collapse">
      <tbody>
        {Object.entries(specs).map(([key, value]) => (
          <tr key={key} className="border-b">
            <td className="py-2 font-medium text-gray-700">{key}</td>
            <td className="py-2 text-gray-900">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SpecsTable;