import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SectionHeaderModal } from "./SectionHeaderModal";
import CloseIcon from "@mui/icons-material/Close";

const mockHandleClose = jest.fn();
const mockTitle = "Test Modal Title";

describe("SectionHeaderModal", () => {
  it("renders modal title correctly", () => {
    render(
      <SectionHeaderModal handleClose={mockHandleClose} title={mockTitle} />
    );

    const titleElement = screen.getByText(/Test Modal Title/i);
    expect(titleElement).toBeTruthy(); // Ensure expect().toBeInTheDocument is imported correctly
  });

  it("calls handleClose when close button is clicked", () => {
    render(
      <SectionHeaderModal handleClose={mockHandleClose} title={mockTitle} />
    );

    const closeButton = screen.getByTestId("CloseIcon");
    fireEvent.click(closeButton);

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
