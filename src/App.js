import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {AlbomCardBlock, FaceSlide, FaceSlideNext, ImageBoxCards} from "./components/main/main";

const App = () => {
    return(
        <div>
            <Header/>
            <main>
                <FaceSlide/>
                <FaceSlideNext/>
                <AlbomCardBlock/>
                <ImageBoxCards/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
