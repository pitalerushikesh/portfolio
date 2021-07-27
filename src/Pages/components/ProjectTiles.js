import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AP from "../../assets/projects/ap.png";
import TTT from "../../assets/projects/ttt_c.png";
import CERT from "../../assets/projects/cert.png";

export const ProjectTile = ({ img, title, desc, height, width, refs }) => {
  return (
    <a href={refs} target="_blank">
      <div className="card project-cards pt-3 ps-3 project-tile">
        <LazyLoadImage src={img} height={height} width={width} alt="..." />
        <div className="card-body">
          <h5 className="card-title fontMontserrat">{title}</h5>
          <p className="card-text fontLato">{desc}</p>
        </div>
      </div>
    </a>
  );
};

const ProjectTiles = () => {
  return (
    <div>
      <div className="container text-center mt-5 pt-5">
        <div data-aos="zoom-out-down" data-aos-duration="1000">
          <div className="fontEncode fw-bold section-header">Projects</div>
        </div>
      </div>
      <div className="container justify-content-center mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div data-aos="zoom-in-right" data-aos-duration="1000">
              <ProjectTile
                img={AP}
                refs="https://github.com/pitalerushikesh/autoproctor"
                height="80px"
                width="120px"
                title="AutoProctor"
                desc="It is an online exam giving system that has a state of the art face detection algorithm"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div data-aos="zoom-in-up" data-aos-duration="1000">
              <ProjectTile
                img={CERT}
                refs="https://github.com/pitalerushikesh/cert"
                height="80px"
                width="80px"
                title="Certificate Generator"
                desc="Ipsum mollit labore velit nisi quis ut ullamco irure id ullamco voluptate."
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div data-aos="zoom-in-left" data-aos-duration="1000">
              <ProjectTile
                img={TTT}
                refs="https://github.com/pitalerushikesh/tic_tac_toe"
                height="80px"
                width="80px"
                title="Tic Tac Toe"
                desc="Ipsum mollit labore velit nisi quis ut ullamco irure id ullamco voluptate."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTiles;
