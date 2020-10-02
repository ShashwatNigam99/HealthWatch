import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('chw');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Role</FormLabel>
      <RadioGroup aria-label="Role" name="role" value={value} onChange={handleChange}>
        <FormControlLabel value="chw" control={<Radio />} label="CHW" />
        <FormControlLabel value="govt" control={<Radio />} label="Government official" />
      </RadioGroup>
    </FormControl>
  );
}