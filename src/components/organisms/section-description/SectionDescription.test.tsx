import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SectionDescription } from "./SectionDescription";

describe("SectionDescription component", () => {
  it("renders description section and button with correct label", () => {
    const handleOpen = jest.fn();
    const descriptionSection = "Test description";
    const labelButton = "Open";

    render(
      <SectionDescription
        handleOpen={handleOpen}
        descriptionSection={descriptionSection}
        labelButton={labelButton}
      />
    );

    expect(screen.getByText(descriptionSection)).toBeInTheDocument();

    const button = screen.getByRole("button", { name: labelButton });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleOpen).toHaveBeenCalled();
  });
});
