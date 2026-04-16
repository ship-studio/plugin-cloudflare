import { jsxs, jsx, Fragment } from "data:text/javascript,export function jsx(t,p,k){if(k!==undefined)p.key=k;return window.__SHIPSTUDIO_REACT__.createElement(t,p)};export function jsxs(t,p,k){if(k!==undefined)p.key=k;return window.__SHIPSTUDIO_REACT__.createElement(t,p)};export const Fragment=window.__SHIPSTUDIO_REACT__.Fragment;";
import { useState, useRef, useEffect, useCallback } from "data:text/javascript,export default window.__SHIPSTUDIO_REACT__;export const useState=window.__SHIPSTUDIO_REACT__.useState;export const useEffect=window.__SHIPSTUDIO_REACT__.useEffect;export const useCallback=window.__SHIPSTUDIO_REACT__.useCallback;export const useMemo=window.__SHIPSTUDIO_REACT__.useMemo;export const useRef=window.__SHIPSTUDIO_REACT__.useRef;export const useContext=window.__SHIPSTUDIO_REACT__.useContext;export const createElement=window.__SHIPSTUDIO_REACT__.createElement;export const Fragment=window.__SHIPSTUDIO_REACT__.Fragment;";
const CF_STYLE_ID = "cf-plugin-styles";
const CLOUDFLARE_CSS = `
@keyframes cfPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.cf-checking {
  cursor: wait;
}

.cf-checking .cf-checking-text {
  animation: cfPulse 1.5s ease-in-out infinite;
}

.cf-deploying {
  color: #F6821F !important;
  cursor: wait;
}

.cf-deploying .cf-deploying-text {
  animation: cfPulse 1.5s ease-in-out infinite;
}

/* Dropdown */
.cf-dropdown-wrapper {
  position: relative;
}

.cf-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  padding-top: 4px;
  z-index: 100;
}

.cf-dropdown-inner {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 4px;
  min-width: 200px;
  max-width: 320px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.cf-dropdown-inner button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 12px;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  border-radius: 6px;
  text-align: left;
}

.cf-dropdown-inner button:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.cf-dropdown-inner button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cf-dropdown-inner button svg {
  flex-shrink: 0;
  opacity: 0.5;
}

.cf-dropdown-inner button:hover svg {
  opacity: 1;
}

.cf-site-url {
  flex: 1;
  min-width: 0;
  font-family: monospace;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cf-dropdown-divider {
  height: 1px;
  background: var(--border);
  margin: 4px 0;
}

.cf-badge {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 3px 6px;
  border-radius: 4px;
  flex-shrink: 0;
}

.cf-badge-prod {
  color: rgba(74, 222, 128, 0.9);
  background: rgba(74, 222, 128, 0.12);
}

.cf-badge-dashboard {
  color: rgba(251, 191, 36, 0.9);
  background: rgba(251, 191, 36, 0.12);
}

/* Dropdown action items (smaller, muted) */
.cf-dropdown-action {
  color: var(--text-muted) !important;
  font-size: 12px !important;
  padding: 8px 12px !important;
  gap: 6px !important;
}

.cf-dropdown-action:hover {
  color: var(--text-secondary) !important;
}

.cf-dropdown-action svg {
  opacity: 0.6;
}

.cf-dropdown-action:hover svg {
  opacity: 1;
}

.cf-dropdown-action.cf-action-danger:hover {
  color: var(--error, #ef4444) !important;
}

.cf-dropdown-action.cf-action-danger:hover svg {
  color: var(--error, #ef4444);
}

/* Account mismatch */
.cf-mismatch-text {
  padding: 10px 12px;
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.4;
}

.cf-mismatch-text strong {
  color: var(--text-primary);
  font-weight: 600;
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
    const style = document.createElement("style");
    style.id = CF_STYLE_ID;
    style.textContent = CLOUDFLARE_CSS;
    document.head.appendChild(style);
    return () => {
      var _a;
      (_a = document.getElementById(CF_STYLE_ID)) == null ? void 0 : _a.remove();
    };
  }, []);
}
const _w = window;
function usePluginContext() {
  const React = _w.__SHIPSTUDIO_REACT__;
  const CtxRef = _w.__SHIPSTUDIO_PLUGIN_CONTEXT_REF__;
  if (CtxRef && (React == null ? void 0 : React.useContext)) {
    const ctx = React.useContext(CtxRef);
    if (ctx) return ctx;
  }
  const directCtx = _w.__SHIPSTUDIO_PLUGIN_CONTEXT__;
  if (directCtx) return directCtx;
  throw new Error("Plugin context not available.");
}
function parseWhoamiJson(jsonStr) {
  try {
    const data = JSON.parse(jsonStr);
    if (!Array.isArray(data.accounts)) return [];
    return data.accounts.filter((a) => a.id && a.name).map((a) => ({ name: a.name, id: a.id }));
  } catch {
    return [];
  }
}
function parseProjectList(stdout) {
  const projects = [];
  const lines = stdout.split("\n");
  for (const line of lines) {
    const match = line.match(/│\s*(.+?)\s*│\s*(\S+\.pages\.dev)\s*│/);
    if (match) {
      projects.push({ name: match[1].trim(), subdomain: match[2].trim() });
    }
  }
  return projects;
}
async function detectOutputDir(shell) {
  try {
    const result = await shell.exec("cat", ["package.json"]);
    if (result.exit_code === 0) {
      const pkg = result.stdout.toLowerCase();
      if (pkg.includes('"next"') || pkg.includes("'next'")) return "out";
      if (pkg.includes('"nuxt"') || pkg.includes("'nuxt'")) return ".output/public";
      if (pkg.includes('"vite"') || pkg.includes('"astro"') || pkg.includes('"svelte"') || pkg.includes('"@sveltejs/kit"')) return "dist";
      if (pkg.includes('"react-scripts"')) return "build";
      if (pkg.includes('"gatsby"')) return "public";
    }
  } catch {
  }
  const candidates = ["dist", "build", "out", "public"];
  for (const dir of candidates) {
    try {
      const result = await shell.exec("test", ["-d", dir]);
      if (result.exit_code === 0) return dir;
    } catch {
    }
  }
  return "dist";
}
function openAutoDeploySetup(actions, accountId) {
  actions.openUrl(`https://dash.cloudflare.com/${accountId}/pages/new/provider/gh`);
}
function CloudflareIcon({ size = 14 }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", fillRule: "evenodd", children: [
    /* @__PURE__ */ jsx("path", { d: "M16.493 17.4c.135-.52.08-.983-.161-1.338-.215-.328-.592-.519-1.05-.519l-8.663-.109a.148.148 0 01-.135-.082c-.027-.054-.027-.109-.027-.163.027-.082.108-.164.189-.164l8.744-.11c1.05-.054 2.153-.9 2.556-1.937l.511-1.31c.027-.055.027-.11.027-.164C17.92 8.91 15.66 7 12.942 7c-2.503 0-4.628 1.638-5.381 3.903a2.432 2.432 0 00-1.803-.491c-1.21.109-2.153 1.092-2.287 2.32-.027.328 0 .628.054.9C1.56 13.688 0 15.326 0 17.319c0 .19.027.355.027.545 0 .082.08.137.161.137h15.983c.08 0 .188-.055.215-.164l.107-.437" }),
    /* @__PURE__ */ jsx("path", { d: "M19.238 11.75h-.242c-.054 0-.108.054-.135.109l-.35 1.2c-.134.52-.08.983.162 1.338.215.328.592.518 1.05.518l1.855.11c.054 0 .108.027.135.082.027.054.027.109.027.163-.027.082-.108.164-.188.164l-1.91.11c-1.05.054-2.153.9-2.557 1.937l-.134.355c-.027.055.026.137.107.137h6.592c.081 0 .162-.055.162-.137.107-.41.188-.846.188-1.31-.027-2.62-2.153-4.777-4.762-4.777" })
  ] });
}
function ExternalLinkIcon({ size = 12 }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ jsx("polyline", { points: "15 3 21 3 21 9" }),
    /* @__PURE__ */ jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
  ] });
}
function SwitchIcon() {
  return /* @__PURE__ */ jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("polyline", { points: "17 1 21 5 17 9" }),
    /* @__PURE__ */ jsx("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }),
    /* @__PURE__ */ jsx("polyline", { points: "7 23 3 19 7 15" }),
    /* @__PURE__ */ jsx("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" })
  ] });
}
function DisconnectIcon() {
  return /* @__PURE__ */ jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] });
}
function DeployIcon() {
  return /* @__PURE__ */ jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("polyline", { points: "16 16 12 12 8 16" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
    /* @__PURE__ */ jsx("path", { d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" })
  ] });
}
function AutoDeployIcon() {
  return /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) });
}
function SignOutIcon() {
  return /* @__PURE__ */ jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
    /* @__PURE__ */ jsx("polyline", { points: "16 17 21 12 16 7" }),
    /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
  ] });
}
function ConnectModal({
  onClose,
  accounts,
  shell,
  storage,
  showToast,
  actions,
  theme,
  onLinked
}) {
  var _a;
  const [tab, setTab] = useState("create");
  const [selectedAccountId, setSelectedAccountId] = useState(((_a = accounts[0]) == null ? void 0 : _a.id) ?? "");
  const [projectName, setProjectName] = useState("");
  const [outputDir, setOutputDir] = useState("dist");
  const [detectingDir, setDetectingDir] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [existingProjects, setExistingProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [selectedExisting, setSelectedExisting] = useState(null);
  useEffect(() => {
    let cancelled = false;
    detectOutputDir(shell).then((dir) => {
      if (!cancelled) {
        setOutputDir(dir);
        setDetectingDir(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    if (tab !== "link" || !selectedAccountId) return;
    let cancelled = false;
    setLoadingProjects(true);
    setExistingProjects([]);
    setSelectedExisting(null);
    shell.exec("sh", ["-c", `CLOUDFLARE_ACCOUNT_ID=${selectedAccountId} npx --yes wrangler pages project list`]).then((result) => {
      if (cancelled) return;
      if (result.exit_code === 0) {
        setExistingProjects(parseProjectList(result.stdout));
      }
      setLoadingProjects(false);
    }).catch(() => {
      if (!cancelled) setLoadingProjects(false);
    });
    return () => {
      cancelled = true;
    };
  }, [tab, selectedAccountId]);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  const sanitizeProjectName = (name2) => {
    return name2.toLowerCase().replace(/[^a-zA-Z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
  };
  const getSelectedAccount = () => {
    return accounts.find((a) => a.id === selectedAccountId);
  };
  const handleCreate = useCallback(async () => {
    const sanitized = sanitizeProjectName(projectName);
    if (!sanitized) {
      setError("Please enter a valid project name.");
      return;
    }
    if (!selectedAccountId) {
      setError("Please select an account.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const createResult = await shell.exec("sh", [
        "-c",
        `CLOUDFLARE_ACCOUNT_ID=${selectedAccountId} npx --yes wrangler pages project create ${sanitized} --production-branch main`
      ]);
      if (createResult.exit_code !== 0) {
        const stderr = createResult.stderr || "";
        if (!stderr.toLowerCase().includes("already exists")) {
          setError(`Failed to create project: ${stderr}`);
          setLoading(false);
          return;
        }
      }
      const account = getSelectedAccount();
      const linked = {
        projectName: sanitized,
        accountId: selectedAccountId,
        accountName: (account == null ? void 0 : account.name) ?? "",
        outputDir
      };
      await storage.write(linked);
      try {
        const buildResult = await shell.exec("npm", ["run", "build"], { timeout: 3e5 });
        if (buildResult.exit_code !== 0) {
          setError(`Build failed: ${buildResult.stderr || buildResult.stdout}`);
          setLoading(false);
          return;
        }
        const dirCheck = await shell.exec("test", ["-d", outputDir]);
        if (dirCheck.exit_code !== 0) {
          setError(`Build succeeded but "${outputDir}" folder was not created. Check your framework's output settings — for Next.js, add \`output: 'export'\` to next.config.`);
          setLoading(false);
          return;
        }
        const deployResult = await shell.exec(
          "sh",
          ["-c", `CLOUDFLARE_ACCOUNT_ID=${selectedAccountId} npx --yes wrangler pages deploy ${outputDir} --project-name ${sanitized}`],
          { timeout: 3e5 }
        );
        const urlMatch = (deployResult.stdout + "\n" + deployResult.stderr).match(/https:\/\/[^\s]*\.pages\.dev/);
        if (urlMatch) {
          const deployUrl = urlMatch[0];
          const pagesDevMatch = deployUrl.match(/https:\/\/[^.]+\.(.+\.pages\.dev)/);
          linked.prodUrl = pagesDevMatch ? `https://${pagesDevMatch[1]}` : deployUrl;
          await storage.write(linked);
        }
        showToast("Deployed! Setting up auto-deploy...", "success");
      } catch {
        showToast("Connected! Deploy may still be running.", "success");
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
      setError("Please select a project.");
      return;
    }
    if (!selectedAccountId) {
      setError("Please select an account.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const account = getSelectedAccount();
      const existingProject = existingProjects.find((p) => p.name === selectedExisting);
      const linked = {
        projectName: selectedExisting,
        accountId: selectedAccountId,
        accountName: (account == null ? void 0 : account.name) ?? "",
        outputDir,
        prodUrl: (existingProject == null ? void 0 : existingProject.subdomain) ? `https://${existingProject.subdomain}` : void 0
      };
      await storage.write(linked);
      showToast(`Linked to ${selectedExisting}`, "success");
      onLinked(linked);
      onClose();
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  }, [selectedExisting, selectedAccountId, outputDir, shell, storage, showToast, onLinked, onClose]);
  const selectedAccount = getSelectedAccount();
  return /* @__PURE__ */ jsx("div", { className: "cf-modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "cf-modal",
      style: { background: theme.bgPrimary, color: theme.textPrimary, border: `1px solid ${theme.border}` },
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "cf-modal-header", style: { borderBottom: `1px solid ${theme.border}` }, children: [
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ jsx(CloudflareIcon, { size: 14 }),
            "Connect Cloudflare Pages"
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "cf-close-btn",
              onClick: onClose,
              style: { color: theme.textMuted },
              children: "✕"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "cf-modal-body", children: [
          error && /* @__PURE__ */ jsx("div", { className: "cf-error-box", children: error }),
          /* @__PURE__ */ jsxs("div", { className: "cf-tabs", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: `cf-tab ${tab === "create" ? "cf-tab-active" : ""}`,
                onClick: () => {
                  setTab("create");
                  setError(null);
                },
                children: "Create New"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: `cf-tab ${tab === "link" ? "cf-tab-active" : ""}`,
                onClick: () => {
                  setTab("link");
                  setError(null);
                },
                children: "Link Existing"
              }
            )
          ] }),
          accounts.length > 1 && /* @__PURE__ */ jsxs("div", { className: "cf-form-group", children: [
            /* @__PURE__ */ jsx("label", { className: "cf-form-label", children: "Account" }),
            /* @__PURE__ */ jsxs("div", { className: "cf-custom-select", style: { borderColor: theme.border }, children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "cf-custom-select-trigger",
                  onClick: () => {
                    const el = document.getElementById("cf-account-dropdown");
                    if (el) el.style.display = el.style.display === "block" ? "none" : "block";
                  },
                  type: "button",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: selectedAccount ? selectedAccount.name : "Select account" }),
                    /* @__PURE__ */ jsx("span", { style: { opacity: 0.4, fontSize: 10 }, children: "▼" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { id: "cf-account-dropdown", className: "cf-custom-select-options", style: { display: "none", background: theme.bgPrimary, borderColor: theme.border }, children: accounts.map((a, i) => /* @__PURE__ */ jsx(
                "button",
                {
                  className: `cf-custom-select-option ${selectedAccountId === a.id ? "cf-option-selected" : ""}`,
                  onClick: () => {
                    setSelectedAccountId(a.id);
                    const el = document.getElementById("cf-account-dropdown");
                    if (el) el.style.display = "none";
                  },
                  type: "button",
                  children: a.name
                },
                a.id
              )) })
            ] })
          ] }),
          tab === "create" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "cf-form-group", children: [
              /* @__PURE__ */ jsx("label", { className: "cf-form-label", children: "Project Name" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "cf-form-input",
                  style: { borderColor: theme.border },
                  type: "text",
                  placeholder: "my-site",
                  value: projectName,
                  onChange: (e) => setProjectName(e.target.value),
                  autoCorrect: "off",
                  autoCapitalize: "off",
                  spellCheck: false
                }
              ),
              projectName && sanitizeProjectName(projectName) !== projectName && /* @__PURE__ */ jsxs("div", { className: "cf-form-hint", children: [
                "Will be created as: ",
                sanitizeProjectName(projectName)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "cf-form-group", children: [
              /* @__PURE__ */ jsx("label", { className: "cf-form-label", children: "Output Directory" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "cf-form-input",
                  style: { borderColor: theme.border },
                  type: "text",
                  value: outputDir,
                  onChange: (e) => setOutputDir(e.target.value),
                  autoCorrect: "off",
                  autoCapitalize: "off",
                  spellCheck: false
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "cf-form-hint", children: detectingDir ? "Detecting..." : "The folder your build tool outputs to (e.g. dist, build, out)" })
            ] })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "cf-form-group", children: [
              /* @__PURE__ */ jsx("label", { className: "cf-form-label", children: "Select Project" }),
              loadingProjects ? /* @__PURE__ */ jsxs("div", { style: { padding: "8px 0", fontSize: 12, opacity: 0.5 }, children: [
                /* @__PURE__ */ jsx("span", { className: "cf-spinner" }),
                " Loading projects..."
              ] }) : existingProjects.length === 0 ? /* @__PURE__ */ jsx("div", { style: { padding: "8px 0", fontSize: 12, opacity: 0.5 }, children: "No projects found. Create one in the other tab." }) : /* @__PURE__ */ jsx("div", { className: "cf-project-list", style: { borderColor: theme.border }, children: existingProjects.map((p) => /* @__PURE__ */ jsxs(
                "button",
                {
                  className: `cf-project-item ${selectedExisting === p.name ? "cf-project-selected" : ""}`,
                  onClick: () => setSelectedExisting(p.name),
                  children: [
                    /* @__PURE__ */ jsx("span", { children: p.name }),
                    /* @__PURE__ */ jsx("span", { className: "cf-project-subdomain", children: p.subdomain })
                  ]
                },
                p.name
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "cf-form-group", children: [
              /* @__PURE__ */ jsx("label", { className: "cf-form-label", children: "Output Directory" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "cf-form-input",
                  style: { borderColor: theme.border },
                  type: "text",
                  value: outputDir,
                  onChange: (e) => setOutputDir(e.target.value),
                  autoCorrect: "off",
                  autoCapitalize: "off",
                  spellCheck: false
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "cf-form-hint", children: detectingDir ? "Detecting..." : "The folder your build tool outputs to (e.g. dist, build, out)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "cf-modal-footer", style: { borderTop: `1px solid ${theme.border}` }, children: tab === "create" ? /* @__PURE__ */ jsx(
          "button",
          {
            className: "cf-btn cf-btn-primary",
            onClick: handleCreate,
            disabled: loading || !projectName.trim(),
            children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "cf-spinner" }),
              " Deploying..."
            ] }) : "Connect & Deploy"
          }
        ) : /* @__PURE__ */ jsx(
          "button",
          {
            className: "cf-btn cf-btn-primary",
            onClick: handleLink,
            disabled: loading || !selectedExisting,
            children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "cf-spinner" }),
              " Linking..."
            ] }) : "Link Project"
          }
        ) })
      ]
    }
  ) });
}
function ConnectedDropdown({
  linked,
  actions,
  onUnlink,
  onSignOut,
  onDeploy,
  isDeploying
}) {
  const dashboardUrl = `https://dash.cloudflare.com/${linked.accountId}/pages/view/${linked.projectName}`;
  const prodUrl = linked.prodUrl || `https://${linked.projectName}.pages.dev`;
  const prodLabel = prodUrl.replace("https://", "");
  return /* @__PURE__ */ jsx("div", { className: "cf-dropdown", children: /* @__PURE__ */ jsxs("div", { className: "cf-dropdown-inner", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          actions.openUrl(prodUrl);
        },
        children: [
          /* @__PURE__ */ jsx("span", { className: "cf-badge cf-badge-prod", children: "Prod" }),
          /* @__PURE__ */ jsx("span", { className: "cf-site-url", children: prodLabel }),
          /* @__PURE__ */ jsx(ExternalLinkIcon, {})
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          actions.openUrl(dashboardUrl);
        },
        children: [
          /* @__PURE__ */ jsx("span", { className: "cf-badge cf-badge-dashboard", children: "Dash" }),
          /* @__PURE__ */ jsx("span", { className: "cf-site-url", children: "dash.cloudflare.com" }),
          /* @__PURE__ */ jsx(ExternalLinkIcon, {})
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "cf-dropdown-divider" }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "cf-dropdown-action",
        onClick: (e) => {
          e.stopPropagation();
          onDeploy();
        },
        disabled: isDeploying,
        children: [
          /* @__PURE__ */ jsx(DeployIcon, {}),
          isDeploying ? "Deploying..." : "Deploy Now"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "cf-dropdown-action",
        onClick: (e) => {
          e.stopPropagation();
          openAutoDeploySetup(actions, linked.accountId);
        },
        children: [
          /* @__PURE__ */ jsx(AutoDeployIcon, {}),
          "Enable Auto-Deploy"
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "cf-dropdown-divider" }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "cf-dropdown-action cf-action-danger",
        onClick: (e) => {
          e.stopPropagation();
          onUnlink();
        },
        children: [
          /* @__PURE__ */ jsx(DisconnectIcon, {}),
          "Disconnect Project"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "cf-dropdown-action cf-action-danger",
        onClick: (e) => {
          e.stopPropagation();
          onSignOut();
        },
        children: [
          /* @__PURE__ */ jsx(SignOutIcon, {}),
          "Sign Out"
        ]
      }
    )
  ] }) });
}
function CloudflareToolbar() {
  const ctx = usePluginContext();
  const shell = ctx.shell;
  const storage = ctx.storage;
  const showToast = ctx.actions.showToast;
  const theme = ctx.theme;
  const actions = ctx.actions;
  useInjectStyles();
  const [cliStatus, setCliStatus] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [linked, setLinked] = useState(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [hasGitRemote, setHasGitRemote] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const state = (() => {
    if (cliStatus === null) return "CHECKING";
    if (!cliStatus.installed) return "NOT_INSTALLED";
    if (!cliStatus.authenticated) return "NOT_AUTHENTICATED";
    if (linked && accounts.length > 0 && !accounts.some((a) => a.id === linked.accountId)) return "WRONG_ACCOUNT";
    if (isDeploying) return "DEPLOYING";
    if (linked) return "CONNECTED";
    return "NOT_LINKED";
  })();
  useEffect(() => {
    let cancelled = false;
    async function check() {
      try {
        const writeResult = await shell.exec("sh", [
          "-c",
          "npx --yes wrangler whoami --json > /tmp/cf_whoami.json 2>/dev/null"
        ], { timeout: 3e4 });
        if (cancelled) return;
        if (writeResult.exit_code !== 0) {
          const combined = (writeResult.stderr + writeResult.stdout).toLowerCase();
          if (combined.includes("not found") || combined.includes("enoent") || combined.includes("err_module")) {
            setCliStatus({ installed: false, authenticated: false });
          } else {
            setCliStatus({ installed: true, authenticated: false });
          }
          return;
        }
        const readResult = await shell.exec("cat", ["/tmp/cf_whoami.json"]);
        shell.exec("rm", ["-f", "/tmp/cf_whoami.json"]);
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
              const linkedData = data;
              if (!linkedData.prodUrl) {
                try {
                  const listResult = await shell.exec("sh", [
                    "-c",
                    `CLOUDFLARE_ACCOUNT_ID=${linkedData.accountId} npx --yes wrangler pages project list`
                  ]);
                  if (listResult.exit_code === 0) {
                    const projects = parseProjectList(listResult.stdout);
                    const match = projects.find((p) => p.name === linkedData.projectName);
                    if (match == null ? void 0 : match.subdomain) {
                      linkedData.prodUrl = `https://${match.subdomain}`;
                      await storage.write(linkedData);
                    }
                  }
                } catch {
                }
              }
              setLinked(linkedData);
            }
          } catch {
          }
        }
      } catch {
        if (!cancelled) {
          setCliStatus({ installed: false, authenticated: false });
        }
      }
    }
    check();
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    if (hasGitRemote) return;
    let cancelled = false;
    async function checkRemote() {
      try {
        const result = await shell.exec("git", ["remote", "-v"]);
        if (!cancelled && result.exit_code === 0 && result.stdout.trim()) {
          setHasGitRemote(true);
        }
      } catch {
      }
    }
    checkRemote();
    const interval = setInterval(checkRemote, 5e3);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [hasGitRemote]);
  useEffect(() => {
    if (!showDropdown) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showDropdown]);
  const handleInstall = useCallback(async () => {
    setInstalling(true);
    showToast("Installing wrangler globally...", "success");
    try {
      let result = await shell.exec("npm", ["install", "-g", "wrangler"], { timeout: 12e4 });
      if (result.exit_code !== 0) {
        showToast("Global install failed, trying local install...", "success");
        result = await shell.exec("npm", ["install", "--save-dev", "wrangler"], { timeout: 12e4 });
      }
      if (result.exit_code === 0) {
        const check = await shell.exec("npx", ["--yes", "wrangler", "--version"]);
        if (check.exit_code === 0) {
          showToast("Wrangler installed!", "success");
          setCliStatus({ installed: true, authenticated: false });
        } else {
          showToast("Install seemed to succeed but wrangler not found. Try restarting your terminal.", "error");
        }
      } else {
        showToast(`Install failed: ${result.stderr}`, "error");
      }
    } catch (err) {
      showToast(`Install failed: ${err instanceof Error ? err.message : String(err)}`, "error");
    } finally {
      setInstalling(false);
    }
  }, [shell, showToast]);
  const handleLogin = useCallback(async () => {
    showToast("Opening Cloudflare login...", "success");
    try {
      const result = await shell.exec("npx", ["--yes", "wrangler", "login"], { timeout: 12e4 });
      if (result.exit_code === 0) {
        await shell.exec("sh", [
          "-c",
          "npx --yes wrangler whoami --json > /tmp/cf_whoami.json 2>/dev/null"
        ], { timeout: 3e4 });
        const readResult = await shell.exec("cat", ["/tmp/cf_whoami.json"]);
        shell.exec("rm", ["-f", "/tmp/cf_whoami.json"]);
        if (readResult.exit_code === 0 && readResult.stdout.trim()) {
          const parsedAccounts = parseWhoamiJson(readResult.stdout);
          setAccounts(parsedAccounts);
          if (parsedAccounts.length > 0) {
            setCliStatus({ installed: true, authenticated: true });
            showToast("Connected to Cloudflare!", "success");
          } else {
            setCliStatus({ installed: true, authenticated: false });
            showToast("Authentication failed. Please try again.", "error");
          }
        }
      } else {
        showToast("Login failed or was cancelled.", "error");
      }
    } catch {
      showToast("Login timed out or failed.", "error");
    }
  }, [shell, showToast]);
  const handleDeploy = useCallback(async () => {
    if (!linked) return;
    setIsDeploying(true);
    setShowDropdown(false);
    try {
      showToast("Building project...", "success");
      const buildResult = await shell.exec("npm", ["run", "build"], { timeout: 3e5 });
      if (buildResult.exit_code !== 0) {
        showToast(`Build failed: ${buildResult.stderr || buildResult.stdout}`, "error");
        setIsDeploying(false);
        return;
      }
      const dirCheck = await shell.exec("test", ["-d", linked.outputDir]);
      if (dirCheck.exit_code !== 0) {
        showToast(`Build succeeded but "${linked.outputDir}" folder not found. Check your framework's output settings.`, "error");
        setIsDeploying(false);
        return;
      }
      const result = await shell.exec(
        "sh",
        ["-c", `CLOUDFLARE_ACCOUNT_ID=${linked.accountId} npx --yes wrangler pages deploy ${linked.outputDir} --project-name ${linked.projectName}`],
        { timeout: 3e5 }
      );
      if (result.exit_code === 0) {
        if (!linked.prodUrl) {
          const urlMatch = (result.stdout + "\n" + result.stderr).match(/https:\/\/[^\s]*\.pages\.dev/);
          if (urlMatch) {
            const pagesDevMatch = urlMatch[0].match(/https:\/\/[^.]+\.(.+\.pages\.dev)/);
            const realUrl = pagesDevMatch ? `https://${pagesDevMatch[1]}` : urlMatch[0];
            const updated = { ...linked, prodUrl: realUrl };
            setLinked(updated);
            await storage.write(updated);
          }
        }
        showToast("Deployed to Cloudflare Pages!", "success");
      } else {
        showToast(`Deploy failed: ${result.stderr}`, "error");
      }
    } catch {
      showToast("Connected! Deploy may still be running.", "success");
    } finally {
      setIsDeploying(false);
    }
  }, [linked, shell, showToast, storage]);
  const handleUnlink = useCallback(async () => {
    try {
      await storage.write({});
      setLinked(null);
      setShowDropdown(false);
      showToast("Disconnected from Cloudflare Pages.", "success");
    } catch {
      showToast("Failed to disconnect.", "error");
    }
  }, [storage, showToast]);
  const handleSignOut = useCallback(async () => {
    setShowDropdown(false);
    try {
      await shell.exec("npx", ["--yes", "wrangler", "logout"], { timeout: 3e4 });
      await storage.write({});
      setLinked(null);
      setAccounts([]);
      setCliStatus({ installed: true, authenticated: false });
      showToast("Signed out of Cloudflare.", "success");
    } catch {
      showToast("Failed to sign out.", "error");
    }
  }, [shell, storage, showToast]);
  const handleLinked = useCallback((project) => {
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
  switch (state) {
    case "CHECKING":
      return /* @__PURE__ */ jsxs(
        "button",
        {
          className: "toolbar-icon-btn cf-checking",
          disabled: true,
          title: "Connecting to Cloudflare...",
          children: [
            /* @__PURE__ */ jsx(CloudflareIcon, {}),
            /* @__PURE__ */ jsx("span", { className: "cf-checking-text", children: "Connecting..." })
          ]
        }
      );
    case "NOT_INSTALLED":
      return /* @__PURE__ */ jsxs(
        "button",
        {
          className: `toolbar-icon-btn${installing ? " cf-pulsing" : ""}`,
          onClick: handleInstall,
          disabled: installing,
          title: "Install Wrangler CLI",
          children: [
            /* @__PURE__ */ jsx(CloudflareIcon, {}),
            installing ? "Installing..." : "Install Wrangler"
          ]
        }
      );
    case "NOT_AUTHENTICATED":
      return /* @__PURE__ */ jsxs(
        "button",
        {
          className: "toolbar-icon-btn",
          onClick: handleLogin,
          title: "Connect your Cloudflare account",
          children: [
            /* @__PURE__ */ jsx(CloudflareIcon, {}),
            "Connect Cloudflare"
          ]
        }
      );
    case "WRONG_ACCOUNT":
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "cf-dropdown-wrapper",
          ref: dropdownRef,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "toolbar-icon-btn",
                onClick: () => setShowDropdown((v) => !v),
                title: "Account mismatch",
                style: { color: "#f59e0b" },
                children: /* @__PURE__ */ jsx(CloudflareIcon, {})
              }
            ),
            showDropdown && /* @__PURE__ */ jsx("div", { className: "cf-dropdown", children: /* @__PURE__ */ jsxs("div", { className: "cf-dropdown-inner", children: [
              /* @__PURE__ */ jsxs("div", { className: "cf-mismatch-text", children: [
                "This project is linked to ",
                /* @__PURE__ */ jsx("strong", { children: (linked == null ? void 0 : linked.accountName) || "a different account" }),
                " but you're signed in to a different account."
              ] }),
              /* @__PURE__ */ jsx("div", { className: "cf-dropdown-divider" }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "cf-dropdown-action",
                  onClick: (e) => {
                    e.stopPropagation();
                    handleLogin();
                  },
                  children: [
                    /* @__PURE__ */ jsx(SwitchIcon, {}),
                    "Switch Account"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "cf-dropdown-action cf-action-danger",
                  onClick: (e) => {
                    e.stopPropagation();
                    handleUnlink();
                  },
                  children: [
                    /* @__PURE__ */ jsx(DisconnectIcon, {}),
                    "Disconnect Project"
                  ]
                }
              )
            ] }) })
          ]
        }
      );
    case "NOT_LINKED":
      if (!hasGitRemote) return null;
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "toolbar-icon-btn",
            onClick: () => setShowModal(true),
            title: "Link a Cloudflare Pages project",
            children: [
              /* @__PURE__ */ jsx(CloudflareIcon, {}),
              "Link Project"
            ]
          }
        ),
        showModal && /* @__PURE__ */ jsx(
          ConnectModal,
          {
            onClose: () => setShowModal(false),
            accounts,
            shell,
            storage,
            showToast,
            actions,
            theme,
            onLinked: handleLinked
          }
        )
      ] });
    case "DEPLOYING":
      return /* @__PURE__ */ jsxs(
        "button",
        {
          className: "toolbar-icon-btn cf-deploying",
          disabled: true,
          title: "Deploying to Cloudflare Pages...",
          children: [
            /* @__PURE__ */ jsx(CloudflareIcon, {}),
            /* @__PURE__ */ jsx("span", { className: "cf-deploying-text", children: "Deploying..." })
          ]
        }
      );
    case "CONNECTED":
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "cf-dropdown-wrapper",
          ref: dropdownRef,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: () => !isDeploying && handleMouseLeave(),
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "toolbar-icon-btn",
                onClick: () => actions.openUrl(`https://dash.cloudflare.com/${linked.accountId}/pages/view/${linked.projectName}`),
                title: `${linked.projectName} — Cloudflare Pages`,
                children: /* @__PURE__ */ jsx(CloudflareIcon, {})
              }
            ),
            showDropdown && /* @__PURE__ */ jsx(
              ConnectedDropdown,
              {
                linked,
                actions,
                onUnlink: handleUnlink,
                onSignOut: handleSignOut,
                onDeploy: handleDeploy,
                isDeploying
              }
            )
          ]
        }
      );
  }
}
const name = "Cloudflare Pages";
const slots = {
  toolbar: CloudflareToolbar
};
function onActivate() {
  console.log("[cloudflare] Plugin activated");
}
function onDeactivate() {
  console.log("[cloudflare] Plugin deactivated");
  const styleEl = document.getElementById(CF_STYLE_ID);
  if (styleEl) styleEl.remove();
}
export {
  name,
  onActivate,
  onDeactivate,
  slots
};
