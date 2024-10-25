const seaCreatures = [
    {
        name: "Giant Squid",
        description: "A deep-ocean squid that can grow up to 43 feet long.",
        image: "https://th.bing.com/th/id/R.19f5482c1d03e5f3ba649da01a92bdf0?rik=%2bNfv%2b05%2bbFA2wg&riu=http%3a%2f%2fourmarinespecies.com%2fwp-content%2fuploads%2f2018%2f06%2fgiant-squids-8-1.jpg&ehk=sA%2fHTqJsS9W%2bHhnoL7WD9d9zYAZFv%2fizMz%2bvvoExKEw%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Anglerfish",
        description: "Known for its bioluminescent lure, it attracts prey in the dark depths.",
        image: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/42-53005836_bowayv.jpg"
    },
    {
        name: "Dumbo Octopus",
        description: "A deep-sea octopus with ear-like fins resembling the Disney character.",
        image: "https://th.bing.com/th/id/OIP.RptZ8ilyj3rgA-kabUft8QHaHC?w=1200&h=1141&rs=1&pid=ImgDetMain"
    },
    {
        name: "Goblin Shark",
        description: "A rare shark with a distinctively elongated snout and flat, protruding jaws.",
        image: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1679431891/230321-Thompson-Goblin-Shark-tease_zha1he"
    },
    {
        name: "Sea Cucumber",
        description: "Echinoderms that play an important role in the ocean ecosystem.",
        image: "https://th.bing.com/th/id/OIP.8VTFxLC_mpYN63uK3CRbnAHaE9?rs=1&pid=ImgDetMain"
    }
];

document.getElementById("discover-btn").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * seaCreatures.length);
    const creature = seaCreatures[randomIndex];

    document.getElementById("creature-name").innerText = creature.name;
    document.getElementById("creature-description").innerText = creature.description;
    document.getElementById("creature-image").src = creature.image;
    document.getElementById("creature-info").classList.remove("hidden");
});
