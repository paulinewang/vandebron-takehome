import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductSelector from "./ProductSelector";

describe("ProductSelector", () => {
  it("renders the correct number of product types", async () => {
    render(<ProductSelector value="electric" onChange={() => {}} />);
    const buttons = await screen.findAllByRole("radio");
    expect(buttons).toHaveLength(2);
  });

  it("renders the correct icons for each product type", async () => {
    render(<ProductSelector value="electric" onChange={() => {}} />);
    const electricIcon = await screen.findByLabelText("Stroom");
    const electricAndGasIcon = await screen.findByLabelText("Stroom en Gas");
    expect(electricIcon).toBeInTheDocument();
    expect(electricAndGasIcon).toBeInTheDocument();
  });

  it("marks the correct button as selected", async () => {
    render(<ProductSelector value="electric" onChange={() => {}} />);

    const electricButton = await screen.findByRole("radio", {
      name: "Stroom",
    });
    const electricAndGasButton = await screen.findByRole("radio", {
      name: "Stroom en Gas",
    });

    expect(electricButton).toHaveAttribute("aria-checked", "true");
    expect(electricAndGasButton).toHaveAttribute("aria-checked", "false");
  });

  it("calls onChange with the correct value when a button is clicked", async () => {
    const handleChange = vi.fn();
    render(<ProductSelector value="electric" onChange={handleChange} />);
    const electricAndGasButton = await screen.findByRole("radio", {
      name: "Stroom en Gas",
    });
    fireEvent.click(electricAndGasButton);
    expect(handleChange).toHaveBeenCalledWith("electric-and-gas");
  });
});
