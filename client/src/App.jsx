import { Routes, Route } from "react-router-dom";
import "./App.css";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "./redux/auth/operations";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";
import { getAllCities } from "./redux/city/operations";
import Weather from "./pages/Weather/Weather";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Favorites from "./pages/Favorites/Favorites";
import Registration from "./pages/Registration/Registration";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getAllCities());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<Registration />} />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/weather" />
          }
        />
        <Route
          path="/favorites"
          element={<PrivateRoute component={<Favorites />} redirectTo="/" />}
        />
        <Route
          path="/weather"
          element={<PrivateRoute component={<Weather />} redirectTo="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </Layout>
  );
}

export default App;
