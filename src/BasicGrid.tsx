import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

import Event from "./Event";

function getDateTime(params) {
  const dateTime = new Date(params.row.occurence);
  return `${dateTime.toLocaleString()}`;
}

export default function BasicGrid({ gridData }) {
  const [current, setCurrent] = useState(null);

  const columns: GridColDef[] = [
    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 80,
      renderCell: (params) => (
        <Button
          variant="outlined"
          size="small"
          style={{ marginLeft: 16, marginRight: 16 }}
          tabIndex={params.hasFocus ? 0 : -1}
          onClick={() => {
            setCurrent(gridData.find((x) => x.job_event_id === params.id));
          }}
        >
          Open
        </Button>
      )
    },
    {
      field: "occurence",
      type: "dateTime",
      headerName: "Occurence",
      width: 150,
      valueGetter: getDateTime
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
      renderCell: (params) => (
        <Chip
          label={params.row.type}
          variant="outlined"
          color="success"
          size="small"
        />
      )
    },
    { field: "id", headerName: "Event ID", width: 100 },
    { field: "card_id", headerName: "Card ID", width: 100 },
    { field: "user", headerName: "User", width: 150 }
  ];

  const rows: GridRowsProp = gridData
    ? gridData.map((item) => {
        return {
          id: item.job_event_id,
          card_id: item.job_card_id,
          type: item.job_event_type,
          user: item.job_event_user,
          occurence: item.job_event_occurrence
        };
      })
    : [];
  return (
    <div style={{ height: 600, width: "100%" }}>
      {current ? (
        <React.Fragment>
          <Button
            variant="outlined"
            size="small"
            style={{ marginLeft: 0, marginBottom: 16 }}
            onClick={() => {
              setCurrent(null);
            }}
          >
            Back
          </Button>
          <Event eventData={current} />
        </React.Fragment>
      ) : (
        <DataGrid rows={rows} columns={columns} />
      )}
    </div>
  );
}
