import useInView from "../../../hooks/useInView";

const BackEndCard = () => {
  const [cardRef, isCardVisible] = useInView({ threshold: 0.5 });

  return (
    <div
      ref={cardRef}
      className={`relative bg-gray-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out cursor-pointer w-full max-w-[750px] mx-auto p-8 md:p-10 ${
        isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Back-End Development
        </h2>
        <span className="block h-1 w-64 bg-green-500 mt-2 mx-auto rounded-full"></span>
      </div>

      {/* Main Content Area */}
      <div className="relative flex flex-wrap md:flex-nowrap items-center justify-center min-h-[200px] px-4 md:px-4 lg:px-8">

        {/* Back-End Icon - Mobile/Tablet View */}
        <div
          className={`absolute md:hidden z-0 transition-all duration-1000 ease-in-out ${
            isCardVisible
              ? "opacity-100 scale-75 delay-600"
              : "opacity-0 scale-200"
          } top-[-20px] left-1/2 -translate-x-1/2`}
        >
          <div className="w-20 h-20 bg-lime-500 rounded-full flex items-center justify-center">
            <img
              src="./skills-icons/backend-icon.png"
              alt="Back-End Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        {/* Back-End Icon - Desktop View */}
        <div
          className={`transition-all duration-1000 ease-in-out absolute hidden md:block ${
            isCardVisible
              ? "left-4 scale-75 delay-600"
              : "left-1/2 -translate-x-1/2 scale-110"
          }`}
        >
          <div className="w-28 h-28 md:w-32 md:h-32 bg-lime-500 rounded-full flex items-center justify-center">
            <img
              src="./skills-icons/backend-icon.png"
              alt="Back-End Icon"
              className="w-20 h-12 md:w-22 md:h-14"
            />
          </div>
        </div>

        {/* Skills Content */}
        <div
          className={`transition-all duration-800 ease-in-out relative w-full ${
            isCardVisible
              ? "opacity-100 translate-y-0 delay-800"
              : "opacity-0 translate-y-4 delay-0 pointer-events-none"
          } z-10`}
        >
          <div className="text-center md:text-left mt-10 md:mt-0 md:ml-[230px] w-full md:w-auto">
            <p className="text-gray-200 text-lg mb-4 md:mb-8">
              Server-side Logic & Databases
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 justify-center md:justify-start">
              {[
                { src: "skills-icons/python.png", alt: "Python" },
                { src: "skills-icons/js.svg", alt: "Javascript" },
                { src: "skills-icons/php.png", alt: "PHP" },
                { src: "skills-icons/java.png", alt: "Java" },
              ].map(({ src, alt }) => (
                <div
                  key={alt}
                  className="flex flex-col items-center mb-4 flex-shrink-0 w-[70px]"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-12 h-9 object-contain"
                  />
                  <p className="text-xs mt-1 text-zinc-200">{alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEndCard;
