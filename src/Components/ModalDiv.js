import React from "react";
import Modalcol from "./Modalcol"

function ModalDiv({ datas,activeJob }) {
    return (
        <>
            {!datas ? <></> :
                <div className="row scroll-div overflow-auto"  id="custom_scroll_bar">
                    {datas.map((data, i) => (
                            <Modalcol i={i} jobs={data} activeJob={activeJob}/>
                    ))}
                </div>
            }
        </>
    );
}

export default ModalDiv;