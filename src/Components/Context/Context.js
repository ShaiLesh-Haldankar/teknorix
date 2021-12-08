import React, { Component, createContext } from "react";
import {
  getAllJobs,
  getAllDepartments,
  getAllDivisions,
  getAllLocations,
  getAllFunctions,
} from "./../../Services/APIs";
export const MainContext = createContext();

export default class ContextProvider extends Component {
  state = {
    dept: [],
    location: [],
    func: [],
    filters: {},
    allJobs: null,
    filterArray: []
  };
  updateState = (field, val) => {
    this.setState({ [field]: val });
  };
  getInitialData = async () => {
    let apiOne = getAllDepartments();
    let apiTwo = getAllFunctions();
    let apiThree = getAllLocations();
    try {
      let res = await Promise.all([apiOne, apiTwo, apiThree]);
      let tempDept = res[0].data;
      let tempObj = {};
      tempDept.forEach((element) => {
        tempObj = { ...tempObj, [element.id]: [] };
      });
      console.log("TEMP", tempObj);
      let tempFun = res[1].data;
      let tempLoc = res[2].data;
      console.log("DEPT", res[0]);
      this.setState({
        dept: [...tempDept],
        func: [...tempFun],
        location: [...tempLoc],
        allJobs: { ...tempObj },
      });
    } catch (error) {
      console.error("ERROR", error);
    }
  };
  componentDidMount() {
    this.getInitialData();
  }
  render() {
    return (
      <MainContext.Provider
        value={{ ...this.state, updateState: this.updateState }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}
