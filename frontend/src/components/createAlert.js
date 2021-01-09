import React from "react";
import {
  FormControl,
  TextField,
  FormLabel,
  InputLabel,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import { DataAdd } from "../redux/action/data";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";

const AlertSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  priceSignal: Yup.string().required("Price Signal is required"),
  activeDay: Yup.string().required("Active Day is required"),
  email: Yup.string().email().required("Email is required"),
  value: Yup.string().required("value is required"),
});

const useStyles = makeStyles((theme) => ({
  rounded: {
    borderRadius: "15px",
  },
  boldFont: {
    fontWeight: "600",
  },
}));

const CreateAlert = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmitAlert = (values) => {
    dispatch(DataAdd(values));
  };

  return (
    <Formik
      validationSchema={AlertSchema}
      initialValues={{
        name: "",
        email: "",
        value: "",
        criteria: "",
        activeDay: "",
        priceSignal: "",
      }}
      onSubmit={handleSubmitAlert}
    >
      {({ handleSubmit, handleChange, errors, values, touched }) => (
        <>
          <div className="bg-white p-3">
            <div className={`${classes.boldFont} h6`}>Create Alert</div>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth style={{ marginBottom: "10px" }}>
                <TextField
                  name="name"
                  value={values.name}
                  type="text"
                  onChange={handleChange}
                  size="small"
                  id="outlined-error-helper-text"
                  variant="outlined"
                  placeholder="Name"
                  error={!!(errors.name && touched.name)}
                  helperText={errors.name}
                />
              </FormControl>
              <FormControl fullWidth style={{ marginBottom: "10px" }}>
                <TextField
                  name="email"
                  value={values.email}
                  type="email"
                  onChange={handleChange}
                  size="small"
                  id="outlined-error-helper-text"
                  variant="outlined"
                  placeholder="Email"
                  error={!!(errors.email && touched.email)}
                  helperText={errors.email}
                />
              </FormControl>
              <FormControl
                fullWidth
                component="fieldset"
                style={{ marginBottom: "10px" }}
              >
                <FormLabel component="legend">Criteria</FormLabel>
                <RadioGroup
                  aria-label="criteria"
                  value={values.criteria}
                  row
                  name="criteria"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Greater than"
                    control={<Radio />}
                    label="Greater than"
                  />
                  <FormControlLabel
                    value="Lesser than"
                    control={<Radio />}
                    label="Lesser than"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{ marginBottom: "10px" }}>
                <TextField
                  name="value"
                  value={values.value}
                  onChange={handleChange}
                  size="small"
                  id="outlined-error-helper-text"
                  variant="outlined"
                  placeholder="Value"
                  error={!!(errors.value && touched.value)}
                  helperText={errors.value}
                />
              </FormControl>
              <FormControl
                size="small"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "10px" }}
              >
                <InputLabel htmlFor="age-native-simple">
                  Price Signal
                </InputLabel>
                <Select
                  native
                  value={values.priceSignal}
                  name="priceSignal"
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <FormControl size="small" variant="outlined" fullWidth>
                <InputLabel htmlFor="age-native-simple">Active Day</InputLabel>
                <Select
                  native
                  value={values.activeDay}
                  onChange={handleChange}
                  name="activeDay"
                >
                  <option aria-label="None" value="" />
                  <option value={"Monday"}>Monday</option>
                  <option value={"Tuesday"}>Tuesday</option>
                  <option value={"Wednesday"}>Wednesday</option>
                  <option value={"Thursday"}>Thursday</option>
                  <option value={"Friday"}>Friday</option>
                  <option value={"Saturday"}>Saturday</option>
                  <option value={"Sunday"}>Sunday</option>
                  <option value={"Everyday"}>Everyday</option>
                </Select>
              </FormControl>
              <Button
                type="submit"
                style={{ backgroundColor: "#1a163d" }}
                className="text-white px-4 mt-2"
              >
                Submit
              </Button>
            </form>
          </div>
        </>
      )}
    </Formik>
  );
};
export default CreateAlert;
