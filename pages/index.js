import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/action";
import {
  ButtonGroup,
  TextField,
  Button,
  IconButton,
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import Image from "next/image";
import tp from "../public/img/descarga.jpg";
import { LinkedIn, Facebook, Instagram, AccountCircle, VisibilityOff, Visibility } from "@mui/icons-material";

export default function Login() {
  const dispatch = useDispatch();
  const [formulario, setFormulario] = useState({
    userName: "",
    password: "",
  });
  const [values,setValues] = useState({
      showPassword:false
  })
  const [error, setError] = useState('')
  const [open,setOpen] = useState(false)
  const [desabilitar, setDisabled] = useState(false)
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
      setDisabled(true)
    if (formulario.userName == "" && formulario.password == "") {
        setError('Llene los datos requeridos')
        handleClickOpen()
        setDisabled(false)
      return;
    }
    dispatch(login(formulario, setError,setOpen,setDisabled));
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="d-flex flex-column">
      <div>
        <Image src={tp} width={50} height={50} alt="tp_logo" />
      </div>

      <h1 className="text-center tp-color">Sign in to Teleperformance</h1>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <IconButton size="medium" className="borde-grey borde-gradiant mx-2">
          {" "}
          <LinkedIn fontSize="inherit"  color="primary" />
        </IconButton>
        <IconButton size="medium" className="borde-grey borde-gradiant mx-2">
          {" "}
          <Facebook fontSize="inherit" color="primary" />
        </IconButton>
        <IconButton size="medium" className="borde-grey borde-gradiant mx-2">
          <Instagram fontSize="inherit" color="primary" />
        </IconButton>
      </div>
      <p className="text-center">Or use your email account:</p>
       <div className="d-flex flex-column align-items-center px-3 mb-4">

        <div className="d-flex align-items-end w-100 mw-500 mb-3">
        <AccountCircle className="disapearce" sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField className="w-100" name="userName" onChange={handleChange} id="input-with-sx" label="User Name" variant="standard" />
         </div>
         <Box className="w-100 mw-500 pl-32 mb-4">
         <FormControl sx={{ m: 1, width: '100%' }} className="w-100" variant="standard">
             
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            className="w-100"
            onChange={handleChange}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
         </Box>
      <Button className="mx-auto w-100 mw-500 d-block" id="button_submit" disabled={desabilitar} onClick={handleSubmit} variant="contained" color="primary">SIGN IN</Button>
       </div>
       
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Error!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
