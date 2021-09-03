import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
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

const InnerPage = ({onFindClick}) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState("");
  const [soi, setSoi] = React.useState("");
  

  const handleSOIChange = (event) => {
    setSoi(event.target.value);
  }
  const handleDistrictChange = (event) => {
    setAge(event.target.value);
  }; 
  const handleHospitalTypeChange = (event) => {
    setValue(event.target.value);
  };
  
  
  

  return (
    <div>
      <div className="inner">
        <div className="container">
          <label>Select State</label>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              --Select--
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={'West Bengal'}
              onChange={handleSOIChange}
              style={{ background: "white", width: "100%" }}
              label="Age"
            >
              <MenuItem value="West Bengal">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'West Bengal'}>West Bengal</MenuItem>
              
            </Select>
            
            

            
          </FormControl>
          <label>Select District</label>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              --Select--
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={'Kolkata'}
              onChange={handleDistrictChange}
              style={{ background: "white", width: "100%" }}
              label="Age"
            >
              <MenuItem value="Kolkata">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Kolkata'}>Kolkata</MenuItem>
              
            </Select>
            <RadioGroup
              aria-label="HospitalType"
              value={value}
              style={{
                width: "100%",
                margin: "0.5rem 0",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
              
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
                checked
              />
            </RadioGroup>

            
          </FormControl>
          <button type="submit" onClick={onFindClick}>Find</button>
        </div>
        
      </div>
      
    </div>
  );
};

export default InnerPage;
