import { useState } from "react";
import { X } from "lucide-react";
import HouseTypeSelector from "./HouseTypeSelector";
import ResidentsSelector from "./ResidentsSelector";
import ProductSelector from "./ProductSelector";
import styles from "./ConsumptionCalculator.module.css";
import { SolarPanel } from "./icons";

export default function ConsumptionCalculator() {
  const [houseType, setHouseType] = useState("apartment");
  const [residents, setResidents] = useState(1);
  const [product, setProduct] = useState("electric");
  const [hasSolarPanels, setHasSolarPanels] = useState(false);
  const [consumption, setConsumption] = useState({});

  const computedConsumption = {
    electricity: 0,
    gas: 0,
  };

  console.log(
    "ConsumptionCalculator - computedConsumption=",
    computedConsumption,
  );

  const handleResidentsSelectorChange = (incomingResidents: number) => {
    if (incomingResidents > 0) {
      if (incomingResidents < 10) {
        setResidents(incomingResidents);
      }
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Verbruik berekenen</h2>
          <a href="#" className={styles.link}>
            Ik weet mijn verbruik
          </a>
        </div>
        <button className={styles.closeButton} aria-label="Close" role="button">
          <X />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.section}>
            <p className={styles.label}>
              Type woning:
              <span className={styles.labelSelection}>{houseType}</span>
            </p>
            <HouseTypeSelector value={houseType} onChange={setHouseType} />
          </div>
          <div className={styles.section}>
            <p className={styles.label}>
              Aantal bewoners:
              <span className={styles.labelSelection}>{residents}</span>
            </p>
            <ResidentsSelector
              value={residents}
              onChange={handleResidentsSelectorChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.section}>
            <p className={styles.label}>
              Product: <span className={styles.labelSelection}>{product}</span>
            </p>
            <ProductSelector value={product} onChange={setProduct} />
          </div>

          <div className={styles.section}>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="solarPanels"
                checked={hasSolarPanels}
                onChange={(e) => setHasSolarPanels(e.target.checked)}
              />
              <label htmlFor="solarPanels">
                <SolarPanel />
                <span>Zonnepanelen</span>
                <span
                  className={styles.infoIcon}
                  title="Information about solar panels"
                >
                  ⓘ
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.section + " " + styles.buttonContainer}>
          <button
            className={styles.button}
            aria-label="Calculate consumption"
            role="button"
          >
            <span>Ok</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
