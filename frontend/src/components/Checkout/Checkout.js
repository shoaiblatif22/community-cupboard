import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const { selectedPackage } = location.state || {};

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
    package: selectedPackage?.title || '',
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

  const onSubmit = async (values) => {
    try {
      const response = await fetch("/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: values.name,
          packages: values.package,
          totalAmount: selectedPackage.price,
        }),
      });

      if (response.status === 201) {
        // Handle successful checkout, e.g., show a success message
        console.log("Order placed successfully!");
      } else {
        // Handle errors in the response, e.g., show an error message
        console.error("Error during checkout:", response.status);
      }
    } catch (error) {
      // Handle any other errors that occurred during the checkout process
      console.error("Error during checkout:", error);
    }
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

          {/* Add other form fields here */}
          {/* ... */}
          {/* ... */}

          <button type="submit" className="submit-button">
            Submit Order
          </button>
        </Form>
      </Formik>
    </motion.div>
  );
};

export default Checkout;
