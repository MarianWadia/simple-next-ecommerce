import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/adminPanel/authProvider";
import App from "./App";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce | Next App",
  description: "simple e-commerce app built with NextJs, Redux and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={inter.className}>
          <AuthProvider>
            <App>
              {children}
            </App>  
          </AuthProvider>
          <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
