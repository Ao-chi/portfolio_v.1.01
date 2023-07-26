import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
    return (
        <AnimatePresence>
            <div className="bg-background min-h-screen">
                <main className=" min-w-0 mt-[117px]">
                    <Header />
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 80 }}
                        transition={{ delay: 0.2 }}
                    >
                        {children}
                    </motion.div>
                    <Footer />
                </main>
            </div>
        </AnimatePresence>
    );
}
