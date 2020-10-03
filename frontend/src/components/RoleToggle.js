import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function RoleToggle() {
  const classes = useStyles();

  return (
    <div class="role-toggle">
      <Grid justify="center" alignItems="center" container spacing={3}>
        <Grid item xs={6}>
          <Button> Government Official </Button>
        </Grid>
        <Grid item xs={6}>
          <Button> Community Health Worker </Button>
        </Grid>
      </Grid>
    </div>
  );
}
