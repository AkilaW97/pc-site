import ProductGrid from '../ProductGrid/ProductGrid';
import { getProductsByCategory } from '../../../utils/productData';

const WorkElectronics = () => {
  const products = getProductsByCategory('electronics-work');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Work Electronics</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default WorkElectronics;