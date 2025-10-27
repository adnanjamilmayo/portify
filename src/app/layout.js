import "./globals.css";

export const metadata = {
  title: "Portify - Build Your Portfolio",
  description: "Build your AI-powered developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
