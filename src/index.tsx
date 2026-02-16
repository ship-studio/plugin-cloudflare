/**
 * Ship Studio — Cloudflare Pages Plugin
 *
 * One-click deploy to Cloudflare Pages via the wrangler CLI.
 * Lives in the toolbar slot and guides users through:
 *   install wrangler → authenticate → link project → deploy
 */

import { useState, useEffect, useCallback, useRef } from 'react';

// ---------------------------------------------------------------------------
// CSS
// ---------------------------------------------------------------------------

const CF_STYLE_ID = 'cf-plugin-styles';

const CLOUDFLARE_CSS = `
@keyframes cfPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.cf-pulsing {
  animation: cfPulse 1.5s ease-in-out infinite;
}

.cf-deploying {
  color: #F6821F !important;
  animation: cfPulse 1.5s ease-in-out infinite;
}

/* Dropdown */
.cf-dropdown-wrapper {
  position: relative;
  display: inline-block;
}

.cf-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 220px;
  border-radius: 8px;
  overflow: hidden;
  z-index: 9999;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.cf-dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: inherit;
  width: 100%;
  text-align: left;
  text-decoration: none;
}

.cf-dropdown-item:hover {
  background: var(--bg-tertiary, rgba(255,255,255,0.05));
  border-radius: 0;
}

.cf-dropdown-divider {
  height: 1px;
  margin: 0;
}

.cf-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Modal — fully self-contained, no host class dependencies */
.cf-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.cf-modal {
  width: 400px;
  max-height: 80vh;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.cf-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 600;
}

.cf-close-btn {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  padding: 2px 4px;
  opacity: 0.4;
  line-height: 1;
}

.cf-close-btn:hover {
  opacity: 0.8;
}

.cf-modal-body {
  padding: 12px 16px;
  overflow-y: auto;
  font-size: 13px;
  line-height: 1.4;
}

.cf-modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
}

/* Tabs */
.cf-tabs {
  display: flex;
  padding: 2px;
  margin-bottom: 14px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
}

.cf-tab {
  flex: 1;
  padding: 5px 0;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  background: transparent;
  color: inherit;
  opacity: 0.4;
  border-radius: 4px;
  font-family: inherit;
  transition: opacity 0.12s, background 0.12s;
}

.cf-tab:hover {
  opacity: 0.6;
}

.cf-tab.cf-tab-active {
  opacity: 1;
  background: rgba(255, 255, 255, 0.08);
}

/* Form fields */
.cf-form-group {
  margin-bottom: 12px;
}

.cf-form-group:last-child {
  margin-bottom: 0;
}

.cf-form-label {
  display: block;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-bottom: 4px;
  opacity: 0.4;
}

.cf-form-input {
  width: 100%;
  padding: 6px 8px;
  border-radius: 5px;
  border: 1px solid;
  font-size: 12px;
  background: transparent;
  color: inherit;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
}

.cf-form-input::placeholder {
  opacity: 0.25;
}

.cf-form-input:focus {
  border-color: #F6821F;
}

.cf-form-hint {
  font-size: 10px;
  margin-top: 3px;
  opacity: 0.3;
}

.cf-error-box {
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin-bottom: 12px;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

/* Custom select dropdown — replaces native <select> */
.cf-custom-select {
  position: relative;
  border: 1px solid;
  border-radius: 5px;
}

.cf-custom-select-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  background: transparent;
  color: inherit;
  border: none;
  font-size: 12px;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
}

.cf-custom-select-options {
  position: absolute;
  top: 100%;
  left: -1px;
  right: -1px;
  border: 1px solid;
  border-radius: 5px;
  overflow: hidden;
  z-index: 10;
}

.cf-custom-select-option {
  width: 100%;
  padding: 6px 8px;
  background: transparent;
  color: inherit;
  border: none;
  font-size: 12px;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
}

.cf-custom-select-option:hover {
  background: rgba(255, 255, 255, 0.06);
}

.cf-custom-select-option.cf-option-selected {
  background: rgba(246, 130, 31, 0.1);
}

.cf-account-name {
  font-size: 12px;
  opacity: 0.6;
  padding: 2px 0;
}

/* Project list */
.cf-project-list {
  max-height: 180px;
  overflow-y: auto;
  border-radius: 5px;
  border: 1px solid;
}

.cf-project-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: inherit;
  width: 100%;
  text-align: left;
  font-family: inherit;
}

.cf-project-item:hover {
  background: rgba(255, 255, 255, 0.04);
}

.cf-project-item.cf-project-selected {
  background: rgba(246, 130, 31, 0.1);
}

.cf-project-subdomain {
  font-size: 10px;
  opacity: 0.35;
}

/* Buttons */
.cf-btn {
  padding: 7px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  font-family: inherit;
  transition: opacity 0.12s;
}

.cf-btn:hover {
  filter: brightness(0.9);
}

.cf-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.cf-btn-primary {
  background: #F6821F;
  color: #fff;
}

.cf-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: cfSpin 0.6s linear infinite;
  margin-right: 6px;
}

@keyframes cfSpin {
  to { transform: rotate(360deg); }
}
`;

