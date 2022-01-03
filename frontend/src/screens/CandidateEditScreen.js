import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsCandidate, updateCandidate } from '../actions/candidateActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { CANDIDATE_UPDATE_RESET } from '../constants/candidateConstants';

export default function CandidateEditScreen(props) {
    const candidateId = props.match.params.id;
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [age, setAge] = useState('');
    const [sponsor, setSponsor] = useState('');
    const [sponsorNumber, setSponsorNumber] = useState('');
    const [genre, setGenre] = useState('');
    const [health, setHealth] = useState('');
    const [sterilized, setSterilized] = useState('');
    const [description, setDescription] = useState('');

    const candidateDetails = useSelector( state => state.candidateDetails);
    const { loading, error, candidate } = candidateDetails;

    const candidateUpdate = useSelector((state) => state.candidateUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = candidateUpdate;

    const dispatch = useDispatch();
    useEffect(() => {
        if (successUpdate) {
            props.history.push('/candidatelist');
        }
        if (!candidate || (candidate._id !== candidateId || successUpdate)) {
            dispatch({ type: CANDIDATE_UPDATE_RESET });
            dispatch(detailsCandidate(candidateId));
        } else {
            setName(candidate.name);
            setCategory(candidate.category);
            setImage(candidate.image);
            setAge(candidate.age);
            setSponsor(candidate.sponsor);
            setSponsorNumber(candidate.sponsorNumber);
            setGenre(candidate.genre);
            setHealth(candidate.health);
            setSterilized(candidate.sterilized);
            setDescription(candidate.description);
        }
        
    }, [candidate, dispatch, candidateId, successUpdate, props.history]);

    const submitHandler = (e) => {
        e.preventDefault();
        // TODO: dispatch update candidate
        dispatch(
            updateCandidate({
                _id: candidateId,
                name,
                category,
                image,
                age,
                sponsor,
                sponsorNumber,
                genre,
                health,
                sterilized,
                description,
            })
        );
    };

    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setLoadingUpload(true);
        try {
            const {data} = await Axios.post('/api/uploads', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });
            setImage(data);
            setLoadingUpload(false);
        } catch (error) {
            setErrorUpload(error.message);
            setLoadingUpload(false);
        }
    };

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Edit Candidate {candidateId}</h1>
                </div>
                {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <input
                                id="category"
                                type="text"
                                placeholder="Enter category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="image">Image</label>
                            <input
                                id="image"
                                type="text"
                                placeholder="Enter Image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></input>

                        </div>
                        <div>
                            <label htmlFor="imageFile">Image File</label>
                            <input
                                type="file"
                                id="imageFile"
                                label="Choose Image"
                                onChange={uploadFileHandler}
                            ></input>
                            {loadingUpload && <LoadingBox></LoadingBox>}
                            {errorUpload && (
                                <MessageBox variant="danger">{errorUpload}</MessageBox>
                            )}
                        </div>
                        <div>
                            <label htmlFor="age">Age</label>
                            <input
                                id="age"
                                type="number"
                                placeholder="Enter age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="sponsor">Sponsor</label>
                            <input
                                id="sponsor"
                                type="text"
                                placeholder="Enter sponsor"
                                value={sponsor}
                                onChange={(e) => setSponsor(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="sponsorNumber">Sponsor Number</label>
                            <input
                                id="sponsorNumber"
                                type="number"
                                placeholder="Enter sponsor number"
                                value={sponsorNumber}
                                onChange={(e) => setSponsorNumber(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="genre">Genre</label>
                            <input
                                id="genre"
                                type="text"
                                placeholder="Enter genre"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="health">Sponsor Health</label>
                            <input
                                id="health"
                                type="text"
                                placeholder="Enter health"
                                value={health}
                                onChange={(e) => setHealth(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="sterilized">Sterilized</label>
                            <input
                                id="sterilized"
                                type="text"
                                placeholder="Enter if sterilized si/no"
                                value={sterilized}
                                onChange={(e) => setSterilized(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                row="3"
                                type="text"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label></label>
                            <button className="primary" type="submit">
                                Update
                            </button>
                        </div>
                    </>
                )}
            </form>            
        </div>
    )
}
