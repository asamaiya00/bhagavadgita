import "tailwindcss/tailwind.css";
import { wrapper } from "../redux/store";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "../data/apollo";
function MyApp({ Component, pageProps  }) {


  const client = getApolloClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
