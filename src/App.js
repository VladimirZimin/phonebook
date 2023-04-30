import React, { Component } from "react";
import { nanoid } from "nanoid";
import { MdOutlineSearch } from "react-icons/md";
import Section from "./components/Section";
import FindWrap from "./App.styled";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContacts = (abonent) => {
    const { name, number } = abonent;
    console.log("name:", name);

    const newContact = this.state.contacts
      .map((contact) => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    if (newContact) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handleChangeFilter = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Section title={"Phonebook"}>
          <ContactForm onAddContact={this.addContacts} />
        </Section>

        <Section title={"Contacts"}>
          <FindWrap>
            <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
            <MdOutlineSearch className="react-icons" color="" size={20} />
          </FindWrap>

          <ContactList
            contacts={this.getVisibleContacts()}
            onRemoveContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
