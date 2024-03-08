import { render, screen } from "@testing-library/react";
import RestaurantCard, { isOpenOrNOt } from "../RestaurantCard";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Reastaurant Card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("The Tea Brewery");
  expect(name).toBeInTheDocument();
});

it("Should render Reastaurant Card component with promoted label", () => {
  // Test Higher Order Components: withPromotedLabel()
});
