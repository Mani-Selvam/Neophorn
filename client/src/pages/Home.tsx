import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Industries } from "@/components/Industries";
import { Tech } from "@/components/Tech";
import { Testimonials } from "@/components/Testimonials";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";

export default function Home() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <div className="fixed inset-0 z-0 grid-pattern opacity-30 pointer-events-none" />

            <Navbar />

            <main>
                <Hero onExploreClick={() => scrollTo("contact")} />
                <Industries />
                <Products />
                <Tech />
                <Testimonials />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
