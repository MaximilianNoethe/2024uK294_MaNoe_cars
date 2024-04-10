import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import LoginService from "../../Service/Authorization";
import { defaultInstance } from "../../Service/Api";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    LoginService(defaultInstance)
      .login({ email, password })
      .then((response: { data: { accessToken: string } }) => {
        console.log("response", response);
        localStorage.setItem("token", "Bearer " + response.data.accessToken);
        navigate("/car");
      })
      .catch((e) => {
        console.error(e.response.data);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate, // Validate function added here
    onSubmit: (values) => {
      handleSubmit(values.email, values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "400px",
          margin: "auto",
          padding: "16px",
        }}
      >
        <TextField
          id="standard-username-input"
          label="Username"
          name="email"
          type="username"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)} // Error handling
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="standard-password-input"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button
          variant="outlined"
          size="medium"
          sx={{
            color: "grey",
            borderColor: "grey",
          }}
          type="submit"
        >
          Log in
        </Button>
      </div>
    </form>
  );
}
