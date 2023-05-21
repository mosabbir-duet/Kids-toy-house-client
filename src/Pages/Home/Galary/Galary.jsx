import React from "react";
import img1 from "../../../assets/carosel/61F6AWE5fkL.png";
import img11 from "../../../assets/carosel/Transformers-Megatron.png";
import {
  default as img10,
  default as img5,
} from "../../../assets/carosel/black-panther.png";
import img9 from "../../../assets/carosel/darth-vader.png";
import {
  default as img3,
  default as img8,
} from "../../../assets/carosel/doctor-stranger.png";
import img7 from "../../../assets/carosel/han-solo_star-wars_silo.png";
import img6 from "../../../assets/carosel/hulk.png";
import img2 from "../../../assets/carosel/obi-wan.png";
import img4 from "../../../assets/carosel/spider-man.png";
import "./Gallary.css";
const Galary = () => {
  return (
    <div className="my-12 bg-yellow-300">
      <h1 className="p-4 text-3xl md:text-5xl text-center text-[#ff0018]">
        Toy Collection for Our Super Hero
      </h1>
      <div className="gallary-area">
        <div class="image-slider">
          <div class="image-slider-track">
            <div class="slide">
              <img src={img1} />
            </div>
            <div class="slide">
              <img src={img2} />
            </div>
            <div class="slide">
              <img src={img3} />
            </div>

            <div class="slide">
              <img src={img4} />
            </div>
            <div class="slide">
              <img src={img5} />
            </div>
            <div class="slide">
              <img src={img6} />
            </div>

            <div class="slide">
              <img src={img7} />
            </div>
            <div class="slide">
              <img src={img8} />
            </div>
            <div class="slide">
              <img src={img9} />
            </div>
            <div class="slide">
              <img src={img10} />
            </div>
            <div class="slide">
              <img src={img11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galary;
