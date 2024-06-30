import { Outlet } from "react-router-dom";

export function LayoutPage() {
  return (
    <div className="sm:bg-convite bg-convite_mobile bg-100% bg-no-repeat bg-center min-h-screen w-full text-white">
      <Outlet />
    </div>
  );
}
