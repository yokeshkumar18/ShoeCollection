"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ProductListing.module.css";

interface ProductListingProps {
  products: Product[];
}

export default function ProductListing({ products }: ProductListingProps) {
  const [showFilter, setShowFilter] = useState(true);
  const [sortBy, setSortBy] = useState("recommended");

  // Mock sorting logic
  const sortedProducts = [...products].sort((a, b) => {
      if (sortBy === "price_low") return a.price - b.price;
      if (sortBy === "price_high") return b.price - a.price;
      return 0; // Default or Recommended
  });

  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.controlsLeft}>
            <div className={styles.itemCount}>
                <span>{products.length} Items</span>
            </div>
            
            <button 
                onClick={() => setShowFilter(!showFilter)}
                className={styles.filterToggle}
            >
                {showFilter ? <ChevronLeft size={16}/> : <ChevronRight size={16}/>}
                {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
        </div>

        <div className={styles.sortDropdown}>
            <span className={styles.sortLabel}>Recommended</span>
            <ChevronDown size={16} />
            
            {/* Dropdown Menu (Mock) */}
            <div className={styles.dropdownMenu}>
                <ul className="text-sm">
                    <li className={sortBy === "recommended" ? styles.dropdownItemActive : styles.dropdownItem} onClick={() => setSortBy("recommended")}>RECOMMENDED</li>
                    <li className={sortBy === "newest" ? styles.dropdownItemActive : styles.dropdownItem} onClick={() => setSortBy("newest")}>NEWEST FIRST</li>
                    <li className={sortBy === "popular" ? styles.dropdownItemActive : styles.dropdownItem} onClick={() => setSortBy("popular")}>POPULAR</li>
                    <li className={sortBy === "price_high" ? styles.dropdownItemActive : styles.dropdownItem} onClick={() => setSortBy("price_high")}>PRICE: HIGH TO LOW</li>
                    <li className={sortBy === "price_low" ? styles.dropdownItemActive : styles.dropdownItem} onClick={() => setSortBy("price_low")}>PRICE: LOW TO HIGH</li>
                </ul>
            </div>
        </div>
      </div>

      <div className={styles.content}>
         {/* Sidebar */}
         <div className={`${styles.sidebarWrapper} ${showFilter ? styles.sidebarVisible : ''}`}>
             <FilterSidebar />
         </div>

         {/* Product Grid */}
         <div className={styles.productGrid + (showFilter ? '' : ' ' + styles.gridExpanded)}>
            {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
