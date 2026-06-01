import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export function AppShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="grid min-h-screen lg:grid-cols-[1fr]">
      <motion.aside
        className="fixed inset-y-0 left-0 z-20 hidden border-r border-slate-800 bg-surface-muted lg:block"
        animate={{ width: isSidebarCollapsed ? 88 : 260 }}
        transition={{ type: "spring", damping: 26, stiffness: 240 }}
      >
        <Sidebar isCollapsed={isSidebarCollapsed} />
      </motion.aside>

      {isSidebarOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-slate-950/65 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full w-[85vw] max-w-[280px] border-r border-slate-800 bg-surface-muted"
            initial={{ x: -24, opacity: 0.7 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -24, opacity: 0.7 }}
          >
            <div className="flex justify-end p-3">
              <button
                type="button"
                className="rounded-lg border border-slate-700 p-2 text-slate-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
          </motion.div>
        </motion.div>
      )}

      <motion.div
        className={`flex min-w-0 flex-col transition-all duration-300 ${
          isSidebarCollapsed ? "lg:ml-[88px]" : "lg:ml-[260px]"
        }`}
      >
        <Navbar
          onOpenMobileSidebar={() => setIsSidebarOpen(true)}
          onToggleDesktopSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </motion.div>
    </div>
  );
}
