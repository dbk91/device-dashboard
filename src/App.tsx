import { AppBar } from "./components/AppBar";
import { Column } from "./components/Column";

export function App() {
  return (
    <>
      <AppBar />
      <main className="container mx-2xl px-6">
        <div className="columns-4">
          <Column title="Requested" />
          <Column title="Purchased" />
          <Column title="Shipped" />
          <Column title="Installed" />
        </div>
      </main>
    </>
  );
}
