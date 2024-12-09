import Image from "next/image";
export const AboutSection = () => {
    return (
        <section id="about" className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">I am Mudasir</h2>
            <div className="flex flex-col md:flex-row items-center">
                {/* <Image src={} alt="Professional headshot of the portfolio owner" className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0 md:mr-6" /> */}
                <p className="text-gray-600">
                    Hello! I'm a passionate developer with experience in building web applications using modern technologies. I love solving problems and creating efficient solutions. My skills include React, Tailwind CSS, and more.
                </p>
            </div>
        </section>
    );
};