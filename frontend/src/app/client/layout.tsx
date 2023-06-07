import "./style.css";
import AppBar from "./AppBar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-slate-200">
      <AppBar />
      <main className="flex min-h-screen flex-col justify-between mx-5 my-2 p-5 bg-slate-300 border-md shadow-md">
        {children}
      </main>
    </section>
  );
}
