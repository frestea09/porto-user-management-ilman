import { Box, Typography } from "@mui/material";
import { SectionTitleType } from "./SectionTitle.type";
export const SectionTitle = ({ title, createdBy }: SectionTitleType) => {
  return (
    <>
      <Box display="flex" flexDirection={"column"} alignItems="flex-start">
        <Typography variant="h4" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          by {createdBy}
        </Typography>
      </Box>
    </>
  );
};
