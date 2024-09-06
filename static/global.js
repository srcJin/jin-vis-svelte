console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// Step 2.1: Get all navigation links into a variable
let navLinks = $$("nav a");

// Step 2.2: Find the link that matches the current page URL
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

// Step 2.3: Add the "current" class to the matching link

// if (currentLink) { // or if (currentLink !== undefined)
// 	currentLink.classList.add("current");
// }

// Step 2.4: Refactor the code to use optional chaining
currentLink?.classList.add("current");


// Define the pages array with URLs and titles
let pages = [
    { url: "./", title: "Home" },
    { url: "projects", title: "Projects" },
    { url: "contact", title: "Contact" },
    { url: "cv", title: "CV" }
];

// Create a new <nav> element and add it to the body
let nav = document.createElement("nav");
document.body.prepend(nav);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

// Loop through each page in the pages array and create the navigation links
for (let p of pages) {
    let url = p.url;
    let title = p.title;

    // Adjust the URL if we're not on the homepage and the URL is not absolute
    url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;

    // Insert the link into the nav element
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }

    nav.append(a);

}

// lab 3 Step 4: Create the color mode switch and add it to the page

// Step 4.2: Detect the OS color scheme and adjust the text in the dropdown
let osPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let automaticLabel = osPrefersDark ? "Automatic (Dark)" : "Automatic (Light)";

// Step 4.3: Add the dark mode switch
document.body.insertAdjacentHTML("afterbegin", `
    <label class="color-scheme" style="position: absolute; top: 1rem; right: 1rem; font-size: 80%;">
        Theme:
        <select id="color-scheme-select">
            <option value="light dark">${automaticLabel}</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </label>
`);

// Step 4.4: Actually making the switch work
const select = document.querySelector('#color-scheme-select');

// Function to set the color scheme
function setColorScheme(scheme) {
    document.documentElement.style.setProperty("color-scheme", scheme);
}

// Apply saved theme or default to auto
if ("colorScheme" in localStorage) {
    const savedScheme = localStorage.colorScheme;
    setColorScheme(savedScheme);
    select.value = savedScheme; // Sync dropdown with saved value
} else {
    setColorScheme("light dark");
}

// Step 4.4: Adding event listener for changes to the color scheme
select.addEventListener("input", function(event) {
    const selectedScheme = event.target.value;
    console.log("color scheme changed to", selectedScheme);
    setColorScheme(selectedScheme);
    localStorage.colorScheme = selectedScheme; // Save preference to localStorage
});


// Step 4.5 better contact form
// Get the form element and add an event listener for form submission
const form = document.querySelector('#contactForm');

form?.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Create a new FormData object from the form
    const data = new FormData(form);
    const params = [];

    // Iterate through the form fields and encode each name and value
    for (let [name, value] of data) {
        // Encode each value properly to handle spaces and special characters
        params.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
    }

    // Build the mailto URL
    const mailtoUrl = `mailto:gaojin@mit.edu?${params.join('&')}`;

    // Redirect to the mailto URL (this will open the email client)
    location.href = mailtoUrl;

});