"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-purple">
        <header>
          <Header />
        </header>

        <main> {children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
