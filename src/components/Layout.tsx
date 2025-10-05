'use client';

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, BarChart3, Users, CreditCard,
  LifeBuoy, User, Menu, X, Globe
} from "lucide-react";
import ToggleSwitch from "@/components/toggleSwitch";
import { ThemeProvider } from "../context/ThemeContext";


export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    { name: "Accounts", icon: Users, path: "/accounts" },
    { name: "Transactions", icon: CreditCard, path: "/transactions" },
    { name: "Support", icon: LifeBuoy, path: "/support" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  const languages = [
    { code: "En", label: "English", flag: "🇺🇸" },
    { code: "Tl", label: "Tagalog", flag: "🇵🇭" },
    { code: "Es", label: "Spanish", flag: "🇪🇸" },
    { code: "Fr", label: "French", flag: "🇫🇷" },
    { code: "De", label: "German", flag: "🇩🇪" },
    { code: "It", label: "Italian", flag: "🇮🇹" },
    { code: "Pt", label: "Portuguese", flag: "🇵🇹" },
    { code: "Ru", label: "Russian", flag: "🇷🇺" },
    { code: "Ja", label: "Japanese", flag: "🇯🇵" },
    { code: "Ko", label: "Korean", flag: "🇰🇷" },
    { code: "Zh", label: "Chinese", flag: "🇨🇳" },
  ];

    const [langOpen, setLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[0]);

    const selectLanguage = (lang: typeof languages[0]) => {
      setSelectedLang(lang);
      setLangOpen(false);
    };
  return (
    <ThemeProvider>
      <div className="flex min-h-screen">
        {/* ===== Sidebar ===== */}
        <aside
          className={`${
            isOpen ? "w-64" : "w-20"
          } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col`}
        >
          {/* Logo + Collapse Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <span className="text-xl font-bold whitespace-nowrap">
              {isOpen ? "Top Logo Here" : "💰"}
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map(({ name, icon: Icon, path }) => (
              <Link
                key={name}
                href={path}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition"
              >
                <Icon size={20} />
                {isOpen && <span className="text-sm font-medium">{name}</span>}
              </Link>
            ))}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            {isOpen && <p className="text-sm font-semibold">Signed in as</p>}
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600" />
              {isOpen && (
                <div>
                  <p className="font-semibold">Cyril Imperial</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Admin
                  </p>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* ===== Main Content ===== */}
        <main className="flex-1 flex flex-col">
          {/* Top Navbar */}
          <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow-md flex items-center justify-between">
            
            {/* Left: Search Bar */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>

            {/* Right: Toggle + Language */}
            <div className="flex items-center gap-4 ml-4">
              {/* Light/Dark Toggle */}
              <ToggleSwitch />

              {/* Language Dropdown */}
            <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center justify-between px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition w-full"
                >
                  <span className="flex items-center gap-2">
                    <Globe size={16} />
                    {selectedLang.code}
                  </span>
                  <span className="text-gray-500 dark:text-gray-300">▼</span>
                </button>

                {/* Dropdown options */}
                <ul
                  className={`absolute right-0 mt-1 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 ${
                    langOpen ? "block" : "hidden"
                  }`}
                >
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2"
                      onClick={() => selectLanguage(lang)}
                    >
                      {lang.flag} {lang.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Page Content */}
          <div className="flex-1 p-6">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  );
}
