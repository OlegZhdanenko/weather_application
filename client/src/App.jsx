import { Routes, Route } from "react-router-dom";
import "./App.css";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Weather from "./pages/Weather";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "./redux/auth/operations";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
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
          path="/weather"
          element={<PrivateRoute component={<Weather />} redirectTo="/" />}
        />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </Layout>
  );
}

export default App;
