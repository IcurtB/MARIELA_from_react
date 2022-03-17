import React from "react";
import pillow from '../img/pilow.svg';
import faceBalloon from '../img/face_baloun.svg';
import pillow2 from '../img/pillow.svg';
import kaybord from '../img/kaybord.svg';
import coach from '../img/coach.svg';
import coachPillow from '../img/coach_pillow.svg';
import silver from '../img/silver_p.svg';
import silverCushon from '../img/silver_cushon.svg';
import deepP from '../img/deep_p.svg';
import forest from '../img/forest.svg';

export const FaceSlide = () => {
    return (
        <div className="faceSlide">
            <div className="firstHalf" />
            <div className="secondHalf" />
            <div>
                <img src={pillow} alt="" />
            </div>
            <div className="text_box">
                <p>new</p>
                <p className="h2">Spring Cushion <br /> Collection 2019</p>
                <a href>buy now</a>
            </div>
        </div>
    )
};
export const FaceSlideNext = () => {
    return (
        <div>
            <div className="header flex">
                <p style={{textTransform: 'uppercase'}}>I'm a cushion designer</p>
                <p className="middle">
                    Based in San Francisco, California I design trendy and fashion Cushions, since I have memory I always had a tendency to design and illustration.
                </p>
                <div className="flex">
                    <p>Learn More</p>
                </div>
            </div>
            <div className="img_box flex">
                <div className="img_card">
                    <img src={faceBalloon} alt="" />
                    <div>
                        <p>About me</p>
                        <p style={{fontSize: '17px'}}>Learn more</p>
                    </div>
                </div>
                <div className="img_card">
                    <img src={pillow2} alt="" />
                    <div>
                        <p>My products</p>
                        <p style={{fontSize: '17px'}}>Learn more</p>
                    </div>
                </div>
                <div className="img_card">
                    <img src={kaybord} alt="" />
                    <div>
                        <p>Contact me</p>
                        <p style={{fontSize: '17px'}}>Learn more</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export const AlbomCardBlock = () => {
    return (
        <div className="albom_card_block">
            <div className="left_box flex">
                <div className="left_box_text">
                    <p>beginnings</p>
                    <div>
                        <p>Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences.</p>
                        <p>Dramatically synthesize integrated schemas. with optimal networks.</p>
                    </div>
                </div>
                <img src={coach} alt="" />
            </div>
            {/*-------'ЭТО ПРОСТО РАЗДЕЛИТЕЛЬНАЯ ЛИНИЯ'--------------*/}
            <div className="line" />
            {/*------------------------------------------------------*/}
            <div className="right_box flex ">
                <img src={forest} alt="" />
                <div className="left_box_text">
                    <p>carrer</p>
                    <div>
                        <p>Collaboratively administrate turnkey channels whereas virtual e-tailers.</p>
                        <p>Objectively seize scalable metrics whereas proactive e-services seamlessly empower fully researched growth strategies.</p>
                        <p>And interoperable internal or “organic” sources.</p>
                        <div className="flex">
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Это просто разделительная линия*/}
            <div className="line" />
            {/*----------------------------------------------------*/}
            <div className="left_box flex">
                <div className="left_box_text">
                    <p>products</p>
                    <div>
                        <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources.</p>
                        <p>Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.</p>
                        <p>Energistically scale future-proof core competence</p>
                    </div>
                </div>
                <img src={coachPillow} alt="" />
            </div>
        </div>
    )
};

export const ImageBoxCards = () => {
    return (
        <div className="img_box_">
            <div className="img_box_column flex">
                <div className="img_box_card flex">
                    <img src={silver} alt="" />
                    <div>
                        <p>Plated Cushion</p>
                    </div>
                    <p>$ 19.99 USD</p>
                </div>
                <div className="img_box_card flex">
                    <img src={silverCushon} alt="" />
                    <div>
                        <p>Silver Cushion</p>
                    </div>
                    <p>$ 19.99 USD</p>
                </div>
                <div className="img_box_card flex">
                    <img src={deepP} alt="" />
                    <div>
                        <p>Deep Blue Cushion</p>
                    </div>
                    <p>$ 19.99 USD</p>
                </div>
            </div>
            <div className="img_box_column flex space">
                <div className="img_box_card flex">
                    <img src={silver} alt="" />
                    <div>
                        <p>Plated Cushion</p>
                    </div>
                    <p>$ 19.99 USD</p>
                </div>
                <div className="img_box_card flex">
                    <img src={silverCushon} alt="" />
                    <div>
                        <p>Silver Cushion</p>
                    </div>
                    <p>$ 19.99 USD</p>
                </div>
                <div className="img_box_card flex ">
                    <img src={deepP} alt="" />
                    <div>
                        <p>Deep Blue Cushion</p>
                    </div>
                    <p>$ 19.99 USD</p>
                </div>
            </div>
        </div>
    )
}



