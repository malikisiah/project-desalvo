import { Stack } from "expo-router";
import { TRPCReactProvider } from "@/src/trpc/react";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <TRPCReactProvider>
        <Stack />
      </TRPCReactProvider>
    </>
  );
}
