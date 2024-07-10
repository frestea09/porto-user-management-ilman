import { Typography } from "@mui/material";
import { SectionHeaderModal } from "../section-header-modal/SectionHeaderModal";
import sectionHeaderModal from "@/content/sectionHeaderModal.json";
export const SectionDescriptionModal = ({
  handleClose,
  descriptionModal,
}: any) => {
  return (
    <>
      <SectionHeaderModal
        handleClose={handleClose}
        title={sectionHeaderModal.title}
      />
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        {descriptionModal}
      </Typography>
    </>
  );
};
