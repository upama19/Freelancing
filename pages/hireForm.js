import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import api from '../services/api';

const { yupResolver } = require('@hookform/resolvers/yup');

const HireForm = () => {
  const router = useRouter();

  let schema = yup.object().shape({
    name: yup
      .string()
      .required('Your name is required')
      .min(3, 'Name should be minimum 3 characters')
      .max(30, 'You are not allowed to enter more than 30 characters'),
    mobileNumber: yup
      .string()
      .required('Mobile number must be provided')
      .length(10, 'Must be 10 characters'),
    address: yup.string().required('Please provide your address'),
    hireDuration: yup.string().required('Please mention hire duration'),
    message: yup.string().required('Please enter some message'),
  });

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({ resolver: yupResolver(schema) });
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get('/employer/me').then(({ data }) => {
      console.log(data);
      console.log(data.profile);
      if (data.profile) {
        setProfile(data.profile);
      } else {
        router.push('/');
      }
    });
  }, []);

  const onSubmit = (data) => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    data.talentId = params.get('emp');
    console.log(data);
    api
      .post(`/employer/talent/profile/hire`, data)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        err.response?.data && alert(err.response?.data.error)
      })
      .finally(() => {
        router.push('/');
      });
  };

  return (
    <>
      <NavBar />
      <div className='hire-main mt-5'>
        <div className='hire-container p-5 shadow'>
          <form
            className='hire-form'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className='input-group mb-4'>
              <label className='form-label me-3 mb-0'>Full Name</label>
              <input
                type='text'
                className='form-control ms-3'
                placeholder='FullName'
                aria-label='FullName'
                aria-describedby='basic-addon1'
                required
                {...register('name')}
              />
            </div>
            {errors.name && (
              <div className='error-message'>{errors.name.message}</div>
            )}

            <div className='input-group mb-4'>
              <label className='form-label me-3 mb-0'>Mobile Number</label>
              <input
                type='text'
                className='form-control ms-3'
                placeholder='Mobile Number'
                aria-label='Mobile Number'
                aria-describedby='basic-addon2'
                required
                {...register('mobileNumber')}
              />
            </div>
            {errors.mobileNumber && (
              <div className='error-message'>{errors.mobileNumber.message}</div>
            )}

            <div className='input-group mb-4'>
              <label className='form-label me-3 mb-0'>Address</label>
              <input
                type='text'
                className='form-control ms-3'
                placeholder='Address'
                aria-describedby='basic-addon3'
                required
                {...register('address')}
              />
            </div>
            {errors.address && (
              <div className='error-message'>{errors.address.message}</div>
            )}

            <div className='input-group mb-4'>
              <label className='form-label me-3 mb-0'>Hire Duration</label>
              <input
                type='text'
                className='form-control ms-3'
                placeholder='Hire Duration'
                aria-describedby='basic-addon4'
                required
                {...register('hireDuration')}
              />
            </div>
            {errors.hireDuration && (
              <div className='error-message'>{errors.hireDuration.message}</div>
            )}

            <div className='input-group mb-4'>
              <label className='form-label me-3 mb-0'>Message</label>
              <input
                type='text'
                className='form-control ms-3'
                placeholder='Message'
                aria-describedby='basic-addon5'
                required
                {...register('message')}
              />
            </div>
            {errors.message && (
              <div className='error-message'>{errors.message.message}</div>
            )}

            <div className='hire-btn-div'>
              <button
                type='submit'
                className='btn hire-btn'
                disabled={isLoading}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HireForm;
