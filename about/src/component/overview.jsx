import React, { useEffect, useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false); // Track if scrolled down

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasScrolledDown(true); // Set to true when scrolled down
    }
  };

  useEffect(() => {
    handleScroll(); // Check scroll position on load
    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  // Use effect to trigger visibility after scrolling down
  useEffect(() => {
    if (hasScrolledDown) {
      setIsVisible(true); // Show sections after scrolling down
    }
  }, [hasScrolledDown]);

  return (
    <div className="p-4 grid grid-cols-1 gap-4 mt-16 sm:mt-[60px] md:grid-cols-2">
      {/* Left Section */}
      <div
        className={`bg-white p-4 md:p-6 rounded-lg shadow-none transition-transform duration-500 ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-base sm:text-lg">
          To enable innovation, enhance productivity, and support growth by
          delivering reliable and user-friendly IT solutions that meet the
          evolving needs of our organization.
        </p>
      </div>

      {/* Right Section */}
      <div
        className={`bg-white p-4 md:p-6 rounded-lg shadow-none transition-transform duration-500 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Welcome to Maharaju Health Care Application
        </h2>
        <p className="text-base sm:text-lg">
          We are the backbone of technology at Maharaju IT Department, dedicated
          to creating and maintaining secure, efficient, and innovative digital
          solutions that drive business success. Our team consists of skilled
          professionals in IT infrastructure, software development, data
          management, and technical support, Web Design. Together, we empower the
          organization by ensuring smooth operations, driving digital
          transformation, and providing our users with top-tier support and
          solutions.
        </p>
      </div>
    </div>
  );
};

export default App;
