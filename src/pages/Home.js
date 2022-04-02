import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QuoteSection from "../components/QuoteSection";
import ChiefsSection from "../components/CheifsSection";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <HeroSection />
            <ImproveSkills />
            <QuoteSection />
            <ChiefsSection />
        </>
    )
}