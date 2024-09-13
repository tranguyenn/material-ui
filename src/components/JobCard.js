import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Height } from "@mui/icons-material";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  let location = useLocation();
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{ display: "flex", justifyContent: "center" }}
      className="item-list"
    >
      <Card variant="outlined" sx={{ maxWidth: 360, mt: 3 }}>
        <Box sx={{ p: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ overflow: "hidden", height: 65, p: "auto" }}
            textAlign={"center"}
          >
            {job.title}
          </Typography>
          <Divider />
          <Grid
            container
            spacing={1}
            sx={{ height: 74, mt: 1, overflow: "hidden" }}
          >
            {job.skills.map((skill, index) => (
              <Grid item key={skill.replace(/\s/g, "") + index}>
                <Chip label={skill} size="small" />
              </Grid>
            ))}
          </Grid>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ p: 0, m: 0, height: 80, overflow: "hidden" }}
          >
            {job.description}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 1 }}
            component={Link}
            to={`/job/${job.id}`}
            state={{ backgroundLocation: location }}
          >
            Learn More
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
