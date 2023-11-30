import { Component } from "react";
import{PhonebookForm, PhonebookLabel, PhonebookInput, PhonebookButton} from '../phonebook/PhonebookForm.styled'

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <PhonebookForm onSubmit={this.handleSubmit}>
        <PhonebookLabel>
          Name: 
          <PhonebookInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </PhonebookLabel>
        <PhonebookLabel>
          Number:
          <PhonebookInput
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </PhonebookLabel>
        <PhonebookButton type="submit">Add Contact</PhonebookButton>
      </PhonebookForm>
    );
  }
}

// const Phonebook = ({ handleSubmit, handleChange }) => (
//   <form onSubmit={handleSubmit}>
//     <h2>Phonebook</h2>
//     <h3>Name</h3>
//     <input type="text" name="name" required onChange={handleChange} />
//     <h3>Number</h3>
//         <input type="tel" name="number" onChange={handleChange}></input>
//     <button type="submit">Add contact</button>
//   </form>
// );

export default Phonebook

