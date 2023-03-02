import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { Typography } from "@mui/material";

export default function InProcessCheck({ check }) {
  function renderDateTime(dateTimeValue) {
    const dateTime = new Date(dateTimeValue);
    return `${dateTime.toLocaleString()}`;
  }

  return (
    <Paper elevation={1} sx={{ padding: "1rem", marginBottom: "1rem" }}>
      <Typography sx={{ marginTop: "1rem" }} variant="h6" component="div">
        In Process Check
      </Typography>
      <Typography sx={{ marginBottom: "1rem" }} color="text.secondary">
        <strong>Adressed On:</strong> {renderDateTime(check.addressed_on)}
      </Typography>
      <div>
        <strong>Name:</strong> {check.name || "N/A"}
      </div>
      <div>
        <strong>Check Status:</strong> {check.check_status}
      </div>
      <div>
        <strong>Order:</strong> {check.order}
      </div>
      <div>
        <strong>Images:</strong>
        <Box sx={{ display: "flex", gap: "10px" }}>
          {check.images.map((image) => (
            <a key={image.path} href={image.path}>
              {image.title}
            </a>
          ))}
        </Box>
      </div>
    </Paper>
  );
}
