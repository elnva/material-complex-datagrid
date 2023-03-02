import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { withStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";

const data = {
  device: {
    station: {
      zone_name: "Bench - Panels",
      factory_name: "Urban Splash House Factory",
      partner_name: "Urban Splash",
      station_name: "Bay 1"
    },
    device_id:
      "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
  }
};

export default function DenseTable() {
  const TableHeaderCell = withStyles((theme) => ({
    root: {
      fontWeight: "bold"
    }
  }))(TableCell);

  return (
    <Paper elevation={1} sx={{ padding: "1rem", marginBottom: "1rem" }}>
      <Typography variant="h6" component="div">
        Device
      </Typography>
      <Typography color="text.secondary">Station</Typography>
      <Table sx={{ maxWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ minWidth: 650 }}>
          <TableRow>
            <TableHeaderCell>Zone Name</TableHeaderCell>
            <TableHeaderCell align="right">Factory Name</TableHeaderCell>
            <TableHeaderCell align="right">Partner Name</TableHeaderCell>
            <TableHeaderCell align="right">Station Name</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={data.device.station.zone_name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {data.device.station.zone_name}
            </TableCell>
            <TableCell align="right">
              {data.device.station.factory_name}
            </TableCell>
            <TableCell align="right">
              {data.device.station.partner_name}
            </TableCell>
            <TableCell align="right">
              {data.device.station.station_name}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}
