import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AppContextProvider } from "@/providers/AppContextProvider";
import SearchOverlay from "@/components/shared/SearchOverlay";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Frontier",
  description: "A minimal and modern blog design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={cn("h-full", "antialiased", inter.variable)}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppContextProvider>
            {children}
            <SearchOverlay />
          </AppContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
