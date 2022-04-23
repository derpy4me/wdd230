const lastModifiedDate = new Date(document.lastModified);

const lastModifiedElement = document.getElementById("lastUpdated");

lastModifiedElement.innerHTML = `Last Updated: ${lastModifiedDate.toLocaleDateString("en-US")} 
${lastModifiedDate.toLocaleTimeString("en-US")}`;
