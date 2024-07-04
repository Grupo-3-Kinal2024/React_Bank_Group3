import { LoginPage } from "./pages/Login/LoginPage"
import { RegisterPage } from "./pages/Register/RegisterPage"
import { HomePage } from "./pages/home"

const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
]

export default routes