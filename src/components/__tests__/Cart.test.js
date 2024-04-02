import { fireEvent, render, screen } from "@testing-library/react";

import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA_NAME) })
);
it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("McSpicy Combos with Sprite (8)");
  fireEvent.click(accordionHeader);
});
