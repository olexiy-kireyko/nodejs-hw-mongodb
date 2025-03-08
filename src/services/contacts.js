import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (id) => {
  const contact = await ContactsCollection.findById(id);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async (id, payload) => {
  const result = await ContactsCollection.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

export const deleteContact = async (id) => {
  const result = await ContactsCollection.findOneAndDelete({ _id: id });
  return result;
};
