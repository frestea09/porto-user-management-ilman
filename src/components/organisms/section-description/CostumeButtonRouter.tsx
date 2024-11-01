"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
export default function CostumeRouterButtom({
  linkUrl,
  colorButton,
  lableButton,
  prosessHandle,
}: {
  linkUrl: string;
  colorButton: any;
  prosessHandle: any;
  lableButton: string;
}) {
  const router = useRouter();
  if (colorButton) {
    return (
      <Button
        variant="contained"
        color={colorButton}
        onClick={() => {
          router.push(linkUrl);
        }}
      >
        {lableButton}
      </Button>
    );
  } else {
    return (
      <Button
        fullWidth
        variant="contained"
        color={colorButton}
        onClick={() => router.push(linkUrl)}
      >
        {lableButton}
      </Button>
    );
  }
}
