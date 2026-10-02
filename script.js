* {
  box-sizing: border-box;
}

:root {
  --bg: #f3f6fb;
  --panel: #ffffff;
  --panel-alt: #eef4ff;
  --line: #dfe8f4;
  --text: #1e2a38;
  --muted: #5e6d7d;
  --primary: #1957d5;
  --primary-strong: #123eab;
  --accent: #0f9d8a;
  --warning: #f7b267;
  --danger: #cc4f5c;
  --shadow: 0 18px 40px rgba(19, 31, 57, 0.08);
}

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background: linear-gradient(180deg, #edf3ff 0%, var(--bg) 100%);
  color: var(--text);
}

button,
input,
select {
  font: inherit;
}

.app-shell {
  max-width: 1280px;
  margin: 24px auto;
  padding: 0 18px 32px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 22px 24px;
  box-shadow: var(--shadow);
}

.eyebrow {
  margin: 0 0 8px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 2vw + 1rem, 2.6rem);
}

.topbar-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-weight: 600;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #edf3ff;
  color: var(--primary-strong);
  border: 1px solid #d2ddff;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.8rem;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(15, 157, 138, 0.15);
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 24px 0 16px;
}

.tab {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 12px;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
}

.tab:hover,
.tab.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  box-shadow: 0 12px 22px rgba(25, 87, 213, 0.18);
}

.panel {
  display: none;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.panel.active {
  display: block;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.panel-header h2 {
  margin: 0 0 4px;
  font-size: clamp(1.4rem, 1.2vw + 1rem, 2rem);
}

.panel-header p {
  margin: 0;
  color: var(--muted);
}

.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 700;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-btn {
  background: var(--primary);
  color: white;
}

.secondary-btn {
  background: #eef3ff;
  color: var(--primary-strong);
  border: 1px solid #d8e3ff;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.toolbar {
  display: grid;
  grid-template-columns: minmax(220px, 2fr) repeat(2, minmax(140px, 1fr));
  gap: 16px;
  margin-bottom: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  color: var(--muted);
}

.field input,
.field select {
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 10px 12px;
  background: #fff;
  color: var(--text);
}

.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 14px;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
}

th,
td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
}

th {
  background: var(--panel-alt);
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--muted);
}

tbody tr:hover {
  background: rgba(25, 87, 213, 0.02);
}

.badge-inline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #edf5ff;
  color: var(--primary-strong);
  padding: 4px 8px;
  font-size: 0.72rem;
  font-weight: 700;
}

.source-grid,
.watchdog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px;
}

.card h3 {
  margin-top: 0;
  margin-bottom: 14px;
}

.source-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.source-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.source-item a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}

.source-item a:hover {
  text-decoration: underline;
}

.stack-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.check-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
}

.check-toggle input {
  accent-color: var(--primary);
}

.summary-box {
  margin-top: 14px;
  background: #f8fafe;
  border: 1px dashed var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  color: var(--muted);
}

.summary-box strong {
  color: var(--text);
}

.timeline {
  position: relative;
  margin-top: 20px;
  padding-left: 12px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: var(--line);
}

.timeline-item {
  position: relative;
  margin-left: 18px;
  padding: 10px 0 16px 18px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -17px;
  top: 16px;
  width: 12px;
  height: 12px;
  background: var(--primary);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px rgba(25, 87, 213, 0.15);
}

.timeline-year {
  display: inline-block;
  background: #edf3ff;
  color: var(--primary-strong);
  border-radius: 8px;
  padding: 4px 8px;
  margin-bottom: 8px;
  font-size: 0.8rem;
  font-weight: 700;
}

.timeline-item h3 {
  margin: 0 0 6px;
  font-size: 1.02rem;
}

.timeline-item p {
  margin: 0;
  color: var(--muted);
}

.progress-wrap {
  margin-bottom: 18px;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.progress-bar {
  width: 100%;
  height: 16px;
  background: #eef2f7;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--line);
}

#progressFill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--accent), var(--primary));
  border-radius: inherit;
  transition: width 0.25s ease;
}

.checklist {
  display: grid;
  gap: 12px;
}

.check-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
}

.check-item input {
  margin-top: 3px;
  accent-color: var(--primary);
}

.check-item label {
  display: flex;
  gap: 10px;
  width: 100%;
  cursor: pointer;
}

.check-item .task-text {
  flex: 1;
}

.check-item .task-text strong {
  display: block;
  margin-bottom: 4px;
}

.check-item .task-text small {
  color: var(--muted);
}

.check-item.checked {
  background: rgba(15, 157, 138, 0.04);
  border-color: rgba(15, 157, 138, 0.25);
}

.muted {
  color: var(--muted);
}

@media (max-width: 760px) {
  .topbar,
  .panel-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .toolbar {
    grid-template-columns: 1fr;
  }
}

