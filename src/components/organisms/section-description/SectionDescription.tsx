import { Box, Typography, Button } from "@mui/material";

export const SectionDescription = ({
  handleOpen,
  descriptionSection,
  labelButton,
}: {
  descriptionSection: string;
  labelButton: string;
  handleOpen: () => void;
}) => {
  return (
    <>
      <Box display={"flex"} alignItems={"flex-start"}>
        <Typography variant="body1">{descriptionSection}</Typography>
      </Box>
      <Box>
        <Button color="primary" variant="contained" onClick={handleOpen}>
          {labelButton}
        </Button>
      </Box>
    </>
  );
};
