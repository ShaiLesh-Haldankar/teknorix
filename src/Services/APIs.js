import axios from "axios";
let baseUrl = "https://teknorix.jobsoid.com/";

export const getAllJobs = (loc, dept, fun) => {
  let config = {
    method: "get",
    url: `${baseUrl}api/v1/jobs`,
    params: {
      loc: loc || "all",
      dept: dept || "all",
      fun: fun || "all",
    },
  };
  return axios(config);
};

export const getJobDetails = (id) => {
  let config = {
    method: "get",
    url: `${baseUrl}api/v1/jobs/${id}`,
  };
  return axios(config);
};

export const getAllDepartments = () => {
  let config = {
    method: "get",
    url: `${baseUrl}api/v1/departments`,
  };
  return axios(config);
};
export const getAllLocations = () => {
  let config = {
    method: "get",
    url: `${baseUrl}api/v1/locations`,
  };
  return axios(config);
};
export const getAllDivisions = () => {
  let config = {
    method: "get",
    url: `${baseUrl}api/v1/divisions`,
  };
  return axios(config);
};
export const getAllFunctions = () => {
  let config = {
    method: "get",
    url: `${baseUrl}api/v1/functions`,
  };
  return axios(config);
};
