import React, { useEffect, useRef, useState } from 'react';

const ContinuousCarousel = () => {
    const images = [
        'https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg',
        'https://st.depositphotos.com/1907633/2182/i/450/depositphotos_21823959-stock-photo-businessman-hand-working-with-new.jpg',
        'https://media.licdn.com/dms/image/D4D12AQHvs3QnnNgCrg/article-cover_image-shrink_720_1280/0/1694684102922?e=2147483647&v=beta&t=1cpJXwUVrEiRZ7MtStXUgQiqYiqGYHS3Z1Sn_JwGSM4',
        'https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041861.jpg?semt=ais_hybrid',
    ];

    const smallImages = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO25RdUo-gxWLdloYo8__XNNv0mmoEV89sYw&s',
        'https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?s=612x612&w=0&k=20&c=G5dWfl2JH9Lqp0Yjgo4qYLjg88v5QGoIU-Bqw2qTXrA=',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJzDCH2VQtZ8FR3_zCz90pnD0lNBG86OzZA&s',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [smallImagesVisible, setSmallImagesVisible] = useState(false);
    const intervalRef = useRef();

    useEffect(() => {
        startAutoSlide();

        const timer = setTimeout(() => {
            setSmallImagesVisible(true);
        }, 1000); // Delay of 1 second before showing small images

        return () => {
            stopAutoSlide(); // Cleanup on unmount
            clearTimeout(timer); // Clear the timeout
        };
    }, []);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Carousel */}
            <div className="relative">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div className="min-w-full relative" key={index}>
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className={`w-full h-[600px] object-cover border-none transition-opacity duration-700 ease-in-out`}
                                style={{
                                    opacity: currentIndex === index ? 1 : 0,
                                    transition: 'opacity 0.7s ease-in-out',
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Small Images Section at the Bottom */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-nowrap justify-center space-x-2 overflow-hidden scrollbar-hidden">
                    {smallImages.map((smallImage, smallIndex) => (
                        <div key={smallIndex} className="relative">
                            <img
                                src={smallImage}
                                alt={`Small Image ${smallIndex + 1}`}
                                className={`w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-md border-2 border-white shadow-md transition-transform duration-700 ease-in-out ${
                                    smallImagesVisible ? 'translate-y-0' : 'translate-y-10'
                                } hover:scale-105 hover:border-orange-400`}
                                style={{
                                    transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out',
                                    opacity: smallImagesVisible ? 1 : 0,
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContinuousCarousel;
