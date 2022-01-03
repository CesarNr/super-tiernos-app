const {
    CANDIDATE_LIST_REQUEST,
    CANDIDATE_LIST_SUCCESS,
    CANDIDATE_LIST_FAIL,
    CANDIDATE_DETAILS_REQUEST,
    CANDIDATE_DETAILS_SUCCESS,
    CANDIDATE_DETAILS_FAIL,
    CANDIDATE_CREATE_REQUEST,
    CANDIDATE_CREATE_SUCCESS,
    CANDIDATE_CREATE_FAIL,
    CANDIDATE_CREATE_RESET,
    CANDIDATE_UPDATE_REQUEST,
    CANDIDATE_UPDATE_SUCCESS,
    CANDIDATE_UPDATE_FAIL,
    CANDIDATE_UPDATE_RESET,
    CANDIDATE_DELETE_REQUEST,
    CANDIDATE_DELETE_SUCCESS,
    CANDIDATE_DELETE_FAIL,
    CANDIDATE_DELETE_RESET
  } = require('../constants/candidateConstants');

    export const candidateListReducer = (
        state = { loading: true, candidates: [] },
        action
      ) => {
        switch (action.type) {
          case CANDIDATE_LIST_REQUEST:
            return { loading: true };
          case CANDIDATE_LIST_SUCCESS:
            return { loading: false, candidates: action.payload };
          case CANDIDATE_LIST_FAIL:
            return { loading: false, error: action.payload };
          default:
            return state;
        }
      };

      
export const candidateDetailsReducer = (
  state = { loading: true },
  action
) => {
  switch (action.type){
      case CANDIDATE_DETAILS_REQUEST:
          return { loading: true };
      case CANDIDATE_DETAILS_SUCCESS:
          return { loading: false, candidate: action.payload };
      case CANDIDATE_DETAILS_FAIL:
          return { loading: false, error: action.payload };
      default:
          return state;
  }
 };


 export const candidateCreateReducer = (state = {}, action) => {
     switch (action.type) {
         case CANDIDATE_CREATE_REQUEST:
             return { loading: true };
         case CANDIDATE_CREATE_SUCCESS:
             return { loading: false, success: true, candidate: action.payload };
          case CANDIDATE_CREATE_FAIL:
              return { loading: false, error: action.payload };
          case CANDIDATE_CREATE_RESET:
              return {};
          default:
              return state;
     }
 };



 export const candidateUpdateReducer = (state = {}, action) => {
  switch (action.type) {
      case CANDIDATE_UPDATE_REQUEST:
          return { loading: true };
      case CANDIDATE_UPDATE_SUCCESS:
          return { loading: false, success: true };
       case CANDIDATE_UPDATE_FAIL:
           return { loading: false, error: action.payload };
       case CANDIDATE_UPDATE_RESET:
           return {};
       default:
           return state;
  }
};


export const candidateDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CANDIDATE_DELETE_REQUEST:
      return { loading: true };
    case CANDIDATE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CANDIDATE_DELETE_FAIL:
      return { loading: false, success: false };
      case CANDIDATE_DELETE_RESET:
        return {};
    default:
      return state;
  }
}

