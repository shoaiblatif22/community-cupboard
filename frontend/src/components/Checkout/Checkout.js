
import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Checkout.css'; // Make sure to import the orders.css file

const Checkout = () => {
  const initialValues = {
    name: '',
    address: {
      doorNumber: '',
      firstLine: '',
      town: '',
      country: '',
      postcode: '',
    },
    nearestLocation: '',
    package: '',
    deliveryPreference: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.object().shape({
      doorNumber: Yup.string().required('Door number is required'),
      firstLine: Yup.string().required('First line of address is required'),
      town: Yup.string().required('Town is required'),
      country: Yup.string().required('Country is required'),
      postcode: Yup.string().required('Postcode is required'),
    }),
    nearestLocation: Yup.string().required('Please select a nearest location'),
    package: Yup.string().required('Please select a package'),
    deliveryPreference: Yup.string().required('Please select a delivery preference'),
  });

  const onSubmit = (values) => {
    // Handle form submission and sending data to MongoDB Atlas via Express backend
    console.log(values);
  };

  return (
    <motion.div
      className="orders-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Place Your Order</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="doorNumber">Door Number/Name</label>
            <Field type="text" id="doorNumber" name="address.doorNumber" />
            <ErrorMessage name="address.doorNumber" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="firstLine">1st Line of Address</label>
            <Field type="text" id="firstLine" name="address.firstLine" />
            <ErrorMessage name="address.firstLine" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="town">Town</label>
            <Field type="text" id="town" name="address.town" />
            <ErrorMessage name="address.town" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <Field type="text" id="country" name="address.country" />
            <ErrorMessage name="address.country" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="postcode">Postcode</label>
            <Field type="text" id="postcode" name="address.postcode" />
            <ErrorMessage name="address.postcode" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="nearestLocation">Nearest Location</label>
            <Field as="select" id="nearestLocation" name="nearestLocation">
              <option value="">Select a nearest location</option>
              {/* Add options for the towns in England here */}
            </Field>
            <ErrorMessage name="nearestLocation" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="package">Package</label>
            <Field as="select" id="package" name="package">
              <option value="">Select a package</option>
              {/* Add options for the packages here */}
            </Field>
            <ErrorMessage name="package" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="deliveryPreference">Delivery Preference</label>
            <Field as="select" id="deliveryPreference" name="deliveryPreference">
              <option value="">Select a delivery preference</option>
              <option value="collect">Collect</option>
              <option value="delivery">Delivery</option>
            </Field>
            <ErrorMessage name="deliveryPreference" component="div" className="error" />
          </div>

          <button type="submit" className="submit-button">
            Submit Order
          </button>
        </Form>
      </Formik>
    </motion.div>
  );
};

export default Checkout;

