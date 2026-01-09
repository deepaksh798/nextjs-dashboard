"use client";

import {
  Bell,
  Search,
  Settings,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("loggedIn");
    router.push("/login");
  };

  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-4 shadow-sm">
      {/* Left side - Search */}
      <div className="flex-1">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full max-w-xs focus:outline-primary"
            />
          </div>
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex-none gap-2 flex items-center">
        {/* Notifications */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle flex items-center justify-center"
          >
            <div className="indicator">
              <Bell className="w-5 h-5" />
              <span className="badge badge-xs badge-primary indicator-item">
                3
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-1 card card-compact dropdown-content w-80 bg-base-100 shadow-xl border border-base-300"
          >
            <div className="card-body">
              <h3 className="font-bold text-lg text-primary">Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2 hover:bg-base-200 rounded-lg cursor-pointer">
                  <div className="avatar placeholder">
                    <div className="bg-primary content text-primary-content rounded-full w-10 flex items-center justify-center">
                      <span className="text-xs">JD</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">New leave request</p>
                    <p className="text-xs text-base-content/60">
                      John Doe requested 3 days leave
                    </p>
                    <p className="text-xs text-secondary mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 hover:bg-base-200 rounded-lg cursor-pointer">
                  <div className="avatar placeholder">
                    <div className="bg-secondary text-secondary-content rounded-full w-10 flex items-center justify-center">
                      <span className="text-xs">AS</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Profile updated</p>
                    <p className="text-xs text-base-content/60">
                      Alice Smith updated her profile
                    </p>
                    <p className="text-xs text-secondary mt-1">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 hover:bg-base-200 rounded-lg cursor-pointer">
                  <div className="avatar placeholder">
                    <div className="bg-accent text-accent-content rounded-full w-10 flex items-center justify-center">
                      <span className="text-xs">SY</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">System update</p>
                    <p className="text-xs text-base-content/60">
                      System maintenance scheduled
                    </p>
                    <p className="text-xs text-secondary mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-end mt-2">
                <button className="btn btn-sm btn-ghost text-primary">
                  View all
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <Link
          href="/settings"
          className="btn btn-ghost btn-circle flex items-center justify-center"
        >
          <Settings className="w-5 h-5" />
        </Link>

        {/* User Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost gap-2 normal-case flex items-center"
          >
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-10 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-semibold">Admin</div>
              <div className="text-xs text-secondary">Administrator</div>
            </div>
            <ChevronDown className="w-4 h-4" />
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-1 p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-300"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-primary badge-sm">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Help & Support</a>
            </li>
            <div className="divider my-0"></div>
            <li>
              <a
                onClick={handleLogout}
                className="text-error flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
