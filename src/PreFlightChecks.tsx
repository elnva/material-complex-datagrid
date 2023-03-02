import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { withStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

export default function PreFlightChecks({ checks }) {
  const TableHeaderCell = withStyles((theme) => ({
    root: {
      fontWeight: "bold"
    }
  }))(TableCell);

  const data = checks || [];
  if (data.length > 0)
    return (
      <Paper elevation={1} sx={{ padding: "1rem", marginBottom: "1rem" }}>
        <Typography variant="h6" component="div">
          Checked PreFlight Checks
        </Typography>
        <Table sx={{ maxWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead sx={{ minWidth: 650 }}>
            <TableRow>
              <TableHeaderCell>Content</TableHeaderCell>
              <TableHeaderCell align="right">Category</TableHeaderCell>
              <TableHeaderCell align="right">Images</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((check) => (
              <TableRow
                key={check.content}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {check.content}
                </TableCell>
                <TableCell align="right">{check.category}</TableCell>
                <TableCell align="right">
                  {
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      {check.images.map((image) => (
                        <a key={image.path} href={image.path}>
                          {image.title}
                        </a>
                      ))}
                    </Box>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
}
