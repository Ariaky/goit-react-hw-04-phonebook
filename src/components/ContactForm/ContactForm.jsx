import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const nameId = nanoid();
  const tagId = nanoid();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = formData;
    onAddContact(name, number);
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={nameId}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          pattern={"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
          placeholder='John Doe'
        />
      </label>
      <label className={css.label} htmlFor={tagId}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
          pattern={"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"}
          placeholder='XXX-XX-XX'
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};