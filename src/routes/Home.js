import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Specials from "../components/Specials";


function Home() {
    return (                
        <>
            <Header />
            <HeroSection/>
            <Specials />
            <Footer />
        </>
    )
}

export default Home;