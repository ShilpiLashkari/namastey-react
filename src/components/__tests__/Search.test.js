import { render } from "@testing-library/react";
import Body from "../../components/Body";

global.fetch=jest.fn()
it("Should render the body component with search button", () => {
  render(<Body />);
});
