const socialIcons = [
    {
        icon: "instagram",
        title: "Instagram"
    },
    {
        icon: "facebook-f",
        title: "Facbook"
    },
    {
        icon: "twitter",
        title: "Twitter"
    },
    {
        icon: "linkedin",
        title: "LinkedIn"
    },
    {
        icon: "youtube",
        title: "YouTube"
    },
    {
        icon: "github",
        title: "Github"
    }
]



const iwataniArray = [];
for(let i = 0; socialIcons.length>i; i++){
    iwataniArray.push(<Iwatani icon = {socialIcons[i].icon} title = {socialIcons[i].title}/>)
}

const root = (
    <div className = "wrapper">
        {iwataniArray}
    </div>
)

ReactDOM.render(root, document.getElementById('root'))