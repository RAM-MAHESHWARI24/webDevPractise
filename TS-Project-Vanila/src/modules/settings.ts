import './settings.css';

export function settingsContent() {
    const content = document.querySelector<HTMLSelectElement>("#content");
    if (!content) return;
    content.innerHTML = `
    <div class="widget card">
        <h3>System Settings</h3>
        <form class="settings-form">
            <div class="input-group">
                <label for="update-interval">Telemetry Refresh Interval (seconds)</label>
                <input type="number" id="update-interval" class="settings-input" value="5" min="1" max="60" />
            </div>
            <div class="input-group">
                <label for="theme-select">Dashboard Theme</label>
                <select id="theme-select" class="settings-select">
                    <option value="dark">Deep Obsidian (Default)</option>
                    <option value="cyberpunk">Cyberpunk Neon</option>
                    <option value="matrix">Digital Forest</option>
                </select>
            </div>
            <button type="submit" class="settings-btn">Save Configurations</button>
        </form>
    </div>
    `;
}
