async function checkForUpdates(currentVersion) {
    const url = `https://api.github.com/repos/TotallyReliableDino/Frisbee-Text-Editor/releases`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const latestRelease = data[0];
        const latestVersion = latestRelease.tag_name;
        if (currentVersion < latestVersion) {
            alert(`A new version (${latestVersion}) is available! You’re using ${currentVersion}. Please update.`);
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
}

const currentVersion = "0.1.4";
checkForUpdates(currentVersion);