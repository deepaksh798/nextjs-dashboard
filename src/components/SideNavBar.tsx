"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  CalendarDays,
  FileText,
  DollarSign,
  Settings,
  BarChart3,
  ClipboardList,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    name: "Employees",
    href: "/employees",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Attendance",
    href: "/attendance",
    icon: <UserCheck className="w-5 h-5" />,
  },
  { name: "Leave", href: "/leave", icon: <CalendarDays className="w-5 h-5" /> },
  {
    name: "Payroll",
    href: "/payroll",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: <ClipboardList className="w-5 h-5" />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`bg-base-100 border-r border-base-300 flex flex-col transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Logo and Toggle */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-base-300">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-content font-bold text-lg">
                  HR
                </span>
              </div>
              <span className="font-bold text-xl text-primary">Dashboard</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="btn btn-ghost btn-sm btn-circle"
          >
            {isCollapsed ? (
              <Menu className="w-5 h-5" />
            ) : (
              <X className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="menu px-2 gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${
                      isActive
                        ? "bg-primary text-primary-content"
                        : "hover:bg-base-200"
                    } ${isCollapsed ? "justify-center" : ""}`}
                    title={isCollapsed ? item.name : ""}
                  >
                    {item.icon}
                    {!isCollapsed && <span>{item.name}</span>}
                    {!isCollapsed && isActive && (
                      <span className="badge badge-sm badge-secondary">
                        Active
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-base-300">
            <div className="bg-secondary/10 rounded-lg p-3">
              <p className="text-xs font-semibold text-secondary">Need Help?</p>
              <p className="text-xs text-base-content/60 mt-1">
                Contact our support team
              </p>
              <button className="btn btn-secondary btn-xs mt-2 w-full">
                Get Support
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
