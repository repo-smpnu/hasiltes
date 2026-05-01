"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/layout/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    // Login page renders standalone, no sidebar
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 lg:ml-[260px] min-h-screen relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83-54.627 54.627-.83-.83L54.627 0zM0 54.627l.83.83L0 55.457v-.83zM54.627 60l.83-.83L60 54.627v.83L55.457 60h-.83zM0 0h.83L0 .83V0zm60 0v.83L59.17 0H60z\' fill=\'%23005c55\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] pointer-events-none opacity-50" />
        <div className="relative z-10 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
