import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState ([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
    
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isUnique = !contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (isUnique) {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    } else {
      alert(`${name} is already in contacts!`);
    }
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
    const sortedContacts = filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

    return sortedContacts;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      <h2 className={css.title}>Contacts</h2>
      <Filter filter={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};
