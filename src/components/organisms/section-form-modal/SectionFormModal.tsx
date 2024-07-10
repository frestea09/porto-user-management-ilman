import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputsFormUser } from "./SectionFormModal.type";
import { styles } from "./SectionFormModal.styles";
import { useUserStore } from "@/store/users/userStore";
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
        <Box display={"none"}>
          <TextField
            id="outlined-basic"
            label="Id"
            variant="outlined"
            inputProps={{ readOnly: true }}
            defaultValue={editUserId ? editUserId : users?.length}
            {...register("id")}
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
        {errors.username && <span>{labelNotificationRequired}</span>}

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          defaultValue={editUserId && findById(users, editUserId)?.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span>{labelNotificationRequired}</span>}

        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          defaultValue={editUserId && findById(users, editUserId)?.phone}
          {...register("phone", { required: true })}
        />
        {errors.phone && <span>{labelNotificationRequired}</span>}
        <TextField
          id="outlined-basic"
          label="Website"
          variant="outlined"
          defaultValue={editUserId && findById(users, editUserId)?.website}
          {...register("website", { required: true })}
        />
        {errors.website && <span>{labelNotificationRequired}</span>}
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          {...register("address")}
        />
        {errors.address && <span>{labelNotificationRequired}</span>}
        <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          {...register("company")}
        />

        {errors.company && <span>{labelNotificationRequired}</span>}

        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          {editUserId ? "Edit" : buttonLabel}
        </Button>
      </Box>
    </>
  );
};
