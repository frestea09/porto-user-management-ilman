import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputsFormUser } from "./SectionFormModal.type";
import { styles } from "./SectionFormModal.styles";
import { useUserStore } from "@/store/users/userStore";
import Image from "next/image";
export const SectionFormModal = ({
  onSubmit,
  buttonLabel,
  labelNotificationRequired,
  editUserId,
}: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsFormUser>();
  const { users } = useUserStore();
  const findById = (data: any, id: number) => {
    return data.find((item: any) => item.id === id);
  };
  return (
    <>
      <Box
        flexDirection={"column"}
        gap={"1rem"}
        padding={"1rem"}
        onSubmit={handleSubmit(onSubmit)}
        sx={styles.container}
      >
        {editUserId && (
          <>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignContent={"center"}
              alignItems={"center"}
            >
              <img
                src={editUserId && findById(users, editUserId)?.picture}
                width={150}
                height={150}
                style={{ objectFit: "cover" }}
                alt={findById(users, editUserId)?.picture}
              />
            </Box>
          </>
        )}
        <Box display={"none"}>
          <TextField
            id="outlined-basic"
            label="Id"
            variant="outlined"
            inputProps={{ readOnly: true }}
            defaultValue={editUserId ? editUserId : users?.length}
            {...register("id")}
          />
          <TextField
            id="outlined-basic"
            label="picture"
            variant="outlined"
            inputProps={{ readOnly: true }}
            defaultValue={
              editUserId
                ? findById(users, editUserId)?.picture
                : `https://picsum.photos/200/300?random=${Math.random()}`
            }
            {...register("picture")}
          />
        </Box>

        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          defaultValue={editUserId && findById(users, editUserId)?.name}
          {...register("name", { required: true })}
        />
        {errors.name && <span>{labelNotificationRequired}</span>}

        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          defaultValue={editUserId && findById(users, editUserId)?.username}
          {...register("username", { required: true })}
        />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          defaultValue={editUserId && findById(users, editUserId)?.email}
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          defaultValue={editUserId && findById(users, editUserId)?.phone}
          {...register("phone", { required: true })}
        />
        <TextField
          id="outlined-basic"
          label="Website"
          variant="outlined"
          defaultValue={editUserId && findById(users, editUserId)?.website}
          {...register("website", { required: true })}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          {...register("address")}
        />
        <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          {...register("company")}
        />

        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          {editUserId ? "Edit" : buttonLabel}
        </Button>
      </Box>
    </>
  );
};
