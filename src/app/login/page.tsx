// pages/login.js
"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CostumeRouterButtom from "@/components/organisms/section-description/CostumeButtonRouter";

export default function Login() {
  //   const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // TODO: Implement login logic here
    // Misalnya, melakukan panggilan API untuk memverifikasi kredensial

    // Contoh logika login yang sederhana
    if (email && password) {
      // Jika login berhasil, arahkan ke halaman beranda
      //   router.push("/"); // Redirect to home page after login
    } else {
      // Tampilkan pesan kesalahan jika login gagal
      alert("Please enter your email and password.");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "5%",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <LockOutlinedIcon style={{ fontSize: 40, marginBottom: "10px" }} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <CostumeRouterButtom linkUrl="/" lableButton="Sign In" />
        </form>
      </Paper>
    </Container>
  );
}
