let projects = [
    {
        "name": "V-Doc (Virtual Doctor)",
        "desc": "An AI assistant leveraging medication data to suggest appropriate treatments for various diseases and injuries, balancing efficacy with safety in its recommendations.",
        "github-link": "https://github.com/akn714/V-Doc"
    },
    {
        "name": "Student Dashboard",
        "desc": "A web application featuring an interactive student dashboard, designed for engaging and streamlined access to educational resources and tools.",
        "github-link": "https://github.com/akn714/Student-Dashboard"
    },
    {
        "name": "Discord AI Bot",
        "desc": "A custom-trained Discord AI bot, seamlessly integrating ChatGPT with RAG, tailored to your data for enriched, contextually relevant interactions and responses.",
        "github-link": "https://github.com/akn714/Discord-AI-Bot"
    },
    {
        "name": "COLX (College Olx)",
        "desc": "College OLX, A versatile college platform akin to OLX, enabling trade of second-hand items, lost and found posts, and maintenance requests.",
        "github-link": "https://github.com/akn714/colx"
    },
    {
        "name": "Chat Room",
        "desc": "A dynamic real-time chat app for instant messaging and seamless communication.",
        "github-link": "https://github.com/akn714/chat-room"
    },
    {
        "name": "YouTube Ad Skipper",
        "desc": "A Chrome extension designed to effectively bypass YouTube ads, enhancing your video-watching experience without interruptions.",
        "github-link": "https://github.com/akn714/YT-Ad-Skipper"
    },
    {
        "name": "Trash N Treasure",
        "desc": "A web portal bridging communities and recycling industries, facilitating efficient waste management and promoting environmental sustainability.",
        "github-link": "https://github.com/akn714/Trash-n-Treasure"
    },
    {
        "name": "TelegramGPT",
        "desc": "An AI assistant for Telegram, utilizing the Retrieval-Augmented Generation (RAG) model, trained on custom data for enhanced, context-aware responses.",
        "github-link": "https://github.com/akn714/TelegramGPT"
    },
    {
        "name": "AstroBeats",
        "desc": "Dive into the cosmos of sound with \"AstroBeats\", a sleek music website clone offering celestial playlists and personalized music recommendations.",
        "github-link": "https://github.com/akn714/astrobeats"
    }
]

let project_containers = document.getElementsByClassName('project-containers')[0];

projects.forEach(project => {
    let container = document.createElement('div');
    container.setAttribute('class', 'project-container');
    container.innerHTML = `
        <div class="project-title">
            <h2>${project.name}</h2>
        </div>
        <div class="project-desc">${project.desc}</div>
        <div class="view-on-github"><a href='${project["github-link"]}' target='_blank'>view on github</a></div>
    `;

    project_containers.appendChild(container);
})


