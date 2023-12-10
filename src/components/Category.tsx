import Link from 'next/link';
import { categoriesData } from '../data/data';

const Category = () => {
  return (
    <div>
      <h2>Shop by Category</h2>
      <div>
        {categoriesData.map((category) => (
          <Link key={category.id} href={`/categories/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;