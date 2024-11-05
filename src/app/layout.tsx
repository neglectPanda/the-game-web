import React from "react";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Yes A Fan Of These Games</title>
        {/* <link rel="icon" href="" /> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