function useInjectStyles() {
  useEffect(() => {
    if (document.getElementById(CF_STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = CF_STYLE_ID;
    style.textContent = CLOUDFLARE_CSS;
    document.head.appendChild(style);
    return () => {
      document.getElementById(CF_STYLE_ID)?.remove();
    };
  }, []);
}

// ---------------------------------------------------------------------------
// Plugin Context
// ---------------------------------------------------------------------------

interface PluginContextValue {
  pluginId: string;
  project: {
    name: string;
    path: string;
    currentBranch: string;
    hasUncommittedChanges: boolean;
  } | null;
  actions: {
    showToast: (message: string, type?: 'success' | 'error') => void;
    refreshGitStatus: () => void;
    refreshBranches: () => void;
    focusTerminal: () => void;
    openUrl: (url: string) => void;
  };
  shell: {
    exec: (command: string, args: string[], options?: { timeout?: number }) => Promise<{
      stdout: string;
      stderr: string;
      exit_code: number;
    }>;
  };
  storage: {
    read: () => Promise<Record<string, unknown>>;
    write: (data: Record<string, unknown>) => Promise<void>;
  };
  invoke: {
    call: <T = unknown>(command: string, args?: Record<string, unknown>) => Promise<T>;
  };
  theme: {
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    border: string;
    accent: string;
    accentHover: string;
    action: string;
    actionHover: string;
    actionText: string;
    error: string;
    success: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _w = window as any;

function usePluginContext(): PluginContextValue {
  const React = _w.__SHIPSTUDIO_REACT__;
  const CtxRef = _w.__SHIPSTUDIO_PLUGIN_CONTEXT_REF__;

  if (CtxRef && React?.useContext) {
    const ctx = React.useContext(CtxRef) as PluginContextValue | null;
    if (ctx) return ctx;
  }

  throw new Error('Plugin context not available.');
}

function useShell() { return usePluginContext().shell; }
function useToast() { return usePluginContext().actions.showToast; }
function usePluginStorage() { return usePluginContext().storage; }
function useAppActions() { return usePluginContext().actions; }
function useTheme() { return usePluginContext().theme; }

// ---------------------------------------------------------------------------
// Domain Types
// ---------------------------------------------------------------------------

interface CloudflareCliStatus {
  installed: boolean;
  authenticated: boolean;
}

interface CloudflareAccount {
  name: string;
  id: string;
}

interface LinkedProject {
  projectName: string;
  accountId: string;
  accountName: string;
  outputDir: string;
  prodUrl?: string;
}

interface CloudflareProject {
  name: string;
  subdomain: string;
}

// ---------------------------------------------------------------------------
// Parsing Helpers
// ---------------------------------------------------------------------------

function parseWhoamiJson(jsonStr: string): CloudflareAccount[] {
  try {
    const data = JSON.parse(jsonStr);
    if (!Array.isArray(data.accounts)) return [];
    return data.accounts
      .filter((a: any) => a.id && a.name)
      .map((a: any) => ({ name: a.name, id: a.id }));
  } catch {
    return [];
  }
}

function parseProjectList(stdout: string): CloudflareProject[] {
  const projects: CloudflareProject[] = [];
  const lines = stdout.split('\n');
  for (const line of lines) {
    const match = line.match(/│\s*(.+?)\s*│\s*(\S+\.pages\.dev)\s*│/);
    if (match) {
      projects.push({ name: match[1].trim(), subdomain: match[2].trim() });
    }
  }
  return projects;
}

async function detectOutputDir(
  shell: PluginContextValue['shell']
): Promise<string> {
  // Check package.json for framework hints first — most reliable
  try {
    const result = await shell.exec('cat', ['package.json']);
    if (result.exit_code === 0) {
      const pkg = result.stdout.toLowerCase();
      if (pkg.includes('"next"') || pkg.includes("'next'")) return 'out';
      if (pkg.includes('"nuxt"') || pkg.includes("'nuxt'")) return '.output/public';
      if (pkg.includes('"vite"') || pkg.includes('"astro"') || pkg.includes('"svelte"') || pkg.includes('"@sveltejs/kit"')) return 'dist';
      if (pkg.includes('"react-scripts"')) return 'build';
      if (pkg.includes('"gatsby"')) return 'public';
    }
  } catch {
    // ignore
  }

  // Fall back to checking which output directories exist
  const candidates = ['dist', 'build', 'out', 'public'];
  for (const dir of candidates) {
    try {
      const result = await shell.exec('test', ['-d', dir]);
      if (result.exit_code === 0) return dir;
    } catch {
      // ignore
    }
  }

  return 'dist';
}

function openAutoDeploySetup(
  actions: PluginContextValue['actions'],
  accountId: string,
) {
  // Open the Cloudflare dashboard to create a Git-connected Pages project.
  // This gives native auto-deploy on push — same as Vercel's Git integration.
  actions.openUrl(`https://dash.cloudflare.com/${accountId}/pages/new/provider/gh`);
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function CloudflareIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd">
      <path d="M16.493 17.4c.135-.52.08-.983-.161-1.338-.215-.328-.592-.519-1.05-.519l-8.663-.109a.148.148 0 01-.135-.082c-.027-.054-.027-.109-.027-.163.027-.082.108-.164.189-.164l8.744-.11c1.05-.054 2.153-.9 2.556-1.937l.511-1.31c.027-.055.027-.11.027-.164C17.92 8.91 15.66 7 12.942 7c-2.503 0-4.628 1.638-5.381 3.903a2.432 2.432 0 00-1.803-.491c-1.21.109-2.153 1.092-2.287 2.32-.027.328 0 .628.054.9C1.56 13.688 0 15.326 0 17.319c0 .19.027.355.027.545 0 .082.08.137.161.137h15.983c.08 0 .188-.055.215-.164l.107-.437" />
      <path d="M19.238 11.75h-.242c-.054 0-.108.054-.135.109l-.35 1.2c-.134.52-.08.983.162 1.338.215.328.592.518 1.05.518l1.855.11c.054 0 .108.027.135.082.027.054.027.109.027.163-.027.082-.108.164-.188.164l-1.91.11c-1.05.054-2.153.9-2.557 1.937l-.134.355c-.027.055.026.137.107.137h6.592c.081 0 .162-.055.162-.137.107-.41.188-.846.188-1.31-.027-2.62-2.153-4.777-4.762-4.777" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Connect Modal
// ---------------------------------------------------------------------------

function ConnectModal({
  onClose,
  accounts,
  shell,
  storage,
  showToast,
  actions,
  theme,
  onLinked,
}: {
  onClose: () => void;
  accounts: CloudflareAccount[];
  shell: PluginContextValue['shell'];
  storage: PluginContextValue['storage'];
  showToast: PluginContextValue['actions']['showToast'];
  actions: PluginContextValue['actions'];
  theme: PluginContextValue['theme'];
  onLinked: (project: LinkedProject) => void;
}) {
  const [tab, setTab] = useState<'create' | 'link'>('create');
  const [selectedAccountId, setSelectedAccountId] = useState(accounts[0]?.id ?? '');
  const [projectName, setProjectName] = useState('');
  const [outputDir, setOutputDir] = useState('dist');
  const [detectingDir, setDetectingDir] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Existing projects for "link" tab
  const [existingProjects, setExistingProjects] = useState<CloudflareProject[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [selectedExisting, setSelectedExisting] = useState<string | null>(null);

  // Auto-detect output directory
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let cancelled = false;
    detectOutputDir(shell).then((dir) => {
      if (!cancelled) {
        setOutputDir(dir);
        setDetectingDir(false);
      }
    });
    return () => { cancelled = true; };
  }, []);

  // Load existing projects when link tab selected or account changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (tab !== 'link' || !selectedAccountId) return;
    let cancelled = false;
    setLoadingProjects(true);
    setExistingProjects([]);
    setSelectedExisting(null);

    shell
      .exec('sh', ['-c', `CLOUDFLARE_ACCOUNT_ID=${selectedAccountId} npx --yes wrangler pages project list`])
      .then((result) => {
        if (cancelled) return;
        if (result.exit_code === 0) {
          setExistingProjects(parseProjectList(result.stdout));
        }
        setLoadingProjects(false);
      })
      .catch(() => {
        if (!cancelled) setLoadingProjects(false);
      });

    return () => { cancelled = true; };
  }, [tab, selectedAccountId]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const sanitizeProjectName = (name: string): string => {
    return name.toLowerCase().replace(/[^a-zA-Z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  };

  const getSelectedAccount = (): CloudflareAccount | undefined => {
    return accounts.find((a) => a.id === selectedAccountId);
  };

  const handleCreate = useCallback(async () => {
    const sanitized = sanitizeProjectName(projectName);
    if (!sanitized) {
      setError('Please enter a valid project name.');
      return;
    }
    if (!selectedAccountId) {
      setError('Please select an account.');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // Create the project
      const createResult = await shell.exec('sh', [
        '-c', `CLOUDFLARE_ACCOUNT_ID=${selectedAccountId} npx --yes wrangler pages project create ${sanitized} --production-branch main`,
      ]);

      if (createResult.exit_code !== 0) {
        const stderr = createResult.stderr || '';
        if (!stderr.toLowerCase().includes('already exists')) {
          setError(`Failed to create project: ${stderr}`);
          setLoading(false);
          return;
        }
      }

      const account = getSelectedAccount();
      const linked: LinkedProject = {
        projectName: sanitized,
        accountId: selectedAccountId,
        accountName: account?.name ?? '',
        outputDir,
      };

      // Save to storage
      await storage.write(linked as unknown as Record<string, unknown>);

      // Build then deploy
      try {
        const buildResult = await shell.exec('npm', ['run', 'build'], { timeout: 300000 });
        if (buildResult.exit_code !== 0) {
          setError(`Build failed: ${buildResult.stderr || buildResult.stdout}`);
          setLoading(false);
          return;
        }

        // Verify output directory exists
        const dirCheck = await shell.exec('test', ['-d', outputDir]);
        if (dirCheck.exit_code !== 0) {
          setError(`Build succeeded but "${outputDir}" folder was not created. Check your framework's output settings — for Next.js, add \`output: 'export'\` to next.config.`);
          setLoading(false);
          return;
        }

        const deployResult = await shell.exec(
          'sh',
          ['-c', `CLOUDFLARE_ACCOUNT_ID=${selectedAccountId} npx --yes wrangler pages deploy ${outputDir} --project-name ${sanitized}`],
          { timeout: 300000 }
        );
        // Parse the real URL from deploy output (e.g. "https://abc123.my-project.pages.dev")
        const urlMatch = (deployResult.stdout + '\n' + deployResult.stderr).match(/https:\/\/[^\s]*\.pages\.dev/);
        if (urlMatch) {
          // Extract the production URL (strip the deploy hash prefix)
          const deployUrl = urlMatch[0];
          const pagesDevMatch = deployUrl.match(/https:\/\/[^.]+\.(.+\.pages\.dev)/);
          linked.prodUrl = pagesDevMatch ? `https://${pagesDevMatch[1]}` : deployUrl;
          await storage.write(linked as unknown as Record<string, unknown>);
        }
        showToast('Deployed! Setting up auto-deploy...', 'success');
      } catch {
        showToast('Connected! Deploy may still be running.', 'success');
      }

      onLinked(linked);
      onClose();
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  }, [projectName, selectedAccountId, outputDir, shell, storage, showToast, onLinked, onClose]);

  const handleLink = useCallback(async () => {
    if (!selectedExisting) {
      setError('Please select a project.');
      return;
    }
    if (!selectedAccountId) {
      setError('Please select an account.');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const account = getSelectedAccount();
      const existingProject = existingProjects.find((p) => p.name === selectedExisting);
      const linked: LinkedProject = {
        projectName: selectedExisting,
        accountId: selectedAccountId,
        accountName: account?.name ?? '',
        outputDir,
        prodUrl: existingProject?.subdomain ? `https://${existingProject.subdomain}` : undefined,
      };

      await storage.write(linked as unknown as Record<string, unknown>);
      showToast(`Linked to ${selectedExisting}`, 'success');

      onLinked(linked);
      onClose();
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  }, [selectedExisting, selectedAccountId, outputDir, shell, storage, showToast, onLinked, onClose]);

  const selectedAccount = getSelectedAccount();

  return (
    <div className="cf-modal-overlay" onClick={onClose}>
      <div
        className="cf-modal"
        style={{ background: theme.bgPrimary, color: theme.textPrimary, border: `1px solid ${theme.border}` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cf-modal-header" style={{ borderBottom: `1px solid ${theme.border}` }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <CloudflareIcon size={14} />
            Connect Cloudflare Pages
          </span>
          <button
            className="cf-close-btn"
            onClick={onClose}
            style={{ color: theme.textMuted }}
          >
            ✕
          </button>
        </div>

        <div className="cf-modal-body">
          {error && <div className="cf-error-box">{error}</div>}

          <div className="cf-tabs">
            <button
              className={`cf-tab ${tab === 'create' ? 'cf-tab-active' : ''}`}
              onClick={() => { setTab('create'); setError(null); }}
            >
              Create New
            </button>
            <button
              className={`cf-tab ${tab === 'link' ? 'cf-tab-active' : ''}`}
              onClick={() => { setTab('link'); setError(null); }}
            >
              Link Existing
            </button>
          </div>

          {accounts.length > 1 && (
            <div className="cf-form-group">
              <label className="cf-form-label">Account</label>
              <div className="cf-custom-select" style={{ borderColor: theme.border }}>
                <button
                  className="cf-custom-select-trigger"
                  onClick={() => {
                    const el = document.getElementById('cf-account-dropdown');
                    if (el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
                  }}
                  type="button"
                >
                  <span>{selectedAccount ? selectedAccount.name : 'Select account'}</span>
                  <span style={{ opacity: 0.4, fontSize: 10 }}>▼</span>
                </button>
                <div id="cf-account-dropdown" className="cf-custom-select-options" style={{ display: 'none', background: theme.bgPrimary, borderColor: theme.border }}>
                  {accounts.map((a, i) => (
                    <button
                      key={a.id}
                      className={`cf-custom-select-option ${selectedAccountId === a.id ? 'cf-option-selected' : ''}`}
                      onClick={() => {
                        setSelectedAccountId(a.id);
                        const el = document.getElementById('cf-account-dropdown');
                        if (el) el.style.display = 'none';
                      }}
                      type="button"
                    >
                      {a.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === 'create' ? (
            <>
              <div className="cf-form-group">
                <label className="cf-form-label">Project Name</label>
                <input
                  className="cf-form-input"
                  style={{ borderColor: theme.border }}
                  type="text"
                  placeholder="my-site"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
                {projectName && sanitizeProjectName(projectName) !== projectName && (
                  <div className="cf-form-hint">
                    Will be created as: {sanitizeProjectName(projectName)}
                  </div>
                )}
              </div>
              <div className="cf-form-group">
                <label className="cf-form-label">Output Directory</label>
                <input
                  className="cf-form-input"
                  style={{ borderColor: theme.border }}
                  type="text"
                  value={outputDir}
                  onChange={(e) => setOutputDir(e.target.value)}
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
                <div className="cf-form-hint">
                  {detectingDir ? 'Detecting...' : 'The folder your build tool outputs to (e.g. dist, build, out)'}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="cf-form-group">
                <label className="cf-form-label">Select Project</label>
                {loadingProjects ? (
                  <div style={{ padding: '8px 0', fontSize: 12, opacity: 0.5 }}>
                    <span className="cf-spinner" /> Loading projects...
                  </div>
                ) : existingProjects.length === 0 ? (
                  <div style={{ padding: '8px 0', fontSize: 12, opacity: 0.5 }}>
                    No projects found. Create one in the other tab.
                  </div>
                ) : (
                  <div className="cf-project-list" style={{ borderColor: theme.border }}>
                    {existingProjects.map((p) => (
                      <button
                        key={p.name}
                        className={`cf-project-item ${selectedExisting === p.name ? 'cf-project-selected' : ''}`}
                        onClick={() => setSelectedExisting(p.name)}
                      >
                        <span>{p.name}</span>
                        <span className="cf-project-subdomain">{p.subdomain}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="cf-form-group">
                <label className="cf-form-label">Output Directory</label>
                <input
                  className="cf-form-input"
                  style={{ borderColor: theme.border }}
                  type="text"
                  value={outputDir}
                  onChange={(e) => setOutputDir(e.target.value)}
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
                <div className="cf-form-hint">
                  {detectingDir ? 'Detecting...' : 'The folder your build tool outputs to (e.g. dist, build, out)'}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="cf-modal-footer" style={{ borderTop: `1px solid ${theme.border}` }}>
          {tab === 'create' ? (
            <button
              className="cf-btn cf-btn-primary"
              onClick={handleCreate}
              disabled={loading || !projectName.trim()}
            >
              {loading ? (
                <><span className="cf-spinner" /> Deploying...</>
              ) : (
                'Connect & Deploy'
              )}
            </button>
          ) : (
            <button
              className="cf-btn cf-btn-primary"
              onClick={handleLink}
              disabled={loading || !selectedExisting}
            >
              {loading ? (
                <><span className="cf-spinner" /> Linking...</>
              ) : (
                'Link Project'
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Connected Dropdown
// ---------------------------------------------------------------------------

function ConnectedDropdown({
  linked,
  theme,
  actions,
  shell,
  showToast,
  storage,
  onUnlink,
  onSignOut,
  onDeploy,
  isDeploying,
}: {
  linked: LinkedProject;
  theme: PluginContextValue['theme'];
  actions: PluginContextValue['actions'];
  shell: PluginContextValue['shell'];
  showToast: PluginContextValue['actions']['showToast'];
  storage: PluginContextValue['storage'];
  onUnlink: () => void;
  onSignOut: () => void;
  onDeploy: () => void;
  isDeploying: boolean;
}) {
  const dashboardUrl = `https://dash.cloudflare.com/${linked.accountId}/pages/view/${linked.projectName}`;
  const prodUrl = linked.prodUrl || `https://${linked.projectName}.pages.dev`;
  const prodLabel = prodUrl.replace('https://', '');

  return (
    <div className="cf-dropdown" style={{ background: theme.bgPrimary, border: `1px solid ${theme.border}` }}>
      {/* Prod URL */}
      <button
        className="cf-dropdown-item"
        onClick={() => actions.openUrl(prodUrl)}
      >
        <span className="cf-badge" style={{ background: 'rgba(246, 130, 31, 0.15)', color: '#F6821F' }}>
          PROD
        </span>
        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {prodLabel}
        </span>
        <ExternalLinkIcon />
      </button>

      <div className="cf-dropdown-divider" style={{ background: theme.border }} />

      {/* Dashboard */}
      <button
        className="cf-dropdown-item"
        onClick={() => actions.openUrl(dashboardUrl)}
      >
        Dashboard
        <ExternalLinkIcon />
      </button>

      {/* Deploy */}
      <button
        className="cf-dropdown-item"
        onClick={onDeploy}
        disabled={isDeploying}
        style={isDeploying ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}
      >
        {isDeploying ? (
          <><span className="cf-spinner" /> Deploying...</>
        ) : (
          'Deploy Now'
        )}
      </button>

      {/* Auto-deploy via Cloudflare Git integration */}
      <button
        className="cf-dropdown-item"
        onClick={() => openAutoDeploySetup(actions, linked.accountId)}
      >
        Enable Auto-Deploy
        <ExternalLinkIcon />
      </button>

      <div className="cf-dropdown-divider" style={{ background: theme.border }} />

      {/* Unlink */}
      <button
        className="cf-dropdown-item"
        onClick={onUnlink}
      >
        Disconnect Project
      </button>

      {/* Sign out */}
      <button
        className="cf-dropdown-item"
        onClick={onSignOut}
        style={{ color: theme.error }}
      >
        Sign Out
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Toolbar Component
// ---------------------------------------------------------------------------

type PluginState = 'CHECKING' | 'NOT_INSTALLED' | 'NOT_AUTHENTICATED' | 'WRONG_ACCOUNT' | 'NOT_LINKED' | 'DEPLOYING' | 'CONNECTED';

function CloudflareToolbar() {
  const ctx = usePluginContext();
  const shell = ctx.shell;
  const storage = ctx.storage;
  const showToast = ctx.actions.showToast;
  const theme = ctx.theme;
  const actions = ctx.actions;

  useInjectStyles();

  const [cliStatus, setCliStatus] = useState<CloudflareCliStatus | null>(null);
  const [accounts, setAccounts] = useState<CloudflareAccount[]>([]);
  const [linked, setLinked] = useState<LinkedProject | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [hasGitRemote, setHasGitRemote] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Derive state
  const state: PluginState = (() => {
    if (cliStatus === null) return 'CHECKING';
    if (!cliStatus.installed) return 'NOT_INSTALLED';
    if (!cliStatus.authenticated) return 'NOT_AUTHENTICATED';
    if (linked && accounts.length > 0 && !accounts.some((a) => a.id === linked.accountId)) return 'WRONG_ACCOUNT';
    if (isDeploying) return 'DEPLOYING';
    if (linked) return 'CONNECTED';
    return 'NOT_LINKED';
  })();

  // Check CLI status on mount — single whoami call (proves installed + checks auth)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        // Step 1: Run whoami --json, redirect to temp file
        const writeResult = await shell.exec('sh', [
          '-c', 'npx --yes wrangler whoami --json > /tmp/cf_whoami.json 2>/dev/null'
        ], { timeout: 30000 });
        if (cancelled) return;

        if (writeResult.exit_code !== 0) {
          const combined = (writeResult.stderr + writeResult.stdout).toLowerCase();
          if (combined.includes('not found') || combined.includes('enoent') || combined.includes('err_module')) {
            setCliStatus({ installed: false, authenticated: false });
          } else {
            setCliStatus({ installed: true, authenticated: false });
          }
          return;
        }

        // Step 2: Read the unsanitized file back
        const readResult = await shell.exec('cat', ['/tmp/cf_whoami.json']);

        // Step 3: Clean up
        shell.exec('rm', ['-f', '/tmp/cf_whoami.json']);

        if (readResult.exit_code !== 0 || !readResult.stdout.trim()) {
          setCliStatus({ installed: true, authenticated: false });
          return;
        }

        const parsedAccounts = parseWhoamiJson(readResult.stdout);
        setAccounts(parsedAccounts);
        setCliStatus({ installed: true, authenticated: parsedAccounts.length > 0 });

        if (parsedAccounts.length > 0) {
          try {
            const data = await storage.read();
            if (data.projectName && data.accountId) {
              const linkedData = data as unknown as LinkedProject;

              // Backfill prodUrl if missing (old stored data)
              if (!linkedData.prodUrl) {
                try {
                  const listResult = await shell.exec('sh', [
                    '-c', `CLOUDFLARE_ACCOUNT_ID=${linkedData.accountId} npx --yes wrangler pages project list`
                  ]);
                  if (listResult.exit_code === 0) {
                    const projects = parseProjectList(listResult.stdout);
                    const match = projects.find((p) => p.name === linkedData.projectName);
                    if (match?.subdomain) {
                      linkedData.prodUrl = `https://${match.subdomain}`;
                      await storage.write(linkedData as unknown as Record<string, unknown>);
                    }
                  }
                } catch {
                  // Non-critical — will use fallback URL
                }
              }

              setLinked(linkedData);
            }
          } catch {
            // Storage empty or corrupt — not linked
          }
        }
      } catch {
        if (!cancelled) {
          setCliStatus({ installed: false, authenticated: false });
        }
      }
    }

    check();
    return () => { cancelled = true; };
  }, []);

  // Poll for git remote until one is found
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (hasGitRemote) return;
    let cancelled = false;

    async function checkRemote() {
      try {
        const result = await shell.exec('git', ['remote', '-v']);
        if (!cancelled && result.exit_code === 0 && result.stdout.trim()) {
          setHasGitRemote(true);
        }
      } catch {
        // No git remote yet
      }
    }

    checkRemote();
    const interval = setInterval(checkRemote, 5000);
    return () => { cancelled = true; clearInterval(interval); };
  }, [hasGitRemote]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!showDropdown) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showDropdown]);

  const handleInstall = useCallback(async () => {
    setInstalling(true);
    showToast('Installing wrangler globally...', 'success');
    try {
      // Try npm global install first
      let result = await shell.exec('npm', ['install', '-g', 'wrangler'], { timeout: 120000 });
      if (result.exit_code !== 0) {
        // Fallback: install as project devDependency
        showToast('Global install failed, trying local install...', 'success');
        result = await shell.exec('npm', ['install', '--save-dev', 'wrangler'], { timeout: 120000 });
      }
      if (result.exit_code === 0) {
        // Verify it's actually available now
        const check = await shell.exec('npx', ['--yes', 'wrangler', '--version']);
        if (check.exit_code === 0) {
          showToast('Wrangler installed!', 'success');
          setCliStatus({ installed: true, authenticated: false });
        } else {
          showToast('Install seemed to succeed but wrangler not found. Try restarting your terminal.', 'error');
        }
      } else {
        showToast(`Install failed: ${result.stderr}`, 'error');
      }
    } catch (err) {
      showToast(`Install failed: ${err instanceof Error ? err.message : String(err)}`, 'error');
    } finally {
      setInstalling(false);
    }
  }, [shell, showToast]);

  const handleLogin = useCallback(async () => {
    showToast('Opening Cloudflare login...', 'success');
    try {
      const result = await shell.exec('npx', ['--yes', 'wrangler', 'login'], { timeout: 120000 });
      if (result.exit_code === 0) {
        // Re-check whoami with --json via temp file
        await shell.exec('sh', [
          '-c', 'npx --yes wrangler whoami --json > /tmp/cf_whoami.json 2>/dev/null'
        ], { timeout: 30000 });
        const readResult = await shell.exec('cat', ['/tmp/cf_whoami.json']);
        shell.exec('rm', ['-f', '/tmp/cf_whoami.json']);

        if (readResult.exit_code === 0 && readResult.stdout.trim()) {
          const parsedAccounts = parseWhoamiJson(readResult.stdout);
          setAccounts(parsedAccounts);
          if (parsedAccounts.length > 0) {
            setCliStatus({ installed: true, authenticated: true });
            showToast('Connected to Cloudflare!', 'success');
          } else {
            setCliStatus({ installed: true, authenticated: false });
            showToast('Authentication failed. Please try again.', 'error');
          }
        }
      } else {
        showToast('Login failed or was cancelled.', 'error');
      }
    } catch {
      showToast('Login timed out or failed.', 'error');
    }
  }, [shell, showToast]);

  const handleDeploy = useCallback(async () => {
    if (!linked) return;
    setIsDeploying(true);
    setShowDropdown(false);

    try {
      showToast('Building project...', 'success');
      const buildResult = await shell.exec('npm', ['run', 'build'], { timeout: 300000 });
      if (buildResult.exit_code !== 0) {
        showToast(`Build failed: ${buildResult.stderr || buildResult.stdout}`, 'error');
        setIsDeploying(false);
        return;
      }

      // Verify output directory exists
      const dirCheck = await shell.exec('test', ['-d', linked.outputDir]);
      if (dirCheck.exit_code !== 0) {
        showToast(`Build succeeded but "${linked.outputDir}" folder not found. Check your framework's output settings.`, 'error');
        setIsDeploying(false);
        return;
      }

      const result = await shell.exec(
        'sh',
        ['-c', `CLOUDFLARE_ACCOUNT_ID=${linked.accountId} npx --yes wrangler pages deploy ${linked.outputDir} --project-name ${linked.projectName}`],
        { timeout: 300000 }
      );
      if (result.exit_code === 0) {
        // Update prodUrl if we can parse it from deploy output
        if (!linked.prodUrl) {
          const urlMatch = (result.stdout + '\n' + result.stderr).match(/https:\/\/[^\s]*\.pages\.dev/);
          if (urlMatch) {
            const pagesDevMatch = urlMatch[0].match(/https:\/\/[^.]+\.(.+\.pages\.dev)/);
            const realUrl = pagesDevMatch ? `https://${pagesDevMatch[1]}` : urlMatch[0];
            const updated = { ...linked, prodUrl: realUrl };
            setLinked(updated);
            await storage.write(updated as unknown as Record<string, unknown>);
          }
        }
        showToast('Deployed to Cloudflare Pages!', 'success');
      } else {
        showToast(`Deploy failed: ${result.stderr}`, 'error');
      }
    } catch {
      showToast('Connected! Deploy may still be running.', 'success');
    } finally {
      setIsDeploying(false);
    }
  }, [linked, shell, showToast, storage]);

  const handleUnlink = useCallback(async () => {
    try {
      await storage.write({});
      setLinked(null);
      setShowDropdown(false);
      showToast('Disconnected from Cloudflare Pages.', 'success');
    } catch {
      showToast('Failed to disconnect.', 'error');
    }
  }, [storage, showToast]);

  const handleSignOut = useCallback(async () => {
    setShowDropdown(false);
    try {
      await shell.exec('npx', ['--yes', 'wrangler', 'logout'], { timeout: 30000 });
      await storage.write({});
      setLinked(null);
      setAccounts([]);
      setCliStatus({ installed: true, authenticated: false });
      showToast('Signed out of Cloudflare.', 'success');
    } catch {
      showToast('Failed to sign out.', 'error');
    }
  }, [shell, storage, showToast]);

  const handleLinked = useCallback((project: LinkedProject) => {
    setLinked(project);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setShowDropdown(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  }, []);

  // Render based on state
  switch (state) {
    case 'CHECKING':
      return (
        <button
          className="toolbar-icon-btn cf-pulsing"
          disabled
          title="Connecting to Cloudflare..."
        >
          <CloudflareIcon />
          Connecting...
        </button>
      );

    case 'NOT_INSTALLED':
      return (
        <button
          className={`toolbar-icon-btn${installing ? ' cf-pulsing' : ''}`}
          onClick={handleInstall}
          disabled={installing}
          title="Install Wrangler CLI"
        >
          <CloudflareIcon />
          {installing ? 'Installing...' : 'Install Wrangler'}
        </button>
      );

    case 'NOT_AUTHENTICATED':
      return (
        <button
          className="toolbar-icon-btn"
          onClick={handleLogin}
          title="Connect your Cloudflare account"
        >
          <CloudflareIcon />
          Connect Cloudflare
        </button>
      );

    case 'WRONG_ACCOUNT':
      return (
        <div
          className="cf-dropdown-wrapper"
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="toolbar-icon-btn"
            onClick={handleLogin}
            title={`This project is linked to account "${linked?.accountName}". Sign in to that account to deploy.`}
            style={{ color: '#F6821F' }}
          >
            <CloudflareIcon />
            Wrong Account
          </button>
          {showDropdown && (
            <div className="cf-dropdown" style={{ background: theme.bgPrimary, border: `1px solid ${theme.border}` }}>
              <div style={{ padding: '8px 12px', fontSize: 11, opacity: 0.5 }}>
                Linked to: {linked?.accountName || 'unknown account'}
              </div>
              <div className="cf-dropdown-divider" style={{ background: theme.border }} />
              <button className="cf-dropdown-item" onClick={handleLogin}>
                Sign In
              </button>
              <button className="cf-dropdown-item" onClick={handleUnlink}>
                Disconnect Project
              </button>
              <button className="cf-dropdown-item" onClick={handleSignOut} style={{ color: theme.error }}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      );

    case 'NOT_LINKED':
      if (!hasGitRemote) return null;
      return (
        <>
          <button
            className="toolbar-icon-btn"
            onClick={() => setShowModal(true)}
            title="Link a Cloudflare Pages project"
          >
            <CloudflareIcon />
            Link Project
          </button>
          {showModal && (
            <ConnectModal
              onClose={() => setShowModal(false)}
              accounts={accounts}
              shell={shell}
              storage={storage}
              showToast={showToast}
              actions={actions}
              theme={theme}
              onLinked={handleLinked}
            />
          )}
        </>
      );

    case 'DEPLOYING':
      return (
        <button
          className="toolbar-icon-btn cf-deploying"
          disabled
          title="Deploying to Cloudflare Pages..."
        >
          <CloudflareIcon />
          Deploying...
        </button>
      );

    case 'CONNECTED':
      return (
        <div
          className="cf-dropdown-wrapper"
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="toolbar-icon-btn"
            onClick={() => actions.openUrl(`https://dash.cloudflare.com/${linked!.accountId}/pages/view/${linked!.projectName}`)}
            title={`${linked!.projectName} — Cloudflare Pages`}
          >
            <CloudflareIcon />
          </button>
          {showDropdown && (
            <ConnectedDropdown
              linked={linked!}
              theme={theme}
              actions={actions}
              shell={shell}
              showToast={showToast}
              storage={storage}
              onUnlink={handleUnlink}
              onSignOut={handleSignOut}
              onDeploy={handleDeploy}
              isDeploying={isDeploying}
            />
          )}
        </div>
      );
  }
}

// ---------------------------------------------------------------------------
// Module exports (required by Ship Studio plugin loader)
// ---------------------------------------------------------------------------

export const name = 'Cloudflare Pages';

export const slots = {
  toolbar: CloudflareToolbar,
};

export function onActivate() {
  console.log('[cloudflare] Plugin activated');
}

export function onDeactivate() {
  console.log('[cloudflare] Plugin deactivated');
  const styleEl = document.getElementById(CF_STYLE_ID);
  if (styleEl) styleEl.remove();
}
