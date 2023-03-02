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
import BasicGrid from "./BasicGrid";
import DefaultData from "./DefaultData";

/**
 * how you used the components
 */
export default function App() {
  const [eventsState, setEventState] = useState([]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ebeb77c8-82b9-4373-adc1-fcfa3b73b3a7/trunk_test-job_events.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230301T100258Z&X-Amz-Expires=86400&X-Amz-Signature=57e350dd416260fb001d48539ba0e9d4b43194e939a77be65bde8f482d418593&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22trunk_test-job_events.json%22&x-id=GetObject"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
        setData(DefaultData);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          minWidth: "650px",
          overflow: "scroll"
        }}
      >
        <Box
          sx={{
            boxSizing: "content-box",
            padding: "1rem",
            height: "100vh"
          }}
        >
          <Box
            sx={{
              boxSizing: "content-box",
              paddingBottom: "1rem"
            }}
          >
            <Typography variant="h4">Job Events</Typography>
            {loading && <div>A moment please...</div>}
            {data && data.length + " total events"}
          </Box>

          {data && <BasicGrid gridData={data} />}
        </Box>
      </Container>
    </React.Fragment>
  );
}
