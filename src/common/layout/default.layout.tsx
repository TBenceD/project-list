import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export function DefaultLayout() {
  return (
    <main className="flex flex-col min-h-screen dark:bg-slate-950">
      <section className="flex-grow bg-slate-950">
        <Header />
        <div className="flex justify-center pt-24 sm:pt-40">
          <div className="w-full max-w-6xl rounded-2xl bg-cyan-600 p-4 sm:mb-16 sm:p-8 dark:bg-slate-900">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}
