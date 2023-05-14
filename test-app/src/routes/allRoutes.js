import ForgotPassword from "../pages/ForgotPassword";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RegisterPageOtp from "../pages/RegisterPageOtp";
import WelcomePage from "../pages/WelcomePage";

export const routes = [
    { id: 1, path: "/" , element: <WelcomePage/> },
    { id: 2, path: "/register" , element: <RegisterPage/> },
    { id: 3, path: "/register-otp" , element: <RegisterPageOtp/> },
    { id: 4, path: "/login" , element: <LoginPage/> },
    { id: 5, path: "/forgot-password" , element: <ForgotPassword/> },
]