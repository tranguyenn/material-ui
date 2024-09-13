import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import SearchAppBar from "../components/SearchAppBar"
function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <SearchAppBar />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default MainLayout;