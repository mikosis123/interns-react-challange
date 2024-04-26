// ActorDetail.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import ActorDetail from "../Components/ActorDetail";

describe("ActorDetail Component", () => {
  const movie = {
    name: "Luke Skywalker",
    birth_year: "19BBY",
    gender: "male",
    eye_color: "blue",
    hair_color: "blond",
    skin_color: "fair",
    height: "172",
    mass: "77",
    created: "2024-04-26T12:00:00Z",
    edited: "2024-04-26T12:00:00Z",
    films: [
      "https://swapi.py4e.com/api/films/1/",
      "https://swapi.py4e.com/api/films/2/",
    ],
    species: ["https://swapi.py4e.com/api/species/1/"],
  };

  it("renders ActorDetail component with correct movie details", () => {
    render(<ActorDetail movie={movie} />);

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("Birth Year: 19BBY")).toBeInTheDocument();
    expect(screen.getByText("Gender: male")).toBeInTheDocument();
    expect(screen.getByText("Eye Color: blue")).toBeInTheDocument();
    expect(screen.getByText("Hair Color: blond")).toBeInTheDocument();
    expect(screen.getByText("Skin Color: fair")).toBeInTheDocument();
    expect(screen.getByText("Height: 172 cm")).toBeInTheDocument();
    expect(screen.getByText("Mass: 77 kg")).toBeInTheDocument();
    expect(
      screen.getByText("Created:2024-04-26T12:00:00Z")
    ).toBeInTheDocument();
    expect(screen.getByText("Edited:2024-04-26T12:00:00Z")).toBeInTheDocument();

    expect(screen.getByText("List of Movies")).toBeInTheDocument();
    expect(
      screen.getByText("https://swapi.py4e.com/api/films/1/")
    ).toBeInTheDocument();
    expect(
      screen.getByText("https://swapi.py4e.com/api/films/2/")
    ).toBeInTheDocument();

    expect(screen.getByText("List of Species")).toBeInTheDocument();
    expect(
      screen.getByText("https://swapi.py4e.com/api/species/1/")
    ).toBeInTheDocument();
  });
});
