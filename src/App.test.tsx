import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to Inimex/i); // adjust text to match your App.tsx
  expect(heading).toBeInTheDocument();
});
