import './networkLogs.css';

export function networkLogsContent() {
    const content = document.querySelector<HTMLSelectElement>("#content");
    if (!content) return;
    content.innerHTML = `
    <div class="widget card span-2">
        <div class="logs-header">
            <h3>Live Traffic Network Logs</h3>
            <span class="logs-badge">GATEWAY-01</span>
        </div>
        <div class="logs-table-container">
            <table class="logs-table">
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Status</th>
                        <th>Latency</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="logs-timestamp">15:42:01.320</td>
                        <td><span class="logs-method get">GET</span></td>
                        <td class="logs-endpoint">/api/v1/telemetry/nodes</td>
                        <td><span class="logs-status-badge ok">200 OK</span></td>
                        <td class="logs-latency">12ms</td>
                    </tr>
                    <tr>
                        <td class="logs-timestamp">15:41:59.804</td>
                        <td><span class="logs-method post">POST</span></td>
                        <td class="logs-endpoint">/api/v1/auth/provision</td>
                        <td><span class="logs-status-badge error">403 Forbidden</span></td>
                        <td class="logs-latency">45ms</td>
                    </tr>
                    <tr>
                        <td class="logs-timestamp">15:41:54.112</td>
                        <td><span class="logs-method put">PUT</span></td>
                        <td class="logs-endpoint">/api/v1/cluster/gateways</td>
                        <td><span class="logs-status-badge ok">200 OK</span></td>
                        <td class="logs-latency">18ms</td>
                    </tr>
                    <tr>
                        <td class="logs-timestamp">15:41:48.556</td>
                        <td><span class="logs-method get">GET</span></td>
                        <td class="logs-endpoint">/api/v1/metrics/throughput</td>
                        <td><span class="logs-status-badge ok">200 OK</span></td>
                        <td class="logs-latency">8ms</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
}