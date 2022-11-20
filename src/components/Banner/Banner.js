import React from "react";
import { BannerImage, BannerText, CTA } from "./BannerStyles";

function Banner() {
    return (
        <div>
            <BannerImage>
                <img src={require("../../assets/IMG_0807.jpg")} alt="banner" />
            </BannerImage>
            <BannerText>
                <h5>
                    Monochrome is an authentic recreation and entertainment group driven by young
                    people seeking ways to engage positively. lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl
                    aliquet nisl, sed aliquet lorem ipsum sed dolor. Sed euismod, nunc ut aliquam
                    aliquam.
                    <br /> <br />
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
                    aliquam aliquam.
                </h5>
            </BannerText>
            <CTA>
                <button>
                    <a href="https://www.monochrome.ng/" target="_blank" rel="noreferrer">
                        Reserve a Seat
                    </a>
                </button>
            </CTA>
        </div>
    );
}

export default Banner;
