import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SectionFormModal } from "./SectionFormModal";
jest.mock("react-hook-form", () => ({
  useForm: jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: jest.fn((callback) => callback),
    formState: { errors: {} },
  })),
}));

jest.mock("../../../store/users/userStore", () => ({
  useUserStore: jest.fn(() => ({
    users: [
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
        phone: "123456789",
        website: "example.com",
        address: "",
        company: "",
      },
      {
        id: 2,
        name: "Jane Smith",
        username: "janesmith",
        email: "jane@example.com",
        phone: "987654321",
        website: "example.org",
        address: "",
        company: "",
      },
    ],
  })),
}));

describe("SectionFormModal component", () => {
  it("calls onSubmit function when the button is clicked", () => {
    const onSubmit = jest.fn();
    const buttonLabel = "Save";
    const labelNotificationRequired = "This field is required";

    render(
      <SectionFormModal
        onSubmit={onSubmit}
        buttonLabel={buttonLabel}
        labelNotificationRequired={labelNotificationRequired}
        editUserId={undefined}
      />
    );

    const saveButton = screen.getByRole("button", { name: buttonLabel });
    fireEvent.click(saveButton);

    // onSubmit should be called when Save button is clicked
    expect(onSubmit).toHaveBeenCalled();
  });
});
