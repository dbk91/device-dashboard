import { Outlet } from "react-router-dom";

import { AppBar } from "../../components/AppBar";

export function AppLayout() {
  return (
    <>
      <AppBar />
      <main className="h-screen container mx-auto pt-12">
        <Outlet />
      </main>
    </>
  );
}
