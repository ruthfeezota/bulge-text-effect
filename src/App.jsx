// import Login from "./pages/LoginPage";
// import Register from "./pages/RegisterPage";
// import Header from "./components/Header";
// import { AuthProvider } from "./components/authContext";
// import { useRoutes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import Header from "../src/components/Header"

function App() {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        </Routes>
        </div>
  )




  // const routesArray = [
  //   {
  //     path: "*",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/home",
  //     element: <Home />,
  //   },
  // ];
  // let routesElement = useRoutes(routesArray);
  // return (
  //   <AuthProvider>
  //     <Header />
  //     <div className="w-full h-screen flex flex-col">{routesElement}</div>
  //   </AuthProvider>
  // );
}

export default App;
