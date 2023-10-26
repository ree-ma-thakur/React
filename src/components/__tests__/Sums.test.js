import { Sums } from "../Sums";

test("Sums function should calculate sum of 2 numbers", () => {
  const result = Sums(3, 4);
  //Assertion
  expect(result).toBe(7);
});
