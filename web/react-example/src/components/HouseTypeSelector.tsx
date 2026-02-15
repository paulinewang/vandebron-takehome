import { JSX, useEffect, useState } from "react";
import { getHouseTypes } from "./HouseTypeSelector.service";
import styles from "./HouseTypeSelector.module.css";
import {
  HouseApartment,
  HouseCornerHouse,
  HouseFreestanding,
  HouseRowHome,
  HouseSemiDetached,
} from "./icons";

interface HouseTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

type HouseType = {
  id: string;
  label: string;
  icon: JSX.Element;
};

export default function HouseTypeSelector({
  value,
  onChange,
}: HouseTypeSelectorProps) {
  const [houseTypes, setHouseTypes] = useState<HouseType[]>([]);
  console.log("HouseTypeSelector - houseTypes=", houseTypes);

  useEffect(() => {
    const onLoad = async () => {
      let types = await getHouseTypes();
      console.log("HouseTypeSelector - types=", types);
      (types as { id: string; icon?: JSX.Element }[]).forEach((type) => {
        switch (type.id) {
          case "apartment":
            type.icon = <HouseApartment />;
            break;
          case "townhouse":
            type.icon = <HouseRowHome />;
            break;
          case "corner-house":
            type.icon = <HouseCornerHouse />;
            break;
          case "two-under-one-roof":
            type.icon = <HouseSemiDetached />;
            break;
          case "detached-house":
            type.icon = <HouseFreestanding />;
            break;
        }
      });
      setHouseTypes(types as HouseType[]);
    };
    onLoad();
  }, []);

  return (
    <div className={styles.container}>
      {houseTypes.map((type) => {
        const Icon = type.icon;
        return (
          <button
            key={type.id}
            name={type.id}
            role="button"
            aria-label={type.label}
            onClick={() => onChange(type.id)}
            className={`${styles.button} ${value === type.id ? styles.selected : ""}`}
            aria-selected={value === type.id}
          >
            {Icon ?? null}
          </button>
        );
      })}
    </div>
  );
}
