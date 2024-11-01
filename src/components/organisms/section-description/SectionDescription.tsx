import { Box, Typography, Button, Link } from "@mui/material";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import CostumeRouterButtom from "./CostumeButtonRouter";
export const SectionDescription = ({
  handleOpen,
  descriptionSection,
  labelButton,
  children,
  href,
}: {
  descriptionSection: string;
  labelButton: string;
  children: any;
  handleOpen: () => void;
  href: string; // Change 'any' to 'string' for better type safety
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
      <Box display={"flex"} gap={2}>
        <Button color="primary" variant="contained" onClick={handleOpen}>
          {labelButton}
        </Button>
        <CostumeRouterButtom
          linkUrl="/login"
          colorButton="error"
          lableButton="Logout"
        />
      </Box>
    </>
  );
};
