import React from "react";
import Voicecard from "./Voicecard"
function Modalcol({ jobs }) {
    return (
        <>
            {!jobs ? <></> :
                <>
                    {jobs.map((job, i) => (
                        <div className="col-12 col-lg-6" key={i}>
                            <Voicecard i={i} job={job} />
                        </div>
                    ))}
                </>
            }
        </>
    );
}

export default Modalcol;