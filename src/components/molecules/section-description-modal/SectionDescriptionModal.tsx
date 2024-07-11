import { Typography } from "@mui/material";
import { SectionHeaderModal } from "../section-header-modal/SectionHeaderModal";
import sectionHeaderModal from "@/content/sectionHeaderModal.json";
export const SectionDescriptionModal = ({
  handleClose,
  descriptionModal,
  editUserId,
}: {
  handleClose?: void;
  descriptionModal: string;
  editUserId?: string;
}) => {
  return (
    <>
      <SectionHeaderModal
        editUserId={editUserId}
        handleClose={handleClose}
        title={sectionHeaderModal.title}
      />
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        {descriptionModal}
      </Typography>
    </>
  );
};
