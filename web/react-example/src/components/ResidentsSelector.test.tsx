import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ResidentsSelector from "./ResidentsSelector";

describe("ResidentsSelector", () => {
  it("renders the correct number of resident options", () => {
    const mockOnChange = vi.fn();
    render(<ResidentsSelector value={1} onChange={mockOnChange} />);

    const buttons = screen.getAllByRole("radio");
    expect(buttons).toHaveLength(5);
  });

  it("calls onChange with the correct value when a button is clicked", () => {
    const mockOnChange = vi.fn();
    render(<ResidentsSelector value={1} onChange={mockOnChange} />);

    const buttons = screen.getAllByRole("radio");
    buttons[2].click(); // Click the button for 3 residents

    expect(mockOnChange).toHaveBeenCalledWith(3);
  });

  it("sets aria-checked to true for the selected button", () => {
    const mockOnChange = vi.fn();
    render(<ResidentsSelector value={2} onChange={mockOnChange} />);

    const buttons = screen.getAllByRole("radio");
    expect(buttons[1]).toHaveAttribute("aria-checked", "true");
    expect(buttons[0]).toHaveAttribute("aria-checked", "false");
    expect(buttons[2]).toHaveAttribute("aria-checked", "false");
    expect(buttons[3]).toHaveAttribute("aria-checked", "false");
    expect(buttons[4]).toHaveAttribute("aria-checked", "false");
  });
});
