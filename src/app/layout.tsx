import type { Metadata } from "next";
import './global.scss';

export const metadata: Metadata = {
  title: "Learn languages",
  description: "Project to learn different languages",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
