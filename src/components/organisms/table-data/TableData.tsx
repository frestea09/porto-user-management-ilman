import { Box, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const TableData = ({ isLoading, users, data, columns }: any) => {
  if (isLoading) {
    return (
      <>
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress size={90} />
        </Box>
      </>
    );
  } else {
    return (
      <>
        <DataGrid
          rows={users ? users : data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </>
    );
  }
};
