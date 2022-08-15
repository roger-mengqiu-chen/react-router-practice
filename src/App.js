import { Route, Navigate, Routes } from "react-router-dom";
import React, {Suspense} from "react";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./components/page/NewQuote"));
const QuoteDetail = React.lazy(() => import("./components/page/QuoteDetail"));
const AllQuotes = React.lazy(() => import("./components/page/AllQuote"));
const NotFound = React.lazy(() => import("./components/page/NotFound"));


function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
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
      </Suspense>
    </Layout>
  );
}

export default App;
