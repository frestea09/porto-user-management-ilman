import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { styles } from "./Footer.style";

const Footer = ({ name }: { name: string }) => {
  return (
    <Box component="footer" sx={styles.container}>
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="#">
            {name}
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
