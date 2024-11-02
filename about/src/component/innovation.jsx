import React, { useEffect, useRef, useState } from "react";

const ThreeCards = () => {
    const cardData = [
        { 
            title: "Data Management", 
            content: "We provide insights through data analysis and ensure data integrity for informed decision.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/iki-thumbnail.png",
            bgColor: "bg-green-500"
        },
        { 
            title: "User Support", 
            content: "We offer responsive technical support to ensure our colleagues can work efficiently and without interruption.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/innovation-fund-thumbnail.png",
            bgColor: "bg-red-500"
        },
        { 
            title: "Help Desk & Technical Support", 
            content: "Our support team ensures that our users receive prompt assistance and guidance on technical issues, so they can stay productive without disruption.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/innovation-network-thumbnail.png",
            bgColor: "bg-yellow-500"
        },
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
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                {cardData.map((card, index) => (
                    <div
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`w-full p-4 transition-opacity duration-700 transform ${
                            isVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        key={index}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div 
                            className={`relative rounded-lg shadow-md p-4 h-[300px] flex flex-col justify-between overflow-hidden transition-colors duration-900 ${card.bgColor} group`}
                        >
                            {/* Circular hover effect */}
                            <span className="absolute inset-0 bg-transparent rounded-full transition-transform duration-1000 ease-in-out transform scale-0 group-hover:bg-violet-900 group-hover:scale-150" />
                            <h2 className="text-lg md:text-xl font-bold text-white mb-2 z-10">
                                {card.title}
                            </h2>
                            <p className="text-sm md:text-base text-white mb-4 flex-grow z-10">
                                {card.content}
                            </p>
                            {card.image && (
                                <img 
                                    src={card.image} 
                                    alt={card.title} 
                                    className="w-full h-28 object-cover rounded-b-lg" 
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThreeCards;
