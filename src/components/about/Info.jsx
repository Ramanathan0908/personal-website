import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                {/*<i className="bx bx-award about__icon"></i>*/}
                <h3 className="about__title">
                    Robotics
                </h3>
                {/*<span className="about__subtitle">8 years working</span>*/}
            </div>

            <div className="about__box">
                {/*<i className="bx bx-breifcase-alt about__icon"></i>*/}
                <h3 className="about__title">Front-end</h3>
                {/*<span className="about__subtitle">48 + Projects</span>*/}
            </div>

            <div className="about__box">
                {/*<i className="bx bx-support about__icon"></i>*/}
                <h3 className="about__title">AI / Software</h3>
                {/*<span className="about__subtitle">Online 24 7</span>*/}
            </div>
        </div>
    )
}

export default Info