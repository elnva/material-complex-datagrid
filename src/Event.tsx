import * as React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Paper,
  /* the components you used */
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import Device from "./Device";
import InProcessCheck from "./InProcessCheck";
import PreFlightChecks from "./PreFlightChecks";
/**
 * how you used the components
 */
export default function Event({ eventData }) {
  function renderDateTime(dateTimeValue) {
    const dateTime = new Date(dateTimeValue);
    return `${dateTime.toLocaleString()}`;
  }

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  function renderTitle(title) {
    return toTitleCase(title.split("_").join(" "));
  }
  if (eventData) {
    const device = eventData.job_event_metadata.device && (
      <Device deviceData={eventData.job_event_metadata.device} />
    );

    const inProcessCheck = eventData.job_event_metadata.in_process_check && (
      <InProcessCheck check={eventData.job_event_metadata.in_process_check} />
    );

    const preFlightChecks = eventData.job_event_metadata
      .checked_pre_flight_checks && (
      <PreFlightChecks
        checks={eventData.job_event_metadata.checked_pre_flight_checks}
      />
    );

    return (
      <React.Fragment>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {renderDateTime(eventData.job_event_occurrence)}
        </Typography>
        <Typography variant="h5" component="div">
          {renderTitle(eventData.job_event_type)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {eventData.job_event_user}
        </Typography>
        {eventData.job_event_metadata && (
          <React.Fragment>
            {device}
            {eventData.job_event_metadata.causes && (
              <React.Fragment>
                <Typography
                  sx={{ marginBottom: "0" }}
                  variant="h6"
                  component="div"
                >
                  Causes
                </Typography>
                {eventData.job_event_metadata.causes &&
                  Object.entries(eventData.job_event_metadata.causes).map(
                    (item) => {
                      const [key, values] = item;
                      return (
                        <Typography component="div">
                          <strong>{key + ": "}</strong> {values.join(", ")}
                        </Typography>
                      );
                    }
                  )}
              </React.Fragment>
            )}
            {inProcessCheck}
            {preFlightChecks}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
