const statItems = [
  { icon: '♡', count: '72.1K', active: true },
  { icon: '💬', count: '1.2K' },
  { icon: '↻', count: '892' },
  { icon: '✦', count: '430' },
  { icon: '⫶', count: '3' },
];

const appIcons = [
  { icon: '⌂', label: 'Home', active: true },
  { icon: '+', label: 'Create' },
  { icon: '◌', label: 'Inbox' },
  { icon: '◔', label: 'Profile' },
];

const tabs = ['For You', 'Following', 'Live'];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <button className="icon-button" aria-label="Back">
          ←
        </button>

        <div className="top-actions">
          <button className="icon-button" aria-label="Share">
            ↗
          </button>
          <button className="icon-button" aria-label="Favorites">
            ★
          </button>
          <button className="icon-button" aria-label="Menu">
            ⋮
          </button>
        </div>
      </header>

      <main className="app-stage">
        <div className="phone-mockup hidden-mobile">
          <div className="phone-inner">
            <div className="phone-header">
              <div className="signal-group">
                <span className="signal" />
                <span className="signal" />
                <span className="signal" />
              </div>
              <span className="time">2:04</span>
              <div className="status-icons">
                <span className="battery" />
              </div>
            </div>

            <div className="brand-block">
              <h1>GlobalVibes</h1>
            </div>

            <div className="hero-card">
              <div className="creator-header">
                <div className="creator-badge">♡</div>
                <div className="creator-info">
                  <h2>GlobalVibes</h2>
                  <p>Powered by Omaatla Dennis Ranthoakgale</p>
                </div>
              </div>

              <nav className="tab-nav" aria-label="Video feed tabs">
                {tabs.map((tab, index) => (
                  <button key={tab} className={index === 0 ? 'active' : ''}>
                    {tab}
                  </button>
                ))}
              </nav>

              <div className="media-panel">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
                  alt="Mountain lake landscape"
                />

                <div className="portrait-bubble">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                    alt="Content creator portrait"
                  />
                </div>

                <aside className="engagement-panel" aria-label="Engagement stats">
                  <div className="engagement-item active">
                    <span className="icon">♡</span>
                    <strong>45.3K</strong>
                  </div>
                  <div className="engagement-item">
                    <span className="icon">💬</span>
                    <strong>980</strong>
                  </div>
                  <div className="engagement-item">
                    <span className="icon">↻</span>
                    <strong>312</strong>
                  </div>
                  <div className="engagement-item">
                    <span className="icon">⤴</span>
                    <strong>215</strong>
                  </div>
                  <div className="engagement-item">
                    <span className="icon">🎁</span>
                    <strong>122</strong>
                  </div>
                </aside>
              </div>

              <div className="bottom-toolbar">
                {appIcons.map((item) => (
                  <button key={item.label} className={item.active ? 'active' : ''}>
                    <span>{item.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="side-panel hidden-mobile">
          <div className="mini-column">
            {statItems.map((item) => (
              <div key={item.count} className={`mini-stat ${item.active ? 'active' : ''}`}>
                <span>{item.icon}</span>
                <strong>{item.count}</strong>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="bottom-tag">SHORT VIDEO APP COMPANY</div>
    </div>
  );
}

export default App;
