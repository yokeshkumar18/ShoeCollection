import { getProducts } from '@/lib/api';
import ProductListing from '@/components/plp/ProductListing';

export const metadata = {
  title: 'Discover Our Products | Appscrip Task',
  description: 'Explore our latest collection of premium fashion items. Filter by category, price, and more.',
};

export default async function Home() {
  const products = await getProducts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': products.map((product, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'name': product.title,
        'image': product.image,
        'description': product.description,
        'offers': {
          '@type': 'Offer',
          'price': product.price,
          'priceCurrency': 'USD'
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductListing products={products} />
    </>
  );
}
