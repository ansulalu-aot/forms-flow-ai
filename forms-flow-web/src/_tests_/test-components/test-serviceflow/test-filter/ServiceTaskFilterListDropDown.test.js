import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import ServiceFlowFilterListDropDown from "../../../../components/ServiceFlow/filter/ServiceTaskFilterListDropDown";

const mockStore = configureStore([]);

describe("ServiceFlowFilterListDropDown", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      bpmTasks: {
        filterList: [
          { id: 1, name: "Filter 1", itemCount: 10 },
          { id: 2, name: "Filter 2", itemCount: 20 },
        ],
        selectedFilter: { id: 1, name: "Filter 1", itemCount: 10 },
        isFilterLoading: false,
      },
      tenants: {
        tenantId: "tenant1",
      },
    });
  });

  test("renders filter list correctly", () => {
    render(
      <Provider store={store}>
        <Router>
          <ServiceFlowFilterListDropDown />
        </Router>
      </Provider>
    );

    expect(screen.getByText("Filter 1 (10)")).toBeInTheDocument();
    expect(screen.getByText("Filter 2 (20)")).toBeInTheDocument();
  });

  test("renders 'No Filters Found' message when filter list is empty", () => {
    store = mockStore({
      bpmTasks: {
        filterList: [],
        selectedFilter: null,
        isFilterLoading: false,
      },
      tenants: {
        tenantId: "tenant1",
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <ServiceFlowFilterListDropDown />
        </Router>
      </Provider>
    );

    expect(screen.getByText("No Filters Found")).toBeInTheDocument();
  });

  test("renders 'Loading...' message when filters are being loaded", () => {
    store = mockStore({
      bpmTasks: {
        filterList: [],
        selectedFilter: null,
        isFilterLoading: true,
      },
      tenants: {
        tenantId: "tenant1",
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <ServiceFlowFilterListDropDown />
        </Router>
      </Provider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
