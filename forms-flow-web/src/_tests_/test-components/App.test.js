import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { HelmetProvider } from "react-helmet";
import StoreService from "../../services/StoreService";
import App from "../../components/App";

describe("App", () => {
  it("renders without errors", () => {
    const history = createMemoryHistory();
    const store = StoreService.configureStore();

    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <HelmetProvider>
            <App history={history} store={store} />
          </HelmetProvider>
        </ConnectedRouter>
      </Provider>
    );
  });
});
