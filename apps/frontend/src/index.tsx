import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const URL = process.env.GRAPHQL_HOST
  ? `https://${process.env.GRAPHQL_HOST}.onrender.com/graphql`
  : `http://localhost:8000/graphql`;

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
