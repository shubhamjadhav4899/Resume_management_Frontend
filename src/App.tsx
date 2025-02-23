import React from "react";
import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import { log } from "console";
import Navbar from "./components/navbar/Navbar.component";
import { Route, Routes } from "react-router-dom";
import CustomLinearLoader from "./components/custom-linear-progress/CustomLinearProgress.component";
//import with lazy loading
const Home = lazy(() => import("./pages/home/Home.page"));
const Companies = lazy(() => import("./pages/companies/Companies.page"));
const AddCompany = lazy(() => import("./pages/companies/AddCompany.page"));
const Jobs = lazy(() => import("./pages/jobs/Jobs.page"));
const AddJob = lazy(() => import("./pages/jobs/AddJob.page"));
const Candidates = lazy(() => import("./pages/candidates/Candidates.page"));
const AddCandidate = lazy(() => import("./pages/candidates/AddCandidate.page"));

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const appStyle = darkMode ? "app dark" : "app";
  console.log(darkMode);

  return (
    <div className={appStyle}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomLinearLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" >
              <Route index element={<Companies/>}/>
              <Route path="create" element={<AddCompany/>}/>
            </Route>
            <Route path="/jobs" >
              <Route index element={<Jobs/>}/>
              <Route path="add" element={<AddJob/>}/>
            </Route>

            <Route path="/candidates" >
              <Route index element={<Candidates/>}/>
              <Route path="add" element={<AddCandidate/>}/>
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
