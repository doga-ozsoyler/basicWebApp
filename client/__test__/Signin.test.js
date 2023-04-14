import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import SigninScreen from "../screens/Signin";
import { renderWithProviders } from "./utils-for-tests";

describe("First test", () => {
  test("fist test", () => {
    renderWithProviders(<SigninScreen />);

    expect(true).toBeTruthy();
  });
});
