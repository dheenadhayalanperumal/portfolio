import self from "../img/self.png"
import mock11 from "../img/mock11.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

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
            text: 'Based in the India'
        },
        {
            emoji: "💼",
            text: "Frontend Developer at NMW Internet Technologies Pvt Ltd"
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
    bio: "As a skilled React Developer with a strong background in both web and mobile application development, I specialize in creating dynamic and responsive user interfaces using React and React Native. My extensive experience includes building complex single-page applications, implementing state management solutions, and optimizing performance for a seamless user experience.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'React native', 'DSA','git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'mongoDB','Material-UI'],
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
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Chit Fund Collection Andriod App",
            live: "####",
            source: "###",
            image: mock4
        },
        {
            title: "Live Weather Andriod App",
            live: "https://www.amazon.com/gp/product/B0DBLR4HD7",
            source: "https://github.com/dheenadhayalanperumal/weatherAPP",
            image: mock11
        },
        {
            title: "Movie Database",
            live: "https://movies.dheenadhayalan.online", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/dheenadhayalanperumal/MovieDatabase", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock5
        },
        {
            title: "Live Weather Application",
            live: "https://weather.dheenadhayalan.online",
            source: "https://github.com/dheenadhayalanperumal/wheatherApp-prj",
            image: mock2
        },
        {
            title: "National Public School",
            live: "https://nationalpublicschoolmanamadurai.com/",
            source: "https://github.com/dheenadhayalanperumal",
            image: mock3
        }
       
    ]
}
