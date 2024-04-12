import React from "react";
import './jobs-grid.scss'
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { IJob } from "../../types/global.typing";
const columns : GridColDef[]=[
    {field:"id",headerName:"ID",width:100},
    {field:"title",headerName:"Title",width:200},
    {field:"level",headerName:"Level",width:150},
    {field:"componyName",headerName:"Company Name",width:150},
    {field:"createdAt",headerName:"Creation Time",width:150,
    renderCell:(params)=>moment(params.row.createdAt).fromNow(), 
    },
    {field:"",headerName:"",width:150},
    {field:"",headerName:"",width:150}, 
]

interface IJobsGridProps {
    data : IJob[]
}
const JobsGrid = ({data}:IJobsGridProps) => {
  return <Box sx={{width:"100%",height:450}} className="job-grid">
    <DataGrid 
    rows={data} 
    columns={columns}
    getRowId={(row)=>row.id}
    rowHeight={50}
    />
  </Box>;
};

export default JobsGrid;
