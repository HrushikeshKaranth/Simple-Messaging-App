import ForgotPassword from "../pages/ForgotPassword";
import ForgotPasswordOtp from "../pages/ForgotPasswordOtp";
import ForgotPasswordReset from "../pages/ForgotPasswordReset";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RegisterPageOtp from "../pages/RegisterPageOtp";
import WelcomePage from "../pages/WelcomePage";

export const routes = [
    { id: 1, path: "/", element: <WelcomePage /> },
    { id: 2, path: "/register", element: <RegisterPage /> },
    { id: 3, path: "/register-otp", element: <RegisterPageOtp /> },
    { id: 4, path: "/login", element: <LoginPage /> },
    { id: 5, path: "/forgot-password", element: <ForgotPassword /> },
    { id: 6, path: "/forgot-password-otp", element: <ForgotPasswordOtp /> },
    { id: 7, path: "/forgot-password-reset", element: <ForgotPasswordReset /> },
]