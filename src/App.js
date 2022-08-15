import { Route, Navigate, Routes } from "react-router-dom";
import AllQuotes from "./components/page/AllQuote";
import NewQuote from "./components/page/NewQuote";
import QuoteDetail from "./components/page/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./components/page/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />}>
          
        </Route>
        <Route path="/quotes" element={<AllQuotes />}>
          
        </Route>
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
          
        </Route>
        <Route path="/new-quote" element={<NewQuote />}>
          
        </Route>
        <Route path="*" element={<NotFound />}>
          
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
