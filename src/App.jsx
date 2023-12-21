import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Scrolltotop from "./components/UI/ScrollToTop";

import { About, ContestDetail, ContestantDetail, Landing } from "./Pages";

const App = () => {
  return (
    <div className="w-full h-full font-extralight text-sm sm:text-[15px] poppins text-gray-100">
      <div>
        <Toaster
          toastOptions={{
            duration: 5000,
            position: "top-center",
            success: {
              style: {
                background: "#222",

                color: "#fff",
              },
            },
            error: {
              duration: 5000,
              position: "top-center",
              style: {
                background: "red",
                color: "#fff",
              },
            },
          }}
        />
      </div>
      <Router>
        <Scrolltotop />

        <Routes>
          {/*    AUTH PAGE */}

          {/*    LANDING PAGE  */}
          <Route exact path="/" element={<Landing />} />

          <Route exact path="/event" element={<ContestDetail />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contestant/:id" element={<ContestantDetail />} />

          {/**Protected routes */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
