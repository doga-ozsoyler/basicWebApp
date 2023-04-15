import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, waitFor } from "@testing-library/react-native";
import SigninScreen from "../screens/Signin";
import { store, screen, renderWithProviders } from "./utils-for-tests";
import FormController from "../components/FormController";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const mock = new MockAdapter(axios);

const mockNetworkRequests = () => {
  mock
    .onPost("http://192.168.48.249:9000/api/user/signin")
    .reply(201, { success: true, message: "Email sent successfully!" });
  //mock.onGet("http://192.168.48.249:9000/api/user/signin").reply(200, pokemonData);
};

const unMockNetworkRequests = () => {
  mock.resetHistory();
};

const mockedStore = store();
const initialState = {
  loading: false,
  error: null,
  token: null,
  signinData: null,
  userInfo: null,
  createUserData: null,
};

describe("First test", () => {
  beforeEach(() => {
    mockNetworkRequests();
  });

  afterEach(() => {
    unMockNetworkRequests();
  });

  test("first test", async () => {
    renderWithProviders(<SigninScreen />, initialState);
    const emailInput = screen.getByPlaceholderText("Enter Email");
    const signinButton = screen.getByText("Sign in");
    //const codeInput = screen.queryByPlaceholderText("Enter Code");

    const textToEnter = "loseco8164@ippals.com";
    fireEvent.changeText(emailInput, textToEnter);
    fireEvent.press(signinButton);

    const userState = mockedStore.getState();
    console.log(userState);

    //const codeInput = screen.queryByPlaceholderText("Enter Code");
    await waitFor(() => {
      expect(screen.queryByTestId("formControlError")).toBeOnTheScreen();
    });
  });
});
