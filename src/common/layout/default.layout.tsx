import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export function DefaultLayout() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950">
      <section className="flex-grow bg-slate-950">
        <Header />
        <div className="flex justify-center pt-24 sm:pt-40">
          <div className="w-full overflow-auto max-w-6xl rounded-2xl p-4 sm:mb-16 sm:p-8 bg-slate-900">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}
