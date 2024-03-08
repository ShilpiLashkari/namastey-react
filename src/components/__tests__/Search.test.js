import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../../components/Body";
import MOCK_DATA from "../../components/mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should render the body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const btnSearch = screen.getByRole("button", { name: "Search" });
  expect(btnSearch).toBeInTheDocument();
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "burger" } }); //writing "burger" in input field
  fireEvent.click(btnSearch); // clicking a button after input
  const cards = screen.getAllByTestId("resCard");
  // expect(cards.length).toBe(1);
});
