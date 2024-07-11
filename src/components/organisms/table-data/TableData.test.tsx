import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TableData } from "./TableData";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "username", headerName: "Username", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
];

describe("TableData component", () => {
  it("renders CircularProgress when isLoading is true", () => {
    render(<TableData isLoading={true} columns={columns} />);

    // Check if CircularProgress is rendered when isLoading is true
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders DataGrid when isLoading is false", () => {
    const users = [
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
      },
      {
        id: 2,
        name: "Jane Smith",
        username: "janesmith",
        email: "jane@example.com",
      },
    ];

    render(<TableData isLoading={false} users={users} columns={columns} />);

    // Check if DataGrid is rendered when isLoading is false
    expect(screen.getByRole("grid")).toBeInTheDocument();

    // Check if rows are rendered correctly
    users.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.username)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
    });
  });
});
