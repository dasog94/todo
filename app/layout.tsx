'use client'

import type { Metadata } from 'next'
import React from "react"
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry"
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

// export const metadata: Metadata = {
//   title: 'todo',
//   description: 'i am working',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <CssBaseline />
          <Container component="main">
            <Typography component="h1" variant="h5">
              Todo
            </Typography>
            <Box>
              {children}
            </Box>
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  )
}
