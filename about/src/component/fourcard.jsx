import React, { useEffect, useRef, useState } from "react";

const FourCards = () => {
    const cardData = [
        { 
            title: "Our Vision", 
            content: "To be a proactive, trusted technology partner that propels Maharaju IT Department towards a future of digital excellence and resilience.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/digital-core.png",
            bgColor: "bg-orange-500"
        },
        { 
            title: "Infrastructure Management", 
            content: "We manage and maintain the networks, servers, and devices that keep us connected and operational.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/digital-operating.png",
            bgColor: "bg-blue-500"
        },
        { 
            title: "Cybersecurity", 
            content: "We protect the organization’s data and systems from cyber threats with robust security measures and continuous monitoring.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/talent-transformation.png",
            bgColor: "bg-pink-500"
        },
        { 
            title: "Software Development", 
            content: "We design, develop, and maintain custom software solutions tailored to our organization’s unique needs.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/new-possibilities.png",
            bgColor: "bg-red-500"
        }
    ];

    const [isVisible, setIsVisible] = useState(Array(cardData.length).fill(false));
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => {
                            const updatedVisibility = [...prev];
                            updatedVisibility[index] = true;
                            return updatedVisibility;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            cardRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-2xl md:text-3xl font-extrabold mb-8">
                What We Do
            </h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {cardData.map((card, index) => (
                    <div
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`w-full p-2 transition-opacity duration-700 transform ${
                            isVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        key={index}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div 
                            className={`h-[320px] sm:h-[350px] rounded-lg shadow-md p-4 flex flex-col justify-between transition-colors duration-300 ${card.bgColor} hover:bg-violet-900`}
                        >
                            <h2 className="text-xl text-white font-bold mb-2">{card.title}</h2>
                            <p className="text-white mb-4">{card.content}</p>
                            {card.image && (
                                <img 
                                    src={card.image} 
                                    alt={card.title} 
                                    className="w-full h-32 sm:h-40 object-cover rounded-b-lg" 
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FourCards;
