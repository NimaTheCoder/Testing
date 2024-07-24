

import React from "react";
import ApiDataFetcher from "./components/ApiDataFetcher";
import Cart from "./components/Cart";
import Products from "./components/Products"
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:  <ApiDataFetcher  />,
//   },
//   {
//     path: "/product",
//     element:  <Cart/>,
//   },
// ]);

const App = () => {
  return (<>

    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
    <Navbar />
      <Routes>
        
        <Route path="/" element={<ApiDataFetcher />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/products" element={<Cart/>}></Route>
        <Route path="/product" element={<Products/>}></Route>

      </Routes>
    </BrowserRouter>
   </>
    // <Cart />  
  );
};

export default App;
