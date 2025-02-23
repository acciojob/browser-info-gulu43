//your JS code here. If required.
 // Retrieve browser name and version from the navigator object
    let browserName = navigator.appName;
    let version = navigator.appVersion;

    // Create the message
    let message = "You are using " + browserName + " version " + version;

    // Display the message inside the div with id "browser-info"
    document.getElementById("browser-info").textContent = message;