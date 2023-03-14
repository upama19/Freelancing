import Router from 'next/router';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Rating from '../components/Rating';
import api from '../services/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Records from '../components/Records';
import Link from 'next/link';
import axios from 'axios';

const TalentProfile = () => {
    const router = useRouter();
    const [record, setRecord] = useState();
    const [talentId, setTalentID] = useState('');

    const [profile, setProfile] = useState(null);
    // const [value,setValue] = useState();

    useEffect(() => {
        onPageLoad();
    }, [])

    const onPageLoad = () => {
        const url = new URL(window.location.href);
        const params = url.searchParams;
        fetchRecord(params.get('abc'));
        setTalentID(params.get('abc'))

        getProfile();
    }

    const getProfile = async () => {
        // let profileId = '';
        await api
            .get('/employer/me')
            .then(({ data }) => {
                console.log(data.profile)
                if (data.profile) {
                    setProfile(data.profile);
                    // profileId = data.profile._id;
                }
            })
            .catch((err) => {
                console.log('You should be logged in as employer');
                //router.push('/employer-login')
            });

    }



    const onRatingClickHandler = async (rating) => {
        // upama
        await api.post(`/employer/rating/${talentId}`, { rating })
            .then(({ data }) => {
                alert(data.message);
            })
            .catch((err) =>{ 
                // err.response?.data && alert(err.response?.data.error)
            alert('Please login as Employer.')
            })
            .finally(() => {
                // router.push('/pages/talentProfiles');
                onPageLoad();
            });
        // error

    }

    const onClickHandler = async () => {
        if (profile) {
            await api
                .get(`/employer/talent/profile/hire/${profile._id}`)
                .then(({ data }) => {
                    alert(data.message);
                })
                .catch((err) => {
                    err.response?.data && alert(err.response?.data.error)
                    alert('You are unauthorized. Please log in as Employer');
                })
                .finally(() => {
                    router.push(`/hireForm?emp=${record._id}`);
                });
        } else {
            alert('You are not an Employer. Please log in');
            router.push('./sign-up');
        }
    };
    const fetchRecord = (abc) => {
        setRecord()
        api.get('/talent/profile/' + abc).then(({ data }) => {
            // console.log(data);
            setRecord(data.profile);
        });
    };

    // useEffect(() => {
    //     api.get('/employer/me').then(({ data }) => {
    //         console.log(data);
    //         console.log(data.profile);
    //         if(data.profile){
    //             setProfile(data.profile)
    //         }
    //     }).catch((err) => {
    //         console.log('You should be logged in as employer')
    //         router.push('/employer-login')
    //     })
    // }, [])


    return (
        <>
            <NavBar />
            <div className=' profile-main container mt-5'>
                {record && (
                    <div className=' row main-card shadow p-5 pb-2'>
                        <div
                            className='col p-0 d-flex justify-content-center align-items-center'>
                            <div className='profile-col1 col  d-flex justify-content-center align-items-center mt-2' style={{ flexDirection: 'column' }}>
                                <div className=' talent-image shadow'>
                                    <img
                                        style={{ width: '100%', height: '100%', padding: '0px', borderRadius: '4px' }}
                                        src={
                                            record.profilePicture ?? './images/user-placeholder.jpg'
                                        }
                                    ></img>
                                </div>
                                <div className='mt-2'>
                                    <Rating onRatingClick={onRatingClickHandler} rating={record.averageRating} />
                                </div>

                            </div>
                        </div>
                        <div className='col talent-name-box p-2' >
                            <div className='profile-col2 col'>

                                <div
                                    className='talent-status pb-3 mb-5' style={{ borderBottom: '1px solid rgb(117, 111, 111)' }}
                                //  style={{ borderBottom: ' 2px solid #FFD3B2' }}
                                >
                                    <div
                                        className='talent-name column p-0 '
                                    //  style={{ borderBottom: ' 2px solid #FFD3B2' }}
                                    >
                                        <p className='name-p'>{record.fullName}</p>
                                    </div>

                                    <div className='p-0 column ms-4'>
                                        <i className='fa fa-circle '></i>
                                        <span className=' p-2'>Available</span>
                                    </div>

                                </div>

                                <div className='row talent-price mb-0 ms-1 p-2'>
                                    <span className='price-p'>Rs.{record.price}/hour</span>
                                </div>


                            </div>

                        </div>
                        <div
                            className='row talent-description my-3 mx-4 mt-4 px-4'

                        >
                            <p
                                className='mb-3 mt-2 p-0'
                                style={{ fontWeight: '600', fontSize: '18px' }}
                            >
                                Description
                            </p>
                            <p className='mb-3 pb-4 p-0' style={{ borderBottom: '1px solid #756f6f  ' }}>{record.description}</p>
                        </div>

                        <div className='row p-0 d-flex flex-row' style={{ borderBottom: '1px solid rgb(117, 111, 111)' }}>
                            <div className='col talent-projects mb-3 mt-2 p-3'>
                                <p
                                    className='mb-3'
                                    style={{ fontWeight: '600', fontSize: '18px' }}
                                >
                                    Projects Done
                                </p>
                                {record.projectsDone?.map((p, i) => {
                                    return (
                                        <p className='mb-3' key={`profile-project-${i}`}>
                                            ● {p.project}
                                        </p>
                                    );
                                })
                                }
                            </div>
                            <div className='col talent-skill  mb-3 p-3 mt-3 '>
                                <p
                                    className='mb-3'
                                    style={{ fontWeight: '600', fontSize: '18px' }}
                                >
                                    Skills
                                </p>
                                {record.listOfSkills?.map((p, i) => {
                                    return (
                                        <p className='' key={`profile-skills-${i}`}>
                                            ●{p.skill}
                                        </p>
                                    );
                                })}
                            </div>

                        </div>
                        <div style={{ borderTop: ' 2 px solid #FFD3B2' }}>
                            <div className='col profile-button p-3 m-2'>
                                <a onClick={onClickHandler} className=' btn hire-btn px-5 '>
                                    Hire
                                </a>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default TalentProfile;
