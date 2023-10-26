import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//describe is used to group test cases, we can write test cases without describe(grouping) also
describe("Contact us page test cases", () => {
  test("should load contact us component", () => {
    render(<Contact />); //it will render the component to JSDOM so that we can test it

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  //it is alis for test, both are same
  it("should load button inside contact us component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByPlaceholderText("name");
    expect(button).toBeInTheDocument();
  });

  it("load 2 input boxes inside contact us component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
