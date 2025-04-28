import React from "react";
import HeaderHome from "../../components/headers/header-home";
import Footer from "../../components/footer";
import HomeBody from "../../components/home-body";

export default function Home() {
    return(
        <div>
            <HeaderHome />
            <HomeBody />
            <Footer />
        </div>
    );
}
