import ConsumptionCalculator from "./components/ConsumptionCalculator";
import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.container}>
      <ConsumptionCalculator />
    </main>
  );
}
