import "./tailwind-globals.scss";
import { ResponsiveAppBar } from "../components";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-slate-700">
        <ResponsiveAppBar />
        <div className="p-4 mt-16">{children}</div>
      </body>
    </html>
  );
}
