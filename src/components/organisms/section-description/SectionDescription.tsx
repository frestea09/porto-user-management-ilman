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
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        flexDirection={"column"}
        gap={1}
      >
        <Typography variant="h6" fontWeight={600}>
          {"Description"}
        </Typography>
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
