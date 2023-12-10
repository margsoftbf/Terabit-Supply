import { productsData } from '../../data/data';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const products = productsData.filter(
    (product) => product.categoryId === category
  );

  return (
    <div>
      <h1>Produkty z kategorii: {category}</h1>
      <button onClick={() => router.back()}>Cofnij</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;