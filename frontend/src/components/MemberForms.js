import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";
import ControlledAccordion from "./ControlledAccordion";
import IconButton from "@material-ui/core/IconButton";
import { GridList } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";

import Comorbidities from "./Comorbidities";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    // paddingTop: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
}));

export default function MemberForms(members) {
  const classes = useStyles();
  // const [
  //   firstName, setFirstName,
  //   lastName, setLastName,
  //   age, setAge,
  //   gender, setGender,
  //   coMorbidities, setCoMorbidities
  // ] = React.useState('');
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
    <React.Fragment>
      <ControlledAccordion />
      <Grid container spacing={15} direction="row">
        <Grid item xs={10} sm={10} md={11} align="flex-start">
          <Typography
            variant="h6"
            style={{ paddingTop: 10 }}
            justify="flex-start"
          >
            New group member
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={1} align="flex-end">
          <IconButton aria-label="add">
            <Icon color="primary" style={{ fontSize: 40 }}>
              add_circle
            </Icon>
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            required
            id="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid verticalAlign="bottom" item xs={12} sm={6} md={6}>
          <TextField
            required
            id="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            required
            type="number"
            id="age"
            label="Age"
            fullWidth
            autoComplete="age"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select labelId="gender-label" required fullWidth label="Gender">
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Non binary"}>Non binary</MenuItem>
              <MenuItem value={"Rather not say"}>Rather not say</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <TextField
            required
            type="number"
            id="aadharCardNumber"
            label="Aadhar card number"
            fullWidth
            autoComplete="aadhar-number"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Comorbidities fullWidth/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}></Grid>
      </Grid>
    </React.Fragment>
  );
}
