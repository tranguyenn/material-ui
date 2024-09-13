import React, { useEffect, useState } from "react";
import jobsList from "../data/jobsList.json";
import JobCard from "../components/JobCard";
import { Container, Grid } from "@mui/material";
import JobPaging from "../components/JobPaging";
import JobDetailModal from "../components/JobDetailModal";
import LoginModal from "../components/LoginModal";
import apiService from "../app/apiService";
import { Outlet } from "react-router-dom";

function Homes() {
  const [pagesTotal, setPagesTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  // useEffect(()=>{
  //   const totalGetJobs=5;
  //   const startGetJobs=page*5-5;
  //   console.log(jobsList[startGetJobs])
  //   console.log(startGetJobs+"start");
  //   setJobs(jobsList.slice(startGetJobs,totalGetJobs+startGetJobs));
    
  // },[page])
  const handleChange = (event, value) => {
    console.log(value+"value")
    setPage(value);
  };
  console.log(page," pages");
  useEffect(()=>{

    const fetch = async()=>{
      const res= await apiService.get("/jobs");
      setPagesTotal(Math.ceil(res.data.length/5));
      const totalGetJobs=6;
      const startGetJobs=page*6-6;
      setJobs(res.data.slice(startGetJobs,totalGetJobs+startGetJobs));
    }
    fetch();
  
  },[page])
  return (
    <Container sx={{mr:'auto',ml:'auto',display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Grid container spacing={2} maxWidth="lg" >
        {jobs.map((job) => (
          <JobCard key={job.id+job.companyId} job={job} />
        ))}
      </Grid>
      <JobPaging count={pagesTotal} onChange={handleChange}/>
    </Container>
  );
}

export default Homes;
