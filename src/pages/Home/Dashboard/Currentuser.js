import React, { useState } from "react";
import {
  Container,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Typography,
  TextField,
  styled,
  Avatar,
  TableCell,
  Paper,
  FormControl,
  Checkbox,
  FormControlLabel,
  TablePagination,
} from "@mui/material";
import { MdStarRate } from "react-icons/md";
import Teamskills from "./Teamskills";

const Filterbox = styled("div")({
  display: "flex",
  alignItems: "center",
  background: "#F7F8F9",
  padding: "0.75rem 1.25rem",
  "& .css-xjoyrw-MuiInputBase-root-MuiOutlinedInput-root": {
    borderRadius: "0.25rem",
    background: "#fff",
    border: "1px solid #DBDFE4",
    boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075)",
    color: "#495057",
    padding: "5px",
  },
  "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "0px",
  },
  "& input::placeholder": {
    fontSize: "16px",
  },
  "& .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label": {
    color: "#112b4a",
    fontSize: "15px",
    fontWeight: 400,
  },
});
const Containrbox = styled("div")({
  background: "#fff",

  boxShadow:
    "0 10px 25px 0 rgba(50, 50, 93, 0.07), 0 5px 15px 0 rgba(0, 0, 0, 0.07)",
  "& p": {
    color: "#112b4a",
  },
});
const Tablebox = styled("div")({
  "& .css-l1vhqf-MuiTableCell-root": {
    color: "#112b4a",
    fontSize: "14px",
    padding: "0px 16px",
  },
  "& .css-ka97d5-MuiTable-root": {
    width: "1100px",
  },
  "& svg": {
    color: "#ECEEF0",
    fontSize: "24px",
  },
  "& span": {
    fontWeight: "600",
    fontSize: "0.675rem",
    padding: "0.25rem ",
    borderRadius: "2px",
  },
});

const tabledata = [
  {
    avtart: "/images/256.jpg",
    name: "Michael Smith",
    current: "Black Ops",
    project: "12",
    status: "ADMIN",
    lastactivity: "3 days ago",
    earnings: "	$12,402	",
  },
  {
    avtart: "/images/256.jpg",
    name: "Connie Smith",
    current: "Backend Ltd",
    project: "12",
    status: "USER",
    lastactivity: "1 week ago",
    earnings: "	$12,402	",
  },
  {
    avtart: "/images/256.jpg",
    name: "John Connor",
    current: "Frontted",
    project: "12",
    status: "MANAGER",
    lastactivity: "1 week ago",
    earnings: "	$12,402	",
  },
  {
    avtart: "/images/256.jpg",
    name: "Michael Smith",
    current: "Black Ops",
    project: "12",
    status: "ADMIN",
    lastactivity: "3 days ago",
    earnings: "	$12,402	",
  },
  {
    avtart: "/images/256.jpg",
    name: "Connie Smith",
    current: "Backend Ltd",
    project: "12",
    status: "USER",
    lastactivity: "1 week ago",
    earnings: "	$12,402	",
  },
  {
    avtart: "/images/256.jpg",
    name: "Connie Smith",
    current: "Backend Ltd",
    project: "12",
    status: "USER",
    lastactivity: "1 week ago",
    earnings: "	$12,402	",
  },
  {
    avtart: "/images/256.jpg",
    name: "Connie Smith",
    current: "Backend Ltd",
    project: "12",
    status: "USER",
    lastactivity: "1 week ago",
    earnings: "	$12,402	",
  },
  {
    avtart: "/images/256.jpg",
    name: "Connie Smith",
    current: "Backend Ltd",
    project: "12",
    status: "USER",
    lastactivity: "1 week ago",
    earnings: "	$12,402	",
  },
];
function Currentuser() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box>
      <Container>
        <Containrbox>
          <Box padding="0.75rem 1.25rem">
            <Typography
              variant="body1"
              style={{ color: "rgba(17, 43, 74, 0.84)" }}
            >
              Current Users
            </Typography>
          </Box>
          <Filterbox>
            <Typography variant="body1">Filter by:</Typography>
            <Box ml={1}>
              <TextField
                variant="outlined"
                placeholder="Type a name"
                size="small"
              />
            </Box>
            <Box pl={5}>
              <FormControlLabel
                control={<Checkbox />}
                label="Made a Purchase?"
              />
            </Box>
          </Filterbox>
          <Tablebox>
            <TableContainer component={Paper}>
              <Table className="table">
                <TableHead>
                  <TableRow>
                    <TableCell>Employee</TableCell>
                    <TableCell>Current Employer</TableCell>
                    <TableCell>Projects</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Last Activity</TableCell>
                    <TableCell>Earnings </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tabledata
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((data) => {
                      return (
                        <TableRow>
                          <TableCell>
                            <Box display="flex" alignItems="center">
                              <Avatar src={data.avtart} />
                              <Box pl={2}> {data.name}</Box>
                            </Box>
                          </TableCell>
                          <TableCell sx={{ color: "#4a90e2" }}>
                            <Box display="flex" alignItems="center">
                              {data.current}
                              <MdStarRate style={{ paddingLeft: "10px" }} />
                            </Box>
                          </TableCell>
                          <TableCell>{data.project}</TableCell>
                          <TableCell>
                            <span
                              style={
                                data.status == "ADMIN"
                                  ? { background: "#ffc107", color: "#212529" }
                                  : data.status === "USER"
                                  ? { background: "#48BA16", color: "#fff" }
                                  : { background: "#308AF3", color: "#fff" }
                              }
                            >
                              {data.status}
                            </span>
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "rgba(55, 77, 103, 0.54)",
                              fontSize: "0.8125rem",
                              fontWeight: "400",
                            }}
                          >
                            {data.lastactivity}
                          </TableCell>
                          <TableCell>{data.earnings}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={tabledata.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Tablebox>
        </Containrbox>
      </Container>
    </Box>
  );
}
export default Currentuser;
