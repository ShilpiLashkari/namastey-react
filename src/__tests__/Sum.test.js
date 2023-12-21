import { Sum } from "../components/Sum";
test("Calculating sum of two numbers", () => {
  const result = Sum(10, 20);
  expect(result).toBe(30); // This line is called assertion
});
