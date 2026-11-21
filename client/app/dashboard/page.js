'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch } from '@/lib/api';
import { useAuthStore } from '@/store/authStore';

export default function DashboardPage() {
  const router = useRouter();
  const { user, setAuth, logout } = useAuthStore();
  const [taskData, setTaskData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
      return;
    }

    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setAuth(JSON.parse(savedUser), token);
      } catch {}
    }

    const verifyAccess = async () => {
      const res = await apiFetch('/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        logout();
        router.replace('/login');
        return;
      }

      if (res.ok) {
        setTaskData(res.data);
      }
      setLoading(false);
    };

    verifyAccess();
  }, [router, logout, setAuth]);

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8 text-zinc-100">
      <div className="mx-auto max-w-4xl space-y-6">
        <header className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <h1 className="text-2xl font-bold tracking-tight">TaskMatrix Dashboard</h1>
          <button
            onClick={handleLogout}
            className="rounded border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            Logout
          </button>
        </header>

        <section className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-200">User Profile</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded border border-zinc-800 bg-zinc-950 p-4">
              <span className="text-xs uppercase tracking-wider text-zinc-500">Name</span>
              <p className="mt-1 text-base font-medium text-zinc-100">{user?.name || '-'}</p>
            </div>
            <div className="rounded border border-zinc-800 bg-zinc-950 p-4">
              <span className="text-xs uppercase tracking-wider text-zinc-500">Email</span>
              <p className="mt-1 text-base font-medium text-zinc-100">{user?.email || '-'}</p>
            </div>
            <div className="rounded border border-zinc-800 bg-zinc-950 p-4">
              <span className="text-xs uppercase tracking-wider text-zinc-500">Role</span>
              <p className="mt-1 text-base font-medium text-zinc-100">{user?.role || '-'}</p>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-200">API Status</h2>
          <div className="mt-4 rounded border border-emerald-900/40 bg-emerald-950/20 p-4">
            <p className="text-sm font-medium text-emerald-400">
              {taskData?.message || 'Access confirmed'}
            </p>
            <p className="mt-1 text-xs text-emerald-600">
              Tasks: {taskData?.tasks ? taskData.tasks.length : 0}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
