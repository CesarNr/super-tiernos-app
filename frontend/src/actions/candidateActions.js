import Axios from 'axios';
import {
  CANDIDATE_LIST_FAIL,
  CANDIDATE_LIST_REQUEST,
  CANDIDATE_LIST_SUCCESS,
  CANDIDATE_DETAILS_REQUEST,
  CANDIDATE_DETAILS_SUCCESS,
  CANDIDATE_DETAILS_FAIL,
  CANDIDATE_CREATE_REQUEST,
  CANDIDATE_CREATE_SUCCESS,
  CANDIDATE_CREATE_FAIL,
  CANDIDATE_UPDATE_REQUEST,
  CANDIDATE_UPDATE_SUCCESS,
  CANDIDATE_UPDATE_FAIL,
  CANDIDATE_DELETE_REQUEST,
  CANDIDATE_DELETE_FAIL,
  CANDIDATE_DELETE_SUCCESS
} from '../constants/candidateConstants';

export const listCandidates = () => async (dispatch) => {
  dispatch({
    type: CANDIDATE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/candidates');
    dispatch({ type: CANDIDATE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CANDIDATE_LIST_FAIL, payload: error.message });
  }
};

export const detailsCandidate = (candidateId) => async (dispatch) => {
  dispatch({ type: CANDIDATE_DETAILS_REQUEST, payload: candidateId });
  try{
      const { data } = await Axios.get(`/api/candidates/${candidateId}`);
      dispatch({ type: CANDIDATE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({
          type: CANDIDATE_DETAILS_FAIL,
          payload:
              error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
       });
  }
};

export const createCandidate = () => async (dispatch, getState) => {
  dispatch({ type: CANDIDATE_CREATE_REQUEST});
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.post(
          '/api/candidates',
          {},
          {
              headers: { Authorization: `Bearer ${userInfo.token}` },
          }
      );
      dispatch({
          type: CANDIDATE_CREATE_SUCCESS,
          payload: data.candidate,
      });
  } catch(error) {
      const message =
      error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({type: CANDIDATE_CREATE_FAIL, payload: message});
  }
}


export const updateCandidate = (candidate) => async(dispatch, getState) => {
  dispatch({ type: CANDIDATE_UPDATE_REQUEST, payload: candidate });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.put(`/api/candidates/${candidate._id}`, candidate, {
          headers: { Authorization: `Bearer ${userInfo.token}`},
      });
      dispatch({ type: CANDIDATE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
      const message =
      error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({type: CANDIDATE_UPDATE_FAIL, payload: message});
  }
};


export const deleteCandidate = (candidateId) => async(dispatch, getState) => {
  dispatch({ type: CANDIDATE_DELETE_REQUEST, payload: candidateId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/candidates/${candidateId}`, { 
      headers: { Authorization: `Bearer ${userInfo.token}`},
    });
    dispatch({ type: CANDIDATE_DELETE_SUCCESS, payload: data});
  } catch (error) {
      const message =
      error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({type: CANDIDATE_DELETE_FAIL, payload: message});
  }
};