import { SectionDescriptionModal } from "@/components/molecules/section-description-modal/SectionDescriptionModal";
import { Modal, Backdrop, Fade, Box } from "@mui/material";
import { SectionFormModal } from "../section-form-modal/SectionFormModal";
import { style } from "./ModalComponent.styles";
import sectionDescriptionModal from "@/content/sectionDesctiptionModa.json";
import sectionFormModal from "@/content/sectionFormModal.json";
export const ModalComponent = ({
  open,
  handleClose,
  onSubmit,
  editUserId,
}: any) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <SectionDescriptionModal
              editUserId={editUserId}
              handleClose={handleClose}
              descriptionModal={sectionDescriptionModal.descriptionSection}
            />
            <SectionFormModal
              editUserId={editUserId}
              buttonLabel={sectionFormModal.buttonLabel}
              labelNotificationRequired={
                sectionFormModal.labelNotificationRequired
              }
              onSubmit={onSubmit}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
