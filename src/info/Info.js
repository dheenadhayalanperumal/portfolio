import self from "../img/self.png"
import mock11 from "../img/mock11.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import dheefitMockup from "../img/dheefit.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Dheenadhayalan",
    lastName: "Perumal",
    initials: "DD", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by lemonade'
        },
        {
            emoji: '🌎',
            text: 'Based in the India, Chennai'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer at NMW Internet Technologies Pvt Ltd"
        },
        {
            emoji: "📧",
            text: "Dheenadhayalanperumal@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/dheena007",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/dheenadhayalan_perumal",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/dheenadhayalanperumal",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/dheenadhayalan-perumal-aa9080148/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/DangerDheena",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "React and React Native Developer with hands-on experience in designing and developing modern web and mobile applications. Skilled in building responsive user interfaces, managing application state, integrating APIs, and improving application performance to create fast, scalable, and user-friendly solutions.",
    skills:
        {
            proficientWith: ['React native','react','javascript','DSA','git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'mongoDB','Material-UI','Firebase'],
            exposedTo: ['nodejs', 'Redux', 'adobe premiere pro',]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Photogrophy',
            emoji: '📷'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Chess',
            emoji: '♟️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    /* ── Home page intro ─────────────────────────────────────────────────────
       Written as parts so the emphasis and the link stay in the data rather
       than in the markup. `strong` bolds a part; `to` turns it into an
       internal link. */
    subhead: [
        { text: "A " },
        { text: "full-stack developer", strong: true },
        { text: " building fast, accessible interfaces with React and React Native. Alongside my work at NMW, I'm the founder of " },
        { text: "DheeFit", strong: true, to: "/dheefit" },
        { text: " — an AI-powered fitness and nutrition app I designed, built, and shipped end to end." }
    ],

    /* ── Current roles ───────────────────────────────────────────────────────
       Both run concurrently: the day job, plus the product built alongside it.
       `link` is optional — a role with one becomes clickable. */
    experience: [
        {
            role: "Full Stack Developer",
            org: "NMW Internet Technologies Pvt Ltd",
            type: "Full-time",
            period: "Present",
            summary: "Building and maintaining web and mobile applications — responsive interfaces, state management, API integration, and performance work.",
            link: null
        },
        {
            role: "Founder & React Native Developer",
            org: "DheeFit",
            type: "Independent product",
            period: "2026 — Present",
            summary: "Designing, building, and shipping an AI-powered fitness and nutrition app end to end, from product planning through to Play Store releases.",
            link: "/dheefit"
        }
    ],

    /* ── DheeFit — founder project ───────────────────────────────────────────
       Everything the feature card and the /dheefit case study render comes
       from here. Nothing is hardcoded in the components, so edits land in one
       place. Sections with empty arrays (metrics, screenshots) stay hidden
       until you fill them in. */
    dheefit: {
        name: "DheeFit",
        tagline: "AI-Powered Fitness & Nutrition App",
        role: "Founder & React Native Developer",
        period: "2026 — Present",
        platform: "Android",

        // Shown inside the phone frame on the portfolio card. Remove this and
        // the card falls back to a plain decorative frame.
        mockup: dheefitMockup,
        mockupAlt: "The DheeFit dashboard, showing daily steps, water, calorie and weight tracking alongside AI meal suggestions.",

        // Paste the Play Store listing URL here and the Download button appears
        // on both the portfolio card and the case study header. Left null until
        // then so the site never shows a dead link.
        // e.g. "https://play.google.com/store/apps/details?id=com.dheena007.fitnessapp"
        playStore: "https://play.google.com/store/apps/details?id=com.dheena007.fitnessapp",
        website: null,
        privacyPolicy: "/DheefitPrivacyPolicy",

        summary: "DheeFit is an AI-powered fitness and nutrition app that helps people reach their health goals through personalised workouts, meal recommendations, nutrition tracking, and progress monitoring. I designed, built, tested, and published it independently — owning both the engineering and the product.",

        problem: "Most fitness apps hand you a generic plan and a food diary, then leave the thinking to you. Working out what to eat, how much of it, and which session to do next takes more effort than the workout itself — so people drift away within a few weeks.",

        audience: "People training on their own without a coach or dietitian — beginners who need structure and direction, and intermediate lifters who want their nutrition tracked accurately without manual spreadsheet work.",

        approach: "Rather than another logging tool, DheeFit generates the plan. Gemini produces workout and meal recommendations from each user's goals, body metrics, and history, while Health Connect pulls activity in automatically so tracking costs the user as little effort as possible.",

        ownershipNote: "Designed, developed, tested, and published independently — from the first sketch through to the Play Store listing and ongoing releases.",

        features: [
            { label: "AI-generated workout plans", detail: "Personalised to goals, equipment, and history" },
            { label: "AI meal recommendations", detail: "Suggestions that fit the day's remaining macros" },
            { label: "Nutrition tracking", detail: "Calories, macros, and micronutrients" },
            { label: "Workout logging & analytics", detail: "Session history and progress over time" },
            { label: "Weight & water tracking", detail: "Daily targets with trend charts" },
            { label: "Step counting", detail: "Synced via Google Health Connect" },
            { label: "Push notifications", detail: "Reminders for meals, water, and sessions" },
            { label: "Secure authentication", detail: "Accounts and user profiles" }
        ],

        stack: [
            "React Native",
            "Expo",
            "TypeScript",
            "Redux",
            "Firebase",
            "REST APIs",
            "Google Health Connect",
            "Google Gemini AI",
            "Git & GitHub"
        ],

        // How many stack chips the compact feature card shows.
        featuredStackCount: 6,

        architecture: [
            {
                layer: "Client",
                detail: "React Native on Expo with TypeScript throughout. Redux holds shared state — the active plan, the day's intake, and sync status — so screens stay consistent while data arrives from several sources."
            },
            {
                layer: "Data & auth",
                detail: "Firebase handles authentication and persistence, keeping profiles, logs, and plan history per user and available across sessions."
            },
            {
                layer: "AI layer",
                detail: "Google Gemini generates workout and meal recommendations from the user's profile, goals, and recent history, with responses parsed into typed structures the app can render and store."
            },
            {
                layer: "Device integration",
                detail: "Google Health Connect supplies step and activity data, so the app reflects real movement without asking the user to log it manually."
            }
        ],

        challenges: [
            {
                title: "Health Connect integration",
                detail: "Health Connect has a permission model and data schema of its own, and availability varies by device and Android version. Reads had to be reconciled with data already in the app, degrade gracefully when permissions are declined, and avoid double-counting steps."
            },
            {
                title: "Making AI output reliable",
                detail: "A language model returns prose, but the UI needs structured, well-formed plans. Prompts are constrained and responses validated before use, with fallbacks so a malformed or failed generation never leaves the user on a broken screen."
            },
            {
                title: "Nutrition accuracy",
                detail: "Tracking micronutrients — not just calories — means reconciling inconsistent food data, portion units, and serving sizes into totals a user can actually trust."
            },
            {
                title: "Performance on mid-range devices",
                detail: "Long log lists, charts, and frequent state updates were tuned to keep scrolling smooth on the mid-range Android hardware most users actually carry."
            }
        ],

        responsibilities: [
            "Product planning and feature design",
            "UI/UX implementation",
            "Mobile application development",
            "API integration",
            "State management",
            "AI integration",
            "Performance optimisation",
            "Testing and deployment",
            "Google Play Store publishing"
        ],

        // Nothing invented here. Add entries as real numbers arrive and the
        // stats strip renders itself.
        // e.g. { value: "1,000+", label: "Downloads" }
        metrics: [],

        // Drop files in src/img/dheefit/, import them at the top of this file,
        // and add them here — the gallery then appears.
        // e.g. { src: shot1, alt: "Dashboard showing daily macros" }
        screenshots: [],

        // Every piece of visible copy, so none of it lives in the components.
        labels: {
            badge: "founder project",
            homeKicker: "now building — founder project",
            homeSubtitle: "AI fitness & nutrition app",
            screenTicker: "AI · Fitness · Nutrition",
            eyebrow: "case study — founder project",
            backToWork: "← selected work",
            backToWorkFoot: "← back to work",
            roleKey: "role",
            periodKey: "period",
            platformKey: "platform",
            problem: "// the problem",
            audience: "// who it's for",
            approach: "// the approach",
            screenshots: "Inside the app",
            features: "Key features",
            architecture: "Architecture",
            stack: "Tech stack",
            challenges: "Problems worth solving",
            owned: "What I owned",
            caseStudyCta: "read the case study",
            playStoreKicker: "Get it on",
            playStoreLabel: "Google Play",
            websiteCta: "visit site",
            privacyCta: "privacy policy"
        }
    },

    /* Copy for the portfolio page itself. */
    workPage: {
        eyebrow: "chapter / 02 — selected work",
        otherWorkLabel: "other work",
        lede: "One product of my own, plus {count} projects spanning React Native apps, weather dashboards, school portals, and more — built with intent, refined in motion."
    },

    /* Copy for the current-roles block on the home page. */
    experienceSection: {
        label: "currently"
    },

    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Chit Fund Collection Andriod App",
            live: "####",
            source: "###",
            image: mock4
        },
        {
            title: "Live Weather Andriod App",
            live: "https://play.google.com/store/apps/details?id=com.dheena007.weatherapp",
            source: "https://github.com/dheenadhayalanperumal/weatherAPP",
            image: mock11
        },
        {
            title: "Movie Database",
            live: "https://movies.dheenadhayalan.pro", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/dheenadhayalanperumal/MovieDatabase", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock5
        },
        {
            title: "Live Weather Application",
            live: "https://weather.dheenadhayalan.pro",
            source: "https://github.com/dheenadhayalanperumal/wheatherApp-prj",
            image: mock2
        },
        {
            title: "National Public School",
            live: "https://nationalpublicschoolmanamadurai.com/",
            source: "https://github.com/dheenadhayalanperumal",
            image: mock3
        },
        {
          title: "Tap Timing",
          live: "https://play.google.com/store/apps/details?id=com.dheena007.TapTimingGame",
          source: "https://github.com/dheenadhayalanperumal/TapTimingGame",
          image: mock6
      }
       
    ]
}
