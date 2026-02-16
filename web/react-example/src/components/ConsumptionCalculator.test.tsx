import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ConsumptionCalculator from "./ConsumptionCalculator";

describe("ConsumptionCalculator", () => {
  it("renders the correct title and link", () => {
    render(<ConsumptionCalculator />);

    const title = screen.getByRole("heading", { name: "Verbruik berekenen" });
    expect(title).toBeInTheDocument();

    const link = screen.getByRole("link", { name: "Ik weet mijn verbruik" });
    expect(link).toBeInTheDocument();
  });

  it("renders the house type selector with the correct label", () => {
    render(<ConsumptionCalculator />);

    const label = screen.getByText(/Type woning:/);
    expect(label).toBeInTheDocument();
  });

  it("renders the residents selector with the correct label", () => {
    render(<ConsumptionCalculator />);

    const label = screen.getByText(/Aantal bewoners:/);
    expect(label).toBeInTheDocument();
  });

  it("renders the product selector with the correct label", () => {
    render(<ConsumptionCalculator />);

    const label = screen.getByText(/Product:/);
    expect(label).toBeInTheDocument();
  });

  it("renders the solar panel checkbox with the correct label", () => {
    render(<ConsumptionCalculator />);

    const label = screen.getByText(/Zonnepanelen/);
    expect(label).toBeInTheDocument();
  });

  it("renders the submit button with the correct text", () => {
    render(<ConsumptionCalculator />);

    const button = screen.getByRole("button", { name: "Ok →" });
    expect(button).toBeInTheDocument();
  });
});
