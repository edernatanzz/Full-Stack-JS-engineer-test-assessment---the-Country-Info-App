import StyledComponentsRegistry from "@/registry";
import "../styles/globals.css";
import Header from "@/components/header/header";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <StyledComponentsRegistry>
          <Header/>
          <main>{children}</main>
          </StyledComponentsRegistry>
        </body>
      </html>
    );
  }
  