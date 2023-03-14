import * as _ from 'lodash';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import api from '../services/api';
import NavBar from '../components/NavBar';

const { yupResolver } = require('@hookform/resolvers/yup');

const ProfileForm = () => {
  let schema = yup.object().shape({
    fullName: yup.string().required('Please provide your name'),
    description: yup.string().required('Please provide description'),
    listOfSKills: yup.string(),
    projectsDone: yup.string(),
    price: yup
      .number()
      .typeError('Must be a number')
      .required('Mention your charge for service'),
    category: yup.string().required('Please select a category'),
    servicesOffered: yup
      .string()
      .required('Please select what service you will provide'),
  });

  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [profileImage, setProfileImage] = useState([]);
  const [profileImageurl, setProfileImageurl] = useState([]);

  const { update: isUpdate } = router.query;

  useEffect(() => {
    if (profileImage.length < 1) return;
    const newImageUrl = [];
    // console.log(typeof profileImage);
    try {
      Object.keys(profileImage).forEach((image) => {
        newImageUrl.push(URL.createObjectURL(profileImage[image]));
      });
      console.log(newImageUrl);
    } catch (error) {
      console.log(error);
    }
    setProfileImageurl(newImageUrl);
  }, [profileImage]);

  const onSubmit = (data) => {
    let formData = new FormData();

    formData.append('fullName', data.fullName);

    if (profileImage.length > 0) {
      formData.append('profilePicture', profileImage[0]);
    }

    formData.append('description', data.description);

    data.listOfSkills.split(',').map((s) => {
      formData.append('listOfSkills', s);
    });
    data.projectsDone.split(',').map((p) => {
      formData.append('projectsDone', p);
    });

    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('servicesOffered', data.servicesOffered);

    setIsLoading(true);

    if (isUpdate) {
      console.log('here');
      api
        .patch(`/talent/profile/${profile._id}`, formData)
        .then(({ data }) => {
          console.log(data);
          console.log(data.profilePicture);
          
        })
        .catch((err) => err.response && alert(err.response?.data.error))
        .finally(() => {
          setIsLoading(false);
          router.push('/profile');
        });
    } else {
      api
        .post('/talent/my_portfolio', formData)
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
          // alert(err.response?.data.error)
          alert('You are not allowed to submit this form');
          router.push('/');
        })
        .finally(() => {
          setIsLoading(false);
          router.push('/profile');
        });
    }
  };
  const onImageChange = (e) => {
    console.log(e.target.files);
    setProfileImage(e.target.files);
  };

  useEffect(() => {
    if (isUpdate) {
      api.get('/profile/me').then(({ data }) => {
        console.log(data);
        setProfile(data.profile);
        setProfileImageurl([data.profile.profilePicture]);
        for (const [key, value] of Object.entries(data.profile)) {
          if (key !== 'profilePicture') {
            setValue(key, value);
          }
          if (key === 'profilePicture') {
            setValue(key, null);
          }
          if (key == 'listOfSkills') {
            setValue(
              key,
              data.profile.listOfSkills
                .map((p, i) => {
                  return p.skill;
                })
                .join(',')
            );
          }
          if (key == 'projectsDone') {
            setValue(
              key,
              data.profile.projectsDone
                .map((p, i) => {
                  return p.project;
                })
                .join(',')
            );
          }
        }
      });
    }
  }, [isUpdate]);

  return (
    <>
      <NavBar />
      <div
        className='container d-flex justify-content-center align-content-center my-5'
        style={{ width: '70%' }}
      >
        <div className=' col mt-3 p-3 shadow'>
          <div className='row m-3  '>
            <h2>Join As Freelancer</h2>
          </div>
          <div className='row m-3'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              encType='multipart/form-data'
            >
              <div className='input-group mt-3 mb-5'>
                <span className='details me-5 d-flex align-items-center justify-content-center'>
                  Full Name*
                </span>
                <input
                  type='text'
                  className='form-control '
                  placeholder='Username'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                  required
                  {...register('fullName')}
                />
              </div>
              {errors.fullName && (
                <div className='error-message'>{errors.fullName.message}</div>
              )}

              {profile && profile.profilePicture && (
                <div className='preview-image'>
                  <img style={{ width: '100%' }} src={profileImageurl[0]} />
                </div>
              )}
              <div className='input-group mb-5'>
                <span className='details me-5  d-flex align-items-center justify-content-center'>
                  Profile Picture*
                </span>
                <input
                  type='file'
                  className='form-control'
                  id='inputGroupFile02'
                  multiple
                  accept={'image/*'}
                  {...register('profilePicture')}
                  onChange={onImageChange}
                />
                <label className='input-group-text'>Upload</label>
              </div>
              {errors.profilePicture && (
                <div className='error-message'>
                  {errors.profilePicture.message}
                </div>
              )}
              <div className='input-group mb-5'>
                <span className='details me-5  d-flex align-items-center justify-content-center'>
                  Description*
                </span>
                <textarea
                  className='form-control ms-1'
                  aria-label='With textarea'
                  placeholder='Enter your description'
                  style={{ resize: 'none' }}
                  {...register('description')}
                  required
                />
              </div>
              {errors.description && (
                <div className='error-message'>
                  {errors.description.message}
                </div>
              )}
              <div className='input-group mb-5'>
                <span className='details me-5  d-flex align-items-center justify-content-center'>
                  List of skills*
                </span>
                <textarea
                  className='form-control ms-2'
                  aria-label='With textarea'
                  placeholder='Enter the list of your skills'
                  style={{ resize: 'none' }}
                  {...register('listOfSkills')}
                  required
                />
              </div>
              {errors.listOfSKills && (
                <div className='error-message'>
                  {errors.listOfSKills.message}
                </div>
              )}
              <div className='input-group mb-5'>
                <span className='details me-5  d-flex align-items-center justify-content-center'>
                  Project done*
                </span>
                <textarea
                  className='form-control'
                  aria-label='With textarea'
                  style={{ resize: 'none' }}
                  {...register('projectsDone')}
                  required
                />
              </div>
              {errors.projectsDone && (
                <div className='error-message'>
                  {errors.projectsDone.message}
                </div>
              )}
              <div className='input-group mb-5'>
                <span className='details me-5  d-flex align-items-center justify-content-center'>
                  Price*
                </span>
                <input
                  type='text'
                  className='form-control '
                  placeholder=''
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                  {...register('price')}
                  required
                />
              </div>
              {errors.price && (
                <div className='error-message'>{errors.price.message}</div>
              )}
              <div className='input-group category-select-div mb-3'>
                <span className='details me-5  d-flex align-items-center justify-content-center'>
                  Category*
                </span>
                <select
                  className='form-select'
                  id='category-select'
                  {...register('category')}
                >
                  <option value='Home'>Home</option>
                  <option value='IT'>IT</option>
                  <option value='Health'>Health</option>
                  <option value='Others'>Others</option>
                </select>
              </div>
              {errors.category && (
                <div className='error-message'>{errors.category.message}</div>
              )}
              <div className='input-group mb-3 serviceOffered-select-div '>
                <span className='details me-5  d-flex align-items-center justify-content-center'>
                  Service Offered*
                </span>
                <select
                  className='form-select'
                  id='serviceOffered-select'
                  {...register('servicesOffered')}
                >
                  <option value='Electrician'>Electrician</option>
                  <option value='Plumber'>Plumber</option>
                  <option value='Health'>Health</option>
                  <option value='Web Developer'>Web Developer</option>
                  <option value='Maid'>Maid</option>
                  <option value='Carpenter'>Carpenter</option>
                  <option value='Pest Control'>Pest Control</option>
                  <option value='Movers'>Movers</option>
                  <option value='Cook'>Cook</option>
                  <option value='Gardener'>Gardener</option>
                  <option value='Baby Sitter'>Baby Sitter</option>
                  <option value='Laundry'>Laundry</option>
                  <option value='Graphic Designer'>Graphic Designer</option>
                  <option value='App Developer'>App Developer</option>
                  <option value='Networking'>Networking</option>
                  <option value='Web Hosting'>Web Hosting</option>
                  <option value='Data Analyst'>Data Analyst</option>
                  <option value='UI/UX Designer'>UI/UX Designer</option>
                  <option value='Ethical Hacking'>Ethical Hacking</option>
                  <option value='Doctor'>Doctor</option>
                  <option value='Therapist'>Therapist</option>
                  <option value='Old Age Care'>Old Age Care</option>
                  <option value='Nurse'>Nurse</option>
                  <option value='Veterinarian'>Veterinarian</option>
                  <option value='Beautician'>Beautician</option>
                  <option value='Home Tutor'>Home Tutor</option>
                  <option value='Artist'>Artist</option>
                  <option value='Tailor'>Tailor</option>
                  <option value='Language Translator'>
                    Language Translator
                  </option>
                  <option value='Event Manager'>Event Manager</option>
                  <option value='Security Guard'>Security Guard</option>
                  <option value='Driver'>Driver</option>
                  <option value='Security Guard'>Trainer</option>
                </select>
              </div>
              {errors.servicesOffered && (
                <div className='error-message'>
                  {errors.servicesOffered.message}
                </div>
              )}

              <div className='d-flex justify-content-center align-content-center'>
                <button
                  type='submit'
                  className='btn my-3  '
                  style={{ backgroundColor: '#fe8529', color: 'var(--white)' }}
                  disabled={isLoading}
                >
                  Submit{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
