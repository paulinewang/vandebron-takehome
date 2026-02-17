import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HouseTypeSelector from "./HouseTypeSelector";
import { getHouseTypes } from "./HouseTypeSelector.service";

vi.mock("./HouseTypeSelector.service", () => ({
  getHouseTypes: vi.fn(),
}));

describe("HouseTypeSelector", () => {
  it("selects the chosen house type", async () => {
    (getHouseTypes as any).mockResolvedValue([
      { id: "apartment", label: "Appartement" },
      { id: "townhouse", label: "Tussenwoning" },
      { id: "corner-house", label: "Hoekwoning" },
      { id: "two-under-one-roof", label: "2 onder 1 Kap" },
      { id: "detached-house", label: "Vrijstaand" },
    ]);

    const houseType = "apartment";
    render(<HouseTypeSelector value={houseType} onChange={() => {}} />);

    const button = await screen.findByRole("radio", { name: "Appartement" });
    button.click();
    expect(button).toHaveAttribute("aria-checked", "true");
  });

  it("renders the correct number of house types", async () => {
    render(<HouseTypeSelector value="apartment" onChange={() => {}} />);

    const buttons = await screen.findAllByRole("radio");
    expect(buttons).toHaveLength(5);
  });
});
