import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { signOut } from '../lib/auth';

export function DashboardPage() {
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate('/');
  }

  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <span className="dashboard-brand">Market Intelligence</span>
        <Button variant="ghost" type="button" onClick={handleSignOut}>
          Sign out
        </Button>
      </header>
      <main className="dashboard-main">
        <div className="dashboard-placeholder">
          <h1>Dashboard coming soon</h1>
          <p>
            Your market intelligence workspace is under construction. Check back
            soon for analytics, feeds, and insights.
          </p>
        </div>
      </main>
    </div>
  );
}
