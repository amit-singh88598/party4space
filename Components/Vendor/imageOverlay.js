import { IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React from "react";

function ImageOverlay(props) {
  return (
    <div>
      <div class="container">
        <div class="content">
          <div class="content-overlay" />
          <img
            class="content-image"
            src={props.url ? props.url : "/profile-user.png"}
            height="200"
            width="100%"
          />
          <div class="content-details fadeIn-bottom">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="icon-button-file"
              type="file"
              onChange={(event) => {
                console.log(event);
                props.onClick(event.target.files[0]);
              }}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                elevation={4}
                style={{
                  marginTop: 100,
                  marginLeft: 90,
                  backgroundColor: "#EAD373",
                }}
                aria-label="upload picture"
                component="span"
              >
                <Edit />
              </IconButton>
            </label>
          </div>
        </div>
        <div class="Fab--icon">
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
            onChange={(event) => {
              console.log(event);
              props.onClick(event.target.files[0]);
            }}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              elevation={4}
              style={{ marginTop: 10, backgroundColor: "#EAD373" }}
              aria-label="upload picture"
              component="span"
            >
              <Edit />
            </IconButton>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ImageOverlay;
