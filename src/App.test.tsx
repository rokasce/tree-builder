import { render, screen } from "@testing-library/react";
import TreeApp from "./TreeApp";

test("renders learn react link", () => {
  render(<TreeApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
