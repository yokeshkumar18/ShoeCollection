"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./FilterSidebar.module.css";

const filters = [
    {
        id: "ideal_for",
        name: "Ideal For",
        options: ["Men", "Women", "Baby & Kids"]
    },
    {
        id: "occasion",
        name: "Occasion",
        options: ["Casual", "Formal", "Party", "Sports"]
    },
    {
        id: "work",
        name: "Work",
        options: ["Office", "Meeting", "Field Work"]
    },
    {
        id: "fabric",
        name: "Fabric",
        options: ["Cotton", "Polyester", "Silk", "Linen"]
    },
    {
        id: "segment",
        name: "Segment",
        options: ["Luxury", "Premium", "Budget"]
    },
    {
        id: "suitable_for",
        name: "Suitable For",
        options: ["Summer", "Winter", "All Season"]
    },
    {
        id: "raw_materials",
        name: "Raw Materials",
        options: ["Organic", "Synthetic", "Recycled"]
    },
    {
        id: "pattern",
        name: "Pattern",
        options: ["Solid", "Striped", "Printed", "Checked"]
    },
];

export default function FilterSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(["ideal_for"]); // Default enable one
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => 
        prev.includes(id) 
            ? prev.filter(sectionId => sectionId !== id) 
            : [...prev, id]
    );
  };

  const toggleFilter = (sectionId: string, option: string) => {
    // Mock functionality
    console.log("Toggle filter:", sectionId, option);
  };

  return (
    <aside className={styles.sidebar}>
      
      {/* Customizable */}
      <div className={styles.customCheckbox}>
         <div className={styles.checkbox}>
            {/* Mock Checked state */}
         </div>
         <span>Customizble</span>
      </div>

      {filters.map((section) => (
        <div key={section.id} className={styles.section}>
            <div 
                className={styles.sectionHeader}
                onClick={() => toggleSection(section.id)}
            >
                <span className={styles.sectionTitle}>{section.name}</span>
                {expandedSections.includes(section.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            
            <span className={styles.sectionSubtitle}>All</span>

            {expandedSections.includes(section.id) && (
                <div className={styles.optionsList}>
                    {/* Unselect All */}
                    <label className={styles.optionLabel} style={{color: 'var(--color-gray-400)'}}>
                         <span style={{textDecoration: 'underline'}}>Unselect All</span>
                    </label>

                    {section.options.map((option) => (
                        <label key={option} className={styles.optionLabel}>
                             <input type="checkbox" className={styles.optionCheckbox} onChange={() => toggleFilter(section.id, option)} />
                             <span>{option}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
      ))}
    </aside>
  );
}
