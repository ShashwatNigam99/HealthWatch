import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Kishan Kumar Das</Typography>
          <Typography className={classes.secondaryHeading}>Male, 68</Typography>
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
                  </Grid>
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/><br/>
    </div>
  );
}
