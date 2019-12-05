import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App, { addStrike } from "./App";

test("addStrike adds 1 strike to the current count", () => {
  expect(addStrike(1)).toBe(2);
  expect(addStrike(1)).not.toBe(6);
});

test("Strike Increases strike count", () => {
  const { getByText } = render(<App />);
  const button = getByText(/strike$/i);
  fireEvent.click(button);
  getByText(/strikes: 1/i);
});

test("Strikes do not go above 2", () => {
  const { getByText } = render(<App />);
  const button = getByText(/strike$/i);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  getByText(/strikes: 0/i);
});

test("Ball Increases ball count", () => {
  const { getByText } = render(<App />);
  const button = getByText(/ball$/i);
  fireEvent.click(button);
  getByText(/balls: 1/i);
});

test("Balls do not go above 3", () => {
  const { getByText } = render(<App />);
  const button = getByText(/ball$/i);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  getByText(/balls: 0/i);
});

test("Hit resets balls and strikes to 0", () => {
  const { getByText } = render(<App />);
  const button = getByText(/hit$/i);
  fireEvent.click(button);
  getByText(/balls: 0/i);
  getByText(/strikes: 0/i);
});

test("Foul Increases strike count by 1", () => {
  const { getByText } = render(<App />);
  const button = getByText(/foul$/i);
  fireEvent.click(button);
  getByText(/strikes: 1/i);
});

test("Foul Does not increase strike count above 2", () => {
  const { getByText } = render(<App />);
  const button = getByText(/foul$/i);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  getByText(/strikes: 2/i);
});
