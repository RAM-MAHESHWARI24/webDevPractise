import './nodeStatus.css';

export function nodeStatusContent() {
    const content = document.querySelector<HTMLSelectElement>("#content");
    if (!content) return;
    content.innerHTML = `
    <div class="widget card">
        <h3>Active Clusters Telemetry</h3>
        <div class="telemetry-grid">
            <div class="telemetry-card">
                <div class="telemetry-title">Cluster Alpha</div>
                <div class="telemetry-status online">ONLINE</div>
                <div class="telemetry-subtext">256 Nodes Active</div>
            </div>
            <div class="telemetry-card">
                <div class="telemetry-title">Cluster Beta</div>
                <div class="telemetry-status online">ONLINE</div>
                <div class="telemetry-subtext">512 Nodes Active</div>
            </div>
            <div class="telemetry-card">
                <div class="telemetry-title">Cluster Gamma</div>
                <div class="telemetry-status degraded">DEGRADED</div>
                <div class="telemetry-subtext">240 / 256 Active</div>
            </div>
        </div>
    </div>
    `;
}
