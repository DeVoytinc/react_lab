import classes from "./SliderBar.module.css";
import whitedots from "./../../assets/decoration/dots/white dots.svg";
import bluedots from "./../../assets/decoration/dots/bluedots.svg";
import React from "react";
import { useState } from "react";


interface customer {
    name: string;
    job: string;
    review: string;
    img: string;
}

interface ISliderBar {
    arr: customer[];
    children: React.ReactNode;
}

const SliderBar: React.FC<ISliderBar> = ({ arr, children }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (currentIndex < arr.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className={classes.column}>
            <div className={classes.imgBoxLeft}>
                <img className={classes.dots} src={bluedots} />
            </div>
            <div className={classes.slider_card}>
                <div className={classes.imgBoxRight}>
                    <img className={classes.dots} src={whitedots} />
                </div>
                <h1 className={classes.header_slider}>What our customer are saying</h1>
                <div className={classes.white_divider}></div>


                <div className={classes.row_sliderInfo}>
                    <div className={classes.img_block}>
                        <img
                            className={classes.img}
                            src={arr[currentIndex].img}
                            alt={arr[currentIndex].name}
                        />
                    </div>

                    <div className={classes.column_name}>
                        <div className={classes.name}>{arr[currentIndex].name}</div>
                        <div className={classes.job}>{arr[currentIndex].job}</div>
                    </div>

                    <h2 className={classes.job}>{arr[currentIndex].review}</h2>

                </div>
            </div>

            <div className={classes.row_button}>
                <button
                    style={{
                        color:
                            currentIndex == 0
                                ? "rgba(91, 155, 243, 0.3)"
                                : "rgba(91, 155, 243, 1)",
                    }}
                    className={classes.arrow_button}
                    onClick={handleLeftClick}
                >
                    ←
                </button>

                {arr.map((item, index) => (
                    <div
                        key={index}
                        className={`${classes.dot} ${index === currentIndex ? classes.active_dot : ""
                            }`}
                        style={{
                            backgroundColor:
                                index === currentIndex
                                    ? "rgba(91, 155, 243, 1)"
                                    : "rgba(91, 155, 243, 0.3)",
                        }}
                    />
                ))}

                <button
                    className={classes.arrow_button}
                    style={{
                        color:
                            currentIndex < arr.length - 1
                                ? "rgba(91, 155, 243, 1)"
                                : "rgba(91, 155, 243, 0.3)",
                    }}
                    onClick={handleRightClick}
                >
                    →
                </button>
            </div>

            {children}
        </div>
    );
};

export default SliderBar;