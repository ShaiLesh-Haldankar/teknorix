import React from "react";
import HoverDropdown from "../Common/HoverDropdown/HoverDropdown";
import "./home-page.style.scss";
import { MainContext } from "./../Context/Context";
import { useHistory } from "react-router";
import { getAllJobs } from "../../Services/APIs";
import { Link } from "react-router-dom";
export default function HomePAge() {
  const history = useHistory();
  const context = React.useContext(MainContext);
  const { location, func, filters, dept, updateState, filterArray } = context;
  const handleRemoveFilter = (obj) => {
    let fil = filterArray.filter((x) => {
      return obj !== x;
    });
    updateState("filterArray", fil);
  };
  const [jobList, setJobList] = React.useState([]);
  const setUpJobList = async () => {
    try {
      let res = await getAllJobs();
      setJobList(res.data);
    } catch (error) {
      console.error("ERROR", error);
    }
  };
  React.useEffect(() => {
    setUpJobList();
  }, []);
  return (
    <div className="home-page-main">
      <header className="hpm-header">
        <div className="main-search-wrapper">
          <input placeholder="Search for job" />
        </div>
        <div className="main-dropdown-wrapper">
          <HoverDropdown
            onClick={(obj) => {
              updateState("filters", { ...filters, [obj.id]: obj });
              let temp = [...filterArray, obj.id];

              updateState("filterArray", [...new Set(temp)]);
            }}
            list={dept}
            message="Department"
          />
          <HoverDropdown
            list={location}
            onClick={(obj) => {
              updateState("filters", { ...filters, [obj.id]: obj });
              let temp = [...filterArray, obj.id];
              updateState("filterArray", [...new Set(temp)]);
            }}
            message="Location"
          />
          <HoverDropdown
            list={func}
            onClick={(obj) => {
              updateState("filters", { ...filters, [obj.id]: obj });
              let temp = [...filterArray, obj.id];
              updateState("filterArray", [...new Set(temp)]);
            }}
            message="Function"
          />
        </div>
      </header>
      <section className="hpm-filters">
        <div className="filters-list">
          {filterArray.map((obj) => (
            <button>
              {filters[obj].title}
              <span onClick={() => handleRemoveFilter(obj)}>x</span>
            </button>
          ))}
        </div>
        <button
          onClick={() => updateState("filterArray", [])}
          className="filter-clear-button"
        >
          Clear All
        </button>
      </section>
      <section className="job-list-wrapper">
        {jobList.map((obj) => (
          <div className="job-card">
            <div className="job-card-left">
              <h5>{obj.title}</h5>
              <div>
                <p>
                  <img src="https://img.icons8.com/ios-filled/50/000000/building.png" />
                  {obj?.company}
                </p>
                <p>
                  <img src="https://img.icons8.com/material-outlined/50/000000/marker.png" />
                  {obj?.location?.title}
                </p>
                <button>{obj.type}</button>
              </div>
            </div>

            <div className="job-card-right">
              <button>Apply</button>
              <Link to={`/${obj.id}`}>View</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
