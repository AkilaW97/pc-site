import products from '../components/data/products.json';
import categories from '../components/data/categories.json';

export const getProductsByCategory = (categoryId) => {
  console.log('Filtering for:', categoryId); // Debug
  return products.filter(product => 
    product.categories?.includes(categoryId)
  );
};

export const getCategoriesBySection = (section) => {
  return categories[section] || [];
};