import React, { useEffect } from "react";
import httpModule from "../../helpers/http.module";
import "./jobs.scss";
import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import JobsGrid from "../../components/jobs/JobsGrid.component";
import { IJob } from "../../types/global.typing";
const Jobs = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();
  useEffect(() => {
    setLoading(true);
    httpModule
      .get<IJob[]>("Job/Job")
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(jobs);

  return (
    <div className="content jobs">
      <div className="heading">
        <h1>Jobs</h1>
        <Button variant="outlined" onClick={() => redirect("/jobs/add")}>
          <Add />
        </Button>
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : jobs.length === 0 ? (
        <h1> No Jobs</h1>
      ) : (
        <JobsGrid data={jobs} />
      )}
    </div>
  );
};

export default Jobs;
