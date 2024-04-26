// MovieList.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieList from "./MovieList";

describe("MovieList Component", () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            results: [
              {
                name: "Luke Skywalker",
                height: "172",
                birth_year: "19BBY",
              },
              {
                name: "Leia Organa",
                height: "150",
                birth_year: "19BBY",
              },
            ],
          }),
      })
    );
  });

  it("renders MovieList component with movie items", async () => {
    render(<MovieList />);

    await waitFor(() => {
      expect(screen.getAllByTestId("movie-item")).toHaveLength(2);
    });
  });

  it("renders movie details when a movie is clicked", async () => {
    render(<MovieList />);

    fireEvent.click(screen.getByText("Luke Skywalker"));

    // Check if movie details are rendered
    await waitFor(() => {
      expect(screen.getByText("Name: Luke Skywalker")).toBeInTheDocument();
      expect(screen.getByText("Height: 172")).toBeInTheDocument();
      expect(screen.getByText("Birth Year: 19BBY")).toBeInTheDocument();
    });
  });

  it("renders back button and goes back to movie list when clicked", async () => {
    render(<MovieList />);

    // Click on a movie
    fireEvent.click(screen.getByText("Luke Skywalker"));

    // Click on the back button
    fireEvent.click(screen.getByText("Back"));

    // Check if back button works
    await waitFor(() => {
      expect(screen.getByText("MovieList")).toBeInTheDocument();
    });
  });
});
