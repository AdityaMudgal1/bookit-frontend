import "./globals.css";
import Header from "../../components/Header";



export const metadata = {
  title: "BookIt — Travel Experiences",
  description: "Discover and book amazing travel experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navbar */}
        <Header />
        {/* Main content */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
