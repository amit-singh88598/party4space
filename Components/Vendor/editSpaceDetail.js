import React from "react";
import { Button, Card, Grid, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { AddAPhoto, AddLocation } from "@material-ui/icons";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
  { title: " WIFI" },
  { title: " Parking" },
  { title: " Projector" },
  { title: " Security" },
  { title: " AC" },
  { title: " Sound System" },
  { title: " Washroom" },
  { title: " Dining Hall" },
];

function EditSpaceDetail(props) {
  return (
    <div style={{ marginTop: 50 }}>
      <Card
        elevation={4}
        style={{ padding: 20, margin: 20, paddingBottom: 100 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <Typography style={{ fontSize: "2em", fontWeight: 600 }}>
            Edit Space Details
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="standard-search"
              label="Space Name"
              required
              type="text"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="standard-search"
              label="Space Size in sqft"
              required
              type="text"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              id="standard-search"
              label="Street No."
              required
              type="text"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="standard-search"
              label="Locality"
              required
              type="text"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="standard-search"
              label="Pin Code"
              required
              type="text"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="standard-search"
              label="City"
              required
              type="text"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="standard-search"
              label="Landmark"
              required
              type="text"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="standard-search"
              label="State"
              required
              type="text"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={top100Films}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              required
              renderOption={(option, { selected }) => (
                <React.Fragment>
                  <Checkbox
                    color="primary"
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </React.Fragment>
              )}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Amenities" />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              label="Multiline"
              required
              multiline
              rows={5}
              id="standard-search"
              label="Description"
              type="text"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              style={{ marginTop: 20 }}
              variant="contained"
              fullWidth
              color="primary"
            >
              Add Images <AddAPhoto style={{ marginLeft: 20 }} />
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              style={{ marginTop: 20 }}
              variant="contained"
              fullWidth
              color="primary"
            >
              Add Location <AddLocation style={{ marginLeft: 20 }} />
            </Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default EditSpaceDetail;
