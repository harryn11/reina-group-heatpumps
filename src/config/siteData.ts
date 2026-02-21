export const siteData = {
    company: {
        name: "Reina Group",
        logoLight: "/logo.png",
        logoDark: "/logo.png", // Same logo for now
        phone: "01303 248648",
        email: "info@reinagroup.co.uk",
        address: "Century House, Park Farm Rd, Folkestone CT19 5DW",
        socials: {
            linkedin: "https://linkedin.com/company/reinagroup",
            twitter: "https://twitter.com/reinagroup",
            instagram: "https://instagram.com/reinagroup"
        }
    },
    theme: {
        primaryColor: "brand-primary",
        secondaryColor: "brand-secondary"
    },
    hero: {
        region: "Kent",
        accreditations: ["MCS Accredited", "TrustMark Approved"],
        partners: ["DAIKIN", "SAMSUNG", "HITACHI"],
        backgroundImage: "/hero-heatpump.jpg",
        subtitle: "Future-proof your Kent home with ultra-efficient heat pumps. A local team of specialist engineers, no pushy salespeople."
    },
    trust: {
        guarantees: [
            {
                icon: "ShieldCheck",
                title: "MCS Accredited",
                description: "Fully certified installations eligible for the Boiler Upgrade Scheme grant."
            },
            {
                icon: "UserCheck",
                title: "Our Behavioural Promise",
                description: "We will always arrive on time, we will never smoke or swear on your property, and we will always clean up after ourselves."
            },
            {
                icon: "Star",
                title: "Price Match Guarantee",
                description: "Find a cheaper quote for the same system specifications locally, and we'll match it."
            },
            {
                icon: "Award",
                title: "HIES Guarantee",
                description: "Consumer protection and insurance-backed guarantees for your peace of mind."
            }
        ]
    },
    process: {
        steps: [
            {
                icon: "ClipboardCheck",
                title: "Step 1: 'Show & Tell' Consultation",
                description: "We invite you to our home, put the kettle on, and walk you through our own low-carbon systems in real-time. No pushy salespeople."
            },
            {
                icon: "PenTool",
                title: "Step 2: Home Survey & Design",
                description: "One of our engineers visits your home to measure heat loss room-by-room, designing a bespoke system tailored to your property."
            },
            {
                icon: "Wrench",
                title: "Step 3: Expert Installation",
                description: "Installed respectfully by our own accredited, full-time team. We treat your home with care."
            },
            {
                icon: "HeartHandshake",
                title: "Step 4: Aftercare & Support",
                description: "We don't just leave. We set up your controls, show you how to use them, and provide ongoing maintenance."
            }
        ]
    },
    team: {
        engineers: [
            {
                name: "Ricky Reina",
                role: "Managing Director",
                image: "https://www.reinagroup.co.uk/wp-content/uploads/2018/04/63c33d55dd3beb2b365ccf68_ricky_reina_3024x.png",
                quote: "Quality is the only metric that matters."
            },
            {
                name: "Charlotte Reina",
                role: "Director",
                image: "https://www.reinagroup.co.uk/wp-content/uploads/2018/04/63c33d86f3d9c55a5e3c981e_charlotte_reina_3024x.png",
                quote: "We don't just install systems; we build relationships in our community."
            },
            {
                name: "Chris Smith",
                role: "Contracts Director",
                image: "https://www.reinagroup.co.uk/wp-content/uploads/2018/04/63c45af87204b66e4f59a731_chris_smith_3024x.jpeg",
                quote: "Every property in the South East is unique. We design systems precisely tailored for yours."
            }
        ]
    },
    reviews: {
        aggregate: {
            rating: 3.9,
            total: 14,
            platform: "Google"
        },
        list: [
            {
                name: "John & Sarah M.",
                date: "2 weeks ago",
                text: "The team was incredibly polite. They even wore shoe covers every time they entered the house.",
                location: "Oxford"
            },
            {
                name: "Michael P.",
                date: "1 month ago",
                text: "My heating bills dropped by 40%. The installation was seamless and finished on time.",
                location: "Cambridge"
            },
            {
                name: "Emma W.",
                date: "2 months ago",
                text: "Finally, a company that explains things clearly without the sales jargon. Highly recommend.",
                location: "London"
            },
            {
                name: "David L.",
                date: "3 months ago",
                text: "Professional from start to finish. The heat pump is silent and the house is always warm.",
                location: "Bristol"
            },
            {
                name: "Sophie T.",
                date: "4 months ago",
                text: "Clean, tidy, and respectful. They left the place spotless. A breath of fresh air.",
                location: "Manchester"
            }
        ]
    },
    productShowcase: {
        backgroundImage: "/showcase-bg.jpg"
    },
    chat: {
        agentName: "Sarah",
        agentPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
        greeting: "Hi there! I'm Sarah, a lead engineer at Reina Group. How can I help with your heating today?"
    }
};
