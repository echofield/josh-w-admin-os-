import "./globals.css";
import { Inter } from 'next/font/google';
import Background from "@/components/Background";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Josh W. | Implementation OS",
  description: "The digital extension of Josh W's proven methodology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen antialiased">
          <Background />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
