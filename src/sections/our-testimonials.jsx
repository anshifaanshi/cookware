import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
    const testimonials = [
        {
            quote:
                "The stainless steel cookware heats evenly and feels incredibly premium. Cooking has become faster and more enjoyable.",
            name: "Richard Nelson",
            role: "Home Chef",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        },
        {
            quote:
                "Beautiful design with outstanding durability. The steel blue finish looks stunning in my kitchen.",
            name: "Sophia Martinez",
            role: "Kitchen Enthusiast",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        },
        {
            quote:
                "Non-stick performance is excellent, and cleaning is effortless. Easily the best cookware set I’ve owned.",
            name: "Ethan Roberts",
            role: "Busy Professional",
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
        },
        {
            quote:
                "Solid build quality and elegant style. These pots and pans feel truly professional-grade.",
            name: "Isabella Kim",
            role: "Food Blogger",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
        },
        {
            quote:
                "Even heat distribution makes a noticeable difference. Perfect for daily cooking and special meals.",
            name: "Liam Johnson",
            role: "Family Cook",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
        },
        {
            quote:
                "Stylish, durable, and reliable. This cookware set completely upgraded my kitchen experience.",
            name: "Ava Patel",
            role: "Culinary Hobbyist",
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
        },
    ];

    return (
        <section className="flex flex-col items-center" id="testimonials">
            <SectionTitle
                title="What Our Customers Say"
                description="Real experiences from customers who trust our premium steel cookware for everyday cooking."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        className="group border border-slate-700 p-6 rounded-xl bg-[#2E4E66]/20"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: `${index * 0.15}`,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1,
                        }}
                    >
                        <p className="text-slate-100 text-base">
                            “{testimonial.quote}”
                        </p>

                        <div className="flex items-center gap-3 mt-8 group-hover:-translate-y-1 duration-300">
                            <img
                                className="size-10 rounded-full"
                                src={testimonial.image}
                                alt="user image"
                            />
                            <div>
                                <h2 className="text-gray-200 font-medium">
                                    {testimonial.name}
                                </h2>
                                <p className="text-blue-400">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
