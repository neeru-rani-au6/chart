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
import { updateData } from "../redux/action/data";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

const Update = ({
  showUpdateDataModal,
  setShowUpdateDataModal,
  data,
  close,
}) => {
  const dispatch = useDispatch();

  const formHandler = (values) => {
    dispatch(updateData(values));
    setShowUpdateDataModal(false);
    close();
  };
  if (data && data.name) {
    return (
      <Formik
        initialValues={{
          _id: data._id,
          name: data.name,
          email: data.email,
          value: data.value,
          criteria: data.criteria,
          activeDay: data.activeDay,
          priceSignal: data.priceSignal,
        }}
        onSubmit={formHandler}
      >
        {({ handleSubmit, handleChange, values }) => (
          <div>
            <Modal
              show={showUpdateDataModal}
              onHide={() => setShowUpdateDataModal(false)}
            >
              <Modal.Header>
                <Modal.Title>DATA UPDATE</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
                    />
                    <FormControl fullWidth style={{ marginBottom: "10px" }}>
                      <TextField
                        name="email"
                        value={values.email}
                        type="text"
                        onChange={handleChange}
                        size="small"
                        id="outlined-error-helper-text"
                        variant="outlined"
                        placeholder="Email"
                      />
                    </FormControl>
                  </FormControl>
                  <FormControl
                    fullWidth
                    component="fieldset"
                    style={{ marginBottom: "10px" }}
                  >
                    <FormLabel component="legend">Criteria</FormLabel>
                    <RadioGroup
                      aria-label="criteria"
                      name="criteria"
                      value={values.criteria}
                      row
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
                      value={values.value}
                      name="value"
                      onChange={handleChange}
                      size="small"
                      id="outlined-error-helper-text"
                      variant="outlined"
                      placeholder="Value"
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
                      onChange={handleChange}
                      name="priceSignal"
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                  <FormControl size="small" variant="outlined" fullWidth>
                    <InputLabel htmlFor="age-native-simple">
                      Active Day
                    </InputLabel>
                    <Select
                      native
                      value={values.activeDay}
                      name="activeDay"
                      onChange={handleChange}
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
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="outlined"
                  onClick={() => setShowUpdateDataModal(false)}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </Formik>
    );
  } else {
    return null;
  }
};

export default Update;
