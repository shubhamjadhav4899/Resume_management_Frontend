import React, { useState, useEffect } from "react";
import { ICreateCandidateDto, IJob } from "../../types/global.typing";
import "./candidates.scss";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";

const AddCandidate = () => {
  const [candidate, setCandidate] = useState<ICreateCandidateDto>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverLetter: "",
    jobId: "",
  });
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [pdfFile, setPdfFile] = useState<File | null>();
  const redirect = useNavigate();

  useEffect(() => {
    httpModule
      .get<IJob[]>("Job/Job")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }, []);
  const handleClickSaveBtn = () => {
    if (
      candidate.firstName === "" ||
      candidate.lastName === "" ||
      candidate.email === "" ||
      candidate.phone === "" ||
      candidate.coverLetter === "" ||
      candidate.jobId === "" ||
      !pdfFile
    ) {
      alert("fill all field");
      return;
    }
    
    const newCandidateFormDate = new FormData();
    newCandidateFormDate.append("firstName", candidate.firstName.valueOf());
    newCandidateFormDate.append("lastName", candidate.lastName.valueOf());
    newCandidateFormDate.append("email", candidate.email.valueOf());
    newCandidateFormDate.append("phone", candidate.phone.valueOf());
    newCandidateFormDate.append(
        "coverLetter",
        candidate.coverLetter.valueOf()
        );
        newCandidateFormDate.append("jobId", candidate.jobId.valueOf());
        newCandidateFormDate.append("pdfFile", pdfFile);
        console.log(newCandidateFormDate);
        httpModule
        .post("/Candidate/Create", newCandidateFormDate)
      .then((response) => redirect("/candidates"))
      .catch((error) => console.log(error));
  };
  const handleClickBackBtn = () => {
    redirect("/candidates");
  };

  return (
    <div className="content">
      <div className="add-candidates">
        <h2>Add New Candidate</h2>
        <FormControl fullWidth>
          <InputLabel>Company</InputLabel>
          <Select
            value={candidate.jobId}
            label="Job"
            onChange={(e) =>
              setCandidate({ ...candidate, jobId: e.target.value })
            }
          >
            {jobs.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          autoComplete="off"
          label="First Name"
          variant="outlined"
          value={candidate.firstName}
          onChange={(e) =>
            setCandidate({ ...candidate, firstName: e.target.value })
          }
        />
        <TextField
          autoComplete="off"
          label="Last Name"
          variant="outlined"
          value={candidate.lastName}
          onChange={(e) =>
            setCandidate({ ...candidate, lastName: e.target.value })
          }
        />
        <TextField
          autoComplete="off"
          label="Email"
          variant="outlined"
          value={candidate.email}
          onChange={(e) =>
            setCandidate({ ...candidate, email: e.target.value })
          }
        />

        <TextField
          autoComplete="off"
          label="Phone"
          variant="outlined"
          value={candidate.phone}
          onChange={(e) =>
            setCandidate({ ...candidate, phone: e.target.value })
          }
        />
        <input
          type="file"
          onChange={(event) =>
            setPdfFile(event.target.files ? event.target.files[0] : null)
          }
        />
        <TextField
          autoComplete="off"
          label="C V"
          variant="outlined"
          value={candidate.coverLetter}
          multiline
          onChange={(e) =>
            setCandidate({ ...candidate, coverLetter: e.target.value })
          }
        />

        <div className="btns">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickSaveBtn}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickBackBtn}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AddCandidate;
