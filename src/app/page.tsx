"use client";
import { Button } from "@mui/material";
import { useFetch } from "@/utils/api/jsonplaceholder/useFetch";
import { GridColDef } from "@mui/x-data-grid";
import { useUserStore } from "@/store/users/userStore";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { SubmitHandler } from "react-hook-form";
import { SectionTitle } from "@/components/organisms/section-title/SectionTitle";
import sectiontitlecontent from "@/content/sectiontitle.json";
import sectionDescription from "@/content/sectionDescription.json";
import { SectionDescription } from "@/components/organisms/section-description/SectionDescription";
import { TableData } from "@/components/organisms/table-data/TableData";
import { ModalComponent } from "@/components/organisms/ModalComponent/ModalComponent";
import { pageStyles } from "./page.styles";
import { InputsFormUser } from "@/components/organisms/section-form-modal/SectionFormModal.type";

export default function Home() {
  const { isLoading } = useFetch("/users");
  const [editUserId, setEditUserId] = useState<any>();
  const { users, deleteUser, fetchUsers, addUser, editUser } = useUserStore();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          <Box display={"flex"} gap={2}>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteUser(params.id)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                setOpen(true);
                setEditUserId(params.id);
              }}
            >
              Update
            </Button>
          </Box>
        </>
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setEditUserId(null);
  };
  const handleClose = () => setOpen(false);
  const onSubmit: SubmitHandler<InputsFormUser> = (data) => {
    editUserId ? editUser(data) : addUser(data);
    setOpen(false);
  };
  return (
    <Box sx={pageStyles.container}>
      <SectionTitle
        title={sectiontitlecontent.title}
        createdBy={sectiontitlecontent.createBy}
      />
      <SectionDescription
        descriptionSection={sectionDescription.descriptionSection}
        labelButton={sectionDescription.labelButton}
        handleOpen={handleOpen}
      />
      <ModalComponent
        open={open}
        editUserId={editUserId}
        handleClose={handleClose}
        onSubmit={onSubmit}
      />
      <TableData
        isLoading={isLoading}
        users={users}
        data={users}
        columns={columns}
      />
    </Box>
  );
}
