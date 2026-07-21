import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../lib/auth';
export function Layout({ children }: { children: ReactNode }) { const navigate = useNavigate(); return <div className="dashboard-layout"><header className="dashboard-header"><span className="dashboard-brand">Market Intelligence</span><button className="btn btn-ghost" onClick={() => { signOut(); navigate('/'); }}>Sign out</button></header><div className="dashboard-content">{children}</div></div>; }
