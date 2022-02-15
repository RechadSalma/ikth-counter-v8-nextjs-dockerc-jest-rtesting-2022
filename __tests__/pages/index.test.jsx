import { screen, render } from "@testing-library/react";

import Home from "../../pages/index.js";

describe("iK / home page tests", () => {
  test("h1 text content is displaying correctly on the page", () => {
    render(<Home />);
    const heading = screen.getByRole("heading");
    screen.debug(heading);
    expect(heading.textContent).toMatch(/iK I am home page\./);
  });
});
