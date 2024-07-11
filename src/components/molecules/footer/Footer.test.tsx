import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders the footer with the provided name and current year", () => {
    const name = "Ilman Teguh Prasetya";
    render(<Footer name={name} />);
    const currentYear = new Date().getFullYear();
    const textMatcher = (content: string, element: HTMLElement) => {
      const hasText = (node: HTMLElement) =>
        node.textContent === `Copyright © ${name} ${currentYear}.`;
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child as HTMLElement)
      );
      return elementHasText && childrenDontHaveText;
    };

    const footerElement = screen.getByText(textMatcher);
    expect(footerElement).toBeInTheDocument();
  });

  it("renders a link with the provided name", () => {
    const name = "Ilman Teguh Prasetya";
    render(<Footer name={name} />);

    // Check the link element
    const linkElement = screen.getByText(name).closest("a");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "#");
  });
});
