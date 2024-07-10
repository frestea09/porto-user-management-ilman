import { Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./SectionHeaderModal.style";

export const SectionHeaderModal = ({ handleClose, title }: any) => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          id="transition-modal-title"
          variant="h6"
          component="h2"
          sx={styles.title}
        >
          {title}
        </Typography>
        <Box sx={styles.containerButton}>
          <Button variant="text" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};
