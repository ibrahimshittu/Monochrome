import React from "react";
import {
    AboutMonochrome,
    Footer,
    LeftSide,
    LeftSideMore,
    MediaAndGalleries,
    MoreAboutMonochrome,
    Pictures,
    ReserveTable,
    RightSide,
} from "./AboutMonochromeStyles";

function AboutMonoChrome() {
    return (
        <div>
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <hr />
            <AboutMonochrome>
                <LeftSide>
                    <p>No one does it like MonoChrome!</p>
                    <h6>Why Choose Us?</h6>
                    <h4>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc
                        ut aliquam aliquam, nunc nisl aliquet nisl, sed aliquet lorem ipsum sed
                        dolor. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, sed
                        aliquet lorem ipsum sed dolor. lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet
                        nisl, sed aliquet lorem ipsum sed dolor. Sed euismod, nunc ut aliquam
                        aliquam, nunc nisl aliquet nisl, sed aliquet lorem ipsum sed dolor.
                        <br /> <br />
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc
                        ut aliquam aliquam, nunc nisl aliquet
                    </h4>
                </LeftSide>
                <RightSide>
                    <img
                        src={require("../../assets/D39BB200-86A4-4B7E-B993-1A827E0386A2.jpg")}
                        alt="banner"
                    />
                </RightSide>
            </AboutMonochrome>
            <MoreAboutMonochrome>
                <LeftSideMore>
                    <p>No one does it like MonoChrome!</p>
                    <h6>Why Choose Us?</h6>
                    <h4>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc
                        ut aliquam aliquam, nunc nisl aliquet nisl, sed aliquet lorem ipsum sed
                        dolor. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, sed
                        aliquet lorem ipsum sed dolor. lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet
                        nisl, sed aliquet lorem ipsum sed dolor. Sed euismod, nunc ut aliquam
                        aliquam, nunc nisl aliquet nisl, sed aliquet lorem ipsum sed dolor.
                        <br /> <br />
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc
                        ut aliquam aliquam, nunc nisl aliquet
                    </h4>
                </LeftSideMore>
                <RightSide>
                    <img
                        src={require("../../assets/3D1573F6-B5A3-4897-997D-6DBFBAA990AE.jpg")}
                        alt="banner"
                    />
                </RightSide>
            </MoreAboutMonochrome>
            <AboutMonochrome>
                <LeftSide>
                    <p>No one does it like MonoChrome!</p>
                    <h6>Why Choose Us?</h6>
                    <h4>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc
                        ut aliquam aliquam, nunc nisl aliquet nisl, sed aliquet lorem ipsum sed
                        dolor. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, sed
                        aliquet lorem ipsum sed dolor. lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet
                        nisl, sed aliquet lorem ipsum sed dolor. Sed euismod, nunc ut aliquam
                        aliquam, nunc nisl aliquet nisl, sed aliquet lorem ipsum sed dolor.
                        <br /> <br />
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc
                        ut aliquam aliquam, nunc nisl aliquet
                    </h4>
                </LeftSide>
                <RightSide>
                    <img
                        src={require("../../assets/D39BB200-86A4-4B7E-B993-1A827E0386A2.jpg")}
                        alt="banner"
                    />
                </RightSide>
            </AboutMonochrome>
            <MediaAndGalleries>
                <h4>Media and Galleries</h4>
                <Pictures>
                    <div className="picture">
                        <img
                            src={require("../../assets/3D1573F6-B5A3-4897-997D-6DBFBAA990AE.jpg")}
                            alt="banner"
                        />
                    </div>
                    <div className="picture">
                        <img
                            src={require("../../assets/3D1573F6-B5A3-4897-997D-6DBFBAA990AE.jpg")}
                            alt="banner"
                        />
                    </div>
                    <div className="picture">
                        <img
                            src={require("../../assets/3D1573F6-B5A3-4897-997D-6DBFBAA990AE.jpg")}
                            alt="banner"
                        />
                    </div>
                </Pictures>
            </MediaAndGalleries>
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <hr />
            <ReserveTable>
                <h4>RESERVE A SEAT!</h4>
                <p>Enjoy yourself, Meet new people, and party like never before </p>
                <br />
                <button>
                    <a href="https://www.monochrome.ng/" target="_blank" rel="noreferrer">
                        Make Reservation
                    </a>
                </button>
            </ReserveTable>
            <Footer>
                <p>© 2022 MonoChrome. All Rights Reserved.</p>
            </Footer>
        </div>
    );
}

export default AboutMonoChrome;
