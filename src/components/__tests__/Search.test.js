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

it("Should search resList for burger test input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);
  const btnSearch = screen.getByRole("button", { name: "Search" });
  expect(btnSearch).toBeInTheDocument();
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "burger" } }); //writing "burger" in input field
  fireEvent.click(btnSearch); // clicking a button after input
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter top rated restraunts", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);
  const btnTopRated = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  expect(btnTopRated).toBeInTheDocument();
  fireEvent.click(btnTopRated);
  const cardsAfterFiltering = screen.getAllByTestId("resCard");
  expect(cardsAfterFiltering.length).toBe(9);
});
