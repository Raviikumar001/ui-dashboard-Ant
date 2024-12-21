import { Routes, Route } from "react-router";
import SignInPage from "./components/auth/sign-in-page";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
