import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Couple of tests for Contact Us Component", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument(); //Assertion
  });
  it("Should render all input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
  it("Should render single input boxes", () => {
    render(<Contact />);
    const inputBox = screen.getByPlaceholderText("Name");
    expect(inputBox).toBeInTheDocument();
  });
  it("Should render submit button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
