import React, { useState, useRef, useCallback } from "react";
import "../../App.css";
/*import { useDispatch } from "react-redux";
import { useSelector }  from "react-redux";*/

import Sidenav from "../../Components/Sidenav";
import Button from "../../Components/Button";
import Card from "../../Components/Card";

import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MAPBOX_TOKEN = "pk.eyJ1IjoidmFtc2l2YXJtYSIsImEiOiJja255cGl5aTgwMDh1MndsOGNlMW5tcjB1In0.meQKsOns2H20hKPnUQoYrQ";

function Findjobs() {
    const [viewport, setViewport] = useState({
        latitude: 22.199166076052652,
        longitude: 78.47668102723703,
        zoom: 8
    });
    const mapRef = useRef();

    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );

    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
            const geocoderDefaultOverrides = { transitionDuration: 1000 };

            return handleViewportChange({
                ...newViewport,
                ...geocoderDefaultOverrides
            });
        },
        [handleViewportChange]
    );
    return (
        <div className="container-fluid color-bg">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-2 bg-white rounded">
                    <Sidenav page="user" />
                </div>
                <div className="col-12 col-lg-4 col-xl-6 color-bg height-max">
                    <form className="form-group my-4">
                        <div className="d-flex align-items-center justify-content-between rounded-pill shadow holder p-1 primary-border bg-white">
                            <input type="text" placeholder="Your Email" className="form-control rounded-pill border-white input-custom" />
                            <Button class="btn btn-color-primary rounded-pill fw-bold" value="Sign up" />
                        </div>
                    </form>
                    <div className="scroll-div overflow-auto" id="custom_scroll_bar">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="text-center secondary-text fw-bold fs-5">Scroll Down</div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 color-bg height-max">
                    <div className="card p-md-2 shadow-sm">
                        <div style={{ height: "60vh" }}>
                            <MapGL
                                ref={mapRef}
                                {...viewport}
                                width="100%"
                                height="100%"
                                onViewportChange={handleViewportChange}
                                mapboxApiAccessToken={MAPBOX_TOKEN}
                                mapStyle="mapbox://styles/vamsivarma/cknypxo4c0mgk17qcb4w3wlwp"
                            >
                                <Geocoder
                                    mapRef={mapRef}
                                    onViewportChange={handleGeocoderViewportChange}
                                    mapboxApiAccessToken={MAPBOX_TOKEN}
                                    position="top-left"
                                    placeholder="Address"
                                />
                            </MapGL>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Findjobs;