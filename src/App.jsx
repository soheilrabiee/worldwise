import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route path="app" element={<AppLayout />}>
                    {/* The root path of the parent */}
                    <Route index element={<p>LIST</p>} />

                    <Route path="cities" element={<p>list of cities</p>} />
                    <Route path="countries" element={<p>Countries</p>} />
                    <Route path="form" element={<p>Form</p>} />
                </Route>
                {/* Anything that is not a valid path */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
