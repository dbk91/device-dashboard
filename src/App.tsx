import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { DeviceInfo } from "./pages/DeviceInfo";
import { NotFound } from "./pages/NotFound";
import { AppLayout } from "./components/AppLayout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/devices/:deviceId" element={<DeviceInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
