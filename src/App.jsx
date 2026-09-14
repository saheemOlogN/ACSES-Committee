import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import MemberProfile from "./pages/MemberProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/members/:name"
          element={<MemberProfile />}
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/members/bhuvan-pokale"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;