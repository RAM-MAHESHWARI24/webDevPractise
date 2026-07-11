export function overviewContent() {
    const content = document.querySelector<HTMLSelectElement>("#content");
    content.innerHTML = `
    <section class="widget-grid">
                <div class="widget card">
                    <h3>CPU Load (Cluster A)</h3>
                    <div class="metric">24.8%</div>
                    <p class="subtext">16 Cores Active</p>
                </div>
                <div class="widget card">
                    <h3>Active Throughput</h3>
                    <div class="metric">1.42 GB/s</div>
                    <p class="subtext">Peak: 2.10 GB/s</p>
                </div>
                <div class="widget card">
                    <h3>Connected Nodes</h3>
                    <div class="metric">1,024 / 1,024</div>
                    <p class="subtext">0 Offline</p>
                </div>
                <div class="widget card span-2">
                    <h3>Real-Time Network Diagnostics</h3>
                    <div class="metric-sm">No packet loss detected across regional routing gateways.</div>
                </div>
            </section>
    `
}