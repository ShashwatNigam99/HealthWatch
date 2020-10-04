import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import clsx from "clsx";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  formControl: {
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(7),
    // paddingTop: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
}));

export default function CustomizedAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Kishan Kumar Das</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Grid container fullWidth spacing={2}>
                    <Grid item xs={6} sm={6}>
                      Age
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      68
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Gender
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Male
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Aadhar
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      6516 8616 5865
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Co-morbidities
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Diabetes, Hypertension
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Mobile
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      9984656325
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Address
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      15, Tilak Road, Chanda Nagar, Lucknow
                    </Grid>
                  </Grid>
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <FormControl className={classes.formControl}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select labelId="category-label" required label="Category">
              <MenuItem value={"Ortho"}>Ortho</MenuItem>
              <MenuItem value={"Nervous-Stroke"}>Nervous and Stroke</MenuItem>
              <MenuItem value={"Urology"}>Urology</MenuItem>
              <MenuItem value={"Respiratory"}>Respiratory</MenuItem>
              <MenuItem value={"Circulatory"}>Circulatory</MenuItem>
              <MenuItem value={"Paediatric"}>Paediatric</MenuItem>
              <MenuItem value={"Gynae"}>Gynae</MenuItem>
              <MenuItem value={"Infectious"}>Infectious</MenuItem>
              <MenuItem value={"ENT"}>ENT</MenuItem>
              <MenuItem value={"Eye"}>Eye</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" size="small" color="primary">
            Mark as Complete
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Lakshmi Sharma</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Grid container fullWidth spacing={2}>
                    <Grid item xs={6} sm={6}>
                      Age
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      55
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Gender
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Female
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Aadhar
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      6568 6846 6515
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Co-morbidities
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Hypertension
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Mobile
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      6816516846
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      Address
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      72, Narahi Road, Alambagh, Lucknow
                    </Grid>
                  </Grid>
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <FormControl className={classes.formControl}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select labelId="category-label" required label="Category">
              <MenuItem value={"Ortho"}>Ortho</MenuItem>
              <MenuItem value={"Nervous-Stroke"}>Nervous and Stroke</MenuItem>
              <MenuItem value={"Urology"}>Urology</MenuItem>
              <MenuItem value={"Respiratory"}>Respiratory</MenuItem>
              <MenuItem value={"Circulatory"}>Circulatory</MenuItem>
              <MenuItem value={"Paediatric"}>Paediatric</MenuItem>
              <MenuItem value={"Gynae"}>Gynae</MenuItem>
              <MenuItem value={"Infectious"}>Infectious</MenuItem>
              <MenuItem value={"ENT"}>ENT</MenuItem>
              <MenuItem value={"Eye"}>Eye</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" size="small" color="primary">
            Mark as Complete
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
