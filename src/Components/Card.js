import React from "react";

function Card(props) {
    return (
        <div className="card p-4 shadow">
            <div className="row gy-2 gy-md-3 ">
                <div className="col-12">
                    <div className="d-flex align-item-center justify-content-around justify-content-md-between">
                        <div className="details">
                            <div className="fw-bold secondary-text">Visual Content Development</div>
                            <div className="fw-bold primary-text">Internshala</div>
                        </div>
                        <img src="" alt="intershala" height="40" />
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="fw-bold secondary-text">START DATE</div>
                    <div className="primary-text">22-11-2020</div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="fw-bold secondary-text">DURATION</div>
                    <div className="primary-text">5 Weeks</div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="fw-bold secondary-text">STIPEND</div>
                    <div className="primary-text">5000/month</div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="fw-bold secondary-text">APPLY BY</div>
                    <div className=" primary-text">10 Oct' 20</div>
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <div className="num-result px-2 rounded-pill">1</div>
                        <div className="btn px-3">view details</div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Card;