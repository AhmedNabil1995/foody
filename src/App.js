import React, { useState } from "react";
import MyAppBar from "./components/layout/MyAppBar";

// Import MUI colors
import { deepOrange, teal } from "@mui/material/colors";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BackToTop from "./components/layout/MyBackToTheTop";
import MyHomePage from "./pages/MyHomePage";
import Footer from "./components/layout/Footer";
import MyAboutPage from "./pages/MyAboutPage";
import MyContactPage from "./pages/MyContactPage";
import MyMenuPage from "./pages/MyMenuPage";
import MyLogInPage from "./pages/MyLogInPage";
import MyRegisterPage from "./pages/MyRegisterPage";
import MealPurchasePage from "./pages/MealPurchasePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import MyProfile from "./pages/MyProfile";
import ProfileAddresses from "./components/ProfileComponents/ProfileAddresses";
import ProfileDashboard from "./components/ProfileComponents/ProfileDashboard";
import ProfileDetails from "./components/ProfileComponents/ProfileDetails";
import ProfileOrders from "./components/ProfileComponents/ProfileOrders";
import ProfilePssword from "./components/ProfileComponents/ProfilePssword";
import ScrollToTop from "./components/Utilities/ScrollToTop";
import PageError from "./pages/PageError";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import PaymentchoisePage from "./pages/PaymentchoisePage";
import CashOnDeliveryPayment from "./pages/CashOnDeliveryPayment";

// Define theme settings

const light = {
  palette: {
    mode: "light",
    primary: {
      main: teal[700],
      light: teal[400],
      dark: teal[800],
    },
    secondary: {
      main: deepOrange[500],
      light: deepOrange[300],
      dark: deepOrange[700],
    },
  },
};

const dark = {
  palette: {
    mode: "dark",
    primary: {
      main: teal[200],
      light: teal[50],
      dark: teal[400],
    },
    secondary: {
      main: deepOrange[200],
      light: deepOrange[50],
      dark: deepOrange[400],
    },
  },
};

const App = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <div className="App">
        <BackToTop></BackToTop>
        <MyAppBar
          setIsDarkTheme={setIsDarkTheme}
          isDarkTheme={isDarkTheme}
        ></MyAppBar>
        {/* here is our pages */}

        <Routes>
          {/* <ScrollToTop></ScrollToTop> */}
          <Route index element={<MyHomePage />}></Route>
          <Route path="Home" element={<MyHomePage />} />
          <Route path="About" element={<MyAboutPage />} />
          <Route
            path="Contact"
            element={
              <MyContactPage
                setIsDarkTheme={setIsDarkTheme}
                isDarkTheme={isDarkTheme}
              />
            }
          />
          <Route path="Menu" element={<MyMenuPage />} />
          <Route path="/" element={<Navigate to={"/Home"} />} />
          <Route path="LogIn" element={<MyLogInPage />} />
          <Route path="Register" element={<MyRegisterPage />} />
          <Route path="Meal/:id" element={<MealPurchasePage />} />
          <Route path="Cart" element={<ShoppingCartPage />} />
          <Route path="Profile" element={<MyProfile />}>
            <Route path="Dashboard" element={<ProfileDashboard />} />
            <Route
              path="Address"
              element={
                <ProfileAddresses
                  setIsDarkTheme={setIsDarkTheme}
                  isDarkTheme={isDarkTheme}
                />
              }
            />
            <Route path="ProfileDetails" element={<ProfileDetails />} />
            <Route path="ProfileOrders" element={<ProfileOrders />} />
            <Route path="ProfilePassword" element={<ProfilePssword />} />
          </Route>
          {/* payment */}

          <Route path="PaymentChoise" element={<PaymentchoisePage />} />
          <Route path="PurchaseSuccess" element={<PurchaseSuccess />} />
          <Route path="CashOnDelivery" element={<CashOnDeliveryPayment />} />

          <Route path="*" element={<PageError />} />
        </Routes>
        <Footer
          setIsDarkTheme={setIsDarkTheme}
          isDarkTheme={isDarkTheme}
        ></Footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
