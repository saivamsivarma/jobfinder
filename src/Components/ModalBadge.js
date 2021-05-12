import React from "react";

function ModalBadges({ skills }) {
    const skill = skills
    var newSkills = skill.split(',')
    return (
        <>
        {!skills?
        <></>:
        <>{newSkills.map((skill,key) =>
            <div key={key} className="col-4 col-md-2">
                <div className="badge secondary-bg primary-text rounded-pill">{skill}</div>
            </div>
        )}</>
    }</>
    );
}

export default ModalBadges;