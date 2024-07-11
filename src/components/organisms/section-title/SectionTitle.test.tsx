import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SectionTitle } from "./SectionTitle";

describe("SectionTitle component", () => {
  it("renders title and createdBy correctly", () => {
    const title = "Example Title";
    const createdBy = "John Doe";

    render(<SectionTitle title={title} createdBy={createdBy} />);

    // Check if title and createdBy are rendered correctly
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`by ${createdBy}`)).toBeInTheDocument();
  });

  it("renders with the correct typography variant and fontWeight", () => {
    const title = "Example Title";
    const createdBy = "John Doe";

    render(<SectionTitle title={title} createdBy={createdBy} />);

    // Check if title is rendered with variant "h4" and fontWeight 600
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H4");
    expect(titleElement).toHaveStyle("font-weight: 600;");

    // Check if createdBy is rendered with variant "h6" and fontWeight 600
    const createdByElement = screen.getByText(`by ${createdBy}`);
    expect(createdByElement).toBeInTheDocument();
    expect(createdByElement.tagName).toBe("H6");
    expect(createdByElement).toHaveStyle("font-weight: 600;");
  });
});
