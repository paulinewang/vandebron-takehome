import { JSX } from "react";
import { Electric, ElectricAndGas } from "./icons";

import styles from "./ProductSelector.module.css";

interface ProductSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

type ProductType = {
  id: string;
  label: string;
  icon: JSX.Element;
};

export const productTypes: ProductType[] = [
  { id: "electric", label: "Stroom", icon: <Electric /> },
  { id: "electric-and-gas", label: "Stroom en Gas", icon: <ElectricAndGas /> },
];

export default function ProductSelector({
  value,
  onChange,
}: ProductSelectorProps) {
  return (
    <div className={styles.container}>
      {productTypes.map((type) => {
        const Icon = type.icon;
        return (
          <button
            key={type.id}
            name={type.id}
            role="radio"
            aria-label={type.label}
            onClick={() => onChange(type.id)}
            className={`${styles.button} ${value === type.id ? styles.selected : ""}`}
            aria-checked={value === type.id}
          >
            {Icon ?? null}
          </button>
        );
      })}
    </div>
  );
}
