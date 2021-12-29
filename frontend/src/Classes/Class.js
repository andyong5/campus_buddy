import React, { useEffect, useState } from "react";
import "./Class.css";

function Classes() {
  const [classInfo, setClassInfo] = useState({});
  const [hidden, setHidden] = useState(false);
  const [display, setDisplay] = useState("block");
  const [currTab, setCurrTab] = useState("");
  useEffect(() => {
    const d = {
      className: "ECS150",
      quarter: "WQ2021",
      professor: "Porquet",
      totalStudents: 150,
      sidebar: ["general", "homework-help", "off-topic", "Q&A"],
    };
    setClassInfo(d);
    setCurrTab(d.sidebar[0]);
  }, []);

  const hideTab = (event) => {
    if (hidden) {
      setDisplay("block");
      setHidden(!hidden);
    } else {
      setDisplay("none");
      setHidden(!hidden);
    }
  };
  return (
    <div className="classPage">
      <div id="left" className={display}>
        <div className="spacing">
          <div className="classNameSidebar">
            <div>{classInfo.className}</div>
            <button onClick={hideTab}>Hide</button>
          </div>
          <label>{classInfo.quarter}</label>
          <ul>
            {classInfo.sidebar &&
              classInfo.sidebar.map((sidebar) => (
                <li key={sidebar}>
                  <button
                    className="sidebarLinks"
                    onClick={() => setCurrTab(sidebar)}
                  >
                    {sidebar}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div id="right">
        <div className="spacing">
          {hidden ? <button onClick={hideTab}>Hide</button> : null}
          <div>{currTab}</div>
        </div>
      </div>
    </div>
  );
}
export default Classes;
