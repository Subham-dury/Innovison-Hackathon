import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import "./innerPage.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  btn: {
    marginRight: "1.5rem",
  },
  first: {
    backgroundColor: "#eafce2",
  },
  second: {
    backgroundColor: "#fbfae0",
  },
  third: {
    backgroundColor: "#fee3e3 !important",
  },
}));

const InnerPage = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState("female");

  const handleDistrictChange = (event) => {
    setAge(event.target.value);
  };
  const handleHospitalTypeChange = (event) => {
    setValue(event.target.value);
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const handleCheckBoxChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className="inner">
        <div className="container">
          <label>Select District</label>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              --Select--
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleDistrictChange}
              style={{ background: "white", width: "100%" }}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <RadioGroup
              aria-label="HospitalType"
              value={value}
              style={{
                width: "100%",
                margin: "0.5rem 0",
                display: "flex",
                flexDirection: "row",
              }}
              onChange={handleHospitalTypeChange}
            >
              <FormControlLabel
                value="Government Hospital"
                control={<Radio />}
                label="Government Hospital"
              />
              <FormControlLabel
                value="Govt. Requisitioned Pvt. Hospital"
                control={<Radio />}
                label="Govt. Requisitioned Pvt. Hospital"
              />
              <FormControlLabel
                value="Private Hospital"
                control={<Radio />}
                label="Private Hospital"
              />
            </RadioGroup>

            <div className="availabilty-container">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleCheckBoxChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="With available bed only"
              />
              <div style={{ fontSize: "1.1rem" }}>
                Colour Code for Availability:
              </div>
              <div className="button-container">
                <Button
                  className={`${classes.btn} ${classes.first}`}
                  variant="outlined"
                  color="primary"
                >
                  More than 20
                </Button>
                <Button
                  className={`${classes.btn} ${classes.second}`}
                  variant="outlined"
                  color="primary"
                >
                  Upto 20
                </Button>
                <Button
                  className={`{classes.btn} ${classes.third}`}
                  variant="outlined"
                  color="primary"
                >
                  No Beds
                </Button>
              </div>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default InnerPage;
