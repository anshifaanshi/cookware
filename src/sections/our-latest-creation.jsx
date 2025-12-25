import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [className, setClassName] = useState("");

    const sectionData = [
        {
            title: "Premium Steel Cookware Set",
            description:
                "Crafted from high-grade stainless steel for durability, even heat distribution, and elegant kitchens.",
            image:
                "https://i.postimg.cc/43B0XjHt/Cookware-Sets-Walmart-com.jpg",
            align: "object-center",
        },
        {
            title: "Non-Stick Frying Collection",
            description:
                "Designed for effortless cooking and easy cleaning, perfect for everyday meals with less oil.",
            image:
                "https://i.postimg.cc/nrQSYzRy/Cookware-Sets-and-Pots-Pans-Sets.jpg",
            align: "object-right",
        },
        {
            title: "Professional Pots & Pans",
            description:
                "Chef-inspired cookware built to handle high heat and deliver consistent, reliable performance.",
            image:
                "https://i.postimg.cc/qM24pMJ1/Amazon-com-Allgetc-Nonstick-Cookware-Pots-and-Pans-Set-16Pcs-Kitchenware-set-with-Frying-Pan-Sauc.jpg",
            align: "object-center",
        },
    ];

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % sectionData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered, sectionData.length]);

    return (
        <section className="flex flex-col items-center" id="creations">
            <SectionTitle
                title="Our Latest Cookware Collection"
                description="A curated selection of our newest cookware designs — combining performance, durability, and steel-blue elegance."
            />

            <div
                className="flex items-center gap-4 h-100 w-full max-w-5xl mt-18 mx-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {sectionData.map((data, index) => (
                    <motion.div
                        key={data.title}
                        className={`relative group flex-grow h-[400px] rounded-xl overflow-hidden ${
                            isHovered && className
                                ? "hover:w-full w-56"
                                : index === activeIndex
                                ? "w-full"
                                : "w-56"
                        } ${className} ${!className ? "pointer-events-none" : ""}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        onAnimationComplete={() =>
                            setClassName("transition-all duration-500")
                        }
                        transition={{
                            delay: `${index * 0.15}`,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1,
                        }}
                    >
                        <img
                            className={`h-full w-full object-cover ${data.align}`}
                            src={data.image}
                            alt={data.title}
                        />

                        <div
                            className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-[#2E4E66]/70 transition-all duration-300 ${
                                isHovered && className
                                    ? "opacity-0 group-hover:opacity-100"
                                    : index === activeIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        >
                            <h1 className="text-3xl font-semibold">
                                {data.title}
                            </h1>
                            <p className="text-sm mt-2">
                                {data.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
