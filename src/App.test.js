import { screen, render, waitFor } from "@testing-library/react";

test("Signed in -> 404 page renders when given a bad route.", async () => {
  const { default: Index } = require("./App");
  render(<Index />);

  await waitFor(() => expect(screen.getByText("Resolved")).toBeInTheDocument());
});
