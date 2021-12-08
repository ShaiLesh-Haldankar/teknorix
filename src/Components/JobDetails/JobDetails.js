import Interweave from "interweave";
import React from "react";
import { useParams } from "react-router";
import { getJobDetails } from "../../Services/APIs";
import "./job-details.style.scss";
export default function JobDetails() {
  const { id } = useParams();
  const [details, setDetails] = React.useState(null);

  const setUpJobDetails = async () => {
    if (!id) return;
    let res = await getJobDetails(id);
    setDetails(res.data);
  };
  React.useEffect(() => {
    setUpJobDetails();
  }, []);
  return !details ? (
    ""
  ) : (
    <div className="job-details-main">
      <div className="jbm-header">
        <h6>{details.industry}</h6>
        <h3>{details.title}</h3>
        <div>
          <p>
            <img src="https://img.icons8.com/ios-filled/50/000000/building.png" />
            {details?.company}
          </p>
          <p>
            <img src="https://img.icons8.com/material-outlined/50/000000/marker.png" />
            {details?.location?.title}
          </p>
          <button>{details.type}</button>
        </div>

        <button className="apply-button">Apply</button>
      </div>
      <section>
        <Interweave content={details.description} />
      </section>
    </div>
  );
}
