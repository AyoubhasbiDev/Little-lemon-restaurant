import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import FormLayout from "./layouts/FormLayout";
import BookingForm from "./pages/BookingForm";
import PaymentForm from "./pages/PaymentForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<FormLayout />}>
        <Route index element={<BookingForm />} />
        <Route path="payment" element={<PaymentForm />} />
      </Route>
    </>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
