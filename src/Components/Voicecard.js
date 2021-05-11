import React,{ useState, useEffect, createRef } from "react";

function Voicecard({job,i,activeJob}) {
    const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (i === activeJob && elRefs[activeJob]) {
      scrollToRef(elRefs[activeJob]);
    }
  }, [i, activeJob, elRefs]);
    return (
        <>
        <div className={`${activeJob === i ? 'activeCard' : ''} card p-4 shadow-sm my-1`} ref={elRefs[i]}>
            <div className="row gy-2 gy-md-2">
                <div className="col-12">
                    <div className="d-flex align-item-center justify-content-between">
                        <div className="details">
                            <div className="fw-bold secondary-text">{job.postName}</div>
                            <div className="fw-bold primary-text">{job.company_id.companyname}</div>
                        </div>
                        <img src={"https://jobfinder-project.herokuapp.com/"+job.company_id.logo} alt={job.company_id.companyname} height="40" />
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="fw-bold secondary-text">Job Mode</div>
                    <div className="primary-text">{job.jobType}</div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="fw-bold secondary-text">Location</div>
                    <div className="primary-text">{job.location}</div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="fw-bold secondary-text">Work</div>
                    {!job.remote? <div className="primary-text">On site</div>:
                    <div className="primary-text">Remote</div>}
                </div>
            </div>
        </div>
        </>
    );
  }
  
  export default Voicecard;