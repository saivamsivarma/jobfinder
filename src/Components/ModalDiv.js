import React from "react";
import Modalcol from "./Modalcol"

function ModalDiv({ datas }) {
    return (
        <>
            {!datas ? <></> :
                <div className="row">
                    {datas.map((data, i) => (
                            <Modalcol i={i} jobs={data} />
                    ))}
                </div>
            }
        </>
    );
}

export default ModalDiv;