import PrimeVideo from "../../assets/PrimeVideo.jpg"
import NLWNotes from "../../assets/NLWNotes.jpg"
import KeeperApp from "../../assets/KeeperApp.jpg"
import OasisLegacyBank from "../../assets/OasisLegacyBank.jpg"

interface Project {
    title: string;
    link: string;
    image: string;
    tech: string[];
    development?: boolean;
}

export const projects: Project[] = [
    {
        "title": "Prime Video Redesign",
        "link": "https://prime-video-redesign.netlify.app/",
        "image": PrimeVideo,
        "tech": ["html", "css", "vite", "react", "ts", "tailwind"]
    },
    {
        "title": "NLW Notes",
        "link": "https://notes-nlw.netlify.app/",
        "image": NLWNotes,
        "tech": ["html", "css", "vite", "react", "ts", "tailwind"]
    },
    {
        "title": "Keeper App",
        "link": "https://keeperapp-project.netlify.app/",
        "image": KeeperApp,
        "tech": ["html", "css", "react", "js"]
    },
    {
        "title": "In Development...",
        "link": "",
        "image": OasisLegacyBank,
        "tech": ["html", "css", "vite", "react", "ts", "tailwind", "node", "express", "postgresql"],
        "development": true,
    },
]