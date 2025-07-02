// Import Google Fonts (Geist Sans and Mono) from next/font
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Make sure this path is correct

// Load the fonts with CSS variable names
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Export metadata for SEO
export const metadata = {
  title: "AI Skin Analysis",
  description: "Analyze and improve your skin health with AI.",
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
