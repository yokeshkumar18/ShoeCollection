import Image from "next/image";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Mock out of stock for demo purposes (random logic or specific id)
  const isOutOfStock = product.id === 2 || product.id === 5; 

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {isOutOfStock && (
            <div className={styles.outOfStock}>
                Out of Stock
            </div>
        )}
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={styles.image}
          sizes="(max-width: 144px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>

      <div className={styles.details}>
        <div className={styles.titleRow}>
            <div style={{overflow: 'hidden'}}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.subtitle}>
                    <span style={{textDecoration: 'underline'}}>Sign in</span> or Create an account to see pricing
                </p>
            </div>
            <button className={styles.wishlistBtn}>
                <Heart size={20} />
            </button>
        </div>
      </div>
    </div>
  );
}
