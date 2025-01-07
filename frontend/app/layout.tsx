import StyledComponentsRegistry from "@/registry";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <StyledComponentsRegistry> 
          <header>
            <h1>Country Info App</h1>
            <nav>
              <a href="/">Home</a> | <a href="/country">Countries</a>
            </nav>
          </header>
          <main>{children}</main>
          </StyledComponentsRegistry>
        </body>
      </html>
    );
  }
  