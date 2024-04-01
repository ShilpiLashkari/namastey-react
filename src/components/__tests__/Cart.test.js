import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../../components/mocks/mockResMenu.json";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA_NAME) })
);
it("Should load restaurant menu component", async () => {
  await act(async () => render(<RestaurantMenu />));
  const accordionHeader = screen.getByText("Women's Day Specials (11)");
  fireEvent.click(accordionHeader);
});
