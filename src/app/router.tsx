import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from '../components/layout/app-shell'
import { AnalyticsPage } from '../features/analytics/pages/analytics-page'
import { ProtectedRoute } from '../features/auth/components/protected-route'
import { AuthPage } from '../features/auth/pages/auth-page'
import { DashboardPage } from '../features/dashboard/pages/dashboard-page'
import { LeadsPage } from '../features/leads/pages/leads-page'
import { SettingsPage } from '../features/settings/pages/settings-page'

export const appRouter = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppShell />,
        children: [
          { path: '/', element: <DashboardPage /> },
          { path: '/leads', element: <LeadsPage /> },
          { path: '/analytics', element: <AnalyticsPage /> },
          { path: '/settings', element: <SettingsPage /> },
        ],
      },
    ],
  },
])
