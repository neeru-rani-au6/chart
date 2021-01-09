import { ADD_DATA, GETDATA, UPDATEDATA, DELETEDATA } from "../type";

const initalstate = {
  Data: null,
  currentData: null,
};

const DataReducer = (state = initalstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DATA:
      console.log(payload);
      return { ...state, Data: payload };
    case GETDATA:
      return { ...state, Data: payload };
    case DELETEDATA:
      return {
        ...state,
        Data: state.Data.filter((Data) => Data._id !== payload.id),
      };
    case UPDATEDATA:
      return {
        ...state,
        Data: payload,
      };
    default:
      return state;
  }
};

export default DataReducer;
