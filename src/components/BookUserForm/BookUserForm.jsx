import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './BookUserForm.module.css';

const BookUserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: null,
    comment: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Booking submitted:', formData);
      setSuccessMessage('Booking submitted successfully');
      setFormData({ name: '', email: '', date: null, comment: '' });
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <div className={css.card}>
      <h4 className={css.title}>Book your car now</h4>
      <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>

      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.formItem}>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            className={css.input}
          />
          {errors.name && <div className={css.error}>{errors.name}</div>}
        </div>

        <div className={css.formItem}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            className={css.input}
          />
          {errors.email && <div className={css.error}>{errors.email}</div>}
        </div>

        <div className={css.formItem}>
          <label htmlFor="date"></label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            placeholderText="Choose date"
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
            className={css.input}
          />
        </div>

        <div className={css.formItem}>
          <label htmlFor="comment"></label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Comment"
            className={css.textarea}
          />
        </div>

        <button type="submit" className={css.submitButton}>
          Send
        </button>

        {successMessage && <div className={css.success}>{successMessage}</div>}
      </form>
    </div>
  );
};

export default BookUserForm;
