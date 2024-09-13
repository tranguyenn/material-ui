import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiService from "../app/apiService";

function JobDetailModal({ jobDetails }) {
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
  };
  const { id } = useParams();
  const [job, setJob] = useState();
  useEffect(()=>{
    const fetchData = async () => {
      const res = await apiService.get(`/jobs?id=${id}`);
      console.log(res.data[0]);
      setJob(res.data[0]);
    };
    fetchData();
  
  },[])
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    
    >
      <Box sx={style}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ overflow: "hidden", height: 65, p: "auto" }}
          textAlign={"center"}
        >
          {job?.title}
        </Typography>
        <Divider />
        <Grid
          container
          spacing={1}
          sx={{ height: 100, mt: 1, overflow: "hidden" }}
        >
         {job?.skills.map((skill, index) => (
              <Grid item key={skill.replace(/\s/g, '')+index}>
                <Chip label={skill} size="small" />
              </Grid>
            ))}
        </Grid>
        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ p: 0, m: 0, height: 80, overflow: "hidden" }}
        >
          {job?.description}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ p: 0, m: 0, height: 80, overflow: "hidden" }}
        >
          City: {job?.city}
        </Typography>
        <Button variant="contained" sx={{ mt: 1, background: "red" }} onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default JobDetailModal;
