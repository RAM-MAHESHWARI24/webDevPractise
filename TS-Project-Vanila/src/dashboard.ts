import './style.css'
import { overviewContent } from './modules/overview';
import { networkLogsContent } from './modules/networkLogs';
import { nodeStatusContent } from './modules/nodeStatus';
import { settingsContent } from './modules/settings';

const logOutButton = document.querySelector<HTMLButtonElement>("#log_out_but");

if (logOutButton) {
    logOutButton.addEventListener("click", () => {
        console.log("LOGGING OUT BY Button");
        window.location.href = "/index.html";
    });
} else {
    console.log("NO logout button found");
}

const butList = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");
const mainContent = document.querySelector<HTMLElement>(".main-content");
const pageHeader = document.querySelector<HTMLElement>(".top-bar h2");

// Define premium gradients for each tab background
const tabBackgrounds: Record<string, string> = {
    "Overview": "radial-gradient(circle at top right, #0c101a, #010409)",
    "NL": "radial-gradient(circle at top right, #051a26, #010409)",
    "NS": "radial-gradient(circle at top right, #180924, #010409)",
    "Set": "radial-gradient(circle at top right, #1c1c1c, #070707)"
};

// Map each element ID to its content function
const tabRenderers: Record<string, () => void> = {
    "Overview": overviewContent,
    "NL": networkLogsContent,
    "NS": nodeStatusContent,
    "Set": settingsContent
};

// Initialize with Overview content on load
overviewContent();

if (butList && butList.length > 0) {
    for (let i = 0; i < butList.length; i++) {
        butList[i].addEventListener("click", (event) => {
            event.preventDefault();
            
            const currentTabId = butList[i].id;
            
            // 1. Update Active Navigation styling
            butList[i].classList.add("nav-active");
            for (let j = 0; j < butList.length; j++) {
                if (j === i) {
                    continue;
                } else {
                    butList[j].classList.remove("nav-active");
                }
            }

            // 2. Call the renderer function for the clicked tab
            const renderFn = tabRenderers[currentTabId];
            if (renderFn) {
                renderFn();
            }

            // 3. Smooth background transition
            if (mainContent && tabBackgrounds[currentTabId]) {
                mainContent.style.setProperty('--bg-gradient', tabBackgrounds[currentTabId]);
            }

            // 4. Update the heading title
            if (pageHeader) {
                pageHeader.textContent = butList[i].textContent;
            }
        });
    }
} else {
    console.log("Navigation Buttons not Found");
}