import React from "react";
import { render as rtlRender } from "@testing-library/react-native";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
import { userSlice } from "../redux/slices/userReducer";
import { NativeBaseProvider } from "native-base";
const store = ({ preloadedState } = {}) =>
  configureStore({ reducer: userSlice.reducer, preloadedState });

function renderWithProviders(ui, { initialState, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    const inset = {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    };

    return (
      <Provider store={store({ preloadedState: initialState })}>
        <NativeBaseProvider initialWindowMetrics={inset}>
          {children}
        </NativeBaseProvider>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react-native";
// override render method
export { renderWithProviders };
export { store };
