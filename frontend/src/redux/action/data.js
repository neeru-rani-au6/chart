import { ADD_DATA, GETDATA, FATCHING, UPDATEDATA, DELETEDATA } from "../type";
import axios from "axios";

export const DataAdd = (addData) => async (dispatch, getState) => {
  try {
    axios.defaults.withCredentials = true;
    const userState = getState().userState;
    const dataState = getState().DataReducer;
    const { data } = await axios({
      method: "post",
      url: `/data`,
      data: addData,
      headers: {
        Authorization: `${userState.user.token}`,
      },
    });
    console.log(dataState);
    dispatch({
      type: ADD_DATA,
      payload: [data.result, ...dataState.Data],
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_DATA,
      payload: {
        error: error.response,
      },
    });
  }
};

export const allData = () => async (dispatch, getState) => {
  try {
    axios.defaults.withCredentials = true;
    const userState = getState().userState;
    dispatch({ type: FATCHING });
    const { data } = await axios({
      url: "/data",
      headers: {
        Authorization: `${userState.user.token}`,
      },
    });
    dispatch({
      type: GETDATA,
      payload: data.result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateData = (formData) => async (dispatch, getState) => {
  try {
    const userState = getState().userState;
    const dataState = getState().DataReducer;
    const { data } = await axios({
      method: "Put",
      url: `/data/${formData._id}`,
      data: {
        name: formData.name,
        email: formData.email,
        value: formData.value,
        criteria: formData.criteria,
        activeDay: formData.activeDay,
        createdBy: formData.createdBy,
      },
      headers: {
        Authorization: `${userState.user.token}`,
      },
    });
    dataState.Data.forEach((element) => {
      if (element._id === data._id) {
        element = data;
      }
    });
    dispatch({
      type: UPDATEDATA,
      payload: dataState.Data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = (id) => async (dispatch, getState) => {
  try {
    const userState = getState().userState;
    await axios({
      method: "DELETE",
      url: `/data/${id}`,
      headers: {
        Authorization: `${userState.user.token}`,
      },
    });
    dispatch({
      type: DELETEDATA,
      payload: { id },
    });
  } catch (error) {
    console.log(error);
  }
};
