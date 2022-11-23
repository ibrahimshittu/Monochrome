import React from "react";
import { BannerImage } from "./BannerStyles";

function Banner() {
    return (
        <div>
            <BannerImage>
                <img src={require("../../assets/monochrome.jpg")} alt="banner" />
            </BannerImage>
        </div>
    );
}

export default Banner;
