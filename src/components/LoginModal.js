import React, { useContext, useState } from "react";
import { FormProvider, FTextField } from "./form";
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AuthContext } from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";
function LoginModal() {
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

  const [showPassword, setShowPassword] = useState(false);
  const defaultValue = {
    username: "Janice Nguyen",
    password: "Midori and Janice",
  };
  const methods = useForm({ defaultValue });
  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;
  const auth = useAuth();
  const onSubmit =  async (data) => {
    console.log(data, " data");
    setError.apply("afterSubmit", { message: "Server response error" });
    auth.loginModalUser(defaultValue.username,()=>{
      navigate(-1);
    })
   
  };

  const navigate = useNavigate();

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
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}
            <FTextField
              name="username"
              label="Username"
              value={defaultValue.username}
            ></FTextField>
            <FTextField
              name="password"
              label="Password"
              value={defaultValue.password}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></FTextField>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 1, width: "10ch" }}
          >
            Login
          </Button>
        </FormProvider>
      </Box>
    </Modal>
  );
}

export default LoginModal;
