import "./globals.css";

export const metadata = {
  title: "Lajitha-Portfolio",
  description: "Designed by Ragul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
