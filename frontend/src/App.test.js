import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Mise en place d'une CI-CD pour son projet Fil Rouge/
  );
  expect(linkElement).toBeInTheDocument();
});
